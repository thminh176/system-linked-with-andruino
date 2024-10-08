import React, { useState } from "react";
const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);

  const handleAddNotification = (message) => {
    setNotifications([...notifications, message]);
  };

  const handleClearNotifications = () => {
    setNotifications([]);
  };

  return (
    <div>
      <button onClick={() => setShowNotifications(!showNotifications)}>
        {showNotifications ? "Ẩn Thông Báo" : "Hiện Thông Báo"}
      </button>
      {showNotifications && (
        <div
          className="notification-container"
          style={{ position: "fixed", top: 10, left: 10 }}
        >
          <ul>
            {notifications.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
          <button onClick={handleClearNotifications}>Clear Thông Báo</button>
        </div>
      )}
    </div>
  );
};

export default Notification;
