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
        
        this.toggleScrolling(); 
      });
    }
  }

  private isScrollingEnabled = true;

  private toggleScrolling() {
    if (this.isScrollingEnabled) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    this.isScrollingEnabled = !this.isScrollingEnabled;
  }
}
