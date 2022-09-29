import {
  Component,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnInit,
  DoCheck,
  OnDestroy
} from '@angular/core';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class productComponent implements OnInit, DoCheck, OnDestroy {
  @Input() product: Product;
  @Output() productCliked: EventEmitter<any>=new EventEmitter();
  today = new Date();
  constructor() {
    console.log('1. constructor')
}

  ngOnInit() {
    console.log('3. ngOnInit');
  }

  ngDoCheck() {
    console.log('4.ngDoCheck');
  }

 ngOnDestroy() {
  console.log('ngOnDestroy');
}

  addcart() {
    console.log('Añadir al carrito');
    this.productCliked.emit(this.product.id);
  }
}

