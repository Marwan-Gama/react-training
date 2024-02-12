import React, { useState } from "react";
import "./App1.css";
import StudentsList from "./StudentsList";
import AddNewStudent from "./AddNewStudent";
import EditStudentDetails from "./EditStudentDetails";

const App1 = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showAddNewStudent, setShowAddNewStudent] = useState(false);
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

  const toggleAddNewStudent = () => {
    setShowAddNewStudent((prev) => !prev);
  };

  const onUpdateStudent = (updatedStudent) => {
    const updatedStudents = students.map((student) =>
      student.id === updatedStudent.id ? updatedStudent : student
    );
    setStudents(updatedStudents);
    setSelectedStudent(updatedStudent);
  };

  return (
    <div className="app-container">
      <div className="students-list-container">
        <StudentsList
          students={students}
          onSelectStudent={handleSelectStudent}
        />
      </div>

      <div className="details-container">
        <EditStudentDetails
          selectedStudent={selectedStudent}
          onUpdateStudent={onUpdateStudent}
        />
      </div>

      <div className="add-new-student-container">
        <button onClick={toggleAddNewStudent} className="toggle-btn">
          {showAddNewStudent ? "Hide Add Student" : "Show Add Student"}
        </button>
        {showAddNewStudent && <AddNewStudent onAddStudent={handleAddStudent} />}
      </div>
    </div>
  );
};

export default App1;
