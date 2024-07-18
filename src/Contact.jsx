import {Button,Form} from "react-bootstrap";

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
        <Form id="contactForm" onSubmit={(e) => submitForm(e)}>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter your name"
              id="name"
              required
            />
          </Form.Group>
          {/* <label>Name</label>
          <input placeholder="Enter your name" id="name" required /> */}
          <Form.Group className="mb-3">
            <Form.Label>Gender</Form.Label>
            <Form.Select required id="gender">
              <option value="">Select one</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter your message"
              id="message"
              required
            />
          </Form.Group>
          <div className="row">
            <div className="col-md-3">
              <div className="d-flex justify-content-around align-items-start">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <Button variant="danger" onClick={resetForm}>
                  Reset
                </Button>
              </div>
            </div>
          </div>
        </Form>
        <div id="thankYou"></div>
      </div>
    );
    };
  
  export default Contact;