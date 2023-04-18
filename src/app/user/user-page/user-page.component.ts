import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HosbitalService } from 'src/app/hosbital.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent {
  constructor(
    private hosbitalService: HosbitalService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  getdata() {
    this.route.navigate(['/userOfficial']);
  }
  goToQueue() {
    this.route.navigate(['/Queue']);
  }
}
