import { useEffect, useState } from "react";
import PageHeader from "./HeaderPage";
import { useNavigate } from "react-router";

const TeachersPage = () => {
  const [, setUserInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  return (
    <div className="page-container">
      <PageHeader title="Teacher Page" />
      <button>to see self information</button>
      <button>to see class list</button>
      <button onClick={() => navigate("/change-password")}>
        to change password
      </button>
      <button>to grade</button>
      <button>to send a message</button>
      <button>to read your message</button>
      <button>to see your personal information</button>
    </div>
  );
};

export default TeachersPage;
