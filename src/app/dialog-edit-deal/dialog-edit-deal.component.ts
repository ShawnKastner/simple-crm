import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collection, doc, updateDoc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Deal } from 'src/models/deal.class';

@Component({
  selector: 'app-dialog-edit-deal',
  templateUrl: './dialog-edit-deal.component.html',
  styleUrls: ['./dialog-edit-deal.component.scss']
})
export class DialogEditDealComponent implements OnInit{
  private firestore: Firestore = inject(Firestore);
  loading = false;
  deal!: Deal;
  dealId!: any;

  constructor(public dialogRef: MatDialogRef<DialogEditDealComponent>) { }

  ngOnInit() {
    console.log(this.deal);
    
  }

  saveDeal() {
    this.loading = true;
    const dealColl = collection(this.firestore, 'deals')
    const docRef = doc(dealColl, this.dealId);
    updateDoc(docRef, this.deal.toJSON())
      .then(() => {
        this.loading = false;
        this.dialogRef.close();
      })
  }

}
