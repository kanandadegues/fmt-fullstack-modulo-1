import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  personagem: any = {
    nome: "Joel Miller",
    imagem: "https://guiadeseries.com/wp-content/uploads/2023/02/joel-the-last-of-us-1.jpg",
    nomeAtor: "Pedro Pascal",
    descricao: "Jose Pedro Balmaceda Pascal é um ator chileno-americano. Ficou conhecido internacionalmente no papel de Oberyn Martell na quarta temporada da série Game of Thrones da HBO, Javier Peña na série Narcos da Netflix, o Mandaloriano na primeira série The Mandalorian do Disney+ e Joel Miller na série The Last of Us da HBO.",
  } 
  

  textoInserido(event: any){
    console.log(event.target.value);
  }
}
