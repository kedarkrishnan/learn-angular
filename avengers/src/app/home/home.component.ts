import {Component, OnInit} from '@angular/core';
import {TeamService} from "../team/service/team.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  totalMembers: number;
  constructor(private teamService: TeamService) {
    this.totalMembers = teamService.getMembers().length;
  }

  ngOnInit(): void {
  }

}
