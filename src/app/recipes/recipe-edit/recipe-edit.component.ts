import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode = false;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        // captura e converte o ID para numero
        this.id = +params['id']
        // atribui verdadeiro ou falso com base na existencia do ID na rota
        this.editMode = params['id'] != null
        console.log(this.editMode)
      }
    )
    
  }

}
