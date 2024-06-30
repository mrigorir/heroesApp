import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environments';
import { Observable, catchError, of } from 'rxjs';
import { HeroElement } from '../interfaces/hero.interface';

@Injectable({ providedIn: 'root' })
export class HeroesService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<HeroElement[]> {
    return this.http.get<HeroElement[]>(`${this.baseUrl}/heroes`);
  }

  getHeroById(id: string): Observable<HeroElement | undefined> {
    return this.http
      .get<HeroElement>(`${this.baseUrl}/heroes/${id}`)
      .pipe(catchError((error) => of(undefined)));
  }

  getSuggestions(query: string):Observable<HeroElement[]> {
    return this.http.get<HeroElement[]>(`${this.baseUrl}/heroes?q=${query}&_limit=6`)
  }
}
