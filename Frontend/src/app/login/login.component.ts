import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private _fb = inject(FormBuilder)
  private _router = inject(Router)

  loginForm: FormGroup = this._fb.group({
    email: [''],
    password: ['']
  })

  submitForm(){
    // console.log(localStorage.getItem('email'), localStorage.getItem('password'), this.loginForm.value.email, "pASSWORD:",this.loginForm.value.password);
    
    if (this.loginForm.value.email == localStorage.getItem('email') && this.loginForm.value.password == localStorage.getItem('password')) {
      this._router.navigate([''])
      alert("Login Succesfully ! ")
    } else {
      alert("Please enter valid email or password")
    }
  }
}
