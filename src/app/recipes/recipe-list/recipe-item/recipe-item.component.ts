import { Component, Input, OnInit, Output, EventEmitter, } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() SelectRecipe = new EventEmitter<void>(); // não passa nenhum valor

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(){
    this.SelectRecipe.emit(); // emite sem valor nenhum, apenas um evento
  }

}
