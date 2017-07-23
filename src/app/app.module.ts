import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { Api } from './services/api';

import { UserService } from './services/user.service';
import { FighterService } from './services/fighter.service';
import { RankingService } from './services/ranking.service';
import { GuardService } from './services/guard.service';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/home/nav/nav.component';

import { AppComponent } from './app.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { SignupComponent } from './components/auth/signup/signup.component';
// Import the Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { TotalComponent } from './components/ranking/total/total.component';
import { BohurtComponent } from './components/ranking/bohurt/bohurt.component';
import { AbsPipe } from './pipes/abs.pipe';
import { LimitToPipe } from './pipes/limit-to.pipe';
import { ToastrModule } from 'ngx-toastr';

import { Angular2SocialLoginModule } from "angular2-social-login";

import {MdDialogModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdTabsModule} from '@angular/material';
import { LoginComponent } from './components/auth/login/login.component';
import { LeaderboardComponent } from './components/ranking/leaderboard/leaderboard.component';
import { MapToIterablePipe } from './pipes/map-to-iterable.pipe';
import { ProfightComponent } from './components/ranking/profight/profight.component';
import { SwordShieldComponent } from './components/ranking/sword-shield/sword-shield.component';
import { SwordBucklerComponent } from './components/ranking/sword-buckler/sword-buckler.component';
import { LongswordComponent } from './components/ranking/longsword/longsword.component';
import { PolearmsComponent } from './components/ranking/polearms/polearms.component';
import { TriathlonComponent } from './components/ranking/triathlon/triathlon.component';

const appRoutes: Routes = [
  { path:'', component:HomeComponent},
  { path:'ranking', component:RankingComponent},
]

let providers = {
    "google": {
      "clientId": "230761834733-cn34419a1ftkee8lgha90ija7nvckks6.apps.googleusercontent.com"
    },
    "facebook": {
      "clientId": "1884018281856728",
      "apiVersion": "v2.8"
    }
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    RankingComponent,
    TotalComponent,
    BohurtComponent,
    SignupComponent,
    AbsPipe,
    LimitToPipe,
    LoginComponent,
    LeaderboardComponent,
    MapToIterablePipe,
    ProfightComponent,
    SwordShieldComponent,
    SwordBucklerComponent,
    LongswordComponent,
    PolearmsComponent,
    TriathlonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    LayoutModule,
    MdDialogModule,
    MdButtonModule,
    MdInputModule,
    MdTabsModule,
    ToastrModule.forRoot(),
    Angular2SocialLoginModule
  ],
  providers: [
    Api,
    FighterService,
    RankingService,
    UserService,
    GuardService
  ],
  entryComponents: [ 
    SignupComponent,
    LoginComponent 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}

Angular2SocialLoginModule.loadProvidersScripts(providers);

