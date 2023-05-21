import { Component } from '@angular/core';
import { propriedade } from '../app/component/card/card.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showModal = false;
  page: string = "Home";
  cards: propriedade[] = [
    {
       url: "https://artworks.thetvdb.com/banners/v4/series/416580/posters/63ed102e2ae2f.jpg",
       description:"Em 1977, a banda Daisy Jones & The Six saiu da obscuridade e alcançou o estraelato. Mas o grupo acabou abruptamente, deixando os fãs desolados. Décadas depois, os integrantes finalmente concordam em abrir o jogo e revelar a verdade."
     },
     {
       url: "https://artworks.thetvdb.com/banners/v4/series/392256/posters/6362e8b41ca10.jpg",
       description:"Vinte anos após a queda da civilização, Joel é contratado para tirar Ellie de uma zona de quarentena perigosa. O que começa como um pequeno trabalho, logo se transforma em uma jornada brutal pela sobrevivencia."
     },
     {
       url: "https://artworks.thetvdb.com/banners/series/368122/posters/5ec73b00f1d61.jpg",
       description:"Conta a história de uma família que lida com a acusação de que seu filho de 14 anos pode ser um assassino. No entanto, a série acompanha as evidências de um crime que apontam para o garoto e o que seu pai fará para protegê-lo, o quanto a família está disposta a continuar junta diante dessa problemática."
     },
     {
       url: "https://artworks.thetvdb.com/banners/v4/series/399959/posters/60d5e4a9214e7.jpg",
       description:"Segue a história de três desconhecidos que partilham uma obsessão por crimes reais e que se veem, de repente, envolvidos em um crime ao investigarem a misteriosa morte de um vizinho do prédio deles em Nova Iorque"
     },
     {
       url: "https://artworks.thetvdb.com/banners/posters/210171-8.jpg",
       description:"Conta a história do assassinato de uma jovem em Seattle e a investigação sobre ele. Três historias diferentes são contadas a partir de um homicidio e envolve os detetives que estão designados para o caso, o luto da familia da vitima e os suspeitos."
     }
   ]
}
