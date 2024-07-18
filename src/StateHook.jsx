import { useState } from "react";
import { Button } from "react-bootstrap";
const StateHook=()=>{
    const [color, setColor]= useState("red");
    const [userColor, setUserColor]=useState("");
    return(
    <>
        <div className="container m-5"></div>
        <input placeholder="Enter your color" className="form-group" onChange={(e)=>setUserColor(e.target.value)}/>
        <Button variant="danger" onClick={()=>setColor(userColor)}>Change</Button>
        <div>I have {color} color ball</div>
    </>
    );
    
};

export default StateHook;