import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html'
})
export class NewsComponent implements OnInit {

  constructor(
    protected postService:PostService
  ) { }

  ngOnInit() {
  }

  getNews(){
    
  }
}
