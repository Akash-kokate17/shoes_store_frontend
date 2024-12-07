import { createAction, props } from '@ngrx/store';
import { NikeInterface } from '../../model/nike-interface';

export const fetchNikeProducts = createAction(
  '[nike_products] fetch nike products'
);

export const fetchNikeProductsSuccess = createAction(
  '[nikeProducts_api] fetch products successfully',
  props<{payload:NikeInterface[]}>()
);

export const fetchNikeProductsFailure = createAction(
  '[nikeProducts_api] fetch products unSuccessfully',
  props<{error:any}>()
)
