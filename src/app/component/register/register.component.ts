import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from 'src/app/services/_helpers/must-match.validator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  fieldTextType!: boolean;
  fieldTextType1!: boolean;

  constructor(private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() : void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      acceptTerms: [false, Validators.requiredTrue],
      mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      password: ['', [Validators.required, Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}')]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    },);
  };

  get regForm() { return this.registerForm.controls; }

  onSubmit() :void{
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    console.log(JSON.stringify(this.registerForm.value));
    localStorage.setItem("userdDetails",JSON.stringify(this.registerForm.value))
  };

  toggleFieldTextType() : void {
    this.fieldTextType = !this.fieldTextType;
  };

  toggleFieldTextType1(): void {
    this.fieldTextType1 = !this.fieldTextType1;
  };
  
}
