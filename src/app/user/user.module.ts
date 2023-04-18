import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './user-page/user-page.component';
import { DoctorsOfficialPageComponent } from './doctors-official-page/doctors-official-page.component';
import { MatButtonModule } from '@angular/material/button';
import { UserOfficialPageComponent } from './user-official-page/user-official-page.component';
import {MatTableModule} from '@angular/material/table';
import { AsistantPageComponent } from './asistant-page/asistant-page.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    UserPageComponent,
    DoctorsOfficialPageComponent,
    UserOfficialPageComponent,
    AsistantPageComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  exports:[UserPageComponent]
})
export class UserModule { }
