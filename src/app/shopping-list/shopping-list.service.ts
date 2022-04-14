import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shered/ingredients.model";


@Injectable({providedIn: 'root'})
export class ShoppingListService{

    // criamos um emissor de eventos para quando for adionado um novo ingredinete
   ingredienrtsChanged = new EventEmitter<Ingredient[]>();

   private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
        new Ingredient('Cebola', 10)
      ];

      getShoppingList(){
          // o slice passa apenas uma cópia do array para não mexer no original 
          return this.ingredients.slice();
      }

      addNewIngredient(ingredient: Ingredient){
        this.ingredients.push(new Ingredient(ingredient.name,ingredient.amount))
        // quando ele foi adicionado, o evento é emitido passando uma nova cópia da lista de ingredientes atualizada
        this.ingredienrtsChanged.emit(this.ingredients.slice());
      }
}