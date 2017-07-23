import { Component, OnInit } from '@angular/core';
import { RankingService } from '../../../services/ranking.service';


@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html'
})

export class LeaderboardComponent implements OnInit {
  
  leaderboard:any[];

  constructor(
    protected ranking:RankingService
  ) { }

  ngOnInit() {
    this.getLeaderboardData();
  }

  getLeaderboardData(){
    this.ranking.getLeaderboard().subscribe(
      (data) => {this.leaderboard = data; console.log(data)}
    )
  }
}
