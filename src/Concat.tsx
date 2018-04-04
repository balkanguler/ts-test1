import * as React from 'react';
import AlphaEntry from './AlphaEntry';

interface State {
    count: number;
    input1: string;
    input2: string;
    output: string;
}

class Concat extends React.Component<{}, State> {

    buttonClicked = () => {
      this.setState({output: this.state.input1 + ' ' + this.state.input2});
    }

    handleChange1(e: React.ChangeEvent<HTMLInputElement>): void {
      this.setState({input1: e.target.value});
    }

    handleChange2(e: React.ChangeEvent<HTMLInputElement>): void {
      this.setState({input2: e.target.value});
    }

    handleChange3(e: React.ChangeEvent<HTMLInputElement>): void {
      this.setState({output: e.target.value});
    }

    constructor() {
      super({});
      this.handleChange1 = this.handleChange1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleChange3 = this.handleChange3.bind(this);
      this.state = { count: 0, input1: '', input2: '', output: '' };
    }

    render() {
      return (
        <div>
          <div>
              <AlphaEntry value={this.state.input1} onChange={this.handleChange1}/>
              <AlphaEntry value={this.state.input2} onChange={this.handleChange2}/>
              <AlphaEntry value={this.state.output} onChange={this.handleChange3}/>
          </div>
          <div>
            <button onClick={this.buttonClicked}>
                Increment {name}
            </button>
         </div>
        </div>
      );
    }
  }

export default Concat;
