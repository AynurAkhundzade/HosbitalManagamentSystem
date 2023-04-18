import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsComponent } from './doctors/doctors.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { DoctorsPageComponent } from './doctors-page/doctors-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [DoctorsComponent, DoctorsPageComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatButtonModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  exports: [DoctorsComponent, DoctorsPageComponent],
})
export class DoctorsModule {}
