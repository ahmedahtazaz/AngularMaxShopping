import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.modal';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5), new Ingredient('Tomato', 10)
  ];

  ingredientsChanged = new Subject<Ingredient[]>();
  
  constructor() { }

  getIngredients = () => this.ingredients.slice();

  addIngredient = ingredient => {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.getIngredients());
  }

  deleteIngredient = (id: number) => {
    this.ingredients.splice(id, 1);
  }

  clearIngredients = () => {
    this.ingredients.length = 0;
    this.ingredientsChanged.next(this.getIngredients());
  }

  addIngredients = (ingredients: Ingredient[]) => {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.getIngredients());
  }
}
