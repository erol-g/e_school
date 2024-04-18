import { useState, useEffect } from "react";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ClasssListByTeacher = () => {
  const [classList, setClassList] = useState([]);
  const [studentList, setStudentList] = useState({});
  const [classId, setClassId] = useState("");
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
                {studentList[classId]?.map((student) => (
                  <div key={student._id}>{student.name}</div>
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      )}
    </div>
  );
};

export default ClasssListByTeacher;
