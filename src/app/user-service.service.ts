import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  url = "https://api.github.com/users";

  getUserList(){
    return this.http.get(this.url)
  }

  getUserById(id:string){
    return this.http.get(this.url+"/"+id)
  }
}
