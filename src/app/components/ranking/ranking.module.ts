import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { UiModule } from '../../core/ui.module';

import { UpdateService } from './update.service';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { RankingComponent } from './ranking.component';
import { ProfightComponent } from './profight/profight.component';
import { SwordShieldComponent } from './sword-shield/sword-shield.component';
import { SwordBucklerComponent } from './sword-buckler/sword-buckler.component';
import { LongswordComponent } from './longsword/longsword.component';
import { PolearmsComponent } from './polearms/polearms.component';
import { TriathlonComponent } from './triathlon/triathlon.component';
import { UpdateSwordShieldComponent } from './sword-shield/update-sword-shield/update-sword-shield.component';
import { UpdateSwordBucklerComponent } from './sword-buckler/update-sword-buckler/update-sword-buckler.component';
import { UpdateTriathlonComponent } from './triathlon/update-triathlon/update-triathlon.component';
import { UpdatePolearmComponent } from './polearms/update-polearm/update-polearm.component';
import { UpdateProfightComponent } from './profight/update-profight/update-profight.component';
import { UpdateBohurtComponent } from './bohurt/update-bohurt/update-bohurt.component';
import { UpdateLongswordComponent } from './longsword/update-longsword/update-longsword.component';
import { PipeModule } from '../../core/pipe.module';

import { EventService } from './../../services/event.service';
import { AchievementResource } from './../../resources/achievement.resource';

import { TotalComponent } from './total/total.component';
import { BohurtComponent } from './bohurt/bohurt.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { NavComponent } from './../../components/home/nav/nav.component';
import { FighterDetailComponent } from './fighter-detail/fighter-detail.component';



@NgModule({
  imports: [ 
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PipeModule,
    UiModule
    
  ],
  providers: [
    EventService,
    UpdateService,
    AchievementResource
  ],
  declarations: [
   // RankingComponent,
    ProfightComponent,
    SwordShieldComponent,
    SwordBucklerComponent,
    LongswordComponent,
    PolearmsComponent,
    TriathlonComponent,
    UpdateSwordShieldComponent,
    UpdateSwordBucklerComponent,
    UpdatePolearmComponent,
    UpdateLongswordComponent,
    UpdateTriathlonComponent,
    UpdateProfightComponent,
    UpdateBohurtComponent,
    TotalComponent,
    BohurtComponent,
    LeaderboardComponent,
    NavComponent,
    FighterDetailComponent
  ],
  entryComponents: [ 
    UpdateSwordShieldComponent,
    UpdateSwordBucklerComponent,
    UpdateLongswordComponent,
    UpdateTriathlonComponent,
    UpdatePolearmComponent,
    UpdateProfightComponent,
    UpdateBohurtComponent
  ],
  exports: [
    //RankingComponent,
    ProfightComponent,
    SwordShieldComponent,
    SwordBucklerComponent,
    LongswordComponent,
    PolearmsComponent,
    TriathlonComponent,
    UpdateSwordShieldComponent,
    UpdateSwordBucklerComponent,
    UpdateLongswordComponent,
    UpdateTriathlonComponent,
    UpdatePolearmComponent,
    UpdateProfightComponent,
    UpdateBohurtComponent,
    TotalComponent,
    BohurtComponent,
    LeaderboardComponent,
    NavComponent,
    FighterDetailComponent
  ],
})
export class RankingModule {}

   