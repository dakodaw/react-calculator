import React, { Component } from 'react';
import './App.css';
import { KeysComponent } from './keys/Keys';
import { ResultComponent } from './result/Result';

class App extends Component<{}, { result: number }> {
  
  private lastUsedOperator: string = "";

  private firstNumberString: string = "";
  private lastNumberString: string = "";
  private equalsPressedLast: boolean = false;


  constructor(props: any) {
    super(props);
    this.state = {
      result: 0
    };
  }

  public onClick = (input: any) => {
    if(input === "=")  {
      this.equalAction()
    } else if(input === "clear") {
      this.resetMemory();
    } else if(isNaN(input)) {
      this.operandAction(input)
    } else {
      this.saveNumberInput(input);
    }
  };

  private equalAction() {
    this.firstNumberString = this.onlyCalculateResults(+this.firstNumberString, +this.lastNumberString, this.lastUsedOperator).toString();
    this.updateResults(+this.firstNumberString);
    this.equalsPressedLast = true;
  }

  private operandAction(operator: string) {
    if(!this.equalsPressedLast) {
      this.firstNumberString = this.onlyCalculateResults(+this.firstNumberString, +this.lastNumberString, this.lastUsedOperator).toString();
      this.updateResults(+this.firstNumberString);
    }
    this.lastNumberString = "";
    this.lastUsedOperator = operator;
    this.equalsPressedLast = false;
  }

  private onlyCalculateResults(operand1: number, operand2: number, operator: string): number {
    if(operator === "+") {
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
    this.updateResults(0);
  }

  private updateResults(input: number) {
    this.setState({result: input});
  }

  render() {
    return (
      <div className="App">
        <h1>Simple React Calculator</h1>
        <ResultComponent result={this.state.result} ></ResultComponent>
        <KeysComponent onClick={this.onClick}></KeysComponent>
      </div>
    );
  }
}

export default App;
