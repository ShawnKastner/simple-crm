import { Component, inject } from '@angular/core';
import { Firestore, collection, doc, updateDoc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent {
  user!: User;
  loading = false;
  private firestore: Firestore = inject(Firestore);
  userId!: any;

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>) { }

  saveUser() {
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
