import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddDealComponent } from './dialog-add-deal.component';
import { MatDialogRef } from '@angular/material/dialog';
import { Firestore } from '@angular/fire/firestore';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MAT_SELECT_SCROLL_STRATEGY, MatSelect } from '@angular/material/select';
import { MatOption, MatRippleModule } from '@angular/material/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { Overlay } from '@angular/cdk/overlay';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';


describe('DialogAddDealComponent', () => {
  let component: DialogAddDealComponent;
  let fixture: ComponentFixture<DialogAddDealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverlayModule, FormsModule, MatInputModule, BrowserAnimationsModule, NoopAnimationsModule, MatButtonModule],
      declarations: [
        DialogAddDealComponent,
        MatProgressBar,
        MatFormField,
        MatLabel,
        MatSelect,
        MatOption,
        MatButton,
      ],
      providers: [
        { provide: MatDialogRef, useValue: [] },
        { provide: Firestore, useValue: {} },
        {
          provide: MAT_SELECT_SCROLL_STRATEGY,
          useFactory: (overlay: Overlay) => () =>
            overlay.scrollStrategies.block(),
          deps: [Overlay],
        },
        { provide: 'mat-select-scroll-strategy', useValue: {} }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogAddDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
