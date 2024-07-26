import React, { useState } from "react";
import PropTypes from "prop-types";

function ContactForm({ addContact }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateName(name)) {
      alert("Please enter both first and last name.");
      return;
    }
    if (!validateNumber(number)) {
      alert(
        "Please enter a valid phone number. Only digits, spaces, and underscores are allowed.",
      );
      return;
    }
    addContact(name, number);
    setName("");
    setNumber("");
  };

  const validateName = (name) => {
    const parts = name.trim().split(" ");
    return parts.length >= 2 && parts.every((part) => part);
  };

  const validateNumber = (number) => {
    const numberPattern = /^[0-9 -]+$/;
    return numberPattern.test(number);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Number</label>
        <input
          type="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Contact</button>
    </form>
  );
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;