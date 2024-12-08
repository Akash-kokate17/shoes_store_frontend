import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PumaInterface } from '../model/puma-interface';
import { apiBaseUrl } from '../../../backendUrl';

@Injectable({
  providedIn: 'root',
})
export class PumaService {
  constructor(private httpClient: HttpClient) {}

  fetchPumaProducts = (): Observable<PumaInterface[]> => {
    return this.httpClient.get<PumaInterface[]>(
      `${apiBaseUrl}/puma/puma_shoes`
    );
  };
}
