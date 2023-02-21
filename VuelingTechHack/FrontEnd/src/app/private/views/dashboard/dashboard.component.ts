import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  categories: any[] = [
    {
      category: 'Jardinero',
      full_time: 6,
      part_time: 7.5,
    },
    {
      category: 'Equipaje',
      full_time: 7.25,
      part_time: 7,
    },
    {
      category: 'Coordinacion',
      full_time: 10,
      part_time: 8.5,
    },
  ];
}
