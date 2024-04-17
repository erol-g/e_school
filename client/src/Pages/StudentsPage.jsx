import { useNavigate } from "react-router";
import PageHeader from "./HeaderPage";


const StudentsPage = () => {
  const navigate = useNavigate();
  return (
    <div className="page-container">
      <PageHeader title="Student Page" />
      <button>to see your notes</button>
      <button onClick={() => navigate("/change-password")}>
        to change your password
      </button>
      <button onClick={()=> navigate("/getGrade/:id")}>to see your notes</button>
      <button>to see your information</button>
      <button>to send a message</button>
      <button onClick={() => navigate("/notifications")}>
        to read your message
      </button>
      <button>to see your personal information</button>
    </div>
  );
};

export default StudentsPage;
