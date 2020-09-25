import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output('onRecipesClick') recipeClick = new EventEmitter<any>();
  @Output('onShoppingListClick') shoppingClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipesClick = () => {
    this.recipeClick.emit();
  }

  onShoppingListClick = () => {
    this.shoppingClick.emit();
  }

}
