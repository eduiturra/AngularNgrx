import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { Action } from '@ngrx/store';

import { environment } from '../../environments/environment';

export interface ActionWithPayload<T> extends Action {
  payload: T;
}
/* export interface State {}

export const reducers: ActionReducerMap<State> = {

};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : []; */
