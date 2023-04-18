import { Component } from '@angular/core';
import { HosbitalService } from 'src/app/hosbital.service';
import { MatDialog } from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-queue',
  templateUrl: './add-queue.component.html',
  styleUrls: ['./add-queue.component.scss'],
})
export class AddQueueComponent {
  selected!: Date;
  data: any;
  time!: any;
  queueForm!: FormGroup;
  flag!: boolean;
  hour: boolean = false;
  chosenHours: any;
  constructor(
    private hosbitalService: HosbitalService,
    private fb: FormBuilder,
    private route: Router,
    public dialog: MatDialog,
    private http: HttpClient,
    private toastr:ToastrService
  ) {}

  ngOnInit(): void {
    this.getDoctorsName();
    this.initialForm();
  }

  initialForm() {
    this.queueForm = this.fb.group({
      name: ['', Validators.required],
      surName: ['', Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
      doctor: ['', Validators.required],
      time: ['', Validators.required],
      pastTreatment: ['', Validators.required],
      customFinCode: [null, Validators.required],
    });
  }

  goToRegister(){
    this.dialog.closeAll();
    this.route.navigate(['/registrasiya']);
  }

  getDoctorsName() {
    this.hosbitalService.getDoctorsData().subscribe((res) => {
      this.data = res;
    });
  }

  addQueue() {
    // if (this.queueForm.invalid) {
    //   return;
    // }
    let datee = new Date(this.selected);

    let text = datee.toLocaleDateString('en-US');

    this.hosbitalService.examinationDto.name =
      this.queueForm.get('name')?.value;
    this.hosbitalService.examinationDto.surname =
      this.queueForm.get('surName')?.value;
      this.hosbitalService.examinationDto.email =
      this.queueForm.get('email')?.value;
      this.hosbitalService.examinationDto.phone =
      this.queueForm.get('phone')?.value;
    this.hosbitalService.examinationDto.doctorFinCode =
      this.queueForm.get('doctor')?.value;
    this.hosbitalService.examinationDto.localDate =
      text as unknown as StringConstructor;
    this.hosbitalService.examinationDto.time =
      this.queueForm.get('time')?.value;
    this.hosbitalService.examinationDto.customFinCode =
      this.queueForm.get('customFinCode')?.value;
    this.hosbitalService.examinationDto.pastTreatment =
      this.queueForm.get('pastTreatment')?.value;

    const QueueDto = {
      examinationDto: this.hosbitalService.examinationDto,
      paymentDto: this.hosbitalService.paymentDto,
    };
    console.log(QueueDto);

    if (this.flag == true) {
      this.hosbitalService.addQueue(QueueDto).subscribe({
        next: (x) => {
          console.log(x);
        },
        error: (x) => {
          console.log(x.statusText);
          this.toastr.error(x.statusText);
        },
      });
    } else if (this.flag == false) {
      this.dialog.closeAll();

      this.route.navigate(['/payment']);
    }
  }

  yesSubmit() {
    this.flag = true;
  }
  noSubmit() {
    this.flag = false;
  }

  choseHour() {
    let datee = new Date(this.selected);

    let text = datee.toLocaleDateString('en-US');


    this.hosbitalService.getHours(this.queueForm.get('doctor').value,text as unknown as StringConstructor).subscribe({
      next: (x) => {
        console.log(x)
        this.chosenHours = x.times;
        console.log(this.chosenHours)
      },
      // error: (x) => {
      //   console.log(x.error);
      // },
    });


    this.hour=true;
  }


}
