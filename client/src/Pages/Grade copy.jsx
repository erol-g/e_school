import { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

const Grade = () => {
  const [classList, setClassList] = useState([]);
  const [studentList, setStudentList] = useState({});
  const [classId, setClassId] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const subject = localStorage.getItem("subject");
  const [gradeResults, setGradeResults] = useState({});

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

  const fetchStudentsList = async (classId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/search?classId=${classId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setStudentList((prevStudentList) => ({
          ...prevStudentList,
          [classId]: data,
        }));
      } else {
        console.error("Failed to fetch class list:", response.status);
      }
    } catch (err) {
      console.error("Error fetching class list:", err);
    }
  };

  const handleAccordionClick = (individualClass) => {
    const { _id } = individualClass;
    setClassId(_id);
    if (!studentList[_id]) {
      fetchStudentsList(_id);
    }
  };

  const handleGradeInputChange = (studentId, value) => {
    // Update gradeResults state with the entered value
    setGradeResults((prevGradeResults) => ({
      ...prevGradeResults,
      [studentId]: value,
    }));
  };

  const handleSubmitGrade = async (studentId) => {
    try {
      const response = await fetch("http://127.0.0.1:3000/add-grade", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentId: studentId,
          gradeName: subject, // Make sure subject has a value
          result: gradeResults[studentId], // Get grade result from state
        }),
      });

      if (response.ok) {
        // Handle success
        const result = await response.json();

        // Log result
        console.log(result);
        console.log("Grade submitted successfully");
      } else {
        // Handle error
        console.error("Error adding grade:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding grade:", error.message);
    }
  };
  return (
    <div>
      {isLoading ? (
        <h2>Class list is loading...</h2>
      ) : (
        <div>
          <h3>Class List:</h3>

          {classList.map((individualClass) => (
            <Accordion
              key={individualClass?._id}
              onClick={() => handleAccordionClick(individualClass)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                {individualClass?.className}
              </AccordionSummary>
              <AccordionDetails>
                <div>Subject: {subject}</div>
                {studentList[classId]?.map((student) => (
                  <div key={student._id}>
                    {student.name}
                    {/* Add input for exam result */}
                    <input
                      type="text"
                      placeholder="Enter exam result"
                      value={gradeResults[student._id] || ""}
                      onChange={(e) =>
                        handleGradeInputChange(student._id, e.target.value)
                      }
                    />
                    <Button
                      variant="contained"
                      onClick={() => handleSubmitGrade(student._id)}
                    >
                      Submit Grades
                    </Button>
                  </div>
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      )}
    </div>
  );
};

export default Grade;
