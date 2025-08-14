import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Lets talk about everithing!</h3>
          <p className="contact__details">
            Don't like form? Send me an email.👋
          </p>
        </div>

        <form
          action="https://formspree.io/f/mrbljkaw"
          method="POST"
          className="contact__form"
        >
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                name="name"
                type="text"
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact__form-div">
              <input
                name="email"
                type="email"
                className="contact__form-input"
                placeholder="Insert your email"
              />
            </div>
          </div>
          <div className="contact__form-div">
            <input
              name="subject"
              type="text"
              className="contact__form-input"
              placeholder="Insert your subject"
            />
          </div>

          <div className="contact__form-div contact_form-area">
            <textarea
              name="message"
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Write your message"
            ></textarea>
          </div>

          <button className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
