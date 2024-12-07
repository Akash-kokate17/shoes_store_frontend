import { Injectable } from '@angular/core';
import { NikeService } from '../../services/nike.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  fetchNikeProducts,
  fetchNikeProductsSuccess,
  fetchNikeProductsFailure,
} from '../action/nikeAction';
import { exhaustMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { NikeInterface } from '../../model/nike-interface';

@Injectable()
export class NikeEffects {
  fetchNikeProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchNikeProducts),
      tap(() => console.log('fetchNikeProducts action dispatched')),
      exhaustMap(() =>
        this.nikeService.fetchNikeProducts().pipe(
          map((products: NikeInterface[]) =>
          ({type: '[nikeProducts_api] fetch products successfully',payload:products})
          ),
          catchError((error: any) => {
            console.log('error');
            return of(fetchNikeProductsFailure({ error }));
          })
        )
      )
    );
  });

  constructor(public actions$: Actions, private nikeService: NikeService) {}
}
