import React from 'react';
import "./Contacts.scss";

function validForm() {
  var formValues = {
    name: document.getElementById("name"),
    email: document.getElementById("email"),
    subject: document.getElementById("subject"),
    message: document.getElementById("message")
  };

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (formValues.name.value.trim() === "") {
    formValues.name.nextElementSibling.style.display = "block";
    formValues.name.style.border = "1px solid #f00";
    return false;
  } else {
    formValues.name.nextElementSibling.style.display = "none";
    formValues.name.style.border = "1px solid transparent";
  }

  if (!emailPattern.test(formValues.email.value)) {
    formValues.email.nextElementSibling.style.display = "block";
    formValues.email.style.border = "1px solid #f00";
    return false;
  } else {
    formValues.email.nextElementSibling.style.display = "none";
    formValues.email.style.border = "1px solid transparent";
  }

  if (formValues.message.value === "") {
    formValues.message.nextElementSibling.style.display = "block";
    formValues.message.style.border = "1px solid #f00";
    return false;
  } else {
    formValues.message.nextElementSibling.style.display = "none";
    formValues.message.style.border = "1px solid transparent";
  }

  if (formValues.subject.value === "") {
    formValues.subject.nextElementSibling.style.display = "block";
    formValues.subject.style.border = "1px solid #f00";
    return false;
  } else {
    formValues.subject.nextElementSibling.style.display = "none";
    formValues.subject.style.border = "1px solid transparent";
  }
}

function Contacts() {
  return (
    <section id='Contacts' className='container-fluid d-flex justify-content-center align-items-center'>
      <div className='card-contacts'>
        <div className='row container my-1'>
          <h2 className='h1-responsive font-weight-bold text-center my-4 contact-heading'>
            Contact Us
          </h2>
          <p className='text-center w-responsive mx-auto mb-5 fw-semibold'>
            Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.
          </p>
          <div className='col-md-12 mb-md-0 mb-5 d-flex'>
            <form id='contact-form' name='contact-form' action='' className='d-flex col-md-12' onSubmit={validForm}>
              <div className='contacter-info d-flex flex-column align-items-center col-md-6 justify-content-start'>
                <div className='w-100'>
                  <input type='text' id='name' name='name' className='form-control' placeholder='Your name'/>
                  <span className='error'> please enter Your Name </span>
                </div>
                <div className='w-100'>
                  <input type='text' id='email' name='email' className='form-control' placeholder='Your Email'/>
                  <span className='error'> please enter Your Email </span>
                </div>
                <div className='w-100'>
                  <input type='text' id='subject' name='subject' className='form-control' placeholder='Subject'/>
                  <span className='error'> please enter the Subject </span>
                </div>
              </div>
              <div className='col-md-1'></div>
              <div className='contacter-message col-md-5 d-flex align-items-center flex-column justify-content-evenly'>
                <textarea type='text' id='message' name='message' rows='2' className='form-control md-textarea' placeholder='Your Message'></textarea>
                <span className='error'> please enter the Message </span>
                <div className='text-center text-md-left my-5'>
                  <button className='btnnn send' type='submit'>Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
