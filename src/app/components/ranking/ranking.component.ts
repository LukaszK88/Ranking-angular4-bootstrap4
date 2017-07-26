import { Component, OnInit } from '@angular/core';
import { RankingService } from '../../services/ranking.service';
import { GuardService } from '../../services/guard.service';
import { tokenNotExpired } from 'angular2-jwt';



@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html'
})
export class RankingComponent implements OnInit {
  currentUser:any;
  fighters:any[];

  constructor(
    protected ranking:RankingService,
    protected guard:GuardService
  ) {
     if(tokenNotExpired('currentUser')){
     this.guard.getCurrentUser().subscribe(
       (data) => {this.currentUser = data}
     );
    }
   }

  ngOnInit() {

    this.ranking.getAllFighters().subscribe((data) => {
        this.fighters = data;
    });
  
  }

}
