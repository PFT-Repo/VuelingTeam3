import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export interface EmployeesByFunctionConfig {
  title: string;
  data: number[];
  labels: string[];
  datasetLabel: string;
}

@Component({
  selector: 'app-employees-by-function',
  templateUrl: './employees-by-function.component.html',
})
export class EmployeesByFunctionComponent implements OnInit {
  @Input() config: EmployeesByFunctionConfig;
  chartConfig: any;

  constructor() {
    this.config = {
      data: [],
      labels: [],
      datasetLabel: 'Dataset',
      title: 'Employees by Function',
    };
  }

  ngOnInit(): void {
    this.chartConfig = {
      type: 'doughnut',
      data: {
        labels: this.config.labels,
        datasets: [
          {
            label: this.config.datasetLabel,
            data: this.config.data,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: this.config.title,
          },
        },
      },
    };
  }
}
