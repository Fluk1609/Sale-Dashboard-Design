import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'side-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {
  items: { icon: string; title: string; link: string }[] = [
    { icon: 'pie_chart', title: 'Dashboard', link: 'dashboard' },
    { icon: 'bar_chart', title: 'Leaderboard', link: 'Leaderboard' },
    { icon: 'shopping_cart', title: 'Order', link: 'Order' },
    { icon: 'local_mall', title: 'Products', link: 'Products' },
    { icon: 'show_chart', title: 'Sales Report', link: 'Sales Report' },
    { icon: 'sms', title: 'Message', link: 'Message' },
    { icon: 'settings', title: 'Settings', link: 'Settings' },
    { icon: 'move_item', title: 'Sign Out', link: 'Sign Out' },
  ];
}
