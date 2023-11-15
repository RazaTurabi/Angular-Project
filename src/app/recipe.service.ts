import { Injectable} from '@angular/core';
import { Observable,of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService{

  constructor() { }
  
 private Obs1$=of(12,12.3,"hello",true,[12,20,30],{name:"Raj"})

  private Obs2$=new Observable(
    observe=>{
    observe.next(10),
    observe.next([2,3,4]),
    observe.next("hello"),
    observe.complete()
  })
  private Obs3$=new Observable(
    observe=>{
    observe.next(10),
    observe.next("Something went wrong"),
    observe.next([2,3,4])
    observe.complete()
  })

  private Obs4$=new Observable(
    observe=>{
    observe.next(100),
    setTimeout(() => {
      observe.next(200)
    }, 4000);
    observe.next([300,400])
  })

  private Obs5$=of(2,30,22,5,60,1,15)


  getObs1() {
    return this.Obs1$
  }
  getObs2() {
    return this.Obs2$
  }
  getObs3() {
    return this.Obs3$
  }

  getObs4() {
    return this.Obs4$
  }

  getObs5() {
    return this.Obs5$
  }

  private cart_value=0
  private cart_value$=new Subject<number>()
  updated_cart_value() {
    this.cart_value++
    this.cart_value$.next(this.cart_value)
  }

  get_cart_value() {
    return this.cart_value$
  }

}
