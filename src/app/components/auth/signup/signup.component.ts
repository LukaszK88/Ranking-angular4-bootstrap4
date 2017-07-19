import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 public opened: boolean = true;
  
 constructor() { }

  ngOnInit() {
  }

  public close() {
      this.opened = false;
    }

    public open() {
      this.opened = true;
    }
}
