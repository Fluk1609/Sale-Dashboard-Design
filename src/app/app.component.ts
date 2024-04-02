import { Component } from '@angular/core';import { MapsModule } from '@syncfusion/ej2-angular-maps';

import { RouterOutlet } from '@angular/router';
import { PageHeaderComponent } from './page-header/page-header.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MapsModule, RouterOutlet, PageHeaderComponent, SideNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'sale-dashboard';
}
