import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const HandleContact = () => {
    if (name && email && message) {
      var templateParams = {
        name: name,
        email: email,
        message: message,
      };

      emailjs
        .send(
          "service_86oc4ta",
          "template_4p3gwo3",
          templateParams,
          "2hebtHntQxKq3Ls6c"
        )
        .then(
          function (response) {
            toast.success("SUCCESS!", response.text);
            setName("");
            setEmail("");
            setMessage("");
          },
          function (error) {
            toast.error("FAILED...", error);
          }
        );
    } else {
      toast.error("Fill The Form Correctly!");
    }
  };
  return (
    <div
      name="contact"
      className="w-full bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form ref={form} className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">{`// Submit the form below or shoot me an email - talhamushtaq@hwryk.com`}</p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
          name="name"
          autoComplete={"off"}
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          name="email"
          autoComplete={"off"}
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name="message"
          rows="10"
          placeholder="Message"
          autoComplete={"off"}
        ></textarea>
        <button
          type="button"
          onClick={HandleContact}
          className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center"
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
