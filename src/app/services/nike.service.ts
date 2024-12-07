import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NikeInterface } from '../model/nike-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NikeService {

  constructor(private httpClient : HttpClient) { }
  fetchNikeProducts = (): Observable<NikeInterface[]> => {
    return this.httpClient.get<NikeInterface[]>('http://localhost:5000/nike/nike-shoes'); 
  }
}
