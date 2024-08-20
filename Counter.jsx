import React ,{ useState } from "react";



function Counter (){
    
const [count, setCount] = useState(0);
const increement = () =>{
    setCount(count+1)
}
const decreement = () =>{
    setCount(count- 1)
}
const reset = () =>{
    setCount(0)
}
return(
    <div className="button">
        <p className="count-display">{count}</p>
<button className="buttonde" onClick={decreement}>Decreement</button>
<button className="buttonde" onClick={reset}>Reset</button>
<button className="buttonde" onClick={increement}>Increement</button>
    </div>
);
}
export default Counter