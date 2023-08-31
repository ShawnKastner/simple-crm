import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsComponent } from './deals.component';
import { MatDialog } from '@angular/material/dialog';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { Firestore, FirestoreModule } from '@angular/fire/firestore';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatMenu } from '@angular/material/menu';
import { MatIcon } from '@angular/material/icon';

describe('DealsComponent', () => {
  let component: DealsComponent;
  let fixture: ComponentFixture<DealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirestoreModule ,provideFirebaseApp(() => initializeApp(environment.firebase))],
      declarations: [DealsComponent, MatCard, MatMenu, MatIcon, MatCardContent],
      providers: [
        {
          provide: MatDialog,
          useValue: [],
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
