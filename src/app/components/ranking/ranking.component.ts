import { Component, OnInit } from '@angular/core';
import { RankingService } from '../../services/ranking.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  fighters:any[];

  constructor(
    protected ranking:RankingService
  ) {
   }

  ngOnInit() {

    this.ranking.getAllFighters().subscribe((data) => {
        this.fighters = data;
        console.log(this.fighters);
    });
  
  }

}
