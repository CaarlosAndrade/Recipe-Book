import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(){
    
  }
}
