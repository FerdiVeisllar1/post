import { ApiService } from './../api.services';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [CommonModule, RouterLink,RouterOutlet],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
    users: any[] = [];

    constructor(private apiService: ApiService) {}

    ngOnInit(): void {
      this.apiService.getUsers().subscribe((users) => {
        this.users = users; // Store users in the array
      });
    }
  }
