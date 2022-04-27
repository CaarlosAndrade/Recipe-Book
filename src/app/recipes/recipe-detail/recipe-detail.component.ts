import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredient } from 'src/app/shered/ingredients.model';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeSelect: Recipe;
  id: number

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) {}

  
  ngOnInit(){
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];           
        this.recipeSelect = this.recipeService.getRecipe(this.id);
      }
    ) 
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

  onAddIgredientsShoppintList(){
    // this.recipeService.addIngredientsOnShoppingList(this.recipeSelect.ingredients);
  }



}
