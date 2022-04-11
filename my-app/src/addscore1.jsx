import React from "react";

function buttonpress(){
    const [count, setCount] = useState(0);
    const addscore1 = () => {
        setCount(count + 1);
    }
    const addscore4 = () => {
        setCount(count + 4);
    }
    const addscore6 = () => {
        setCount(count+6);
    }
    return(
        <>
        <h1 style={{color:"white"}}>{count}</h1>
            <button onClick={()=>addscore1()}>Add</button>
            <button onClick={()=>addscore4()}>Decrease</button>
            <button onClick={()=>addscore6()}>Double</button>
        </>
    );

}

export default addscore1;