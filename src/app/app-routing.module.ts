import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './invlk/items/items.component';
import { DummyComponent } from './invk/dummy/dummy.component';

const routes: Routes = [
  {path: 'items' , component: ItemsComponent },
  {path: 'dummy' , component: DummyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
