import { Component } from '@angular/core';
import { HosbitalService } from 'src/app/hosbital.service';

@Component({
  selector: 'app-user-official-page',
  templateUrl: './user-official-page.component.html',
  styleUrls: ['./user-official-page.component.scss']
})
export class UserOfficialPageComponent {
constructor(private hosbitalService:HosbitalService){

}

data:any;

ngOnInit():void{
this.getData();
}
getData(){
 this.hosbitalService.getUserInfo().subscribe({
  next:(x)=>{
    console.log(x);
    this.data=x;
    console.log(x);
  }
 })
}
}
