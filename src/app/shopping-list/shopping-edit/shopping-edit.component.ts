import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shered/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppinplistService: ShoppingListService) {}

  ngOnInit(): void {}

  onAddItem(form: NgForm) {
    // recuoerando os valores do formulario
    const value = form.value;
    // atribuindo os valores dos campos de input para um novo ingredient
    const ingredient = new Ingredient(value.name, value.amount);
    this.shoppinplistService.addNewIngredient(ingredient);
  }
}
