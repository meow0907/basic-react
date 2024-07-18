// import { useState } from "react";
// import { Button } from "react-bootstrap";
// const StateHook=()=>{
//     const [color, setColor]= useState("red");
//     const [userColor, setUserColor]=useState("");
//     return(
//     <>
//         <div className="container m-5"></div>
//         <input placeholder="Enter your color" className="form-group" onChange={(e)=>setUserColor(e.target.value)}/>
//         <Button variant="danger" onClick={()=>setColor(userColor)}>Change</Button>
//         <div>I have {color} color ball</div>
//     </>
//     );
    
// };

// export default StateHook;


import { useState } from "react";

const StateHook=()=>{
    const [contactForm,setContactForm]=useState({
        name:"",
        gender:"",
        message:"",
        age:0,
    });

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log({contactForm});
    }
    return(
        <div>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input placeholder="Enter name"
                onChange={(e)=>setContactForm((prev)=>{
                    return{...prev,name:e.target.value};
                })}/>

                <select className="form-select" 
                onChange={(e)=>setContactForm((prev)=>{
                    return{...prev,gender:e.target.value};
                })}
                >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                

                <input placeholder="Enter message"
                onChange={(e)=>setContactForm((prev)=>{
                    return{...prev,message:e.target.value};
                })}/>


                <input placeholder="Enter age"
                onChange={(e)=>setContactForm((prev)=>{
                    return{...prev,Number:e.target.value};
                })}/>

                
            </form>
        </div>
    )
};

export default StateHook;