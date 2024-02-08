import React, { useState } from "react";
import "./App1.css";
import StudentsList from "./StudentsList";
import StudentDetails from "./StudentDetails";
import AddNewStudent from "./AddNewStudent";

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
