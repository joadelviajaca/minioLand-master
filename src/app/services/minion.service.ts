import { Injectable } from '@angular/core';
import { Minion } from '../interfaces/minion';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MinionService {
  minions: Minion[] = [];

  private url: string = 'http://localhost:3000/minions/'
  constructor(private http: HttpClient) {
    console.log('Servicio iniciado')
  }

  getMinions(): Observable<Minion[]> {
    return this.http.get<Minion[]>(this.url);
  }

  getMinion(id: number): Observable<Minion> {
    return this.http.get<Minion>(`${this.url}${id}`) 
  }


  //  getFilterMinions(term: string): Minion[]{
  //   return this.minions.filter(minion => minion.name.toLowerCase().includes(term.toLowerCase()));
  //  }
}
