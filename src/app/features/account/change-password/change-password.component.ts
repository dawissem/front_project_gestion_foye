import { Component } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  hideCurrentPassword: boolean = true; 
  hideNewPassword: boolean = true; 
  hideConfirmPassword: boolean = true; 

  changePassword() {
    // Logic for changing the password
  }
}
