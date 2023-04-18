import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HosbitalPageModule } from './hosbital-page/hosbital-page.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginHosbitalModule } from './login-hosbital/login-hosbital.module';
import { LoginComponent } from './login-hosbital/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsModule } from './doctors/doctors.module';
import { MainPageComponent } from './hosbital-page/main-page/main-page.component';
import { DoctorsComponent } from './doctors/doctors/doctors.component';
import { DoctorsPageComponent } from './doctors/doctors-page/doctors-page.component';
import { BranchComponent } from './hosbital-page/branch/branch.component';
import { RegisterComponent } from './login-hosbital/register/register.component';
import { AddQueueComponent } from './hosbital-page/add-queue/add-queue.component';
import { OnlinePaymentComponent } from './hosbital-page/online-payment/online-payment.component';
import { AuthInterceptor } from './auth.interceptor';
import { UserPageComponent } from './user/user-page/user-page.component';
import { UserModule } from './user/user.module';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import * as jwt_decode from "jwt-decode";
import { UserOfficialPageComponent } from './user/user-official-page/user-official-page.component';
import { AsistantPageComponent } from './user/asistant-page/asistant-page.component';
import { DoctorsOfficialPageComponent } from './user/doctors-official-page/doctors-official-page.component';
import { ToastrModule } from 'ngx-toastr';

const route: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainPageComponent },
  { path: 'Doctor', component: DoctorsComponent },
  { path: 'Doctors', component: DoctorsPageComponent },
  { path: 'branchs', component: BranchComponent },
  { path: 'registrasiya', component: RegisterComponent },
  { path: 'Queue', component: AddQueueComponent },
  { path: 'payment', component: OnlinePaymentComponent },
  { path: 'user', component: UserPageComponent },
  { path: 'userOfficial', component: UserOfficialPageComponent },
  { path: 'asistant', component: AsistantPageComponent },
  { path: 'doctor', component: DoctorsOfficialPageComponent },

];

@NgModule({
  declarations: [AppComponent,],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    HosbitalPageModule,
    FontAwesomeModule,
    LoginHosbitalModule,
    RouterModule.forRoot(route),
    DoctorsModule,
    HttpClientModule,
    UserModule,
    MatButtonModule,
    MatIconModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
