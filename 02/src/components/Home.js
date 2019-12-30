import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            inputValue: "",
        }
        this.input = React.createRef()
    }

    update = (e) => {
        this.setState((prevState, props) => {
            return {
                name: this.input.current.value,
            }
        })
    }

    componentDidMount() {
        this.input.current.focus();
    }
    inputFn = (e) => {
        this.setState({
            inputValue: e.target.value,
        })
    }
    render() {
        return (
            <div>
                <input ref={this.input} placeholder="请输入。。。"/>
                <button onClick={this.update}>更新</button>
                <div>{this.state.name}</div>
                {
                
                    React.Children.map(this.props.children, (item, index) => {
                        return (
                        <div key={index}>{item}</div>
                        )
                    })
                }
                <input defaultValue={this.state.inputValue} onInput={this.inputFn}/>
                {this.state.inputValue}
            </div>
        )
    }
}
