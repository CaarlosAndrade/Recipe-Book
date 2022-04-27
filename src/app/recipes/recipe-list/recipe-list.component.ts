import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];
 
  @Output() SelectRecipe = new EventEmitter<Recipe>();
 
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }
  
  ngOnInit(){
    this.recipes = this.recipeService.getRecipes();
  }

  onSelectRecipe(recipe: Recipe){
    this.SelectRecipe.emit(recipe);
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }

}
