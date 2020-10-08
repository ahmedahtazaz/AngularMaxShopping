import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.modal';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  icSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnDestroy(): void {
    this.icSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();

    this.icSubscription = this.shoppingListService.ingredientsChanged.subscribe(
      ingredients => {
        this.ingredients = ingredients;
      }
    );
  }

}
