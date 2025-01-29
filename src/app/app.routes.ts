import { PostsDetailsComponent } from './posts/posts-details/posts-details.component';
import { Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { UsersDetailsComponent } from './users/users-details/users-details.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full'},
  {
    path: 'posts',
    component: PostsComponent,
    title:'Allposts'
  },
  {
    path: 'posts/:id',
    component:PostsDetailsComponent,
    title:"Post page"
  },
  { path: 'users', component: UsersComponent, title: 'All users' },
  { path: 'users/:id', component: UsersDetailsComponent, title: 'User page' },
];
