import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
// import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { counterReducer } from './reducers/counter.reducer';
import { Pagin1Component } from './pagin1/pagin1.component';
@NgModule({
  declarations: [
    AppComponent,
    Pagin1Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // StoreModule.forRoot(reducers, { metaReducers }),
    StoreModule.forRoot({ count: counterReducer }),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
