import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collection, doc, docData } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  private firestore: Firestore = inject(Firestore);
  userId!: any;
  user: User = new User();
  user$!: Observable<any>

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id');
      console.log('ID is:', this.userId);
      this.getUser();
   });
  }

  getUser() {
    const userColl = collection(this.firestore, 'users')
    const docRef = doc(userColl, this.userId);
    this.user$ = docData(docRef)
    this.user$.subscribe((user: any) => {
      this.user = new User(user);
      console.log('Retrieved user', this.user);
      
    });
  }

}