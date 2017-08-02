import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './../components/home/home.component';
import { RankingComponent } from './../components/ranking/ranking.component';
import { FighterDetailComponent } from './../components/ranking/fighter-detail/fighter-detail.component';
import { AdminPanelComponent } from './../components/admin/admin-panel/admin-panel.component';
import { PostsComponent } from './../components/blog/posts/posts.component';
import { PostDetailComponent } from './../components/blog/post-detail/post-detail.component';
import { EditorComponent } from './../components/editor/editor.component';



const appRoutes: Routes = [
  { path:'', component:HomeComponent},
  { path:'ranking', component:RankingComponent},
  { path:'fighter/:id', component:FighterDetailComponent},
  { path:'admin', component:AdminPanelComponent},
  { path:'posts/:type', component:PostsComponent},
  { path:'post/:id', component:PostDetailComponent},
  { path:'editor', component:EditorComponent},
]

@NgModule({
  imports: [ 
    RouterModule.forRoot(appRoutes),
  ],
  providers: [

    
  ],
  declarations: [

  ],
  entryComponents: [ 
    
  ],
  exports: [
    RouterModule
  ],
})
export class RoutingModule {}

export const routingComponents = [
  HomeComponent, 
  RankingComponent,
  FighterDetailComponent,
  AdminPanelComponent,
  PostsComponent,
  PostDetailComponent,
  EditorComponent
];   