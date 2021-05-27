import { BlogService } from './../blog.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { blog } from './../model/blog';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers:[BlogService]
})
export class CreateComponent implements OnInit {

  constructor(private router:Router, private toster:ToastrService, private blogService:BlogService) { }

  ngOnInit(): void {
  }
  imageURL:string = '';

  blogForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    type_2: new FormControl('', [Validators.required]),
    rating: new FormControl('', [Validators.required, Validators.min(0), Validators.max(5)]),
    description: new FormControl('', [Validators.required]),
    file: new FormControl('', [Validators.required])
  });

  handleBlogForm(): void {
    console.log(this.blogForm.value);
    if(this.blogForm.valid){
      this.blogService.createBlog(this.blogForm.value).subscribe(response =>{
        if(response['status'] == 200) {
          this.toster.success('Data Added');
          this.router.navigate(['/blog']);
        }else{
          this.toster.error("Error");
        }
      })
    }else{
      alert("error");
    }


  }
  onChange($event): void {
    console.log($event.target.files[0]);
    this.blogForm.patchValue({file:$event.target.files[0]});
    console.log(this.blogForm);
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL($event.target.files[0])
  }

}
