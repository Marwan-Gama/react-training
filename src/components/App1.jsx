import React, { useState } from "react";
import "./App1.css";

// AddNewStudent component
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

// StudentsList component
const StudentsList = ({ students, onSelectStudent }) => {
  return (
    <div className="students-container">
      <h2>Students</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id} onClick={() => onSelectStudent(student)}>
            {student.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

// StudentDetails component
const StudentDetails = ({ selectedStudent }) => {
  return (
    <div className="details-container">
      <h2>Student Details</h2>
      {selectedStudent && (
        <div>
          <p>Name: {selectedStudent.name}</p>
          <p>Email: {selectedStudent.email}</p>
          <p>Age: {selectedStudent.age}</p>
        </div>
      )}
    </div>
  );
};

// Parent component
const App1 = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [students, setStudents] = useState([
    { id: 1, name: "John", email: "john@example.com", age: 25 },
    { id: 2, name: "Jane", email: "jane@example.com", age: 28 },
    { id: 3, name: "Doe", email: "doe@example.com", age: 30 },
    { id: 4, name: "Alice", email: "alice@example.com", age: 22 },
    { id: 5, name: "Bob", email: "bob@example.com", age: 24 },
  ]);

  const handleSelectStudent = (student) => {
    setSelectedStudent(student);
  };

  const handleAddStudent = (newStudent) => {
    setStudents([...students, { ...newStudent, id: students.length + 1 }]);
  };

  return (
    <div className="app-container">
      <StudentsList students={students} onSelectStudent={handleSelectStudent} />
      <StudentDetails selectedStudent={selectedStudent} />
      <AddNewStudent onAddStudent={handleAddStudent} />
    </div>
  );
};

export default App1;
