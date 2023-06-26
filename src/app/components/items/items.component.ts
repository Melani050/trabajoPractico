import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';//importamos la clase que vamos a usar.

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  /***
   * Al definir variables hay que inicializarlas.
   * Como este objeto no existe hay que crear un modelo de datos.
   */
  items: Item[] = [];

  constructor(){}

  ngOnInit(): void {
    //difinimos nuestros datos
    this.items = [
      {
        id: 0,
        title: 'manzana',
        price: 20,
        quantity: 6,
        completed: false
      },
      {
        id: 1,
        title: 'pan',
        price: 40,
        quantity: 2,
        completed: true
      },
      {
        id: 2,
        title: 'campera',
        price: 2000,
        quantity: 2,
        completed: false
      }
    ];
  }
}
