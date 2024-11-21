import { ChangeDetectionStrategy, Component } from '@angular/core';
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
export class LoginComponent {
  password :boolean =true; 
  constructor(private router:Router){}
hide() {
     this.password=!this.password;
    return !this.password;
}

navigateToHome(event: Event) {
  event.preventDefault();
  this.router.navigate(['/home']);
}

clickEvent($event: MouseEvent) {
throw new Error('Method not implemented.');
}
emailFormControl: any;

}
