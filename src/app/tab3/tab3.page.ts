import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page{
  title = 'No Title';
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      console.log(params); this.title = params.name;
    } );
  }

}
