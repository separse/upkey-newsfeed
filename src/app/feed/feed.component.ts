import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FriendsService } from '../friends.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  friends: any[];
  friend: any;

  constructor(
    private service: FriendsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getFeed();
  }
  getFeed() {
    this.friends = this.service.getFriends();
    this.activatedRoute.params.subscribe((params) => {
      this.friends.find((data) => {
        if (params.name == data.name) {
          this.friend = data;
        }
      });
    });
  }
}
