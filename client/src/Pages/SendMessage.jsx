import {  useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SendMessage = () => {
  const [recipientEmail, setRecipientEmail] = useState("");
  const [content, setContent] = useState("");

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const userId = userInfo ? userInfo.userId : null;
  const userEmail = userInfo ? userInfo.email : null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/sendMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        senderId: userId,
        recipientEmail: recipientEmail,
        content: content,
        userEmail:userEmail
      }),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Message send successfully!"); 
        setRecipientEmail("");
        setContent("");
      })
      .catch((error) => console.error("Error send message:", error));
  };

  return (
    <div>
      <h2>Send Message Page</h2>
      <ToastContainer />
      <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column'}}>

        <input
          type="email"
          placeholder="recipientEmail"
          name="recipientEmail"
          value={recipientEmail}
          onChange={(e) => setRecipientEmail(e.target.value)}
        />
         <textarea
          type="text"
          placeholder="content"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={3} 
        />
        
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default SendMessage;
