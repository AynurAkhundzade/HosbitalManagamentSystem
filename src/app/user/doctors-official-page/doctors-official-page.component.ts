import { Component } from '@angular/core';
import { HosbitalService } from 'src/app/hosbital.service';

@Component({
  selector: 'app-doctors-official-page',
  templateUrl: './doctors-official-page.component.html',
  styleUrls: ['./doctors-official-page.component.scss']
})
export class DoctorsOfficialPageComponent {
  datas:any;
  queueData:any;
  constructor( private hosbitalService:HosbitalService){

  }
  ngOnInit():void{
   this.getDatas();
   this.getQueueData();
  }

  getDatas(){
    this.hosbitalService.getDoctorInfooo().subscribe((data)=>{
  console.log(data);
  this.datas=data;
  console.log(this.datas)
    })
  }
  getQueueData(){
    this.hosbitalService.getQueueData().subscribe((data)=>{
     console.log(data);
     this.queueData=data;
    })
  }
}
