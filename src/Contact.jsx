const Contact = () => {
    const submitForm = (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const gender = document.getElementById("gender").value;
      const message = document.getElementById("message").value;
      if (name && gender && message) {
        document.getElementById("thankYou").innerHTML =
          "Thanking you for Contacting us";
        setTimeout(() => {
          document.getElementById("thankYou").innerHTML = "";
        }, 3000);
      }
    };
  
    const resetForm = () => {
      document.getElementById("contactForm").reset();
    };
  
    return (
      <div>
        <h1>Contact form</h1>
        <form id="contactForm" onSubmit={(e) => submitForm(e)}>
          <label>Name</label>
          <input placeholder="Enter your name" id="name" required />
          <label>Gender</label>
          <select required id="gender">
            <option value="">Select one</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <label>Message</label>
          <textarea rows={6} required id="message"></textarea>
          <button type="submit">Submit</button>
          <button onClick={resetForm}>Reset</button>
        </form>
        <div id="thankYou"></div>
      </div>
    );
  };
  
  export default Contact;