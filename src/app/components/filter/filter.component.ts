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
  @Output() sortItem = new EventEmitter<{min:number, max:number}>();

  constructor() { }

  ngOnInit() {
  }

  getMinValue(minValue){
    this.minValue = minValue;
  }

  getMaxValue(maxValue){
    this.maxValue = maxValue;
  }

  sortFilter(min:number, max:number) {
    this.sortItem.emit({min, max});
  }
}