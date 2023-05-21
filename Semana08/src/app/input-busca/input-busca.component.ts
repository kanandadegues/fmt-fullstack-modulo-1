import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'input-busca',
  templateUrl: './input-busca.component.html',
  styleUrls: ['./input-busca.component.scss']
})
export class InputBuscaComponent {

  @Output() buscar: EventEmitter<any> = new EventEmitter();

  funcaoBuscar(event: any){
    this.buscar.emit(event);
  }
}
