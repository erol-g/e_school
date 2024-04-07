import PageHeader from "./HeaderPage";
import { useNavigate } from "react-router-dom";

const DirectorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <PageHeader title="Director Page" />
      <button onClick={() => navigate("/register-student")}>
        to register a student
      </button>
      <button onClick={() => navigate("/register-teacher")}>
        to register a teacher
      </button>
      <button onClick={() => navigate("/register-class")}>
        to create new class
      </button>
      <button onClick={() => navigate("/all-students")}>
        to see registered students
      </button>

      <button>to see student grade information</button>
      <button onClick={() => navigate("/change-password")}>
        to change password
      </button>
      <button>to see general information of the school</button>
      <button>to send a message</button>
      <button onClick={() => navigate("/notifications")}>
        to read your message
      </button>
      <button>to see your personal information</button>
    </div>
  );
};

export default DirectorPage;
