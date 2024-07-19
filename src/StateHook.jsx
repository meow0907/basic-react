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

import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';

const StateHook = () => {
    const [contactForm, setContactForm] = useState({
        name: "",
        gender: "",
        message: "",
        age: 0,
    });
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ contactForm });
    };

    return (
        <div className="container m-5">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Enter name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        onChange={(e) => setContactForm((prev) => {
                            return { ...prev, name: e.target.value };
                        })}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGender">
                    <Form.Label>Select gender</Form.Label>
                    <Form.Select
                        onChange={(e) => setContactForm((prev) => {
                            return { ...prev, gender: e.target.value };
                        })}
                    >
                        <option value="">Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>Enter message</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter message"
                        onChange={(e) => setContactForm((prev) => {
                            return { ...prev, message: e.target.value };
                        })}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Label>Enter age</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter age"
                        onChange={(e) => setContactForm((prev) => {
                            return { ...prev, age: Number(e.target.value) };
                        })}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    );
};

export default StateHook;
