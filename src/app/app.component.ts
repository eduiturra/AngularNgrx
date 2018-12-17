import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Increment, Decrement, Reset } from './reducers/counter.actions';
import { Observable } from 'rxjs';
import { TestModel } from './test-model';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  count$: Observable<TestModel>;

  constructor(private store: Store<TestModel>) {
    this.count$ = store.pipe(select('count'));
  }

  increment() {
    this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }

  reset() {
    this.store.dispatch(new Reset());
  }
}


