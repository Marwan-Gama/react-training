import React, { useState, useEffect } from "react";

const EditStudentDetails = ({ selectedStudent, onUpdateStudent }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);

  useEffect(() => {
    if (selectedStudent) {
      setName(selectedStudent.name);
      setEmail(selectedStudent.email);
      setAge(selectedStudent.age);
    }
  }, [selectedStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedStudent = { id: selectedStudent.id, name, email, age };
    onUpdateStudent(updatedStudent);
  };

  return (
    <div className="edit-details">
      <h2>Student Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditStudentDetails;
