import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-employees-by-function',
  templateUrl: './employees-by-function.component.html',
})
export class EmployeesByFunctionComponent implements OnInit {
  @Input() data: any;
  config: any;

  ngOnInit(): void {
    this.config = {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: 'Votes',
            data: this.data,
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };
  }
}
