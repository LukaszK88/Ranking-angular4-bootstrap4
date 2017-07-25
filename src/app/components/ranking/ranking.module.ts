import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { UiModule } from '../../core/ui.module';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { RankingComponent } from './ranking.component';
import { ProfightComponent } from './profight/profight.component';
import { SwordShieldComponent } from './sword-shield/sword-shield.component';
import { SwordBucklerComponent } from './sword-buckler/sword-buckler.component';
import { LongswordComponent } from './longsword/longsword.component';
import { PolearmsComponent } from './polearms/polearms.component';
import { TriathlonComponent } from './triathlon/triathlon.component';
import { UpdateSwordShieldComponent } from './sword-shield/update-sword-shield/update-sword-shield.component';
import { UpdateLongswordComponent } from './longsword/update-longsword/update-longsword.component';
import { PipeModule } from '../../core/pipe.module';
import { EventService } from './../../services/event.service';
import { TotalComponent } from './total/total.component';
import { BohurtComponent } from './bohurt/bohurt.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { NavComponent } from './../../components/home/nav/nav.component';



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
EventService
    
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
    UpdateLongswordComponent,
    TotalComponent,
    BohurtComponent,
    LeaderboardComponent,
    NavComponent
  ],
  entryComponents: [ 
    UpdateSwordShieldComponent,
    
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
    UpdateLongswordComponent,
    TotalComponent,
    BohurtComponent,
    LeaderboardComponent,
    NavComponent
  ],
})
export class RankingModule {}

   