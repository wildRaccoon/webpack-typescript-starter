import 'reflect-metadata';
import { StoreModule, Store, ActionsSubject, StateObservable } from "@ngrx/store";
import { ReflectiveInjector, Provider } from "@angular/core";

//actions
import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');

//reducer
import { createReducer, on } from '@ngrx/store';
//import { increment, decrement, reset } from './counter.actions';

export const initialState = 0;

export const counterReducer = createReducer(initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => 0),
);

//module
var storeModule = StoreModule.forRoot({ count: counterReducer });
var providers$:Provider[] = [];

//providers$.push({ provide:ActionsSubject, useClass:ActionsSubject, deps:[] });

if(storeModule.providers)
{
    storeModule.providers.forEach(element => {
       providers$.push(element); 
    });
}


var injector = ReflectiveInjector.resolveAndCreate(providers$);

// var injector = Injector.create({
//     providers:providers$
// });

var store$ = <Store<{ count: number }>>injector.get(Store);

if(store$)
{
    console.log("store$");
}

store$.subscribe((x => console.log(x.count)));

store$.dispatch(increment());
store$.dispatch(increment());
store$.dispatch(increment());
store$.dispatch(increment());
store$.dispatch(decrement());
store$.dispatch(decrement());
store$.dispatch(decrement());
store$.dispatch(reset());