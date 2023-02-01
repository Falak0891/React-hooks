// 2. Blogs maintained as an array to be handled in state
import React, { useEffect, useState } from "react";
import "../style.css"

export default function Blog(){
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    const [blogs,setBlogs] =  useState([]);
    
    useEffect(()=>{
        document.title = title;
    },[title]);

    function handleSubmit(e){
        e.preventDefault();
        // 3. Blogs state can be handled using the same array
    // techniques we have followed until now
        setBlogs([{title,content}, ...blogs]);
        setTitle("");
        setContent("");
        console.log("Blogs: ",blogs)
    }

    return(
        <>
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
        
            {blogs.map((blog,i)=> (
                <div className="blog" key = {i}>
                    <h3>{blog.title}</h3>
                    <hr/>
                    <p>{blog.content}</p>
                </div>
            ))}

        
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
