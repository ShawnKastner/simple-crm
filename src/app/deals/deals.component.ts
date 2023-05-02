import { Component, inject, OnInit } from '@angular/core';
import { DialogAddDealComponent } from '../dialog-add-deal/dialog-add-deal.component';
import { MatDialog } from '@angular/material/dialog';
import { Deal } from 'src/models/deal.class';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
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

  constructor(public dialog: MatDialog) { }

  openAddDealDialog(): void {
    this.dialog.open(DialogAddDealComponent);
  }

  ngOnInit(): void {
    this.getDeals();
    
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
  
}