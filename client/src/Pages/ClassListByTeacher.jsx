import { useState, useEffect } from "react";

const ClasssListByTeacher = () => {
  const [classList, setClassList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/class-list/${user.userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setClassList(data);
        setIsLoading(false);
      } else {
        console.error("Failed to fetch class list:", response.status);
      }
    } catch (err) {
      console.error("Error fetching class list:", err);
    }
  };
  return (
    <div>
      {isLoading ? (
        <h2>Class list is loading...</h2>
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
                Class Name:
              </th>
              {/* Burası ve alttaki satır, öğrenciler classList'e eklendiğinde açılacak. */}
              {/* <th style={{ border: "1px solid #dddddd", padding: "8px" }}>
                Student List:
              </th> */}
            </tr>
          </thead>
          <tbody>
            {classList.map((individualClass) => (
              <tr key={individualClass?._id}>
                <td style={{ border: "1px solid #dddddd", padding: "8px" }}>
                  {individualClass?.className}
                </td>
                {/* Burası ve üstteki satır, öğrenciler classList'e eklendiğinde açılacak. */}
                {/* <td style={{ border: "1px solid #dddddd", padding: "8px" }}>
                  {individualClass?.studentList.map((student) => (
                    <div key={student._id}>{student.name}</div>
                  ))}
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ClasssListByTeacher;
