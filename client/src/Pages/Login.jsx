import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setRole] = useState("");
  const [, setName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setRole(res.role);
        setName(res.name);
        localStorage.setItem(
          "userInfo",
          JSON.stringify({ name: res.name, role: res.role })
        );
        switch (res.role) {
          case "director":
            navigate("/director-page");
            break;
          case "teacher":
            navigate("/teacher-page");
            break;
          case "student":
            navigate("/student-page");
            break;
          default:
            alert(res.message);
        }
      });
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Login;
