import { Component, VERSION } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'loans-ui';
  name = 'Angular ' + VERSION.major;
  navbarCollapsed = true;

  toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }
}
