import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './../components/home/home.component';
import { RankingComponent } from './../components/ranking/ranking.component';
import { FighterDetailComponent } from './../components/ranking/fighter-detail/fighter-detail.component';


const appRoutes: Routes = [
  { path:'', component:HomeComponent},
  { path:'ranking', component:RankingComponent},
  { path:'fighter/:id', component:FighterDetailComponent},
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

export const routingComponents = [HomeComponent, RankingComponent];   