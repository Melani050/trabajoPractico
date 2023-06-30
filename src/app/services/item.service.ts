import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

//va a estar disponible en todo el root
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url:string ='http://localhost:3001/items';
  httpOptions={
    headers:{
      'Content-Type': 'application/json'
    }
  }
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

  constructor(private http: HttpClient) { }

  //metodo para regresar el arreglo incial 
  //  OBTENER
  getItems(): Observable<Item[]>{
    //return this.items;
    //funciones observables
    return this.http.get<Item[]>(this.url);
  }

  //  AÑADIR
  addItem(item: Item):Observable<Item>{
    //this.items.unshift(item);

    return this.http.post<Item>(this.url, item, this.httpOptions);
  }

  // ACTUALIZAR
  toggleItem(item:Item):Observable<Item>{
    return this.http.put<Item>(this.url + item.id, item, this.httpOptions);
  }

  //  ELIMINAR
  deleteItem(item:Item):Observable<Item>{
    return this.http.delete<Item>(this.url + item.id);
  }
}
