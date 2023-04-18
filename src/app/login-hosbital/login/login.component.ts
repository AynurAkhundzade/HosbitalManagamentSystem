import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HosbitalService } from 'src/app/hosbital.service';
import { Role } from 'src/app/roleModel';
import { tokenInfo } from 'src/app/tokenInfo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  result: tokenInfo;

  constructor(
    private route: Router,
    private fb: FormBuilder,
    private hosbitalService: HosbitalService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.initialForm();
  }

  initialForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  passQeydiyyat() {
    this.route.navigate(['/registrasiya']);
  }
  passDaxil() {
    this.route.navigate(['/login']);
  }

  check() {
    console.log(this.loginForm);

    let model = {
      email: String,
      password: String,
    };

    model.email = this.loginForm.get('email').value;
    model.password = this.loginForm.get('password').value;

    console.log(model);

    this.hosbitalService.login(model).subscribe({
      next: (x: Role) => {
        console.log(x);
        console.log(x.roles);
        localStorage.setItem('token', x.token.accessToken);
        if (x.roles[0] == 'ROLE_SUPERVISOR') {
          this.route.navigate(['/doctor']);
        } else if (x.roles[0] == 'ROLE_ADMIN') {
          this.route.navigate(['/asistant']);
        } else if (x.roles[0] == 'ROLE_USER') {
          this.route.navigate(['/user']);
        }
      },
      error: (x) => {
        console.log(x.error);
        this.toastr.error(x.error);
      },
    });
  }
}
