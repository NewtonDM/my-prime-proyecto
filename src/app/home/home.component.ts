import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router) {
  }

  navigateToPruebas() {
    this.router.navigate(['/pruebas']);
  }

  onFormSubmitted(data: string) {
    console.log('recibí el dato desde el padre', data)
  }

}
