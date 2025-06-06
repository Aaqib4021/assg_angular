import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserCardComponent } from '../user-card/user-card.component';
import { UserService } from '../user-service.service';
interface GithubUser {
  login: string;
  id: number;
  name: string;
  location?: string;
  avatar_url: string;
  company?: string;
  followers: number;
  public_repos: number;
  html_url: string;
}

@Component({
  selector: 'app-user-list',
  imports: [NgFor,UserCardComponent,RouterLink],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  githubUsers:GithubUser[]=[];

  constructor(private userService:UserService){}

  ngOnInit(){
    this.userService.getUserList().subscribe((data)=>{
      this.githubUsers = data as GithubUser[];
    })
  }
}
