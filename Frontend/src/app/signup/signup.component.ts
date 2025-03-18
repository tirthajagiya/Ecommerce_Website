import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  private _router = inject(Router)
  private _fb = inject(FormBuilder)
  private _api = inject(UserService)
  signUpForm: FormGroup = this._fb.group({
    username: [''],
    email: [''],
    image: [''],
    password: [''],
    phone: [''],
    address_line_1: [''],
    address_line_2: [''],
    city: [''],
    state: ['']
  })

  data: any = {}
  submitForm() {
    this.data = {
      username: this.signUpForm.value.username,
      email: this.signUpForm.value.email,
      image: this.signUpForm.value.image,
      password: this.signUpForm.value.password,
      phone: this.signUpForm.value.phone,
      address: {
        address_line_1: this.signUpForm.value.address_line_1,
        address_line_2: this.signUpForm.value.address_line_2,
        city: this.signUpForm.value.city,
        state: this.signUpForm.value.state,
      },
      userType: 'Customer',
      cartId: null,
      orderListId: [],
    }
    console.log(this.signUpForm.value);
    this._api.insert(this.data).subscribe((res) => {
      console.log("data inserted", res);
    })
    
    this._router.navigate(['./'])
  }
}