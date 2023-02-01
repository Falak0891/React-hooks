// 4. Remove a note
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
       

        setBlogs([{title,content}, ...blogs]);
        setTitle("");
        setContent("");
        console.log("Blogs: ",blogs)
    }

    function removeBlog(i){

       setBlogs( blogs.filter((blog,index)=> index != i));

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

                    <div className="blog-btn">
                        <button
                        onClick={() => {
                            removeBlog(i)
                        }}
                        className="btn remove"
                        >
                        Delete
                        </button>
                    </div>
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
