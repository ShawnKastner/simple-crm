import { Component, inject } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, getDocs } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Deal } from 'src/models/deal.class';

@Component({
  selector: 'app-dialog-add-deal',
  templateUrl: './dialog-add-deal.component.html',
  styleUrls: ['./dialog-add-deal.component.scss']
})
export class DialogAddDealComponent {
  private firestore: Firestore = inject(Firestore);
  loading = false;
  deal = new Deal();
  users!: { email: string; firstName: string; lastName: string; }[];
  missingInput = false;

  constructor(public dialogRef: MatDialogRef<DialogAddDealComponent>) {
    this.getUsers().then(user => {
      this.users = user;
      console.log(this.users);
    });
  }

  async getUsers() {
    const querySnapshot = await getDocs(collection(this.firestore, 'users'));
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        email: data['email'],
        firstName: data['firstName'],
        lastName: data['lastName']
      };
    });
  }



  saveDeal() {
    if (this.emptyInput()) {
      addDoc(collection(this.firestore, 'deals'), this.deal.toJSON()).then(() => {
        this.loading = false;
        this.dialogRef.close();
      })
    } else {
      this.missingInput = true;
    }
  }

  emptyInput() {
    return (
      this.deal.amount > 0
      && this.deal.topic != ''
      && this.deal.user != ''
    )
  }
}
