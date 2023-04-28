import { Component } from '@angular/core';
import { DialogAddDealComponent } from '../dialog-add-deal/dialog-add-deal.component';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss']
})
export class DealsComponent {

  user = new User;

  constructor(public dialog: MatDialog) {}

  openAddDealDialog(): void {
    this.dialog.open(DialogAddDealComponent);
  }



}
