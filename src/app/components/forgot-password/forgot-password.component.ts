import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Ng7O2AuthFbService } from '../../../../projects/ng7-o2-auth-fb/src/lib/ng7-o2-auth-fb.service';
// import { Ng7O2AuthFbService } from 'ng7-o2-auth-fb';

import { CustomErrorStateMatcher } from '../../shared/custom-error-state-matcher';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;
  esMatcher = new CustomErrorStateMatcher();

  constructor(private fb: FormBuilder, private authService: Ng7O2AuthFbService) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.forgotPasswordForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])]
    });
  }


  sendEmail(email: string) {
    console.log(email);
    this.authService.forgotPassword(email);
  }

  getEmailErrorMessage() {
    const emailControl = this.forgotPasswordForm.controls['email'];
    return emailControl.hasError('required') ? 'You must enter a value' :
    emailControl.hasError('email') ? 'Not a valid email' :
            '';
  }


}
