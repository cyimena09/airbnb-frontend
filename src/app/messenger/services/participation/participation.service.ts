import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../../auth/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ParticipationService {

  currentUserId;

  private participantsIds: Array<number> = []; // ids des participants de la discussion actuellement affiché. Chaque élement dans le tableau doit être unique
  private apiURL = '/api/v1/messenger/participations/';


  constructor(private authService: AuthService, private httpClient: HttpClient) {
    //this.currentUserId = this.authService.currentUserId;
    this.participantsIds.push(this.currentUserId); // l'utilisateur courant fait par défaut parti des participants de la conversation
  }

  createParticipation(participation) {
    return this.httpClient.post(this.apiURL, participation);
  }

  getParticipantsIds() {
    return this.participantsIds;
  }

  /**
   * Modifie la liste des participants, si l'utilisateur connecté n'est pas dedans, il sera ajouté
   * @param participantsIds
   */
  setParticipantsIds(participantsIds: Array<number>) {
    console.log("ANCIENNE LISTE ", this.participantsIds)
    console.log("NOUVELLE LISTE EN AMONT  ", participantsIds)
    if (!participantsIds.includes(this.currentUserId)) {
      console.log('le current user n\'est pas dans la liste, on l\'ajoute');
      participantsIds.push(this.currentUserId);
    }

    this.participantsIds = participantsIds;
    console.log("RETURN ",this.participantsIds)
  }

  /**
   * Ajoute un id dans la liste des participants si celui ci n'est pas déjà dans la liste
   * @param id
   */
  addToParticipantsIds(id: number) {
    if (this.participantsIds.includes(id)) {
      return;
    } else {
      this.participantsIds.push(id);
    }
  }

}
