import { createReducer, on } from '@ngrx/store';
import { fetchNikeProductsSuccess } from '../action/nikeAction';

export const initialState = [];
export const nikeReducer = createReducer(
  initialState,
  on(fetchNikeProductsSuccess, (state, action: any) => {
    return action.payload;
  })
);
