const Survey=()=>{

    const submitForm=(e)=>{
        e.preventDefault();
        const age = document.getElementById("age").value;
        console.log("Form submitted with age:", age);
        
        const selectedDrinks = [];
        const checkboxes = document.querySelectorAll('input[name="drink"]:checked');
        checkboxes.forEach((checkbox) => {
            selectedDrinks.push(checkbox.value);
        });

        console.log("Form submitted with selected drinks:", selectedDrinks.join(", "));

        const birthDate = document.getElementById("birthDate").value;
        console.log("Form submitted with birth date:", birthDate);
        };
    
    const handleSliderInput=(e)=>{
        document.getElementById("age").value = e.target.value;
    };

    return (
        <div>
            <h1>Survey form</h1>
            <form id="surveyForm" onSubmit = {(e) => submitForm(e)}>

                <label><b>Age</b></label>
                <input placeholder = "Enter your age" id ="age"  required />
                <input type="range" id="ageSlider"  min="0" max="100" step="1"  onInput={handleSliderInput}/>
                <button type="submit">Submit</button><br/>
                
                <label><b>What do you want to drink?</b></label><br/>
                <input type="checkbox" id="tea" name="drink" value="tea"/>
                <output id="tea">tea</output><br/>
                <input type="checkbox" id="coffee" name="drink" value="coffee"/>
                <output id="coffee">coffee</output><br/>
                <input type="checkbox" id="cold drink" name="drink" value="cold drink"/>
                <output id="cold drink">cold drink</output><br/>
                <button type="submit">Submit</button><br/>

                <label><b>Birthdate</b></label>
                <input type="date" id="birthDate" required/>
                <button type="submit">Submit</button><br/>

            </form>
        </div>
    );
};

export default Survey;


