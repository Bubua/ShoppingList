import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test','https://media3.giphy.com/avatars/100soft/WahNEDdlGjRZ.gif'),
    new Recipe('A Test Recipe 2','This is simply a test 2','https://media.giphy.com/media/l2R0aKwejYr8ycKAg/giphy.gif'),
  ];
   
  constructor() { }

  ngOnInit() {
  }

}
