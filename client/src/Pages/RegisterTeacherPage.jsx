import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterTeacherPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [classList, setClassList] = useState([]); 

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
      setSelectedClasses(prevSelectedClasses => [...prevSelectedClasses, classId]);
    } else {
      setSelectedClasses(prevSelectedClasses => prevSelectedClasses.filter(id => id !== classId));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/register-teacher", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
        classIds: selectedClasses,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("teacher registered successfully!"); 
        setEmail("");
        setPassword("");
        setName("");
        setSelectedClasses([]);
      })
      .catch((error) => console.error("Error registering teacher:", error));
  };

  return (
    <div>
      <h2>Teacher Register Page</h2>
      <ToastContainer />
      <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column'}}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
       {classList.map((classItem) => (
          <div key={classItem._id}>Class
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

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default RegisterTeacherPage;
