import { createReducer, on } from '@ngrx/store';
import { AdidasInterface } from '../../model/adidas-interface';
import { fetch_adidas_action_successfully } from '../action/adidas';

export const initialState_adidas: AdidasInterface[] = [];
export const adidas_reducer = createReducer(
    initialState_adidas,
    on(fetch_adidas_action_successfully,(state:any,action:any)=>{
        return action.payload;
    })
);
