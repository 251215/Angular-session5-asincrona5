import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-operacione',
  templateUrl: './operacione.component.html',
  styleUrls: ['./operacione.component.css']
})
export class OperacioneComponent {
resultado:number=0;
operacion(num1: string, num2: string, operador:String){
  if(operador=='+'){
    this.resultado= Number(num1) + Number(num2);
  } else if(operador=="-"){
    this.resultado= Number(num1) - Number(num2);
  } else if(operador=="*"){
    this.resultado= Number(num1) * Number(num2);
  } else{
    this.resultado= Number(num1)/Number(num2);
  }
}
}
