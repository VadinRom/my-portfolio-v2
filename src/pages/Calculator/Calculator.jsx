import React, { Component } from "react";
import "./Calculator.css";
import { Button } from "./Components/Button";
import { Input } from "./Components/Input";
import { ClearButton } from "./Components/ClearButton";
import * as math from "mathjs";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ""
        };
    }

    addToInput = val => {
        if (isFinite(val) || isFinite(this.state.input.toString().slice(-1))) {
            this.setState({ input: this.state.input + val });
            if (this.state.input.toString().slice(0, 1) === '.' || this.state.input.toString().slice(0, 1) === '+' || this.state.input.toString().slice(0, 1) === '-') {
                this.setState({ input: this.state.input + val });
            }
            else if (!isFinite(this.state.input.toString().slice(0, 1))) {
                this.setState({ input: val })
            }
        }
    };

    handleEqual = () => {
        if (!isFinite(this.state.input.toString().slice(-1)) && (this.state.input.toString().slice(0, 1) === '*' || this.state.input.toString().slice(0, 1) === '/')) {
            this.setState({ input: math.evaluate(this.state.input.toString().slice(1, -1)) });
        } else if (!isFinite(this.state.input.toString().slice(-1))) {
            this.setState({ input: math.evaluate(this.state.input.toString().slice(0, -1)) });
        } else if (this.state.input.toString().slice(0, 1) === '*' || this.state.input.toString().slice(0, 1) === '/') {
            this.setState({ input: math.evaluate(this.state.input.toString().slice(1)) });
        } else {
            this.setState({ input: math.evaluate(this.state.input) });
        }

    };

    render() {
        return (
            <div style={{ marginTop: 50 }}>
                <div className="calc-wrapper">
                    <Input input={this.state.input} />
                    <div className="row">
                        <Button handleClick={this.addToInput}>7</Button>
                        <Button handleClick={this.addToInput}>8</Button>
                        <Button handleClick={this.addToInput}>9</Button>
                        <Button handleClick={this.addToInput}>/</Button>
                    </div>
                    <div className="row">
                        <Button handleClick={this.addToInput}>4</Button>
                        <Button handleClick={this.addToInput}>5</Button>
                        <Button handleClick={this.addToInput}>6</Button>
                        <Button handleClick={this.addToInput}>*</Button>
                    </div>
                    <div className="row">
                        <Button handleClick={this.addToInput}>1</Button>
                        <Button handleClick={this.addToInput}>2</Button>
                        <Button handleClick={this.addToInput}>3</Button>
                        <Button handleClick={this.addToInput}>+</Button>
                    </div>
                    <div className="row">
                        <Button handleClick={this.addToInput}>.</Button>
                        <Button handleClick={this.addToInput}>0</Button>
                        <Button handleClick={() => this.handleEqual()}>=</Button>
                        <Button handleClick={this.addToInput}>-</Button>
                    </div>
                    <div className="row">
                        <ClearButton handleClear={() => this.setState({ input: "" })}>
                            Clear
                        </ClearButton>
                        <ClearButton handleClear={() => this.setState({ input: this.state.input.toString().slice(0, -1) })}>
                            ←
                        </ClearButton>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;