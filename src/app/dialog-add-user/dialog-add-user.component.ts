import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
  user = new User();
  birthDate!: Date;
  private firestore: Firestore = inject(Firestore);
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) { }

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    this.loading = true;
    addDoc(collection(this.firestore, 'users'), this.user.toJSON()).then(() => {
      this.loading = false;
      this.dialogRef.close();
    })
  }
}  
