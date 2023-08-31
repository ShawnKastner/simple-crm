import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { InjectionToken } from '@angular/core';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { FirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        FirestoreModule, 
      ],
      declarations: [UserComponent, MatCard, MatIcon],
      providers: [
        { provide: InjectionToken, useValue: {} },
        { provide: MatDialog, useValue: [] },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
