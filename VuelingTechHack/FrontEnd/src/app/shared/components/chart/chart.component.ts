import { AfterViewInit, Component, Input } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import * as uuid from 'uuid';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements AfterViewInit {
  @Input() config: any;
  chartId: string;

  constructor() {
    this.chartId = uuid.v4();
  }

  ngAfterViewInit(): void {
    new Chart(this.chartId, this.config);
  }
}
