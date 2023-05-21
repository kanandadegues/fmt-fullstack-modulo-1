import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export type Fact = {
  user: string;
  text: string;
}

@Injectable({
  providedIn: 'root'
})

export class CatFactsService {
  private apiURL = 'https://cat-fact.herokuapp.com/'
  
  constructor( private http: HttpClient) { }

  pegarFacts() {
    return this.http.get<Array<Fact>>(`${this.apiURL}/facts`, {
      responseType: "json",
    })
  }
}
