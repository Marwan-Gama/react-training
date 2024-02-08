import React, { useState } from "react";
import "./App1.css";

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

export default StudentsList;
