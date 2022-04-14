import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: 'recipes.component.html',
  styleUrls: ['recipes.component.css'],
  // permite que todos os componentes abaixo dele recebam a mesma intancia do Servico 
  // (não passa para componetes pai)
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  recipeSelect: Recipe;

  constructor(private recipeService: RecipeService) { }

  // Quando o componente inicializar a receita selecionada é atribuida
  ngOnInit(){
    
    // o subscribe funciona como um ouvinte informando sobre cada mundança
     this.recipeService.recipeSelected.subscribe(
       
       // recebendo os dados da receita que está vindo através do evento, 
       //e atribuindo ela a variavel do componente
       (recipe: Recipe) => {
         this.recipeSelect = recipe;
       }
     )
  }


}
