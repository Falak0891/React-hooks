import React from "react";
import "./style.css"

export default class Input extends React.Component{
    constructor(){
        super();
        this.state = {
            name:"Tony",
            lastName: "Stark",
            width: window.innerWidth
        }
    }

    handleNameChange = (e) =>{
        this.setState({
            name: e.target.value
        })
    }

    handleLastnameChange = (e) =>{
        this.setState({
            lastName: e.target.value
        })
    }

    changeWidth =() => {
        this.setState({
            width: window.innerWidth
        })
    }

    componentDidMount(){
        document.title = this.state.name+" "+this.state.lastName;
        window.addEventListener("resize", this.changeWidth)
        console.log(this.state.width)
    }

    componentDidUpdate(){
        document.title = this.state.name+" "+this.state.lastName;
        
    }
    
    componentWillUnmount(){
        window.removeEventListener("resize", this.changeWidth)

    }

    render(){
        return(
            <>
            <div className ="section">
                <Row label="Name">
                     <input value={this.state.name} onChange={this.handleNameChange}/>
                </Row >
                <Row label="Last Name">
                     <input value={this.state.lastName} onChange={this.handleLastnameChange}/>
                </Row >
                <Row label="Window Width">
                     {this.state.width}
                </Row >
            </div>

            <h2>Hello, {this.state.name + " " +this.state.lastName}</h2>
            </>
        )
    }
}

function Row(props){
    const{label} = props;
    return(
        <>
        <lable>{label}<br/></lable>
        {props.children}
        <hr />
        </>
    )
}