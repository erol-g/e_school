import { useState, useEffect } from "react";

const AllStudents = () => {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch("http://localhost:3000/all-students", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setStudents(data);
        setIsLoading(false);
      } else {
        console.error("Failed to fetch students:", response.status);
      }
    } catch (err) {
      console.error("Error fetching students:", err);
    }
  };
  return (
    <div>
      {isLoading ? (
        <h2>Students are loading...</h2>
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
              <th style={{ border: "1px solid #dddddd", padding: "8px" }}>
                Name
              </th>
              <th style={{ border: "1px solid #dddddd", padding: "8px" }}>
                Contact Email
              </th>
              <th style={{ border: "1px solid #dddddd", padding: "8px" }}>
                Class
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td style={{ border: "1px solid #dddddd", padding: "8px" }}>
                  {student.name}
                </td>
                <td style={{ border: "1px solid #dddddd", padding: "8px" }}>
                  {student.email}
                </td>
                <td style={{ border: "1px solid #dddddd", padding: "8px" }}>
                  {student?.className}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllStudents;
