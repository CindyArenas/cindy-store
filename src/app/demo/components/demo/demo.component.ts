import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  title = 'cindy-store';
  items = ['miguel', 'cindy', 'juliana', 'melanny'];
  objeto = {};
  power = 10;

  ngOnInit() {

  }

 addItem() {
   this.items.push('nuevo item')
  }
  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
