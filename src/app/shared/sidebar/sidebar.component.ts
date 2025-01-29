import { Component,HostListener,inject } from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})



export class SidebarComponent {
  private _formBuilder = inject(FormBuilder);
  isCollapsed = false;
  sidenavMode: 'side' | 'over' = 'side';

  constructor() {
    this.checkScreenSize();
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  @HostListener('window:resize', [])
  checkScreenSize() {
    this.sidenavMode = window.innerWidth <= 768 ? 'over' : 'side';
    if (window.innerWidth <= 768) {
      this.isCollapsed = true;
    }
  }
  options = this._formBuilder.group({
    bottom: 0,
    fixed: false,
    top: 0,
  });

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
}
