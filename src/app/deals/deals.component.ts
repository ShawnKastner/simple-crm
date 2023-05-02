import { Component, inject, OnInit } from '@angular/core';
import { DialogAddDealComponent } from '../dialog-add-deal/dialog-add-deal.component';
import { MatDialog } from '@angular/material/dialog';
import { Deal } from 'src/models/deal.class';
import { Observable } from 'rxjs';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, getDoc } from '@angular/fire/firestore';
import { DialogEditDealComponent } from '../dialog-edit-deal/dialog-edit-deal.component';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss']
})
export class DealsComponent implements OnInit {
  private firestore: Firestore = inject(Firestore);
  deal: Deal = new Deal();
  deals$!: Observable<any>;
  allDeals!: Array<any>;
  dealId!: any;
  doneColl!: any;
  doneId!: any;

  constructor(public dialog: MatDialog) { }

  openAddDealDialog(): void {
    this.dialog.open(DialogAddDealComponent);
  }

  ngOnInit(): void {
    this.getDeals();
    this.getDoneDeals();
  }

  getDeals() {
    const dealColl = collection(this.firestore, 'deals');
    this.deals$ = collectionData(dealColl, { idField: 'dealId' });
    this.deals$.subscribe((deal: any) => {
      this.deal = deal;
      this.allDeals = deal;
      console.log('Received changes from DB', this.deal);
    });
  }


  openEditDealDialog(dealId: any): void {
    const deal = this.allDeals.find((d: any) => d.dealId === dealId);
    const dialog = this.dialog.open(DialogEditDealComponent);
    dialog.componentInstance.deal = new Deal(deal);
    dialog.componentInstance.dealId = dealId;
    console.log('Open dialog:', dealId);
  }

  getDoneDeals() {
    const doneColl = collection(this.firestore, 'deals-done');
    this.deals$ = collectionData(doneColl, { idField: 'dealId' });
    this.deals$.subscribe((doneDeals: any) => {
      this.doneColl = doneDeals;
      console.log(this.doneColl);

    });
  }

  async doneDeal(dealId: any) {
    const dealDoneColl = collection(this.firestore, 'deals-done');
    const dealDocRef = doc(collection(this.firestore, 'deals'), dealId);

    const dealDoc = (await getDoc(dealDocRef)).data();
    const dealJson = JSON.parse(JSON.stringify(dealDoc));
    await addDoc(dealDoneColl, dealJson);
    await deleteDoc(dealDocRef);
  }

  deleteDeal(dealId: any) {
    const dealColl = collection(this.firestore, 'deals');
    const docRef = doc(dealColl, dealId);
    deleteDoc(docRef);
  }

  async deleteDealComplete(dealId: any) {
    const dealDoneColl = collection(this.firestore, 'deals-done');
    const docRef = doc(dealDoneColl, dealId);
    await deleteDoc(docRef);
  }  
}