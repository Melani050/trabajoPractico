import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';//importamos la clase que vamos a usar.
import { ItemService } from '../../services/item.service';

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

  constructor(private itemsService: ItemService){}

  ngOnInit(): void {
    //difinimos nuestros datos
    //this.items = [];
    this.items = this.itemsService.getItems();
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