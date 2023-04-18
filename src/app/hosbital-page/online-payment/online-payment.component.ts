import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HosbitalService } from 'src/app/hosbital.service';

@Component({
  selector: 'app-online-payment',
  templateUrl: './online-payment.component.html',
  styleUrls: ['./online-payment.component.scss'],
})
export class OnlinePaymentComponent {
  constructor(
    private fb: FormBuilder,
    private hosbitalService: HosbitalService,
    private route: Router,
    private toastr:ToastrService
  ) {}

  regForm!: FormGroup;
  submit: boolean = false;

  initialForm() {
    this.regForm = this.fb.group({

      cartNum: [null, Validators.required],
      CVV: [null, Validators.required],
      endTime:[null,Validators.required],
      amount: [null, Validators.required],
    });
  }
  validation() {
    if (this.regForm.valid) {
      this.hosbitalService.paymentDto.cardCode = this.regForm.get('CVV')?.value;
      this.hosbitalService.paymentDto.endTime = this.regForm.get('endTime')?.value;
      this.hosbitalService.paymentDto.cardId =
        this.regForm.get('cartNum')?.value;
      this.hosbitalService.paymentDto.pay = this.regForm.get('amount')?.value;

      const QueueDto = {
        examinationDto: this.hosbitalService.examinationDto,
        paymentDto: this.hosbitalService.paymentDto,
      };
      console.log(QueueDto);

      this.hosbitalService.addQueue(QueueDto).subscribe({
        next: (x) => {
          console.log('ssssh');
          console.log(x);
          this.toastr.success(x.error)
        },
        error: (x) => {
          console.log('dhdh');
          console.log(x.error.text);
          this.toastr.warning(x.error.text);
        },
      });
    } else {
      this.submit = true;
    }
  }
  ngOnInit(): void {
    this.initialForm();
  }
  routeToBack() {
    this.route.navigate(['/Queue']);
  }
}
