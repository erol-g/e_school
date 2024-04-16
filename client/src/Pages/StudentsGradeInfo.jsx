import React from "react";
import { useState, useEffect } from "react";


const StudentsGradeInfo = () => {
    const [grades, setGrades] = useState([]);
      const [isLoading, setIsLoading] = useState(true);
    
      useEffect(() => {
        fetchStudentsGrade();
      }, []);
    
      const fetchStudentsGrade = async () => {
        try {
          const response = await fetch("http://localhost:3000//getGrade/:id", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
    
          if (response.ok) {
            const data = await response.json();
            setGrades(data);
            setIsLoading(false);
          } else {
            console.error("Failed to fetch students grade:", response.status);
          }
        } catch (err) {
          console.error("Error fetching students grade:", err);
        }
      };
      return (
        <div>
          {isLoading ? (
            <h2>Students grade is loading...</h2>
          ) : (
            <table
              style={{
                fontFamily: "arial, sans-serif",
                borderCollapse: "collapse",
                width: "100%",
              }}
            >
              <thead>
                <tr>
                  <th style={{ border: "3px solid #dddddd", padding: "10px" }}>
                    Lesson Name
                  </th>
                  <th style={{ border: "3px solid #dddddd", padding: "10px" }}>
                    Grade
                  </th>
               
                </tr>
              </thead>
              <tbody>
                {grades.map((grade) => (
                  <tr key={grade.name}>
                    <td style={{ border: "1px solid #dddddd", padding: "10px" }}>
                      {grade.name}
                    </td>
                    <td style={{ border: "1px solid #dddddd", padding: "10px" }}>
                      {grade.result}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      );
    };
    
  

export default StudentsGradeInfo;
