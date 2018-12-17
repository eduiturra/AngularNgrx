import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TestModel } from '../test-model';

@Component({
  selector: 'app-pagin1',
  templateUrl: './pagin1.component.html',
  styleUrls: ['./pagin1.component.css']
})
export class Pagin1Component implements OnInit {
  count$: Observable<TestModel>;
  constructor(private store: Store<TestModel>) {
    this.count$ = store.pipe(select('count'));
  }

  ngOnInit() {
  }

}
