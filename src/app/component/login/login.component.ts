import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  fieldTextType!: boolean;

  fieldTextType1!: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  
  model: any = {};
  
  onSubmit() {
    localStorage.setItem("form-details",JSON.stringify(this.model.value))
    console.log(JSON.stringify(this.model))
    alert(this.model)
  }

  toggleFieldTextType() : void {
    this.fieldTextType = !this.fieldTextType;
  };

  toggleFieldTextType1() : void {
    this.fieldTextType1 = !this.fieldTextType1;
  };

}
