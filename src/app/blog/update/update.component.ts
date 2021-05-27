import { ToastrService } from 'ngx-toastr';
import { blog } from './../model/blog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from './../blog.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
  providers:[BlogService]
})
export class UpdateComponent implements OnInit{
  id = '';
  constructor(private router:Router, private route:ActivatedRoute, private toster:ToastrService, private blogService:BlogService) {
    this.route.params.subscribe(params =>this.id = params.id);
  }

  ngOnInit(): void {
    this.blogService.getBlog(Number(this.id)).subscribe(res => {
      res = res['value'];
      this.blogForm.patchValue({
        name: res['name'],
        type: res['type'],
        type_2: res['type_2'],
        description: res['description'],
        rating: res['rating'],
        file:res['file']
      });
    });
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
      this.blogService.updateBlog(this.blogForm.value, Number(this.id)).subscribe(response =>{
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
