import { Component } from '@angular/core';
import { UsersServiceService } from '../users/users-service.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public users: UsersServiceService) {}

}
