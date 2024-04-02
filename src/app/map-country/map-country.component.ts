import { Component } from '@angular/core';
import * as worldMapData from './worldMap.json';
import { MapsModule } from '@syncfusion/ej2-angular-maps';

@Component({
  selector: 'map-country',
  standalone: true,
  imports: [MapsModule],
  templateUrl: './map-country.component.html',
  styleUrl: './map-country.component.scss',
})
export class MapCountryComponent {
  public legendOptions: object = {
    visible: true,
  };

  public layerOptions: object[] = [
    {
      dataLabelSettings: {
        visible: true,
        smartLabelMode: 'Trim',
      },
      tooltipSettings: {
        visible: true,
        valuePath: 'Country',
      },
      shapeData: worldMapData,
      shapePropertyPath: 'name',
      shapeDataPath: 'Country',
      shapeSettings: {
        colorValuePath: 'Membership',
        colorMapping: [
          { value: 'Uni', color: '#FFA800' },
          { value: 'Bra', color: '#F64E60' },
          { value: 'Chi', color: '#8950FC' },
          { value: 'Indo', color: '#0BB783' },
          { value: 'Sau', color: '#00AB9A' },
          { value: 'Congo', color: '#6993FF' },
        ],
        fill: '#E5E5E5',
      },
      dataSource: [
        { Country: 'China', Membership: 'Chi' },
        { Country: 'United States', Membership: 'Uni' },
        { Country: 'Brazil', Membership: 'Bra' },
        { Country: 'Indonesia', Membership: 'Indo' },
        { Country: 'Saudi Arabia', Membership: 'Sau' },
        { Country: 'Dem. Rep. Congo', Membership: 'Congo' },
      ],
    },
  ];
}
