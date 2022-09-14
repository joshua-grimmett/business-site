import Image from 'next/image';

import { PrimaryButton, SubmitButton } from "./Button";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <span className="text-2xl font-bold py-2">Get In Touch</span>
      <div className="py-8">
        <Image src="/contact.svg" alt="Contact" width={800} height={250}/>
      </div>
      <form action="https://getform.io/f/b6dec353-07bf-4e45-a5be-262b0f6f304c" method="POST">
        <div className="form-grid">
          <div className="input">
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" required/>
          </div>
          <div className="input">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" required/>
          </div>
          <div className="input">
            <label htmlFor="mobile">Mobile Number</label>
            <input type="tel" name="mobile" required/>
          </div>
          <div className="input">
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" required/>
          </div>
        </div>
        <div className="input">
          <label htmlFor="message">Message</label>
          <textarea name="message" required/>
        </div>
      <div className="py-5">
        <SubmitButton more={"mr-auto w-fit"} text="Send message"/>
      </div>
      </form>
    </div>
  )
}