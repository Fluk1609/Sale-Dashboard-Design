import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'top-product',
  standalone: true,
  imports: [MatTableModule, MatProgressBarModule, CommonModule],
  templateUrl: './top-product.component.html',
  styleUrl: './top-product.component.scss',
})
export class TopProductComponent {
  displayedColumns: string[] = ['position', 'name', 'Popularity', 'symbol'];
  dataSource: PeriodicElement[] = [
    { position: '01', name: 'Home Decor Range', Popularity: 45, symbol: '45%' },
    {
      position: '02',
      name: 'Disney Princess Pink Bag 18',
      Popularity: 29,
      symbol: '29%',
    },
    {
      position: '03',
      name: 'Bathroom Essentials',
      Popularity: 18,
      symbol: '18%',
    },
    {
      position: '04',
      name: 'Apple Smartwatches',
      Popularity: 85,
      symbol: '85%',
    },
  ];

  getColor(popularity: number): string {
    if (popularity === 45) {
      return 'primary'; // สีเขียวสำหรับความนิยมสูง
    } else if (popularity === 29) {
      return 'accent'; // สีเหลืองสำหรับความนิยมปานกลาง
    } else if (popularity === 18) {
      return 'warn'; // สีแดงสำหรับความนิยมต่ำ
    } else {
      return 'warn'; // สีแดงสำหรับความนิยมต่ำ
    }
  }
}

interface PeriodicElement {
  name: string;
  position: string;
  Popularity: number;
  symbol: string;
}
