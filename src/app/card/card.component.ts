import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  recipes=[
    {
      recipe_name:"Chiken Biryani",
      from:"Taj Hotel",
      rating:5,
      ingredients:"Fresh coriander leaves torn a few Onions sliced 2 medium, Oil 3tbsp, Cinnamon 1 inch stick, Onions sliced 2 medium, Onions sliced 2 medium, Salt to taste ",     
      instructions:"Step1: Cut chicken in one inch pieces. Boil rice and set aside. Heat oil in a non-stick pan, add cinnamon, bay leaves, cloves, cumin seeds, green cardamoms and sauté for half a minute. Step2: Add half the fried brown onions. Add the boiled rice on top. Sprinkle garam masala powder, ginger strips, mint leaves and coriander leaves.",
      category:"non-veg",
      img:"./assets/images/chibir.jpg"
    },
    {
      recipe_name:"Veg Mayo Pasta",
      from:"Hotel Persian",
      rating:4.1,
      ingredients:"6 cup water, 2 cup penne pasta, 2 cup penne pasta, ½ tsp chilli flakes,½ tsp pepper, 3tsp Oil, Fresh coriander leaves torn a few",
      instructions:"Step1: firstly, in a large vessel boil 6 cup water along with ½tsp salt.Step1: Shred small pieces of boiled chicken in a bowl. Step2: Shred small pieces of boiled chicken in a bowl. Step3: Mix it thoroughly, Put them on slice, Step4: Put another slice on top of it and cut them into two, Step5: Serve with tomato ketchup or coriander chutney.without over cooking vegetables.",
      category:"veg",
      img:"./assets/images/vegpasta.jpg"
    },
    {
      recipe_name:"Spinach Stuffed Chiken",
      from:"lil uzi",
      rating:4.8,
      ingredients:"4 chicken breasts, 4 ounces cream cheese softened, 1 ½ cups chopped fresh spinach, Oil 3tbsp, Cinnamon 1 inch stick, Onions sliced 2 medium, Salt to taste ",
      instructions:"Step1: Cut chicken in one inch pieces. Boil rice and set aside. Heat oil in a non-stick pan, add cinnamon, bay leaves, cloves, cumin seeds, green cardamoms and sauté for half a minute. Step2: Add half the fried brown onions. Add the boiled rice on top. Sprinkle garam masala powder, ginger strips, mint leaves and coriander leaves, Preheat oven to 375 degrees.",
      category:"non-veg",
      img:"./assets/images/spinachstuffedchicken.jpg"
    },
    {
      recipe_name:"Beef Roti",
      from:"Cheff Grima Arora",
      rating:3.5,
      ingredients:"Fresh coriander leaves torn a few, Onions sliced 2 medium, Onions sliced 2 medium, Salt to taste",
      instructions:"Step1: Shred small pieces of boiled chicken in a bowl. Step2: Shred small pieces ofStep2: Shred small pieces of boiled chicken in a bowl, Step3: Mix it thoroughly, Put them on slice, Step4: Put another slice on top of it and cut them into two, Step5: Serve with tomato ketchup or coriander chutney, Serve with tomato ketchup or coriander chutney.",
      category:"both",
      img:"./assets/images/beefc.jpg"
    },
    {
      recipe_name:"Chiken Sandwich",
      from:"Cheff Josehp",
      rating:2.9,
      ingredients:"1 Cup chicken, boiled, 2 tsp mayonnaise, Basmati rice 1/2 tbsp, Oil 3tbsp, Cinnamon 1 inch stick, Onions sliced 2 medium, Onions sliced 2 medium, Salt to taste",
      instructions:"Step1: Shred small pieces of boiled chicken in a bowl. Step2: Shred small pieces of boiled chicken in a bowl. cut them into two, Step5: Serve with tomato ketchup or coriander chutney. Serve with tomato ketchup or coriander chutney.",
      category:"both",
      img:"./assets/images/sandwich.jpg"
    },
    {
      recipe_name:"palak paneer",
      from:"Sanjeev Kapoor",
      rating:4.5,
      ingredients:"500 gms Spinach, pureed, 15-16 Paneer cubes, 2 nos Black cardamom (crushed), 1 tbsp Cream, 1/2 cup Tomato pureed,Fresh coriander leaves torn a few.",
      instructions:"Step1: Heat oil in a pan and fry paneer c Put them on slice, Step2: Put another slice on top of it and cut them into two, Step3: Serve with tomato ketchup or coriander chutney. garlic and onion paste. Cook until it gets pinkish-brown in color.",
      category:"veg",
      img:"./assets/images/palakpaneer.jpg"
    }
    
  ]

  _recipe_name=""

  get recipe_name() {
    return this._recipe_name
  }

  set recipe_name(recipe:string) {
     this._recipe_name=recipe

     this.filter_recipes=
     this.recipes.filter(recipe=>recipe.recipe_name.includes(this._recipe_name))
  }

  filter_recipes=this.recipes
  filterrecipes(category:string) {
      if(category=="all") {
        this.filter_recipes=this.recipes
      }
      else{
          this.filter_recipes=
          this.recipes.filter(recipe=>recipe.category==(category))
      }
  }

  card_width="22"
  font_size="20px"
  card_border="2px dotted red"
  font_art={
    "font-family":"Lucida Sans",
    "color":"red",
    "background-color":"pink"
  }

  form_child(data:string) {
    console.log(data);
    
  }
  constructor(private recipeService:RecipeService) {}

  add_to_cart() {
    this.recipeService.updated_cart_value()
  }


}
