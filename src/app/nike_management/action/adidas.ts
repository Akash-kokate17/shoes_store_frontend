import { createAction, props } from '@ngrx/store';
import { AdidasInterface } from '../../model/adidas-interface';

export const fetch_adidas_action = createAction(
  '[adidas/adidas-shoes] fetch adidas data'
);

export const fetch_adidas_action_successfully = createAction(
  '[/adidas/adidas-shoes] adidas products successfully',
  props<{ payload: AdidasInterface[] }>()
);

export const fetch_adidas_action_failed = createAction(
  '[adidas/adidas-shoes] failed to fetch',
  props<{error:String}>()
);
