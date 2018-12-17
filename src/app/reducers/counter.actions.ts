import { Action } from '@ngrx/store';
import { TestModel } from '../test-model';

export enum ActionTypes {
  Increment = '[Counter Component] Increment',
  Decrement = '[Counter Component] Decrement',
  Reset = '[Counter Component] Reset',
  SetNumber = '[Counter Component] Set Number',
}
export class Increment implements Action {
  readonly type = ActionTypes.Increment;
}

export class Decrement implements Action {
  readonly type = ActionTypes.Decrement;
}

export class Reset implements Action {
  readonly type = ActionTypes.Reset;
}
export class SetNumber implements Action {
    readonly type = ActionTypes.SetNumber;
    constructor(public payload: TestModel) {}
  }

export type CounterAction =  Increment | Decrement | Reset | SetNumber ;
