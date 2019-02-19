import { Injectable } from '@angular/core';
import { Kasboek} from '../models/Kasboek';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Deelnemer} from '../models/Deelnemer';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  readonly base_url = 'http://localhost:1234/api/';

  constructor(private httpClient: HttpClient) { }

  overview(): Observable<Kasboek[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const params = new HttpParams();

    return this.httpClient.get<Kasboek[]> (
      this.base_url + 'calculator',
      { headers: headers, params: params }
    ).pipe(

      map( kasboek  => {
        console.log(kasboek);
        return kasboek;
      }),

      // Request is fout gegaan
      catchError ( err => {
        console.log(err);
        return of(err);
      })
    );
  }

  calculate( deelnemers: Deelnemer[], event: string, info: string = '')
    : Observable<Kasboek> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'x-access-token' : token
    });

    const params = new HttpParams();
    const body = {
      "info": info,
      "event": event,
      "deelnemers": deelnemers
    };

    return this.httpClient.post<Kasboek> (
      this.base_url + 'calculator',
      body,
      { headers: headers, params: params }
      ).pipe(

        map( kasboek  => {
          console.log(kasboek);
          return kasboek;
        }),

        // Request is fout gegaan
        catchError ( err => {
          console.log(err);
          return of(err);
        })

      );
    }

}
