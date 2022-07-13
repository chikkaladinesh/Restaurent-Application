import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  [x: string]: any;

  signupForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private _http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name:[''],
      mobile:[''],
      email:[''],
      password:['']
    })
  }
// Method to create User
signUp() {
  this._http.post<any>("http://localhost:3000/signup", this.signupForm.value).subscribe(res=>{
     alert("Sign In Successfull");
     this.signupForm.reset();
     this.router.navigate(['login'])
  },err=>{
    alert("Machine Arustundi ikkada 😠")
  }
  )
}
}
