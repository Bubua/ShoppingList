import { Component, OnInit } from '@angular/core';

import { Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[]= [
    new Ingredient('Pasta',10),
    new Ingredient('Ziemniaki',50),
    new Ingredient('Pizza',1)
  ];
  constructor() { }

  ngOnInit() {
  }

}
