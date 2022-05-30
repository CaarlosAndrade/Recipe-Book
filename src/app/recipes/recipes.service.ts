import { Injectable } from '@angular/core';
import { Ingredient } from '../shered/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  constructor(private shoppingListService: ShoppingListService) {}

  // a lista de receitas foi privada para que não possa ser acessada diretamente;
  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'a simply test desc',
      'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80',
      [new Ingredient('Banana', 1), new Ingredient('Leite', 2)]
    ),
    new Recipe(
      'A test recipe 2',
      'a simply test desc 2',
      'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80',
      [new Ingredient('Carne', 1), new Ingredient('Frango', 2)]
    ),
  ];

  getRecipes() {
    // retorna uma cópia da lista para ser exibida, assim a original não é alterada
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    // faz apenas uma copia do  array
    return this.recipes[index];
  }

  addIngredientsOnShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addNewIngredients(ingredients);
  }
}
