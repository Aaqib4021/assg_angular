import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserService } from '../user-service.service';
import { CommonModule } from '@angular/common';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
export interface GithubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  user_view_type: string;
  site_admin: boolean;
  name: string | null;
  company: string | null;
  blog: string;
  location: string | null;
  email: string | null;
  hireable: boolean | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  user: GithubUser | null = null;
  hovering = true;

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.userService.getUserById(id).pipe(
        catchError(() => {
          const dummyUser: GithubUser = {
            login: 'Not Found',
            id: -1,
            node_id: '',
            avatar_url: 'https://cdn-icons-png.flaticon.com/512/2748/2748558.png',
            gravatar_id: '',
            url: '',
            html_url: '',
            followers_url: '',
            following_url: '',
            gists_url: '',
            starred_url: '',
            subscriptions_url: '',
            organizations_url: '',
            repos_url: '',
            events_url: '',
            received_events_url: '',
            type: 'User',
            user_view_type: 'public',
            site_admin: false,
            name: 'User Not Found',
            company: null,
            blog: '',
            location: null,
            email: null,
            hireable: null,
            bio: 'No data available for this user.',
            twitter_username: null,
            public_repos: 0,
            public_gists: 0,
            followers: 0,
            following: 0,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          };
          
          return of(dummyUser);
        })
      ).subscribe((data) => {
        this.user = data as GithubUser;
      });
    }
  }
}
