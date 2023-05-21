import { Component, Input } from '@angular/core';

@Component({
  selector: 'item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})

export class ItemCardComponent{

  @Input() nome = "";
  @Input() imagem = "";
  @Input() nomeAtor = "";
  @Input() descricao = "";
  
  
  constructor() {}
  
  }

