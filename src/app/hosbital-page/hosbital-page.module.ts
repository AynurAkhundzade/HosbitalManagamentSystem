import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { LoginHosbitalModule } from '../login-hosbital/login-hosbital.module';
import { AddQueueComponent } from './add-queue/add-queue.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatInputModule } from '@angular/material/input';
import { BranchComponent } from './branch/branch.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OnlinePaymentComponent } from './online-payment/online-payment.component';
import {MatRadioModule} from '@angular/material/radio';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [MainPageComponent, AddQueueComponent, BranchComponent, OnlinePaymentComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FontAwesomeModule,
    LoginHosbitalModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,

  ],
  exports: [MainPageComponent,AddQueueComponent,BranchComponent,OnlinePaymentComponent],
})
export class HosbitalPageModule {}
