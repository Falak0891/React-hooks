// 1. Combination of componentDidMount and componentDidUpdate
  // Runs on mount and then every upadate
  // useEffect(() => {
  //   console.log("Running useEffect");
  // });

  
import React, { useEffect, useState, useRef } from "react";
import "../style.css"

export default function Blog(){
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    const [blogs,setBlogs] =  useState([]);
    
    const ref = useRef(null);
    
    useEffect(()=>{
        document.title = title;
    },[title]);

    function handleSubmit(e){
        e.preventDefault();
       
        setBlogs([{title,content}, ...blogs]);
        setTitle("");
        setContent("");
        console.log(ref.current)
        //ref.current.focus();
        console.log("Blogs: ",blogs);

    }

    function removeBlog(i){

       setBlogs( blogs.filter((blog,index)=> index != i));

    }

    // 3. Just runs on mount because it has no dependency
  // Focus in Title input on mount
  // the returned clean up method acts as WillUnmount

    useEffect(() => {
        ref.current.focus();
    },[title]);

    useEffect(() => {
        // 2. Required to add Title of the latest note as page's title
        // Show Dependency Injection of blogs
        // Helps us avoid rerun logic on title and content change
        // Still has both DidMount and DidUpdate feature
        
        console.log("Runs on Blogs Mount/Update!!");
        if (blogs.length) {
          let { title } = blogs[0];
          document.title = title;
        } else {
          document.title = "No blogs!";
        }
        //localStorage.setItem("blogs", JSON.stringify(blogs));
    
        // can be used to clean up for previous side effect of blogs
        return () => {
          console.log("Runs before effect runs after each update");
        };
      }, [blogs]);

    return(
        <>
        <div className="section">
            <form onSubmit={handleSubmit}>
            <Row label="Title">
                    <input className="input"
                           ref={ref}
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
        <label>{label}<br/></label>
        {props.children}
        <hr />
        </>
    )
}
