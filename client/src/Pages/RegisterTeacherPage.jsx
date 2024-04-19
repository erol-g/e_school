import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterTeacherPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [classList, setClassList] = useState([]);
  const [subject, setSubject] = useState("");

  const subjects = [
    "Maths",
    "History",
    "English",
    "Geography",
    "Physics",
    "PE",
    "Music",
  ];

  useEffect(() => {
    fetch("http://localhost:3000/all-classes")
      .then((res) => res.json())
      .then((data) => {
        setClassList(data);
      })
      .catch((error) => console.error("Error fetching classes:", error));
  }, []);

  const handleCheckboxChange = (e) => {
    const classId = e.target.value;
    if (e.target.checked) {
      setSelectedClasses((prevSelectedClasses) => [
        ...prevSelectedClasses,
        classId,
      ]);
    } else {
      setSelectedClasses((prevSelectedClasses) =>
        prevSelectedClasses.filter((id) => id !== classId)
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/register-teacher", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          classIds: selectedClasses,
          subject,
        }),
      });
      if (response.ok) {
        await response.json();
        toast.success("Teacher registered successfully!");
        setEmail("");
        setPassword("");
        setName("");
        setSelectedClasses([]);
        setSubject("");
      } else {
        throw new Error("Failed to register teacher");
      }
    } catch (error) {
      console.error("Error registering teacher:", error);
      toast.error("Error registering teacher.");
    }
  };

  return (
    <div>
      <h2>Teacher Register Page</h2>
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          type="text"
          placeholder="name"
          required
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {classList.map((classItem) => (
          <div key={classItem._id}>
            Class
            <input
              type="checkbox"
              id={classItem._id}
              value={classItem._id}
              onChange={handleCheckboxChange}
              checked={selectedClasses.includes(classItem._id)}
            />
            <label htmlFor={classItem._id}>{classItem.className}</label>
          </div>
        ))}
        <label htmlFor="subject"></label>
        <select
          id="subject"
          name="subject"
          onChange={(e) => setSubject(e.target.value)}
          required
        >
          <option value="">Select a subject</option>
          {subjects.map((classItem, index) => (
            <option key={index} value={classItem}>
              {classItem}
            </option>
          ))}
        </select>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default RegisterTeacherPage;
