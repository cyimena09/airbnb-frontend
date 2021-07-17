import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject, Subscription} from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from '@angular/router';
import {User} from '../../../user/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;
  isAuthenticatedSubject = new Subject();
  authenticatedSubject: BehaviorSubject<User>;

  private _authenticatedUser: User;
  private AUTH_TOKEN_KEY: string = 'homai-home-token';
  private AUTH_API_URL: string = environment.API_AUTH;
  private USER_API_URL: string = environment.API_USER;

  constructor(private httpClient: HttpClient, private router: Router) {
    // todo error when decoded token is null
    console.log('chargement auth service ...');
    this.loadAuthenticatedUser(null);
  }

  private header = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'Accept': 'application/json',
    'Authorization': `Bearer ${this.getToken()}`
  });

  /**
   * Loads the user who wants to authenticate according to the stored token.
   * @private
   */
  private loadAuthenticatedUser(redirect): void {
    this.header = this.header.set('authorization', `Bearer ${this.getToken()}`); // update authorization
    let userEmail = this.getCurrentUserEmail(); // get user email, if null redirected at the forms view.

    if (userEmail !== '') {
      this.httpClient.get(this.USER_API_URL + '/by/email/' + userEmail, {headers: this.header}).subscribe(
        (data: User) => {
          this._authenticatedUser = data;
          this.isAuthenticated = true;
          this.isAuthenticatedSubject.next(true);
          console.log('on a load')
          this.authenticatedSubject = new BehaviorSubject(this.authenticatedUser);
          if (redirect) {
            this.router.navigate([redirect]);
          }
        },
        () => {
          this.logout();
        });
    }
  }

  /**
   * Emet l'utilisateur s'il nest pas null, s'il est null on le charge
   */
  emitAuthUser(): void {
    console.log('on émet')
    // todo Emet l'utilisateur s'il nest pas null, s'il est null on le charge
    this.authenticatedSubject.next(this.authenticatedUser);
  }

  emitIsAuthUser(): void {
    // todo Emet l'utilisateur s'il nest pas null, s'il est null on le charge
    this.isAuthenticatedSubject.next(this.isAuthenticated);
  }

  get authenticatedUser() {
    return this._authenticatedUser;
  }

  login(logger): Subscription {
    return this.httpClient.post(this.AUTH_API_URL, logger).subscribe(
      (data: any) => {
        const tokenString = data.token;
        localStorage.setItem(this.AUTH_TOKEN_KEY, tokenString);
        this.loadAuthenticatedUser('home');
      },
      (error) => {
        console.log(error);
      });
  }

  logout(): void {
    this.removeToken();
    this.isAuthenticated = false;
    this.emitIsAuthUser();
    this.router.navigate(['home']);
  }

  getCurrentUserEmail(): string {
    let decodedToken = this.decodeToken(this.getToken());
    return this.decodeToken(this.getToken()) !== '' ? decodedToken.sub : '';
  }

  decodeToken(token): any {
    let helper = new JwtHelperService();
    return token !== null ? helper.decodeToken(token) : '';
  }

  getToken(): string {
    return localStorage.getItem(this.AUTH_TOKEN_KEY);
  }

  removeToken(): void {
    localStorage.removeItem(this.AUTH_TOKEN_KEY);
  }

}
