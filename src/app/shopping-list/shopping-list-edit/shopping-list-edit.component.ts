import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.modal';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput') ingredientName: ElementRef;
  @ViewChild('amountInput') ingredientAmount: any;

  @Output('onAddIngredient') addIngredient = new EventEmitter<Ingredient>();
  @Output('onDeleteIngredient') deleteIngredient = new EventEmitter<any>();
  @Output('onClearIngredients') clearIngredients = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddingredient = () => {
    this.addIngredient.emit(new Ingredient(this.ingredientName.nativeElement.value, this.ingredientAmount.nativeElement.value));
  }

  onDeleteingredient = () => {
    this.deleteIngredient.emit();
  }

  onClearIngredients = () => {
    this.clearIngredients.emit();
  }

}
