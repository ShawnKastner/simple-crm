import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddUserComponent } from './dialog-add-user.component';
import { MatDialogRef } from '@angular/material/dialog';
import { Firestore } from '@angular/fire/firestore';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatDatepickerToggle, MatDatepicker, MatDatepickerModule, MAT_DATEPICKER_SCROLL_STRATEGY } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Overlay } from '@angular/cdk/overlay';

describe('DialogAddUserComponent', () => {
  let component: DialogAddUserComponent;
  let fixture: ComponentFixture<DialogAddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, BrowserAnimationsModule, NoopAnimationsModule],
      declarations: [
        DialogAddUserComponent,
        MatProgressBar,
        MatFormField,
        MatLabel,
        MatDatepickerToggle,
        MatDatepicker,
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: [],
        },
        { provide: Firestore, useValue: {} },
        {
          provide: MAT_DATEPICKER_SCROLL_STRATEGY,
          useFactory: (overlay: Overlay) => () =>
            overlay.scrollStrategies.block(),
          deps: [Overlay],
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
