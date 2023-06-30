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

  //inyectamos la variable
  constructor(private itemService: ItemService){}

  ngOnInit(): void {
    //difinimos nuestros datos
    //this.items = [];
    //cuando se inicialice poder acceder a los elementos que estan en el service
    this.itemService.getItems().subscribe(data => {

      this.items = data;
      this.getTotal();
    })
   
  }

  //para eliminar un item
  deleteItem(item: Item){
    //filter va devolver los elementos que tengan un id diferente al que esta recibiendo
    this.items = this.items.filter( x => x.id != item.id);
    this.itemService.deleteItem(item).subscribe();
    this.getTotal();

  }

  //actualizar items
  toggleItem(item: Item){
    this.itemService.toggleItem(item).subscribe();
    this.getTotal();

  }

  //funcion para modificar la variables total
  getTotal(){
    this.total = this.items
                .filter(item => !item.completed)
                .map(item => item.quantity * item.price)
                //acc => acumulador, para sumar los items
                .reduce(( acc, item) => acc += item, 0);
                
                console.log(this.total);
  }

}