import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {

  str="Calculator";
  n1:number=0;
  n2:number=0;

  subtractionResult=0;

  constructor() { }

  ngOnInit(): void {
  }

  addValues():number
  {
    console.log('adding values');
    return this.n1+this.n2;
  }

  subtractValues()
  {
    this.subtractionResult=this.n1-this.n2;
  }

}
