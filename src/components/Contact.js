import React from "react";
import { Translate } from "react-translated";

const Contact = () => (
  <div id="contact">
    <h3 className="text-5xl text-center">
      <Translate text="contact" />
    </h3>
    <p className="text-2xl">
      <Translate text="phone" />: (515)-555-5555
    </p>
    <p className="text-2xl">Snapchat:</p>
    <p className="text-2xl">Email: bobloblaw@gmail.com</p>
  </div>
);

export default Contact;
