import { ToastrService } from 'ngx-toastr';
import { BlogService } from './../../blog/blog.service';
import { blog } from './../../blog/model/blog';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() blog:blog ;
  constructor(private router:Router, private toster:ToastrService, private blogService:BlogService) { }

  ngOnInit(): void {
    console.log(this.blog.file);
    this.blog.file = `http://localhost/blog-backend/public/${this.blog.file}`;
  }

  deleteBlog(id:number) :void {
    this.blogService.deleteBlog(id).subscribe(res=>{

      this.toster.success("Blog Deleted");
      window.location.reload();

    });

  }

}
