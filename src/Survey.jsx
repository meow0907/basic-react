

import React, {useState} from 'react';
import { Button, Form } from 'react-bootstrap';
const Survey=()=>{

    const [age, setAge] = useState('');
    const [birthDate, setBirthDate]= useState('');
    const [selectedDrinks, setSelectedDrinks] = useState('');

    const submitForm=(e)=>{
        e.preventDefault();
        //const age = document.getElementById("age").value;
        console.log("Form submitted with age:", age);
        
        // const selectedDrinks = [];
        // const checkboxes = document.querySelectorAll('input[name="drink"]:checked');
        // checkboxes.forEach((checkbox) => {
        //     selectedDrinks.push(checkbox.value);

        // });

        console.log("Form submitted with selected drinks:", selectedDrinks.join(", "));

       // const birthDate = document.getElementById("birthDate").value;
        console.log("Form submitted with birth date:", birthDate);
        };
    
    const handleSliderInput=(e)=>{
        //document.getElementById("age").value = e.target.value;
        setAge(e.target.value);
    };

    const handleDrinkChange = (e)=>{
        const value = e.target.value;
        setSelectedDrinks((prev)=>
            e.target.checked ? [...prev,value]:prev.filter((drink)=>drink!==value)
        );
    };

    return (
        <div>
            <h1>Survey form</h1>
            <Form id="surveyForm" onSubmit = {(e) => submitForm(e)}>
                <Form.Group className="container mb-3" >
                    <Form.Label><b>Age</b></Form.Label>

                    <Form.Control
                    type="Number" placeholder = "Enter your age" id ="age" value={age} 
                    onChange={(e)=>setAge(e.target.value)}
                    required />
                    

                    <input type="range" id="ageSlider"  min="0" max="100" step="1"  onInput={handleSliderInput}/><br/>

                    <Button type="submit">Submit</Button><br/>
                    </Form.Group>

                <fieldset>
                <Form.Group className='container mb-3' >
                    <Form.Label><b>What do you want to drink?</b></Form.Label>
                    <Form.Check
                         type="checkbox" id="tea" name="drink" label="tea"
                         onChange={handleDrinkChange}
                    />
                    <Form.Check
                        type="checkbox" id="coffee" name="drink" label="coffee"
                        onChange={handleDrinkChange}

                    />
                    <Form.Check
                        type="checkbox" id="cold drink" name="drink" label="cold drink"
                        onChange={handleDrinkChange}

                    />
                    <Button type="submit">Submit</Button>

                </Form.Group> 
                </fieldset>
                   
                <Form.Group className= 'container mb-3' >
                    <Form.Label><b>Birthdate</b></Form.Label>
                    <Form.Control
                        input type="date" id="birthDate" 
                        onChange={(e)=>setBirthDate(e.target.value)}
                        required
                    />
                    <Button type="submit">Submit</Button>

                </Form.Group>
            </Form>
        </div>
    );
};

export default Survey;


