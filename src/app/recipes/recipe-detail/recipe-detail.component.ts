import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from 'src/app/shered/ingredients.model';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeSelect: Recipe; 

  constructor(private recipeService: RecipeService) {}
  
  ngOnInit(){
    
  }

  onAddIgredientsShoppintList(){
    this.recipeService.addIngredientsOnShoppingList(this.recipeSelect.ingredients);
  }



}
