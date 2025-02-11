import { Component, Inject, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

interface DialogParm {
  id: number;
  title: string;
  state: string;
  url: string;
  created_at: string;
  updated_at: string;
  email:string;
  class:string;
  enrollmentDate:string;
  name:string;

}

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent {



  constructor(public dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogParm,
    // public dataService: DataService
  ) { }

formControl = new FormControl('', [
Validators.required
// Validators.email,
]);

getErrorMessage() {
return this.formControl.hasError('required') ? 'Required field' :
this.formControl.hasError('email') ? 'Not a valid email' :
'';
}

submit() {
// empty stuff
}

onNoClick(): void {
this.dialogRef.close();
}

public confirmAdd(): void {
// this.dataService.addIssue(this.data);
}
}
