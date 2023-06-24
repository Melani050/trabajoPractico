import { Component,Input,OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{
  //este componente va a recibir un componente
  //va a recibir una propiedad item de tipo item.
  @Input() item: Item = new Item();

  constructor(){}

  ngOnInit(): void {

  }
}
