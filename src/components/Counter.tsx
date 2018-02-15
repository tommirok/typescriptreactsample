import * as React from "react";
export interface  CounterProps{
  initialValue?: number;

}

export interface CounterState {
  currentValue: number;

}

let initialState: CounterState = {
  currentValue: 0
}

export class Counter extends React.Component<CounterProps, CounterState>{
  increment = () =>{
    this.setState({
      currentValue: this.state.currentValue +1
    })
  }
  decrement = () =>{
    console.log(this.state.currentValue)
    this.setState({

      currentValue: this.state.currentValue-1
    })
  }
  componentWillMount() {
          console.log("Counter.componentWillMount");

          if (this.props.initialValue !== undefined) {
              console.log("Counter.InitialValue annettu");
              this.setState({
                  currentValue: this.props.initialValue
              });
          }
          else {
              console.log("Counter.InitialValue ei annettu");
              this.setState(initialState);
          }
      }
  render(){
    return(
      <div>
      <p>{this.state.currentValue}</p>
        <button onClick={this.increment}>
        Increment
        </button>
        <button onClick={this.decrement}>
        Decrement
        </button>
      </div>
    )
  }
}
