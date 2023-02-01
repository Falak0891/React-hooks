import React, { useEffect, useState } from "react";
import "../style.css"

export default function Input(){
    const [name,setName] = useState("Tony");
    const [lastName,setLastname] = useState("Stark");
    const [width,setWidth] =  useState(window.innerWidth)
    
    useEffect(()=>{
        document.title = name+" "+lastName;
    },[name])

    useEffect(() => {
        const handleChange =() => setWidth(window.innerWidth);
        window.addEventListener("resize", handleChange);
        return(()=> {window.removeEventListener("resize", handleChange)})
    })

    return(
        <>
        <div className="section">
            <Row label="Name">
                    <input className="input"
                           value={name} 
                           onChange={(e)=> setName(e.target.value)}/>
            </Row >
            <Row label="Last Name">
                    <input className="input"
                           value={lastName} 
                           onChange={(e)=> setLastname(e.target.value)}/>
            </Row >
            {/* <Row label="Window Width">
                     {width}
                </Row > */}
        </div>

        <h2>Hello, {name + " " +lastName}</h2>
        
        </>
        )
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
