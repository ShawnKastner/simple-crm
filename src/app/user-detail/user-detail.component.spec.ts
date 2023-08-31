import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { InjectionToken } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
} from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import {
  MAT_MENU_SCROLL_STRATEGY,
  MatMenu,
  MatMenuTrigger,
} from '@angular/material/menu';

import { UserDetailComponent } from './user-detail.component';
import { Overlay } from '@angular/cdk/overlay';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        MatDialogModule,
      ],
      declarations: [
        UserDetailComponent,
        MatCard,
        MatIcon,
        MatMenu,
        MatCardHeader,
        MatCardTitle,
        MatCardContent,
        MatMenuTrigger,
      ],
      providers: [
        { provide: Firestore, useValue: {} },
        { provide: InjectionToken, useValue: {} },
        { provide: MatDialog, useValue: {} },
        {
          provide: MAT_MENU_SCROLL_STRATEGY,
          useFactory: (overlay: Overlay) => () =>
            overlay.scrollStrategies.block(),
          deps: [Overlay],
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
