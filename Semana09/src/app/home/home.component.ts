import { Component, OnInit } from '@angular/core';
import { CatFactsService, Fact } from '../shared/service/cat-facts.service'

let facts: Array<Fact>;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private apiURL = "http://cataas.com";
  text = "";
  imagemURL = "";
  
  constructor(private catFactService: CatFactsService) {}
  
  ngOnInit(): void {
    this.catFactService.pegarFacts().subscribe((data: Array<Fact>) => {
      facts = data;
      const i = Math.floor(Math.random() * facts.length);
      this.text = data[i].text;
    });
    this.imagem();
  }
   
  imagem() {
    this.imagemURL = `${this.apiURL}/cat`;
  }

  gif() {
    this.imagemURL = `${this.apiURL}/cat/gif`;
    
  }
}
