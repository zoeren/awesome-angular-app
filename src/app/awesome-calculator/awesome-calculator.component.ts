import { Component, OnInit } from '@angular/core';

import { AwesomeCalculator } from 'node-awesome-example-package';

@Component({
  selector: 'app-awesome-calculator',
  templateUrl: './awesome-calculator.component.html',
  styleUrls: ['./awesome-calculator.component.scss']
})
export class AwesomeCalculatorComponent implements OnInit {
  expression: string;
  result: number;

  constructor() { }

  ngOnInit() {
  }

  go() {
    this.result = AwesomeCalculator.calculate(this.expression);
  }
}
