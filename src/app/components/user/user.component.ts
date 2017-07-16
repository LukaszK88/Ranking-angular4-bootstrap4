import { Component, OnInit } from '@angular/core';
import { FighterService } from '../../services/fighter.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  numbers:number[];
  fighters:any[];

  constructor(
    protected fighter:FighterService
  ) {
    this.numbers = [1,2];

    this.fighter.getFighters().subscribe((fighters) => {
        this.fighters = fighters.fighters;
    });
    
   }

  ngOnInit() {
  }

  public addNumber(number) {
    this.numbers.push(number);
  }
}
