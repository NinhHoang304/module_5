import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result = undefined;

  mess: string;

  constructor() {
  }

  ngOnInit(): void {
  }


  sum(firstNumber: string, secondNumber: string) {
    this.result = parseInt(firstNumber, 10) + parseInt(secondNumber, 10);
  }

  sub(firstNumber: string, secondNumber: string) {
    this.result = parseInt(firstNumber, 10) - parseInt(secondNumber, 10);
  }

  multi(firstNumber: string, secondNumber: string) {
    this.result = parseInt(firstNumber, 10) * parseInt(secondNumber, 10);
  }

  division(firstNumber: string, secondNumber: string) {
    if (parseInt(secondNumber, 10) === 0) {
      this.mess = 'Phép chia không được chia cho 0';
    } else {
      this.result = parseInt(firstNumber, 10) / parseInt(secondNumber, 10);
    }
  }
}
