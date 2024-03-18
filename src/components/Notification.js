import React from "react";

const Notification = ({showNotification}) => {
  return (
    // conditional that adds class show
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>You have already entered this letter</p>
    </div>
  );
}

export default Notification;
