import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { Api } from './services/api';

import { UserService } from './services/user.service';
import { FighterService } from './services/fighter.service';
import { RankingService } from './services/ranking.service';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/home/nav/nav.component';

import { AppComponent } from './app.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { SignupComponent } from './components/auth/signup/signup.component';
// Import the Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import the KendoModules
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { TotalComponent } from './components/ranking/total/total.component';
import { BohurtComponent } from './components/ranking/bohurt/bohurt.component';
import { AbsPipe } from './pipes/abs.pipe';
import { LimitToPipe } from './pipes/limit-to.pipe';

const appRoutes: Routes = [
  { path:'', component:HomeComponent},
  { path:'ranking', component:RankingComponent},
]



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
    LimitToPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ButtonsModule,
    LayoutModule,
    DialogModule
  ],
  providers: [
    Api,
    FighterService,
    RankingService,
    UserService
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
