import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

 name: string;
  email: string;
  message: string;

  constructor() {}

  ngOnInit() {}
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    description: new FormControl('', [Validators.required]),
  });
  /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
  processForm() {
    if(this.contactForm.valid){
      alert(`
            Name: ${this.contactForm.value['name']}
            Email: ${this.contactForm.value['email']}
            Description: ${this.contactForm.value['description']}`
      );
    }

  }

}
