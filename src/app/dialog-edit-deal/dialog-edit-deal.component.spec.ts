import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditDealComponent } from './dialog-edit-deal.component';
import { MatDialogRef } from '@angular/material/dialog';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { Firestore } from '@angular/fire/firestore';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('DialogEditDealComponent', () => {
  let component: DialogEditDealComponent;
  let fixture: ComponentFixture<DialogEditDealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        FormsModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        NoopAnimationsModule
      ],
      declarations: [
        DialogEditDealComponent,
        MatProgressBar,
        MatFormField,
        MatLabel,
        MatInput,
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: [],
        },
        { provide: Firestore, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogEditDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
