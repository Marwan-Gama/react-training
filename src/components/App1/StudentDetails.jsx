import React, { useState } from "react";
import "./App1.css";

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

export default StudentDetails;
