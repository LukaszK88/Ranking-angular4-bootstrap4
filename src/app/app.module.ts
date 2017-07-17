import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { Api } from './services/api';


import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

import { FighterService } from './services/fighter.service';
import { RankingService } from './services/ranking.service';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/home/nav/nav.component';

import { RankingComponent } from './components/ranking/ranking.component';

// Import the Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import the KendoModules
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { TotalComponent } from './components/ranking/total/total.component';

const appRoutes: Routes = [
  { path:'', component:HomeComponent},
  { path:'ranking', component:RankingComponent},
]



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    NavComponent,
    RankingComponent,
    TotalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ButtonsModule,
    LayoutModule
  ],
  providers: [
    Api,
    FighterService,
    RankingService
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
