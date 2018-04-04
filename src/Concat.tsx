import * as React from 'react';
import AlphaEntry from './AlphaEntry';
import Label from './Label';

interface State {
    count: number;
    input1: string;
    input2: string;
    output: string;
}

class Concat extends React.Component<{}, State> {

    buttonClicked = () => {

      fetch('http://localhost:8080/concats', {
        method: 'POST',
        body: 'firstname=' + this.state.input1 + '&lastname=' + this.state.input2,
        headers: {
          'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
          },
      }).then(r => {
        return r.text();
      }).then(data => {
        global.console.log(data);
        this.handleResponse(data.toString());
      });
    }

    handleResponse(value: string) {

      this.setState({output: value});
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
      this.handleResponse = this.handleResponse.bind(this);
      
      this.state = { count: 0, input1: '', input2: '', output: '' };
    }

    render() {
      return (
        <div>
          <div>
              <AlphaEntry value={this.state.input1} onChange={this.handleChange1}/>
              <AlphaEntry value={this.state.input2} onChange={this.handleChange2}/>
          </div>
          <div>
            <button onClick={this.buttonClicked}>
                Increment {name}
            </button>
            <Label value={this.state.output}/>
         </div>
        </div>
      );
    }
  }

export default Concat;
