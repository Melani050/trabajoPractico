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
  total: number = 0;

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

   this.getTotal();
  }

  deleteItem(item: Item){
    //filter va devolver los elementos que tengan un id diferente al que esta recibiendo
    this.items = this.items.filter( x => x.id != item.id);
    this.getTotal();
  }

  toggleItem(item: Item){
    this.getTotal();
  }

  //funcion para modificar la variables total
  getTotal(){
    this.total = this.items
                .filter(item => !item.completed)
                .map(item => item.quantity * item.price)
                //acc => acumulador, para sumar los items
                .reduce(( acc, item) => acc += item, 0); 
  }

}