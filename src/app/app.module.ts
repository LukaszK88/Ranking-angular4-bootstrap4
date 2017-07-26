//Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//My modules
import { RoutingModule, routingComponents } from './core/routing.module';
import { PipeModule } from './core/pipe.module';
import { UiModule } from './core/ui.module';
import { RankingModule } from './components/ranking/ranking.module';
//services
import { Api } from './services/api';
import { UserService } from './services/user.service';
import { FighterService } from './services/fighter.service';
import { RankingService } from './services/ranking.service';
import { EventService } from './services/event.service';
import { GuardService } from './services/guard.service';
//main components
import { AppComponent } from './app.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';
//Other
import 'hammerjs';
import { ToastrModule } from 'ngx-toastr';
import { Angular2SocialLoginModule } from "angular2-social-login";

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

