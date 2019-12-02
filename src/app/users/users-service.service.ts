import { Injectable } from '@angular/core';
import {User} from '../users/user.model';
@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
users: User[];
currentUser: number;
loggedIn = true;
initUsers(){
  this.users =[
    {
      username: 'john', password: '123', rooms: [
        {
          id: '0', name: 'Bathroom',
          commands: ['Light Switch', 'Prepare warm bath'], iconName: 'woman'
      },
      {
        id: '1', name: 'Kitchen',
        commands: ['Light Switch', 'Start oven', 'Start dish washer', 'Start toaster'], iconName: 'timer'
      }
    ]
    }
  ];
}
  constructor() {
    this.initUsers();
    this.currentUser = 0;
  }
  isUserLoggedIn()
  {
    return this.loggedIn;
  }
  getUsers()
  {
    return this.users;
  }
  setCurrentUser(index: number)
  {
    this.currentUser = index;
  }
  getCurrentUser()
  {
    return this.users[this.currentUser];
  }
  getRoomsForCurrentUser()
  {
    return this.users[this.currentUser].rooms;
  }
  getRoomForCurrentUserById(id: string)
  {
    return this.getRoomsForCurrentUser().find(room => {
      return room.id === id;
    });
  }
}
