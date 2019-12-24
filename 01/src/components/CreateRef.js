import React, { Component } from 'react'

export default class CreateRef extends Component {
    constructor(props) {
        super(props);
        this.myInput = React.createRef();
    }
    getInputText = () => {
        console.log(this.myInput.current.value);
    }
    render() {
        return (
            <div>
                <input ref={this.myInput}/>
                <button onClick={this.getInputText}>获取input的值</button>
            </div>
        )
    }
}
