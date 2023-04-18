import { Component } from '@angular/core';
import { HosbitalService } from 'src/app/hosbital.service';

@Component({
  selector: 'app-asistant-page',
  templateUrl: './asistant-page.component.html',
  styleUrls: ['./asistant-page.component.scss']
})
export class AsistantPageComponent {

  data:any;
constructor( private hosbitalService:HosbitalService){

}
ngOnInit():void{
  this.getDatas();
}

getDatas(){
  this.hosbitalService.getAsistantInfo().subscribe({
    next:(x)=>{
      console.log(x);
      this.data=x;
    }
  })
}
}
