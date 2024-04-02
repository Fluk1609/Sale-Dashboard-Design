import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
@Component({
  selector: 'service-level',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CanvasJSAngularChartsModule],
  templateUrl: './service-level.component.html',
  styleUrl: './service-level.component.scss',
})
export class ServiceLevelComponent {
  chartOptions = {
    animationEnabled: true,
    toolTip: {
      shared: true,
    },
    axisY: {
      lineThickness: 0, // ปรับความเข้มของเส้นด้านหลัง
      lineColor: '#FFFFFF', // ปรับสีของเส้นด้านหลัง
      labelFormatter: function () {
        return '';
      },
    },
    axisX: {
      lineThickness: 0, // ปรับความเข้มของเส้นด้านหลัง
      lineColor: '#FFFFFF', // ปรับสีของเส้นด้านหลัง
      labelFormatter: function () {
        return '';
      },
    },
    data: [
      {
        type: 'stackedColumn100',
        name: 'Boys',
        indexLabelPlacement: 'inside',
        indexLabelFontColor: 'white',
        color: '#00E096',
        dataPoints: [{ y: 45 }, { y: 24 }, { y: 68 }, { y: 24 }, { y: 15 }],
      },
      {
        type: 'stackedColumn100',
        name: 'Girls',
        indexLabelPlacement: 'inside',
        indexLabelFontColor: 'white',
        color: '#0095FF',
        dataPoints: [{ y: 22 }, { y: 17 }, { y: 32 }, { y: 48 }, { y: 25 }],
      },
    ],
  };
}
