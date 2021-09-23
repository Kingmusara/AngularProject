import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories:Category[]=[
    { categoryId:1,categoryName:"Beverages"} ,
    { categoryId:2,categoryName:"Condiments"},
    { categoryId:3,categoryName:"Confections"} ,
    { categoryId:4,categoryName:"Dairy Products"} ,
    { categoryId:5,categoryName:"Grains/Cereals"} ,
    { categoryId:6,categoryName:"Meat/Poultry"} ,
    { categoryId:7,categoryName:"Produce"} ,
    { categoryId:8,categoryName:"Seafood"}
  ]

  currentCategory:Category

  constructor() { }

  ngOnInit(): void {

  }

  
  setCurrentCategory(cat : Category){
      this.currentCategory = cat
  }

  // getCurrentCategoryClass( category : Category){
  //   if(category == this.currentCategory){
  //       return "list-group-item active"
  //   }else {
  //     return "list-gruop-item"
  //   }
  // }




}
