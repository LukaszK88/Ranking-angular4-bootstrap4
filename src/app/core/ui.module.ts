import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {MdDialogModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdTabsModule} from '@angular/material';
import {MdSelectModule} from '@angular/material';
import {MdSliderModule} from '@angular/material';

@NgModule({
  imports: [ 
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MdDialogModule,
    MdButtonModule,
    MdInputModule,
    MdTabsModule,
    MdSelectModule,
    MdSliderModule,
  ],
  providers: [

    
  ],
  declarations: [

  ],
  entryComponents: [ 
    
  ],
  exports: [
    MdDialogModule,
    MdButtonModule,
    MdInputModule,
    MdTabsModule,
    MdSelectModule,
    MdSliderModule,
  ],
})
export class UiModule {}

   