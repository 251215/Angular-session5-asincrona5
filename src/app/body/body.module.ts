import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperacioneComponent } from './operacione/operacione.component';



@NgModule({
  declarations: [
    OperacioneComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    OperacioneComponent
  ]
})
export class BodyModule { }
