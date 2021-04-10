import {RealEstate} from './real-estate';

export class Comment {
  id;
  text: string;
  creationDate;
  lastModifiedDate;
  realEstate: RealEstate;
}
