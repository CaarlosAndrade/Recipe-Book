import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shered/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) { }

  /// Boa pratica colocar todas as inicalizações no onInit  
  ngOnInit(){
    this.ingredients = this.shoppingListService.getShoppingList();

    // recebendo a atualização da lista de ingredientes atrvés de um evento.
    this.shoppingListService.ingredienrtsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }

 

}
