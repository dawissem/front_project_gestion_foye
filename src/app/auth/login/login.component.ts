import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private fb:FormBuilder){}
  
  password :boolean =true; 
  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', []],
      password: ['', []],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      console.log('Email:', email, 'Password:', password);
      if (email.startsWith('admin')) {
        this.router.navigate(['/home/dashboard/admin']);
      }else {
        this.router.navigate(['/home/dashboard/student']);
      }
      // this.login()
    } else {
      console.error('Form is invalid');
    }
  }
hide() {
     this.password=!this.password;
    return !this.password;
}

login() {
  // event.preventDefault();
  this.router.navigate(['/home/dashboard/admin']);
}

clickEvent($event: MouseEvent) {
throw new Error('Method not implemented.');
}
emailFormControl: any;

}
