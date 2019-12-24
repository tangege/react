import React, { Component, Suspense, lazy } from 'react'

const About = lazy(() => import('./About'));


export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: false
        }
    }
    loadClick = () => {
        this.setState({
            show: !this.state.show,
        })
    }
    loadAbout = () => {
        const { show } = this.state;
        if ( show ) {
            return (
                <Suspense fallback={<div>Loading</div>}>
                    <About />
                </Suspense>
            )
        }
        return null;
    }

    render() {
        return (
            <div>
                <button onClick={this.loadClick}>点击</button>
                {this.loadAbout()}
            </div>
        )
    }
}
