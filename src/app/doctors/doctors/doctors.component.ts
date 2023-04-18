import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  faEnvelope,
  faLocationArrow,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { HosbitalService } from 'src/app/hosbital.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
})
export class DoctorsComponent {
  constructor(
    private router: Router,
    private hosbitalService: HosbitalService
  ) {}

  doctorinfo = this.hosbitalService.doctorsInfo;

  phoneIcon = faPhone;
  emailIcon = faEnvelope;
  locationIcon = faLocationArrow;
  ngOnInit(): void {
  }

  passLogin() {
    this.router.navigate(['/login']);
  }

  routeToQueue() {
    this.router.navigate(['/Queue']);
  }
}
