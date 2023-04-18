import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { AddQueueComponent } from '../add-queue/add-queue.component';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  phoneIcon = faPhone;
  emailIcon = faEnvelope;
  locationIcon = faLocationArrow;
  constructor(private router: Router, public dialog: MatDialog) {}
  ngOnInit(): void {}

  passLogin() {
    this.router.navigate(['/login']);
  }
  openQueue() {
    const dialogRef = this.dialog.open(AddQueueComponent, {
      height: '400px',
      width: '800px',
    });
  }

}
