import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './notifications.css'

const NotificationsTable = () => {
  const [notifications, setNotifications] = useState([]);
  const [showRead, setShowRead] = useState(true);

  useEffect(() => {
    // Fetch notifications from the server
    // Example:
    fetch("http://localhost:3000/getMessage")
      .then((response) => response.json())
      .then((data) => setNotifications(data))
      .catch((error) => console.error("Error fetching notifications:", error));
  }, []);

  const handleToggleRead = () => {
    setShowRead(!showRead);
  };

  

  return (
    <div>
      <h3>Notifications Table</h3>
      <button onClick={handleToggleRead}>
        {showRead ? "Hide Read Messages" : "Show Read Messages"}
      </button>
      <table>
        <thead>
          <tr className="row">
            <th>Sender</th>
            <th>Recipient</th>
            <th>Date</th>
            <th>Content</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {notifications.map((notification) => (
            <tr className="row" key={notification.id}>
              <td>{notification.email}</td>
              <td>{notification.name}</td>
              <td>{notification.date}</td>
              <td className="cell">{notification.body}</td>
              <td>
                <button onClick={() => handleToggleRead(notification.id)}>
                  {notification.read ? "Mark as Unread" : "Mark as Read"}
                </button>
                
                <Link to={`/notifications/${notification.id}`}>View Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NotificationsTable;
