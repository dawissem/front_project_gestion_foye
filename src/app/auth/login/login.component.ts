import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private fb:FormBuilder,private authService : AuthServiceService){}
  
  password :boolean =true; 
  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', []],
      password: ['', []],
    });
  }

  onSubmit(): void {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    // if (this.loginForm.valid) {
    //   // const email = this.loginForm.value.email;
      
    //   console.log('Email:', email, 'Password:', password);
    //   this.authService.login({email,password}).subscribe(
    //     (data)=>{

    //     },
    //     (error)=>{

    //     }
    //   );

    // } else {
    //   console.error('Form is invalid');
    // }

      if (email.startsWith('admin')) {
        this.router.navigate(['/home/dashboard/admin']);
      }else {
        this.router.navigate(['/home/dashboard/student']);
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
