import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  ngOnInit(): void {
    // Add JavaScript to toggle the menu
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');

    if (menuToggle && menu) {
      menuToggle.addEventListener('click', () => {
        menu.classList.toggle('hidden');
      });
    }
  }
}
