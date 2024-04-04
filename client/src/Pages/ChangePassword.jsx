import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch(
      `http://127.0.0.1:3000/users/${user.role}/change-password/${user.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      }
    )
      .then(alert("Password updated"))
      .then(() => navigate(-1));
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ChangePassword;
