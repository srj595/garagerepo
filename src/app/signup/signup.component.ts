import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }

  public user={
    name:'',
    username:"",
    password:'',
    role:'',
    email:'',



  }

  ngOnInit(): void { 
    console.log('hi')
  }


  formSubmit(){
    alert('successful') 
  }

}
