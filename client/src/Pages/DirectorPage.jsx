import PageHeader from "./HeaderPage";
import { useNavigate } from "react-router-dom";

const DirectorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="page-container">
      <PageHeader title="Director Page" />
      <button>to register a student</button>
      <button>to create new class</button>
      <button>to see registered students</button>
      <button>to see student grade information</button>
      <button>to change password</button>
      <button>to see general information of the school</button>
      <button>to send a message</button>
      <button onClick={() => navigate("/comments")}>
        to read your message
      </button>
      <button>to see your personal information</button>
    </div>
  );
};

export default DirectorPage;
