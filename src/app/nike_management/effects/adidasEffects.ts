import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AdidasService } from '../../services/adidas.service';
import {
  fetch_adidas_action,
  fetch_adidas_action_failed,
} from '../action/adidas';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class adidasEffect {
  constructor(public actions$: Actions, private adidasService: AdidasService) {}

  fetchAdidasEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetch_adidas_action),
      exhaustMap(() =>
        this.adidasService
          .fetchAdidasData()
          .pipe(
            map((products: any) => ({
              type: '[/adidas/adidas-shoes] adidas products successfully',
              payload: products,
            })),
            catchError((error:string)=>{
              console.log("something went wrong to fetch adidas data in adidas effects",error);
              return of(fetch_adidas_action_failed({error}))
            })
          )
      )
    );
  });
}
