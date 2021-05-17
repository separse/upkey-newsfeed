import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../friends.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  friends: any[];
  constructor(private service: FriendsService) {}
  ngOnInit(): void {
    this.friends = this.service.getFriends();
  }
}
