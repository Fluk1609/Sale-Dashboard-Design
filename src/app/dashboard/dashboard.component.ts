import { Component } from '@angular/core';
import { TodaySaleComponent } from '../today-sale/today-sale.component';
import { TotalRevenueComponent } from '../total-revenue/total-revenue.component';
import { VisitorComponent } from '../visitor/visitor.component';
import { CustomerSatisfactionComponent } from '../customer-satisfaction/customer-satisfaction.component';
import { TargetComponent } from '../target/target.component';
import { TopProductComponent } from '../top-product/top-product.component';
import { MapCountryComponent } from '../map-country/map-country.component';
import { ServiceLevelComponent } from './../service-level/service-level.component';

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [
    TodaySaleComponent,
    TotalRevenueComponent,
    VisitorComponent,
    CustomerSatisfactionComponent,
    TargetComponent,
    TopProductComponent,
    MapCountryComponent,
    ServiceLevelComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
