import { BlogService } from './blog.service';
import { blog } from './model/blog';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  providers:[BlogService],
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
   blogData:blog[] = [];
   dataSource:any = [];

  constructor(private route:Router , private blogService:BlogService) { }

  ngOnInit(): void {
    this.blogService.getBlogs(100,0).subscribe(response =>{
      console.log(response);
      this.dataSource = response['value'];

    });
  }
  displayedColumns: string[] = [ 'name', 'type', 'type2', 'rating', 'options'];

}
