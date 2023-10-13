import { Component } from '@angular/core';
import { Router, NavigationEnd, Event as NavigationEvent} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  activePath: string = '';
  public nav_open: boolean = false;
  public route: string = '/';

  year: string = new Date().getFullYear().toString()

  constructor(private router: Router) {

    this.router.events.subscribe( (event: NavigationEvent) => {
      if(event instanceof NavigationEnd){
        this.route = event.url;
        this.nav_open = false;
      }
    });
    
    if(window.outerWidth >= 700){
      this.nav_open = false;
    }
}

toggle() {
  this.nav_open = !this.nav_open;
}
}
