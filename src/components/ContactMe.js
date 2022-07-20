import React from 'react';
import './ContactMe.css';
import emailjs from "emailjs-com";
import { useRef } from "react";
import { useForm } from 'react-hook-form';

function ContactMe5() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm();

  const form = useRef();

  const serviceID = process.env.REACT_APP_serviceID;
  const templateID = process.env.REACT_APP_templateID;
  const publicKey = process.env.REACT_APP_publicKey;

  const sendEmail = (e) => {
    // e.preventDefault();

    emailjs
      .sendForm(
        serviceID,
        templateID,
        form.current,
        publicKey,
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Thank you for your message!, I will get back to you Asap!");
        },
        (error) => {
          console.log(error.text);
          alert("I am very sorry, it seems that something went wrong", error);
        }
      );
      reset();

  };

  return (
    <div className= 'contact-container'>
  <div className="left-col"></div>

  <div className="right-col">
    <h1>Let's chat</h1>
    <p>Feel free to send me a message in the contact form</p>
    
    <div className="contact-form"></div>
<form id='contact-form' ref={form} onSubmit={handleSubmit(sendEmail)}> 

<label htmlFor="name">Name</label>

    <input
                      type='text'
                      name='name'
                      {...register('name', {
                        required: {
                          value: true,
                          message: 'Please enter your name'
                        },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}
                      className='form-control'
                      id="name"
                      placeholder='Your Name'
                    ></input>
                    {errors.name && <span className='errorMessage'>{errors.name.message}</span>}         
        
        
<label htmlFor="email">Email Address</label>
    <input
                    type='email'
                    name='email'
                    {...register('email', {
                    required: true,
                    pattern:
                        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                    })}
                    className='form-control'
                    id="email"
                    placeholder='Your Email address'
                ></input>
                    {errors.email && (<span className='errorMessage'>Please enter a valid email address</span>)}
        
<label htmlFor="message">Message</label>     
    <textarea
                      rows={3}
                      name='message'
                      {...register('message', {
                        required: true
                      })}
                      className='form-control'
                      id="email_body"
                      placeholder='Your Message'
                    ></textarea>
                    {errors.message && <span className='errorMessage'>Please enter a message</span>}  
        
        
                    <button type="submit" className="btn btn-primary">
              Submit
            </button>
</form>
  </div>
</div>
	);
  }

export default ContactMe5;