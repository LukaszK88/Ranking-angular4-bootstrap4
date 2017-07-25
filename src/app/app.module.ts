import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { RouterModule, Routes } from '@angular/router';
import { RoutingModule, routingComponents } from './core/routing.module';


import { PipeModule } from './core/pipe.module';
import { UiModule } from './core/ui.module';

import { RankingModule } from './components/ranking/ranking.module';

import { Api } from './services/api';

import { UserService } from './services/user.service';
import { FighterService } from './services/fighter.service';
import { RankingService } from './services/ranking.service';
import { EventService } from './services/event.service';
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
import {MdSelectModule} from '@angular/material';
import {MdSliderModule} from '@angular/material';
import { LoginComponent } from './components/auth/login/login.component';
import { LeaderboardComponent } from './components/ranking/leaderboard/leaderboard.component';
import { MapToIterablePipe } from './pipes/map-to-iterable.pipe';
import { ProfightComponent } from './components/ranking/profight/profight.component';
import { SwordShieldComponent } from './components/ranking/sword-shield/sword-shield.component';
import { SwordBucklerComponent } from './components/ranking/sword-buckler/sword-buckler.component';
import { LongswordComponent } from './components/ranking/longsword/longsword.component';
import { PolearmsComponent } from './components/ranking/polearms/polearms.component';
import { TriathlonComponent } from './components/ranking/triathlon/triathlon.component';
import { UpdateSwordShieldComponent } from './components/ranking/sword-shield/update-sword-shield/update-sword-shield.component';
import { UpdateLongswordComponent } from './components/ranking/longsword/update-longsword/update-longsword.component';



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
    
    SignupComponent,
    LoginComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RoutingModule,
    BrowserAnimationsModule,
    PipeModule,
    UiModule,
    RankingModule,
    LayoutModule,
    ToastrModule.forRoot(),
    Angular2SocialLoginModule
  ],
  providers: [
    Api,
    FighterService,
    RankingService,
    UserService,
    GuardService,
    EventService
  ],
  entryComponents: [ 
    SignupComponent,
    LoginComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}

Angular2SocialLoginModule.loadProvidersScripts(providers);

