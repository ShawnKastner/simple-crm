import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collection, deleteDoc, doc, docData } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/models/user.class';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  private firestore: Firestore = inject(Firestore);
  userId!: any;
  user: User = new User();
  user$!: Observable<any>;
  birthDate!: string;


  constructor(private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id');
      // console.log('ID is:', this.userId);
      this.getUser();
    });
  }

  getUser() {
    const userColl = collection(this.firestore, 'users');
    const docRef = doc(userColl, this.userId);
    this.user$ = docData(docRef)
    this.user$.subscribe((user: any) => {
      this.user = new User(user);
      // console.log('Retrieved user', this.user);
      this.birthDate = new Date(this.user.birthDate).toLocaleDateString();
    });
  }

  deleteUser() {
    const userColl = collection(this.firestore, 'users');
    const docRef = doc(userColl, this.userId)
    deleteDoc(docRef)
  }

  openEditAdressDialog(): void {
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }

  openEditUserDialog(): void {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }
}