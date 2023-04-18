import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage{
  public products = [
    { name: 'Jabon Ariel', price: 20, type: 'Abarrotes' },
    { name: 'Fabuloso', price: 30, type: 'Limpieza' },
    { name: 'Jamon 250g', price: 400, type: 'Embutidos' },
  ];

  public filterProducts = [...this.products];

  constructor() {}

  getColor(type: string): string {
    switch (type) {
      case 'Abarrotes':
        return 'primary';
      case 'Limpieza':
        return 'success';
      case 'Mascotas':
        return 'warning';
      default:
        return 'primary';
    }
  }

  onSearchChange(event: any) {
    this.filterProducts = this.products.filter((product) =>
      product.type.toLowerCase().startsWith(event.detail.value.toLowerCase())
    );
  }
}

