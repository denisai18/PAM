import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersServiceService } from '../users/users-service.service';
import {Room} from '../users/room.model';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page{
  room: Room;
  constructor(private route: ActivatedRoute, public users: UsersServiceService) {
    this.route.params.subscribe( params => {
      console.log(params);
      this.room = users.getRoomForCurrentUserById(params.name);
    } );
  }

}
