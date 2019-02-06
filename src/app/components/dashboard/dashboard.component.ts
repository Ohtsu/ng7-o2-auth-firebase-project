import { Component, OnInit } from '@angular/core';

// import { Ng7O2AuthFbService } from '../../../../projects/ng7-o2-auth-fb/src/lib/ng7-o2-auth-fb.service';
import { Ng7O2AuthFbService } from 'ng7-o2-auth-fb';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private authService: Ng7O2AuthFbService) { }

  ngOnInit() {
  }

  isAuthenticated() {
    const ret = this.authService.isAuthenticated();
    this.authService.myDebug('isAuthenticated-----', ret);
    return ret;
  }

}
