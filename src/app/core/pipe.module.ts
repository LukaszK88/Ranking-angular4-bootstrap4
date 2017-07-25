import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AbsPipe } from './../pipes/abs.pipe';
import { LimitToPipe } from './../pipes/limit-to.pipe';
import { MapToIterablePipe } from './../pipes/map-to-iterable.pipe';

@NgModule({
  imports: [ 
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [

    
  ],
  declarations: [
    AbsPipe,
    LimitToPipe,
    MapToIterablePipe
  ],
  entryComponents: [ 
    
  ],
  exports: [
    AbsPipe,
    LimitToPipe,
    MapToIterablePipe
  ]
})
export class PipeModule {}

   