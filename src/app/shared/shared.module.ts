import { FileUploadComponent } from './../common/file-upload/file-upload.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [FileUploadComponent],
  imports: [
    CommonModule
  ],
  exports:[FileUploadComponent]
})
export class SharedModule { }
