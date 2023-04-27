import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from 'src/models/user.class';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  private firestore: Firestore = inject(Firestore);
  user = new User();
  users$!: Observable<any>;
  allUsers!: Array<any>;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    const userCollection = collection(this.firestore, 'users');
    this.users$ = collectionData(userCollection, { idField: 'uid' });
    // subscribe changes and push it in array
    this.users$.subscribe((changes: any) => {
      // console.log('Received changes from DB', changes);
      this.allUsers = changes;
    });
  }

  openDialog(): void {
    this.dialog.open(DialogAddUserComponent);
  }
}
