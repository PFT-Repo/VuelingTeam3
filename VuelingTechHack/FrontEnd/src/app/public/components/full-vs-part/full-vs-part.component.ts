import { Component, Input, OnInit } from '@angular/core';

export interface FullVsPartConfig {
  title: string;
  full: number[];
  part: number[];
}

@Component({
  selector: 'app-full-vs-part',
  templateUrl: './full-vs-part.component.html',
  styleUrls: ['./full-vs-part.component.scss'],
})
export class FullVsPartComponent implements OnInit {
  @Input() config: FullVsPartConfig;
  chartConfig: any;

  constructor() {
    this.config = {
      title: '',
      full: [],
      part: [],
    };
  }

  ngOnInit(): void {
    this.chartConfig = {
      type: 'bar',
      data: {
        labels: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio'],
        datasets: [
          {
            label: 'Jornada Completa',
            data: this.config.full,
          },
          {
            label: 'Jornada Parcial',
            data: this.config.part,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: this.config.title,
          },
        },
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      },
    };
  }
}
