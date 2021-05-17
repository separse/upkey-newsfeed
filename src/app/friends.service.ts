import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FriendsService {
  friends: any;
  getFriends() {
    this.friends = [
      {
        name: 'JohnSnow',
        imagePath: '/assets/img/jhon-snow.png',
        feed: {
          add: [
            { name: 'GabrielGarcia', date: new Date('2020-11-02T02:00:00') },
          ],
          like: [
            {
              name: 'AngelinaAniston',
              imagePath: '/assets/img/Wolrd Photography (72).jpg',
              date: new Date('2021-04-12T10:00:00'),
            },
          ],
          upload: [
            {
              imagePath: '/assets/img/Wolrd Photography (32).jpg',
              date: new Date('2020-10-02T12:00:00'),
            },
          ],
        },
      },
      {
        name: 'AngelinaAniston',
        imagePath: '/assets/img/angelina-aniston.png',
        feed: {
          add: [{ name: 'JohnSnow', date: new Date('2021-01-02T02:00:00') }],
          like: [
            {
              name: 'JohnSnow',
              imagePath: '/assets/img/Wolrd Photography (32).jpg',
              date: new Date('2021-12-15T12:00:00'),
            },
          ],
          upload: [
            {
              imagePath: '/assets/img/Wolrd Photography (72).jpg',
              date: new Date('2021-01-02T12:00:00'),
            },
          ],
        },
      },
      {
        name: 'GabrielGarcia',
        imagePath: '/assets/img/gabriel-garcia.png',
        feed: {
          add: [
            { name: 'AngelinaAniston', date: new Date('2021-05-22T05:41:00') },
          ],
          like: [
            {
              name: 'SarahCaner',
              imagePath: '/assets/img/Wolrd Photography (15).jpg',
              date: new Date('2020-05-22T04:30:00'),
            },
          ],
          upload: [
            {
              imagePath: '/assets/img/Wolrd Photography (45).jpg',
              date: new Date('2020-03-12T10:35:00'),
            },
          ],
        },
      },
      {
        name: 'DanielJames',
        imagePath: '/assets/img/daniel-james.png',
        feed: {
          add: [{ name: 'SarahCaner', date: new Date('2020-15-17T07:01:00') }],
          like: [
            {
              name: 'GabrielGarcia',
              imagePath: '/assets/img/Wolrd Photography (45).jpg',
              date: new Date('2021-10-17T12:00:00'),
            },
          ],
          upload: [
            {
              imagePath: '/assets/img/Wolrd Photography (35).jpg',
              date: new Date('2020-10-13T10:41:00'),
            },
          ],
        },
      },
      {
        name: 'SarahCaner',
        imagePath: '/assets/img/sarah-caner.png',
        feed: [
          {
            name: 'DanielJames',
            date: new Date('2021-15-17T12:01:00'),
            add: true,
          },

          {
            name: 'DanielJames',
            imagePath: '/assets/img/Wolrd Photography (35).jpg',
            date: new Date('2020-15-17T12:00:00'),
            like: true,
          },

          {
            imagePath: '/assets/img/Wolrd Photography (15).jpg',
            date: new Date('2020-05-11T10:50:00'),
            upload: true,
          },
        ],
      },
    ];
    return this.friends;
  }
}
