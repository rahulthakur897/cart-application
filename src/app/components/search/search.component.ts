import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchString: String;

  constructor() { }

  ngOnInit() {
  }

  searchProduct(){
  	console.log(this.searchString);
  }

}
