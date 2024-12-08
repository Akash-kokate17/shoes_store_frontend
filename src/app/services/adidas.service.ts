import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdidasInterface } from '../model/adidas-interface';
import { apiBaseUrl } from '../../../backendUrl';

@Injectable({
  providedIn: 'root',
})
export class AdidasService {
  constructor(private httpClient: HttpClient) {}

  fetchAdidasData = ():Observable<AdidasInterface[]> => {
   return this.httpClient.get<AdidasInterface[]>(`${apiBaseUrl}/adidas/adidas-shoes`)
  };
}



