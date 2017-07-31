import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GuardService } from '../../../services/guard.service';
import { tokenNotExpired } from 'angular2-jwt';
import { PostResource } from '../../../resources/post.resource';
import {Image, Action, ImageModalEvent, Description} from 'angular-modal-gallery';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html'
})
export class PostDetailComponent implements OnInit {

  currentUser:any;
  post:any;
  images:any = [
    new Image('http://placekitten.com/200/301')
  ]

  openModalWindow: boolean = false;
  imagePointer: number = 0;

  openModalWindowObservable: boolean = false;
  imagePointerObservable: number = 0;


  constructor(
    protected postResource:PostResource,
    private route:ActivatedRoute,
    protected guard:GuardService,
  ) {
    if(tokenNotExpired('currentUser')){
     this.guard.getCurrentUser().subscribe(
       (data) => {this.currentUser = data;
        if(this.currentUser.user_role_id == 3){
        this.currentUser.admin = true ;
      }
      }
     );
    }
    this.getCurrentPost();
   }

  ngOnInit() {

  }

  onImageLoaded(event: any) {
    // angular-modal-gallery will emit this event if it will load successfully input images
    console.log('onImageLoaded action: ' + event.action);
    console.log('onImageLoaded result:' + event.result);
  }

  getCurrentPost(){
    this.postResource.get({id:this.route.snapshot.params['id']})
    .$observable
    .subscribe(
      (data) => { this.post = data;
                  
      }
    )
  }

}
