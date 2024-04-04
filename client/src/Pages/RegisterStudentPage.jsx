import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterStudentPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [className, setClassName] = useState("");
  const [classList, setClassList] = useState([]); 

  useEffect(() => {
    fetch("http://localhost:3000/all-classes")
      .then((res) => res.json())
      .then((data) => {
        setClassList(data);
      })
      .catch((error) => console.error("Error fetching classes:", error));
  }, []); 


  const handleSubmit = async (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/register-student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
        className: className,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Student registered successfully!"); 
        setEmail("");
        setPassword("");
        setName("");
        setClassName("");
      })
      .catch((error) => console.error("Error registering student:", error));
  };

  return (
    <div>
      <h2>Student Register Page</h2>
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
        <select
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        >
          <option value="">Select a class</option>
          {classList.map((classItem) => (
            <option key={classItem.id} value={classItem.name}>
              {classItem.className}
            </option>
          ))}
        </select>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default RegisterStudentPage;
