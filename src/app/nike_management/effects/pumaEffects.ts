import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PumaService } from '../../services/puma.service';
import { fetchPumaProducts, fetchPumaProductsFail } from '../action/pumaAction';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { PumaInterface } from '../../model/puma-interface';

@Injectable()
export class pumaEffects {
  constructor(private actions$: Actions, private pumaService: PumaService) {}
  fetchPumaProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchPumaProducts),
      exhaustMap(() =>
        this.pumaService.fetchPumaProducts().pipe(
          map((products: PumaInterface[]) => {
            return {
              type: '[puma/puma_shoes] fetch puma shoes successful',
              payload: products,
            };
          }),
          catchError((error: string) => {
            console.log(
              error,
              'getting error to fetch puma product in effects'
            );
            return of(fetchPumaProductsFail({ error }));
          })
        )
      )
    );
  });
}
