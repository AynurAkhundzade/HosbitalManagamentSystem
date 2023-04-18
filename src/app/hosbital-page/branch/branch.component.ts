import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HosbitalService } from 'src/app/hosbital.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss'],
})
export class BranchComponent {
  branchs: any = [];
  flag: boolean = true;
  calledData: any;
  doctorsList: any = [];
  doctorsData: any = [];
  cllData:any;

  constructor(
    private http: HttpClient,
    private hosbitalService: HosbitalService,
    private route: Router
  ) {}
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.hosbitalService.getDoctorsData().subscribe((data) => {
      console.log(data);
      this.branchs = data;
    });
  }

  getValue(item: any) {
    console.log(item);
    this.flag = false;
    this.calledData = item;

    this.hosbitalService.getDoctorsData().subscribe((data) => {
      this.doctorsData = data;
      console.log(this.doctorsData);
      this.doctorsList = this.doctorsData.filter(
        (res: { branch: any }) => res.branch === item
      );
      console.log(this.doctorsList);
    });
  }

  // routeToDoctorsPage(item: any) {
  //   debugger
  //   console.log(item);
  //   this.cllData=item;

  //   this.hosbitalService.getDoctorsData().subscribe((data)=>{
  //     console.log(data);
  //     this.doctorsData=data;
  //     console.log(this.doctorsData)
  //     this.hosbitalService.doctorsInfo = this.doctorsData.filter(
  //       (res:{name:any}) => res.name === this.cllData

  //     );
  //     console.log(this.hosbitalService.doctorsInfo)
  //   })

  //   console.log(this.hosbitalService.doctorsInfo);
  //   this.route.navigate(['/Doctor']);
  // }
}
