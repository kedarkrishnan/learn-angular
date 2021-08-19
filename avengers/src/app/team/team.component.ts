import {Component, OnInit} from '@angular/core';
import {TeamService} from "./service/team.service";
import {Member} from "./entities/member";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  members: Member[];
  constructor(private teamService: TeamService) {
      this.members = teamService.getMembers();
  }

  ngOnInit(): void {
  }

}
