import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { faEnvelope, faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';
import { AddQueueComponent } from './hosbital-page/add-queue/add-queue.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hosbitalManagamentSystem';
  phoneIcon=faPhone;
  emailIcon=faEnvelope;
  locationIcon=faLocationArrow;
  // facebookIcon=facebookIcon
  constructor(private router:Router,private dialog:MatDialog){}
  ngOnInit(): void {
  }

  passLogin(){
 this.router.navigate (['/login']);
  }
  passDoctor(){
    this.router.navigate (['/Doctors']);
     }
     passBranch(){
      this.router.navigate (['/branchs']);
       }
  openQueue(){
    const dialogRef=this.dialog.open(AddQueueComponent,{
      height:'400px',
      width:'600px',

    })
  }
}
