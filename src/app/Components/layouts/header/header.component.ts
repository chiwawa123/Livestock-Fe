import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private route: Router) {}

  get() {
    return localStorage.getItem('user');
  }
  remove() {
    console.log('yasvika');
    
    localStorage.removeItem('user');
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.remove();
    this.route.navigateByUrl('/login');
  }
}
