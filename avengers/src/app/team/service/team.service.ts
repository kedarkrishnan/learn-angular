import {Injectable} from '@angular/core';
import {Member} from "../entities/member";

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private readonly members: Member[];
  constructor() {
   this.members =  [{
      name: '',
      codeName: 'iron man',
      role: 'developer',
      pictureUrl: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_com_crd_01.jpg'
    },{
     name: '',
     codeName: 'captain marvel',
     role: 'developer',
     pictureUrl: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/008cmv_com_crd_01.jpg'
   }];
  }

  getMembers() {
    return this.members;
  }
}
