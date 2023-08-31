import { LayoutModule } from '@angular/cdk/layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import 'chart.js';

import { DashboardComponent } from './dashboard.component';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { Chart, ChartConfiguration } from 'chart.js';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent, BarChartComponent],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatIconModule,
        MatMenuModule,
      ],
      providers: [
        {
          provide: Chart,
          useFactory: () => {
            const config: ChartConfiguration<'bar'> = {
              type: 'bar',
              data: {// values on X-Axis
                labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
                         '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
                 datasets: [
                  {
                    label: "Sales",
                    data: [467,576, 572, 79, 92,
                         574, 573, 576],
                    backgroundColor: 'blue'
                  },
                  {
                    label: "Profit",
                    data: [542, 542, 536, 327, 17,
                           0.00, 538, 541],
                    backgroundColor: 'limegreen'
                  }  
                ]
              },
              options: {
                responsive: true,
              },
            };
  
            return new Chart('fakeId', config);
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
