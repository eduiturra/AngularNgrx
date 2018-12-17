import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ActionWithPayload } from './reducers';
import { ActionTypes, SetNumber } from './reducers/counter.actions';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { TestModel } from './test-model';

@Injectable()
export class AppEffects {
  @Effect()
  loadTest$: Observable<Action> = this.actions$.pipe(
    ofType(ActionTypes.Reset),
    switchMap(() => {
      return this.http.get<string>('https://jsonplaceholder.typicode.com/todos/2')
        .pipe(
          map((userName) => {
            return new SetNumber(new TestModel(2));
          })
        );
    })
  );
  constructor(private http: HttpClient, private actions$: Actions) {}
}
