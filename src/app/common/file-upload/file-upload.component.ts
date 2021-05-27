import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  file:File = null;
  constructor() { }

  ngOnInit(): void {
  }
  onChange(event) {
        this.file = event.target.files[0];
  }

   onUpload() {
     console.log(this.file);
   }

}
