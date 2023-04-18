import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { statusText } from 'src/app/statusText';
import { hours } from './dataModel';
import { AddQueueComponent } from './hosbital-page/add-queue/add-queue.component';
import { queueModel } from './queueModel';
import { Role } from './roleModel';
import { tokenInfo } from './tokenInfo';

@Injectable({
  providedIn: 'root',
})
export class HosbitalService {
  doctorsInfo: any = [];
  constructor(private http: HttpClient, public dialog: MatDialog) {}

  examinationDto = {
    doctorFinCode: String,
    name: String,
    surname: String,
    email: String,
    phone: String,
    pastTreatment: String,
    localDate: String,
    time: String,
    customFinCode: String,
  };
  paymentDto = {
    cardId: null,
    pay: null,
    cardCode: null,
    endTime: null,
  };
  //bu ikisin bir obyekte elave edib atram sene

  getDoctorsData() {
    return this.http.get(
      'http://hospital-env.eba-mxk65vbp.eu-north-1.elasticbeanstalk.com/doctor/all'
    );
  }
  addQueue(QueueDto: any): Observable<statusText> {
    return this.http.post<statusText>(
      'http://hospital-env.eba-mxk65vbp.eu-north-1.elasticbeanstalk.com/queue/add',
      QueueDto
    );
  }

  login(form: any): Observable<Role> {
    return this.http.post<Role>(
      'http://hospital-env.eba-mxk65vbp.eu-north-1.elasticbeanstalk.com/auth/login',
      form
    );
  }
  getHours(finCode, localDate): Observable<hours> {
    return this.http.get<hours>(
      `http://hospital-env.eba-mxk65vbp.eu-north-1.elasticbeanstalk.com/workTime/correctTime/${finCode}/${localDate}`
    );
  }
  regiter(registerForm: any): Observable<tokenInfo> {
    return this.http.post<tokenInfo>(
      'http://hospital-env.eba-mxk65vbp.eu-north-1.elasticbeanstalk.com/auth/register',
      registerForm
    );
  }

  getUserInfo() {
    return this.http.get(
      'http://hospital-env.eba-mxk65vbp.eu-north-1.elasticbeanstalk.com/userPage/userExaminations'
    );
  }
  getDoctorInfooo() {
    return this.http.get(
      'http://hospital-env.eba-mxk65vbp.eu-north-1.elasticbeanstalk.com/doctorPage/all/assistant'
    );
  }
  getAsistantInfo() {
    return this.http.get(
      'http://hospital-env.eba-mxk65vbp.eu-north-1.elasticbeanstalk.com/assistantPage/search'
    );
  }
getQueueData(){
return this.http.get('http://hospital-env.eba-mxk65vbp.eu-north-1.elasticbeanstalk.com/assistantPage/search')
}
}
