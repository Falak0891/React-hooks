import React from "react";

export default class CounterwithClass extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }        
    }
    
    handleDec = () => this.setState({count: this.state.count-1 });
    handleInc = () => this.setState({count: this.state.count+1 });

    componentDidMount(){
        document.title = "Counter is: "+this.state.count;
        
    }

    componentDidUpdate(){
        document.title = "Counter is: "+this.state.count;
        
    }

    render(){
        return(
            <>
                <h1>Counter Using Class: {this.state.count}</h1>
                <button onClick={this.handleDec}>Decrease</button>
                <button onClick={this.handleInc}>Increase</button>
            </>
            
        )
    }
}