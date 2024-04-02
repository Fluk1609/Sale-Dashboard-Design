import { Component } from '@angular/core';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
@Component({
  selector: 'target',
  standalone: true,
  imports: [CanvasJSAngularChartsModule],
  templateUrl: './target.component.html',
  styleUrl: './target.component.scss',
})
export class TargetComponent {
  chartOptions = {
    animationEnabled: true,
    axisX: {
      labelAngle: 0,
      lineThickness: -2, // ปรับความเข้มของเส้นด้านหลัง
      lineColor: '#FFFFFF',
      labelFontSize: 10,
    },
    toolTip: {
      shared: true,
    },
    data: [
      {
        type: 'column',
        columnSpacing: 0.5,
        columnWidth: 0.7,
        borderRadius: 50,
        dataPoints: [
          { label: 'Jan', y: 262, color: '#4AB58E' },
          { label: 'Feb', y: 289, color: '#4AB58E' },
          { label: 'Mar', y: 175, color: '#4AB58E' },
          { label: 'Apr', y: 137, color: '#4AB58E' },
          { label: 'May', y: 115, color: '#4AB58E' },
        ],
      },
      {
        type: 'column',
        columnSpacing: 0.5,
        columnWidth: 0.7,
        borderRadius: 50,
        dataPoints: [
          { label: 'Jan', y: 240, color: '#FFCF00' },
          { label: 'Feb', y: 250, color: '#FFCF00' },
          { label: 'Mar', y: 130, color: '#FFCF00' },
          { label: 'Apr', y: 100, color: '#FFCF00' },
          { label: 'May', y: 85, color: '#FFCF00' },
        ],
      },
    ],
    axisY: {
      lineThickness: -2, // ปรับความเข้มของเส้นด้านหลัง
      lineColor: '#FFFFFF',
      labelFontSize: 10,
      labelFormatter: function () {
        return '';
      },
    },
  };
}
