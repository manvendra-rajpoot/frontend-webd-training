import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProvideDataService {

  constructor(private http: HttpClient) { 
    
  }

  getComments(){
    return this.http.get("https://jsonplaceholder.typicode.com/comments");
  }
  getUsers(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
  postComment(){
    // this.http.post()
  }
}


