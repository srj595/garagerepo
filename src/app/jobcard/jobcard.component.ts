import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-jobcard',
  templateUrl: './jobcard.component.html',
  styleUrls: ['./jobcard.component.scss']
})
export class JobcardComponent implements OnInit {

  userForm: FormGroup ;


  constructor(  private readonly fb: FormBuilder) {
    this.userForm = this.fb.group({
      telephone: [ '', { Validators: [Validators.required , Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')], updateOn: 'change'}],
      email: [ '', { Validators: [Validators.required ,  Validators.pattern('[a-zA-Z ]')], updateOn: 'change'}],
    });
   }

  ngOnInit(): void {
  }
  onchange(): void {
    console.log(this.userForm.controls['telephone'].hasError('required'));
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      return;
    }
  }
}
