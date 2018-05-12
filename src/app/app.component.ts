import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public isCollapsed = true;

  toggleMenu() {
    console.log('coming');
     this.isCollapsed = !this.isCollapsed;
   }
}
