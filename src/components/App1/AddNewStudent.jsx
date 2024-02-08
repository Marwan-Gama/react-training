import React, { useState } from "react";
import "./App1.css";

const AddNewStudent = ({ onAddStudent }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !age) return;
    onAddStudent({ name, email, age: parseInt(age) });
    setName("");
    setEmail("");
    setAge("");
  };

  return (
    <div>
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            value={age}
            min={18}
            max={120}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddNewStudent;
