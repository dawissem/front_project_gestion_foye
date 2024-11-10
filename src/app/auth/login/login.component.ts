import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  password :boolean =true; 
hide() {
     this.password=!this.password;
    return !this.password;
}

clickEvent($event: MouseEvent) {
throw new Error('Method not implemented.');
}
emailFormControl: any;

}
