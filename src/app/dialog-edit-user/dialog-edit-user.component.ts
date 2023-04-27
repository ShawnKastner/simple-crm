import { Component, inject } from '@angular/core';
import { User } from 'src/models/user.class';
import { MatDialogRef } from '@angular/material/dialog';
import { Firestore, addDoc, collection, doc, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent {
  user!: User;
  birthDate!: Date;
  userId!: any;
  loading = false;
  private firestore: Firestore = inject(Firestore);

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>) { }

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    this.loading = true;
    const userCollection = collection(this.firestore, 'users')
    const docRef = doc(userCollection, this.userId);
    updateDoc(docRef, this.user.toJSON())
    .then(() => {
      this.loading = false;
      this.dialogRef.close();
    })
  }
}
