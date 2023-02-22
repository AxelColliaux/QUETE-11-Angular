import { Injectable } from '@angular/core';
import { Cocktail } from './model/cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() {}

  cocktails: Cocktail[] = [
    new Cocktail("Mojithos", 12, "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg"),
    new Cocktail("Moscow Mule", 12, "https://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg")
  ];
  
  getCocktails(): Cocktail[]{
    return this.cocktails;
  }

}
