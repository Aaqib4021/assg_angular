import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserListComponent } from './user-list/user-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path:"",component:UserListComponent
    },
    {
        path:"user/:id",component:UserComponent
    },
    {
        path:"**",component:PageNotFoundComponent
    }
];
