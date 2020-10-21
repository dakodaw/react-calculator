import React, { Component } from 'react';
import './App.css';
import { KeysComponent } from './keys/Keys';
import { ResultComponent } from './result/Result';

class App extends Component<{}, { result: number }> {
  
  private lastUsedOperator: string = "";

  private firstNumberString: string = "";
  private lastNumberString: string = "";


  // private operands: number[] = [];

  constructor(props: any) {
    super(props);
    this.state = {
      result: 0
    };
  }

  //After clicking equals, then clicking another operator, it should not perform the previous action again like it would with the equals sign

  public onClick = (input: any) => {
    if(input === "=")  {
      this.equalAction()
    } else if(input === "clear") {
      this.resetMemory();
    } else if(isNaN(input)) {
      this.operandAction(input)
    } else {
      console.log("saving number")
      this.saveNumberInput(input);
    }
    console.log("first number: ", this.firstNumberString, "last number", this.lastNumberString, "operator", this.lastUsedOperator)
  };

  private equalAction() {
    this.firstNumberString = this.onlyCalculateResults(+this.firstNumberString, +this.lastNumberString, this.lastUsedOperator).toString();
    this.updateResults(+this.firstNumberString);
  }

  private operandAction(operator: string) {
    console.log("operand Action", operator, this.firstNumberString, this.lastNumberString);
    this.firstNumberString = this.onlyCalculateResults(+this.firstNumberString, +this.lastNumberString, this.lastUsedOperator).toString();
    this.updateResults(+this.firstNumberString);
    this.lastNumberString = "";
    this.lastUsedOperator = operator;
  }

  private onlyCalculateResults(operand1: number, operand2: number, operator: string): number {
    if(operator === "+") {
      console.log("add "+ operand1 + " with " + operand2 + "=" + (operand1+operand2))
      return operand1 + operand2;
    } else if(operator === "-") {
      return operand1 - operand2;
    }
    return operand1;
  }
  
  private saveNumberInput(input: string) {
    if(!this.lastUsedOperator) {
      this.firstNumberString += input;
      this.updateResults(+this.firstNumberString);
    } else {
      this.lastNumberString += input;
      this.updateResults(+this.lastNumberString)
    }
  }

  private resetMemory() {
    this.lastNumberString = "";
    this.firstNumberString = "";
    this.lastUsedOperator = "";
    // this.resetOperands(0);
    this.updateResults(0);
  }

  // private resetOperands(newResult: number) {
  //   this.operands = [];
  //   this.operands.push(newResult);
  // }

  private updateResults(input: number) {
    this.setState({result: input});
  }

  render() {
    return (
      <div className="App">
        <h1>My Calculator</h1>
        <ResultComponent result={this.state.result} ></ResultComponent>
        <KeysComponent onClick={this.onClick}></KeysComponent>
      </div>
    );
  }
}

export default App;
