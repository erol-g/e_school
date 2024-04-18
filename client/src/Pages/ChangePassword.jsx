import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch(
      `http://127.0.0.1:3000/users/${user.role}/change-password/${user.userId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      }
    )
      .then((res) => {
        if (res.ok) {
          toast.success("Password is changed successfully!");
          navigate(-1);
        } else {
          throw new Error(`${res.status} ${res.statusText}`);
        }
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div className="page-container">
      <h1>Change your password</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Type your new password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ChangePassword;
