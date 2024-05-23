import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cat } from '../models/types';
import { Observable, catchError, forkJoin, map, of, zip } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatApiService {
  baseUrl = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) {}

  getRandomCat(): Observable<Cat> {
    const id = this.getRandomInt();

    return this.getCat(id);
  }

  getCat(id?: number): Observable<Cat> {
    return this.http.get<Cat>(this.baseUrl + `/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  getnRandomCats(n: number = 4): Observable<Cat[]> {
    const ids = Array.from({ length: n }, (_, i) => {
      return this.getRandomInt();
    });

    const catObservables = ids.map((id) =>
      this.getCat(id).pipe(
        catchError((error) => {
          console.error('Error getting cat', error);
          return of(null);
        })
      )
    );

    return forkJoin(catObservables).pipe(
      map((cats) => cats.filter((cat) => !!cat))
    ) as Observable<Cat[]>; // This is a workaround for the forkJoin typing issue
  }

  getRandomInt(): number {
    return Math.floor(Math.random() * 100) + 1;
  }
}
