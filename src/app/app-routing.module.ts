import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './components/items/items.component';
import { AdditemComponent } from './components/additem/additem.component';

const routes: Routes = [
  {
    //index tradicional
    path: '',
    //propiedad en la que hay que especificar el componente que queremos cargar
    component: ItemsComponent
  },
  {
    path:'add',
    component: AdditemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
