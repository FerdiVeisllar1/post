
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.services';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PostsDetailsComponent } from "./posts-details/posts-details.component";


@Component({
  selector: 'app-posts',
  imports: [CommonModule, RouterLink, PostsDetailsComponent,RouterOutlet],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
    posts: any[] = [];
    users: any[] = [];
    combinedData: any[] = [];

    constructor(private jsonService: ApiService) {}

    ngOnInit(): void {
      this.loadData();
    }

    loadData() {
      // Fetch posts and users
      this.jsonService.getPosts().subscribe((posts) => {
        this.posts = posts;
        this.jsonService.getUsers().subscribe((users) => {
          this.users = users;

          // Combine data
          this.combinedData = this.posts.map((post) => {
            const author = this.users.find((user) => user.id === post.userId);
            return { ...post, authorName: author?.name || 'Unknown' };
          });
        });
      });
    }
  }

