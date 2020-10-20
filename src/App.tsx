import React, { Component } from 'react';
import './App.css';
import { KeysComponent } from './keys/Keys';
import { ResultComponent } from './result/Result';



class App extends Component<{}, { result: number }> {
  
  constructor(props: any) {
    super(props);
    this.state = {
      result: 0
    };
  }

  private onClick = (input: any) => {
    console.log("In App", input)    
    this.calculateResults(+input);
  };
  
  private calculateResults(input: number) {
    const newResult = this.state.result + input;
    this.updateResults(newResult);
  }

  private updateResults(input: number) {
    this.setState({result: input})
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
