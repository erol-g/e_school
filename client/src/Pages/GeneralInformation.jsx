import { useEffect, useState } from "react";

const GeneralInformation = () => {
  const [generalInfo, setGeneralInfo] = useState([]);

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    try {
      const response = await fetch("http://localhost:3000/school-information", {
        method: "GET",
        headers: {
          "content-Type": "application/json",
        },
      });
      if(response.ok) {
      const data = await response.json()
      setGeneralInfo(data)
      }else {
        console.error("Failed to fetch general info:", response.status);
      }
    } catch (err) {
      console.err("Error fetching general info", err);
    }
  };
  return <div style={{listStyle:"none", display:"flex", flexDirection:"column"}}> {
    <>
    <li>Number of Directors: {generalInfo.directors}</li>
    <li>Number of Teachers: {generalInfo.teachers}</li>
    <li>Number of Students: {generalInfo.students}</li>
    <li>Number of Classes: {generalInfo.classes}</li>
    <li>Number of Lessons: {generalInfo.lessons}</li>
    </>
    }</div>;
};

export default GeneralInformation;
