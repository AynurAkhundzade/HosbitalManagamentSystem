import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HosbitalService } from 'src/app/hosbital.service';

@Component({
  selector: 'app-doctors-page',
  templateUrl: './doctors-page.component.html',
  styleUrls: ['./doctors-page.component.scss'],
})
export class DoctorsPageComponent {
  image: any;
  newData: any = [];
  info: any;
  constructor(
    private http: HttpClient,
    private hosbitalService: HosbitalService,
    private route: Router
  ) {}
  ngOnInit(): void {
    //this.getImage();
    this.getData();
  }

  getData() {
    this.hosbitalService.getDoctorsData().subscribe((data) => {
      this.newData = data;
      console.log(this.newData);
    });
  }
  routeToDoctorsPage(item: any) {
    this.route.navigate(['/Doctor']);
    this.hosbitalService.doctorsInfo = item;
  }
}
