import { createReducer, on } from "@ngrx/store";
import { fetchPumaProductsSuccess } from "../action/pumaAction";
import { PumaInterface } from "../../model/puma-interface";

export const initialStatePuma:PumaInterface[] = []
export const pumaReducer = createReducer(
  initialStatePuma,
  on(fetchPumaProductsSuccess,((state,action:any)=>{
  return action.payload;
  }))
)