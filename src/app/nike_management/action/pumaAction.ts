import { createAction, props } from '@ngrx/store';
import { PumaInterface } from '../../model/puma-interface';

export const fetchPumaProducts = createAction(
  '[puma/puma_shoes] fetch puma shoes'
);

export const fetchPumaProductsSuccess = createAction(
  '[puma/puma_shoes] fetch puma shoes successful',
  props<{ payload: PumaInterface[] }>()
);

export const fetchPumaProductsFail = createAction(
  '[puma/puma_shoes] failed to fetch puma products',
  props<{error:string}>()
);
