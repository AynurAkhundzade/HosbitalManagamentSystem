import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HosbitalService } from 'src/app/hosbital.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(
    private route: Router,
    private fb: FormBuilder,
    private hosbitalService: HosbitalService,
    private toastr: ToastrService
  ) {}

  regForm: FormGroup;
  submit: Boolean = false;

  ngOnInit(): void {
    this.initialForm();
  }
  passQeydiyyat() {
    this.route.navigate(['/registrasiya']);
  }
  passDaxil() {
    this.route.navigate(['/login']);
  }

  initialForm() {
    this.regForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onClick() {
    this.submit = true;
    let registerForm = {
      name: String,
      surname: String,
      email: String,
      password: String,
    };
    registerForm.name = this.regForm.get('name').value;
    registerForm.surname = this.regForm.get('surname').value;
    registerForm.email = this.regForm.get('email').value;
    registerForm.password = this.regForm.get('password').value;
    console.log(registerForm);

    this.hosbitalService.regiter(registerForm).subscribe({
      next: (x) => {
        this.route.navigate(['/login']);
      },

      error: (x) => {
        this.toastr.error(x.error.text);
      },
    });
  }
}
