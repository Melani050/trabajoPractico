import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items: Item[]=[
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
  
  constructor() { }

  getItems(){

    return this.items;
  }

  addItem(item: Item){
    this.items.unshift(item);
  }
}
