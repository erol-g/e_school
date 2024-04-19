import { useEffect, useState } from "react";

const SeeGrades = () => {
  const [grades, setGrades] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem("userInfo"));

  const fetchGrades = async () => {
    try {
      console.log(user.userId);
      const response = await fetch(
        `http://localhost:3000/getGrade/${user.userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setGrades(data);
        setIsLoading(false);
      } else {
        console.error("Failed to fetch grades:", response.status);
      }
    } catch (err) {
      console.error("Error fetching students:", err);
    }
  };
  useEffect(() => {
    fetchGrades();
  }, []);

  return (
    <div>
      {isLoading ? (
        <h2>Grades are loading...</h2>
      ) : (
        <div>
          <h2>Here is your grades {user.name}</h2>

          <table style={{ width: "100%", border: "1px solid black" }}>
            <thead
              style={{
                width: "100%",
                fontFamily: "arial, sans-serif",
                border: "1px solid black",
              }}
            >
              <tr>
                <th>Lesson</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody
              style={{
                fontFamily: "arial, sans-serif",
                border: "1px solid black",
              }}
            >
              {grades.map((grade) => (
                <tr key={grade._id}>
                  <td>{grade.gradeName}</td>
                  <td>{grade.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SeeGrades;
