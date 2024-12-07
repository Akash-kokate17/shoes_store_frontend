import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PumaInterface } from '../model/puma-interface';

@Injectable({
  providedIn: 'root',
})
export class PumaService {
  constructor(private httpClient: HttpClient) {}

  fetchPumaProducts = (): Observable<PumaInterface[]> => {
    return this.httpClient.get<PumaInterface[]>(
      'http://localhost:5000/puma/puma_shoes'
    );
  };
}
