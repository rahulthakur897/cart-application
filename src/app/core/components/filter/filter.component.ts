import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  minValue: number = 10;
  maxValue: number = 1000;
  options: Options = {
    floor: 10,
    ceil: 1000
  };
  @Output() sortItem = new EventEmitter<{minPrice:number, maxPrice:number}>();

  constructor() { }

  ngOnInit() {
  }

  getMinValue(minValue){
    this.minValue = minValue;
  }

  getMaxValue(maxValue){
    this.maxValue = maxValue;
  }

  sortFilter(minPrice:number, maxPrice:number) {
    this.sortItem.emit({minPrice, maxPrice});
  }
}