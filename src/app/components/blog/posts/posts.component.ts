import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service'
import { ActivatedRoute } from '@angular/router';
import { GuardService } from '../../../services/guard.service';
import { tokenNotExpired } from 'angular2-jwt';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit {

  currentUser:any;
  posts:any;


  constructor(
    protected postService:PostService,
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
    this.getPosts();
   }

  ngOnInit() {
  }

  getPosts(){
    this.postService.getPostsByType(this.route.snapshot.params['type']).subscribe(
      (data) => {this.posts = data}
    )
  }
}
