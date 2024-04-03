import  { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './notifications.css'

const NotificationDetails = () => {
  const { id } = useParams();
  const [notification, setNotification] = useState(null);

  const handleDelete = (id) => {
    // Implement delete functionality
    console.log(`Delete message with ID ${id}`);
  };

  useEffect(() => {
    // Fetch notification details from the server
    // Example:
    fetch(`http://localhost:3000/getMessage/${id}`)
      .then((response) => response.json())
      .then((data) => setNotification(data))
      .catch((error) => console.error("Error fetching notification details:", error));
  }, [id]);

  return (
    <div>
      <h3>Notification Details</h3>
      {notification ? (
        <div>
          <p>Sender: {notification.email}</p>
          <p>Recipient: {notification.name}</p>
          <p>Date: {notification.date}</p>
          <p >Content: {notification.body}</p>
          <button onClick={() => handleDelete(notification.id)}>Delete</button>
        </div>
      ) : (
        <p>Loading notification details...</p>
      )}
    </div>
  );
};

export default NotificationDetails;
