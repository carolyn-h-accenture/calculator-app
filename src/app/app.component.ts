import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator-app';

  currentNumber = '0';
  firstOperand = null;
  operator = null;
  waitForSecondNumber = false;

  //getNumber equation to get the current number
  public getNumber(v:string) {
    console.log(v);
    if(this.waitForSecondNumber) {
      this.currentNumber = v;
      this.waitForSecondNumber = false;
    } else {
      this.currentNumber === '0'? this.currentNumber = v: this.currentNumber += v;
    }
  }
}
