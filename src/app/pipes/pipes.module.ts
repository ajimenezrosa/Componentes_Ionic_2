import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPipe } from './filtro.pipe';



@NgModule({
  declarations: [
    FiltroPipe,
    FiltroPipe
  ],
  imports: [
    CommonModule,
    FiltroPipe
  ]
})
export class PipesModule { }
