import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  products: Product[] = [
    {
      id: '1',
      image: '../assets/imagenes/accesorios1.png',
      title: 'Kit para dia',
      price: 150000,
      description: 'Gafas con filtro uv, aretes con piedras rojas, 2 pulseras,relog, pestañina y labial red01'
    },
    {
      id: '2',
      image: '../assets/imagenes/accesorios2.png',
      title: 'kit para tarde. ',
      price: 18000,
      description: 'Gafas para sol, aretes tipo candonga, anillo con pedra brillante,relog, labial cereza06, copa de vidrio '
    },
    {
      id: '3',
      image: '../assets/imagenes/accesorios3.png',
      title: 'kit Purple para noche.',
      price: 250000,
      description: 'Guantes de cuero purpura, conjunto de aretes, pulsera y manilla, relog, polvo y rubor compacto, locion pierre y bolsos de mano en cuero purpura.'
    },
    {
      id: '4',
      image: '../assets/imagenes/accesorios4.png',
      title: 'kit cita especial',
      price: 200000,
      description: 'zapatos tipo princesa, bolso cartier caramelo, bolsa de mano rosse, polvos compactos, pestañina y labial rosse01, locion CH'
    },
    {
      id: '5',
      image: '../assets/imagenes/accesorios5.png',
      title: 'kit noche de fiesta RED AND ROSSE',
      price: 300000,
      description: 'Cartera en cuero rossse,zapatos tipo princesa con plataforma rojos, garagantilla en perlas,bouquet de rosas para muñeca,2 labiales rosse06 y 09.'
    },
    {
      id: '6',
      image: '../assets/imagenes/maquillaje1.png',
      title: 'kit indispensable en casa',
      price: 210000,
      description: '2 juegos de sombras, 2 polvos compactos, rubor en perlas, 1 matizantes, 1 cortorno con 4 niveles de color, 6 labiales de diferen color, 3 lociones, 1 juego de brochas, un esmalte red.'
    },
    {
      id: '7',
      image: '../assets/imagenes/maquillaje3.png',
      title: 'kit de cartera',
      price: 80000,
      description: 'Base en polvo 05, corrector de ojos, base liquida,1 delineador de ojos, 1 cepillo de cejas,1 labial pink nude, 1 brillo labial.'
    },
    {
      id: '8',
      image: '../assets/imagenes/maquillaje4.png',
      title: 'kit adicional',
      price: 10000,
      description: '3 labiales,3esmaltes,1 juego de brochas.'
    },
    {

      id: '9',
      image: '../assets/imagenes/maquillaje5.png',
      title: 'kit inperdible',
      price: 80000,
      description: '1 polvo compacto,base liquida, 1 rubor, 2 esmaltes, 1 brocha para contorno1 1 splash de fresa1 1 cepillo.'
    },
  ];
  constructor() { }


  ngOnInit() { }

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }

}
