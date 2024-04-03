import PageHeader from "./HeaderPage";

const StudentsPage = () => {
  return (
    <div className="page-container">
      <PageHeader title="Student Page" />
      <button>to change your password</button>
      <button>to see your notes</button>
      <button>to see your information</button>
      <button>to send a message</button>
      <button>to read your message</button>
    </div>
  );
};

export default StudentsPage;
