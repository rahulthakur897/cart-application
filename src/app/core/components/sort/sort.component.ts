import { Component, EventEmitter, Output } from '@angular/core';
import {ProductService} from '../../shared/services/product/product.service';
@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent{

  @Output() sortItem = new EventEmitter<{name:string, orderBy:boolean}>();

  constructor(private prodService:ProductService) { }

  ngOnInit() {
  }

  sortFilter(name:string, orderBy:boolean) {
    this.sortItem.emit({name, orderBy});
  }
  
  openModal(){
    this.prodService.setModal('Sort');
  }

  activeSortLabel(event){
    let elements = document.querySelectorAll(".sort-filter");
    elements.forEach(function(elem) {
      elem.classList.remove("active-filter");
    });
    event.target.classList.add("active-filter");
  }
}
