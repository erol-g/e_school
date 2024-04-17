import { useNavigate } from "react-router";
import PageHeader from "./HeaderPage";

const StudentsPage = () => {
  const navigate = useNavigate();
  return (
    <div className="page-container">
      <PageHeader title="Student Page" />
      <button onClick={() => navigate("/change-password")}>
        to change your password
      </button>
      <button>to see your notes</button>
      <button onClick={() => navigate("/profile")}>to see your personal information</button>
      <button>to send a message</button>
      <button>to read your message</button>
    </div>
  );
};

export default StudentsPage;
