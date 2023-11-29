import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JarwisServiceService } from 'src/app/Services/jarwis-service.service';
import { RegServiceeService } from 'src/app/Services/reg-servicee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  public form = {
    username: null,
    password: null,
  };
  public error = [];
  constructor(
    private jarwis: JarwisServiceService,
    private token: RegServiceeService,
    private route: Router
  ) {}

  onSubmit() {
    console.log(this.form);
    this.jarwis.signUp(this.form).subscribe(
      (data) => this.handleResponse(data),
      (error) => this.handleError(error)
    );
  }
  ngOnInit() {}
  handleError(error: any) {
    return (this.error = error.error.errors);
  }
  handleResponse(data: any) {
    this.route.navigateByUrl('/dashboard');
  }

}
