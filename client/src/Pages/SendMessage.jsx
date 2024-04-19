import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SendMessage = () => {
  const [recipientEmail, setRecipientEmail] = useState("");
  const [content, setContent] = useState("");

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const userEmail = userInfo ? userInfo.email : null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          recipientEmail: recipientEmail,
          content: content,
          senderEmail: userEmail,
        }),
      });
      if (response.ok) {
        await response.json();
        toast.success("Message send successfully!");
        setRecipientEmail("");
        setContent("");
      } else {
        throw new Error("Failed to send the message");
      }
    } catch (error) {
      console.error("Error sending message :", error);
      toast.error("Error sending message.");
    }
  };

  return (
    <div>
      <h2>Send Message Page</h2>
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          type="email"
          placeholder="recipientEmail"
          name="recipientEmail"
          value={recipientEmail}
          required
          onChange={(e) => setRecipientEmail(e.target.value)}
        />
        <textarea
          type="text"
          placeholder="content"
          required
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
