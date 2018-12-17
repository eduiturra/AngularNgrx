import { Action } from '@ngrx/store';
import * as fromCounter from './counter.actions';
import { ActionWithPayload } from '.';
import { TestModel } from '../test-model';

export interface TestState {
  amount: number;
}
export const initial = {
  amount: 2
};

export function counterReducer(state = initial,  action: fromCounter.CounterAction): TestState {
  switch (action.type) {
    case fromCounter.ActionTypes.Increment:
     state.amount++;
     return state;

    case fromCounter.ActionTypes.Decrement:
      state.amount--;
      return state;

    case fromCounter.ActionTypes.Reset:
      state.amount = 0;
      return state;
    case fromCounter.ActionTypes.SetNumber:
      return action.payload;
    default:
      return state;
  }
}
