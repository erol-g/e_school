import PageHeader from "./HeaderPage";
import { useNavigate } from "react-router-dom";


const StudentsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <PageHeader title="Student Page" />
      <button>to change your password</button>
      <button onClick={() => navigate ('/grades')}>to see your notes</button>
      <button>to see your information</button>
      <button>to send a message</button>
      <button>to read your message</button>
    </div>
  );
};

export default StudentsPage;
