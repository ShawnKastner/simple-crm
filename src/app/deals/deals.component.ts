import { Component, inject, OnInit } from '@angular/core';
import { DialogAddDealComponent } from '../dialog-add-deal/dialog-add-deal.component';
import { MatDialog } from '@angular/material/dialog';
import { Deal } from 'src/models/deal.class';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData, doc, docData } from '@angular/fire/firestore';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss']
})
export class DealsComponent implements OnInit{
  private firestore: Firestore = inject(Firestore);
  deal = new Deal();
  deals$!: Observable<any>;
  allDeals!: Array<any>;

  constructor(public dialog: MatDialog) { }

  openAddDealDialog(): void {
    this.dialog.open(DialogAddDealComponent);
  }

  ngOnInit() {
    const userCollection = collection(this.firestore, 'deals');
    this.deals$ = collectionData(userCollection);
    // subscribe changes and push it in array
    this.deals$.subscribe((changes: any) => {
      console.log('Received changes from DB', changes);
      this.allDeals = changes;
    });
  }
}