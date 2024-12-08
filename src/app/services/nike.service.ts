import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NikeInterface } from '../model/nike-interface';
import { Observable } from 'rxjs';
import { apiBaseUrl } from '../../../backendUrl';
@Injectable({
  providedIn: 'root'
})
export class NikeService {

  constructor(private httpClient : HttpClient) { }
  fetchNikeProducts = (): Observable<NikeInterface[]> => {
    return this.httpClient.get<NikeInterface[]>(`${apiBaseUrl}/nike/nike-shoes`); 
  }
}
