import React from "react";
import './pages/SIgnUp.css'
import "./Form.css";

function Form() {
  (function () {
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

  return (
    <div className="bg">
    <div className="container transbox">
      <form className="needs-validation" noValidate>
        <h1>Registration Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <p></p>
          <div className="field">
            <label htmlFor="validationCustom01" className="form-label">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="form-control"
              id="validationCustom01"
              required
            />
            <div className="invalid-feedback">
            Please provide a valid Email.
            </div>
          </div>
          <p></p>
          <div className="field">
            <label htmlFor="validationCustom02" className="form-label">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control"
              id="validationCustom02"
              required
            />
            <div className="invalid-feedback">
            Please provide a valid Password.
            </div>
          </div>
          <div className="field">
            <label htmlFor="validationCustom03" className="form-label">Confirm Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control"
              id="validationCustom03"
              required
            />
            <div className="invalid-feedback">
            Please Confirm Password.
            </div>
          </div>
          <p></p>
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    </div>
    </div>
  );
  
}

export default Form;