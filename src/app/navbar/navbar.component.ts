import { Component, OnInit } from '@angular/core';
import { filter, Subscription } from 'rxjs';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  

  constructor(private recipeService:RecipeService)
   {}

   cart_value:number=0

  ngOnInit(): void {
    //Subscribing Obs 1
    this.recipeService.getObs1().subscribe(
      val=>console.log(val),
      er => console.log(er),
      () => console.log("Observation of Observer 1 is complete")
      
      )

       //Subscribing Obs 2
    this.recipeService.getObs2().subscribe(
      val=>console.log(val),
      er => console.log(er),
      () => console.log("Observation of Observer 2 is complete")
      
      )

          //Subscribing Obs 3
    this.recipeService.getObs3().subscribe(
      val=>console.log(val),
      er => console.log(er),
      () => console.log("Observation of Observer 3 is complete")
      
      )

           //Subscribing Obs 4
    this.recipeService.getObs4().subscribe(
      val=>console.log(val),
      er => console.log(er),
      () => console.log("Observation of Observer 4 is complete")
      )
          
        //sub Obs5 using Operator
        this.recipeService.getObs5().pipe(filter(x=>x>10),filter(y=>y%2==0))
        .subscribe(fitered_numbers=>console.log(fitered_numbers))


           //get updated cart value 
           this.recipeService.get_cart_value().subscribe(val=>this.cart_value=val)

       }


       private is_subscribed!:Subscription
       unsubscribe_obs4() {
        if(this.is_subscribed){
          this.is_subscribed.unsubscribe()
          console.log("Obs4 is Unsubscribe");
          
        }


  }





}
