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

  //doCalculation method that defines the operand to be used
  private doCalculation(op , secondOp){
    switch (op){
      case '+':
      return this.firstOperand += secondOp; 
      case '-': 
      return this.firstOperand -= secondOp; 
      case '*': 
      return this.firstOperand *= secondOp; 
      case '/': 
      return this.firstOperand /= secondOp; 
      case '=':
      return secondOp;
    }
  }

  //define the method that will put it all together
  public getOperation(op: string){
    console.log(op);

    if(this.firstOperand === null){
      this.firstOperand = Number(this.currentNumber);

    }else if(this.operator){
      const result = this.doCalculation(this.operator , Number(this.currentNumber))
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    this.operator = op;
    this.waitForSecondNumber = true;

    console.log(this.firstOperand);

  }
//clear method for the c button

public clear(){
  this.currentNumber = '0';
  this.firstOperand = null;
  this.operator = null;
  this.waitForSecondNumber = false;
}

}
