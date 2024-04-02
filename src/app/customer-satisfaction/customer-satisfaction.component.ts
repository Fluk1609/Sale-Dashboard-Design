import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  selector: 'customer-satisfaction',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CanvasJSAngularChartsModule],
  templateUrl: './customer-satisfaction.component.html',
  styleUrl: './customer-satisfaction.component.scss',
})
export class CustomerSatisfactionComponent {
  chartOptions = {
    animationEnabled: true,
    axisY: {
      lineThickness: -2, // ปรับความเข้มของเส้นด้านหลัง
      lineColor: '#FFFFFF',
      labelFontSize: 10,
      labelFormatter: function () {
        return '';
      },
    },
    axisX: {
      labelFormatter: function () {
        return '';
      },
    },
    toolTip: {
      shared: true,
      content: '{name}: ${y}',
    },
    legend: {
      fontSize: 13,
    },
    data: [
      {
        type: 'splineArea',
        showInLegend: true,
        name: 'Last Month',
        markerSize: 0,
        color: '#00E096',
        dataPoints: [
          { x: new Date(2020, 0), y: 3000000 },
          { x: new Date(2020, 1), y: 3500000 },
          { x: new Date(2020, 2), y: 3000000 },
          { x: new Date(2020, 3), y: 3040000 },
          { x: new Date(2020, 4), y: 2090000 },
          { x: new Date(2020, 5), y: 3100000 },
          { x: new Date(2020, 6), y: 3020000 },
          { x: new Date(2020, 7), y: 3000000 },
          { x: new Date(2020, 8), y: 3300000 },
          { x: new Date(2020, 9), y: 3800000 },
          { x: new Date(2020, 10), y: 3890000 },
          { x: new Date(2020, 11), y: 3900000 },
        ],
      },
      {
        type: 'splineArea',
        showInLegend: true,
        name: 'This Month',
        markerSize: 0,
        color: '#009DFF',
        dataPoints: [
          { x: new Date(2020, 0), y: 2010000 },
          { x: new Date(2020, 1), y: 1600000 },
          { x: new Date(2020, 2), y: 1400000 },
          { x: new Date(2020, 3), y: 1800000 },
          { x: new Date(2020, 4), y: 1800000 },
          { x: new Date(2020, 5), y: 2100000 },
          { x: new Date(2020, 6), y: 2200000 },
          { x: new Date(2020, 7), y: 2500000 },
          { x: new Date(2020, 8), y: 2300000 },
          { x: new Date(2020, 9), y: 2500000 },
          { x: new Date(2020, 10), y: 2600000 },
          { x: new Date(2020, 11), y: 2500000 },
        ],
      },
    ],
  };
}
