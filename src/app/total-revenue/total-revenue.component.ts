import { Component } from '@angular/core';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  selector: 'total-revenue',
  standalone: true,
  imports: [CanvasJSAngularChartsModule],
  templateUrl: './total-revenue.component.html',
  styleUrl: './total-revenue.component.scss',
})
export class TotalRevenueComponent {
  chartOptions = {
    animationEnabled: true,
    axisX: {
      labelAngle: 0,
      lineThickness: -2, // ปรับความเข้มของเส้นด้านหลัง
      lineColor: '#EFF1F3',
      labelFontSize: 10,
    },
    toolTip: {
      shared: true,
    },
    legend: {
      cursor: 'pointer',
      itemclick: function (e: any) {
        if (
          typeof e.dataSeries.visible === 'undefined' ||
          e.dataSeries.visible
        ) {
          e.dataSeries.visible = false;
        } else {
          e.dataSeries.visible = true;
        }
        e.chart.render();
      },
    },
    data: [
      {
        type: 'column',
        name: 'Online Sales',
        legendText: 'Online Sales',
        showInLegend: true,
        columnSpacing: 0.5,
        columnWidth: 0.7,
        color: '#0095FF',
        dataPoints: [
          { label: 'Monday', y: 262, color: '#0095FF' },
          { label: 'Tuesday', y: 289, color: '#0095FF' },
          { label: 'Wednesday', y: 175, color: '#0095FF' },
          { label: 'Thursday', y: 137, color: '#0095FF' },
          { label: 'Friday', y: 115, color: '#0095FF' },
          { label: 'Saturday', y: 104, color: '#0095FF' },
          { label: 'Sunday', y: 97.8, color: '#0095FF' },
        ],
      },
      {
        type: 'column',
        name: 'Offline Sales',
        legendText: 'Offline Sales',
        showInLegend: true,
        columnSpacing: 0.5,
        columnWidth: 0.7,
        color: '#00E096',
        dataPoints: [
          { label: 'Monday', y: 240, color: '#00E096' },
          { label: 'Tuesday', y: 250, color: '#00E096' },
          { label: 'Wednesday', y: 130, color: '#00E096' },
          { label: 'Thursday', y: 100, color: '#00E096' },
          { label: 'Friday', y: 85, color: '#00E096' },
          { label: 'Saturday', y: 90, color: '#00E096' },
          { label: 'Sunday', y: 88, color: '#00E096' },
        ],
      },
    ],
    axisY: {
      lineThickness: -2, // ปรับความเข้มของเส้นด้านหลัง
      lineColor: '#FFFFFF',
      labelFontSize: 10,
    },
  };
}
