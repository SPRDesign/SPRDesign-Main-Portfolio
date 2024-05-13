import React, { useRef, useState } from "react";
import { contact } from "../data.jsx";

import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false); 
  const [errorMessage, setErrorMessage] = useState(""); 
  const [isSending, setIsSending] = useState(false); 

  const sendEmail = (e) => {
    e.preventDefault();

    if (isSending) {
      return;
    }

    
    const userName = form.current.user_name.value;
    const userEmail = form.current.user_email.value;
    const message = form.current.message.value;

    if (!userName || !userEmail || !message) {
      setErrorMessage("Please fill out all fields before sending the message.");
      return; 
    }

    setIsSending(true);

    emailjs
      .sendForm("service_k0bdpeq", "template_q2dz2nf", form.current, {
        publicKey: "g-uka-KYJosBSRh3I",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setMessageSent(true); 
          setErrorMessage(""); 
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      )
      .finally(() => {
        setIsSending(false); 
      });
  };

  return (
    <section className="section bg-primary" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">
            Contact me
          </h2>
        </div>

        <div className="flex flex-col mt-14 lg:flex-row lg:gap-x-8">
          <div className="flex flex-col flex-1 items-start space-y-8 mb-12 lg:mb-0 sm:w-full">
            {contact.map((item, index) => {
              const { icon, title, description, mail } = item;
              return (
                <div
                  className="flex flex-col lg:flex-row gap-x-4 items-center"
                  key={index}
                >
                  <div className="flex flex-col">
                    <div className="flex items-center text-pink-900">
                      <div className="text-3xl">{icon}</div>
                      <h4 className="font-body text-xl mb-1 ml-4">{title}</h4>
                    </div>
                    <p className="text-white font-normal">
                      {description}
                      <span className="text-pink-900">{mail}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-8 w-full max-w-[780px]"
          >
            <div className="flex gap-8">
              <input
                className="input"
                type="text"
                name="user_name"
                placeholder="Your Name"
              ></input>
              <input
                className="input"
                type="email"
                name="user_email"
                placeholder="Your Email"
              ></input>
            </div>

            <textarea
              className="textarea"
              name="message"
              placeholder="Your Message"
            ></textarea>
            <div className="flex items-center justify-left"> 
              <button
                type="submit"
                value="Send"
                className="btn btn-lg bg-pink-900 hover:bg-accent-hover"
                disabled={isSending} 
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
              {errorMessage && <p className="text-red-500 ml-10">{errorMessage}</p>}
              {messageSent && <p className="text-accent ml-10">Message sent.</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
