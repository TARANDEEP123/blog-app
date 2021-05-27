import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { blog } from './model/blog';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }
  getBlogs(limit, offset) {
    let params = new HttpParams();
    params = params.append('limit', limit);
    params = params.append('offset', offset);
    return this.http.get('http://localhost/blog-backend/public/api/v1/blogs',{params:params})
  }
  createBlog(blogForm:any){
    console.log(blogForm);
    return this.http.post('http://localhost/blog-backend/public/api/v1/blogs',blogForm)
  }
  deleteBlog(id:number){
    return this.http.delete(`http://localhost/blog-backend/public/api/v1/blogs/${id}`)

  }
  getBlog(id:number){
    return this.http.get(`http://localhost/blog-backend/public/api/v1/blogs/${id}`)

  }
  updateBlog(blogForm, id:number) {
        return this.http.put(`http://localhost/blog-backend/public/api/v1/blogs/${id}`, blogForm)

  }



  private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    // this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}

