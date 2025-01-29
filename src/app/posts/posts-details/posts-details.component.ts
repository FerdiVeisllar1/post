import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../../api.services';

@Component({
  selector: 'app-posts-details',
  imports:[RouterLink],
  templateUrl: './posts-details.component.html',
  styleUrls: ['./posts-details.component.css'],
})
export class PostsDetailsComponent implements OnInit {
  post: any;
  author: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService

  ) {}

  ngOnInit(): void {
    const postId = Number(this.route.snapshot.paramMap.get('id'));

    // Fetch the post details
    this.apiService.getPostById(postId).subscribe((post) => {
      this.post = post;

      // Fetch the author details
      this.apiService.getUserById(post.userId).subscribe((user) => {
        this.author = user;
      });
    });
  }
}
