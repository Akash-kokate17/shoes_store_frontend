import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdidasInterface } from '../model/adidas-interface';

@Injectable({
  providedIn: 'root',
})
export class AdidasService {
  constructor(private httpClient: HttpClient) {}

  fetchAdidasData = ():Observable<AdidasInterface[]> => {
   return this.httpClient.get<AdidasInterface[]>("http://localhost:5000/adidas/adidas-shoes")
  };
}
