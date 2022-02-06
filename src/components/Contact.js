import React from "react";
import { Translate } from "react-translated";

const Contact = () => (
  <div
    id="contact"
    className="text-5xl text-center w-full order-first md:order-none md:col-span-7"
  >
    <p>
      <Translate text="phone" />: (515)-555-5555
    </p>
    <p> Email: bobloblaw@gmail.com</p>
  </div>
);

export default Contact;
