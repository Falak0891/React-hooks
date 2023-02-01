import { useEffect, useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
//CDM CDU
    useEffect(() =>{

        document.title = count

    },[] );


    return(
        <>
        <h1>Counter: {count} </h1>
        <button onClick={()=> setCount(count-1)}>Decrease</button>
        <button onClick={()=> setCount(count+1)}>Increase</button>
        </>
    )
}

export default Counter;