
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

    async buttonClicked() {

        try {

            let data1 = await this.proxyCall(this.state.input1, this.state.input2);
            global.console.log(data1);

            this.handleResponse(data1.toString());
        } catch (e) {
            // handle error
        }
    }

    async proxyCall(var1: string, var2: string ): Promise<string> {
        let r =  await fetch('http://localhost:8080/concats', {
            method: 'POST',
            body: 'firstname=' + var1  + '&lastname=' + var2,
            headers: {
                'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
        });

        return r.text();
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
        this.buttonClicked = this.buttonClicked.bind(this);

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
                        Concat1 {name}
                </button>
                <Label value={this.state.output}/>
                </div>
            </div>
        );
    }
}

export default Concat;
