import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../../api.services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-details',
  imports: [CommonModule,RouterLink],
  templateUrl: './users-details.component.html',
  styleUrl: './users-details.component.css'
})
export class UsersDetailsComponent implements OnInit{
    user: any;

    constructor(
      private route: ActivatedRoute,
      private userService: ApiService
    ) {}

    ngOnInit(): void {
      const userId = Number(this.route.snapshot.paramMap.get('id')); // Get user ID from route
      this.userService.getUserById(userId).subscribe((user) => {
        this.user = user; // Fetch user data
      });
    }
  }

