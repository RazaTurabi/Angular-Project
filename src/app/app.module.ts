import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { RatingComponent } from './rating/rating.component';
import { FormsModule } from '@angular/forms';
import { RecipeService } from './recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
