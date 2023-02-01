// 1. Add title & content as a state
import React, { useEffect, useState } from "react";
import "../style.css"

export default function Blog(){
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
   // const [width,setWidth] =  useState(window.innerWidth)
    
    useEffect(()=>{
        document.title = title;
    },[title]);

    function handleSubmit(e){
        e.preventDefault();
    }

    return(
        <>
        <h1>Write a Blog!</h1>
        <div className="section">
            <form onSubmit={handleSubmit}>
            <Row label="Title">
                    <input className="input"
                           value={title} 
                           onChange={(e)=> setTitle(e.target.value)}/>
            </Row >
            <Row label="Content">
                    <textarea className="input content"
                           value={content} 
                           onChange={(e)=> setContent(e.target.value)}/>
            </Row >
            
                <button className = "btn">ADD</button>
            </form>
                     
        </div>

        <hr/>

        <h2> Blogs </h2>
        
        </>
        )
    }


function Row(props){
    const{label} = props;
    return(
        <>
        <label>{label}<br/></label>
        {props.children}
        <hr />
        </>
    )
}
