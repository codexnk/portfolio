import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../pages/header/header.component'; // adjust the path
import { FooterComponent } from '../../pages/footer/footer.component'; // if needed
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
