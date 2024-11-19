import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  hideCurrentPassword: boolean = true; 
  hideNewPassword: boolean = true; 
  hideConfirmPassword: boolean = true; 

  constructor(private router: Router){}

  changePassword() {
    // Logic for changing the password
  }

  goToChangePassword() {
    this.router.navigate(['/password'])
  }
}
