import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { UiModule } from '../../core/ui.module';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { PipeModule } from '../../core/pipe.module';


import { FileUploadModule } from 'ng2-file-upload';
import { PostsComponent } from './posts/posts.component';



@NgModule({
  imports: [ 
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PipeModule,
    UiModule,
    FileUploadModule
    
  ],
  providers: [

  ],
  declarations: [
    PostsComponent
  ],
  entryComponents: [ 

  ],
  exports: [
    PostsComponent
  ],
})
export class EditorModule {}

   