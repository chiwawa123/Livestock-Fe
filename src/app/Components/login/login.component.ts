import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  data: any;

  public form = {
    email: null,
    password: null,
  };
  public error: any = null;

  ngOnInit(): void {}

  constructor(private auth: AuthServiceService, private router: Router, private tostr:ToastrService) {}

  onSubmit() {
    console.log(this.form)

    this.auth.login(this.form).subscribe(

      (res) => {
        this.data = res;
        localStorage.setItem('user', JSON.stringify(this.data));
this.tostr.success('success',"login successful")
this.router.navigate(["dashboard"])

      },error=>{
this.tostr.error("bad creds","incorect credentials ")
      }

    );
  }
}
