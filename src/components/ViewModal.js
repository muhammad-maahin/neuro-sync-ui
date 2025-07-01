import React from 'react';
import './ViewModal.css';

function ViewModal({ session, onClose }) {
  if (!session) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Session Details</h2>
        <p><strong>ID:</strong> {session.id}</p>
        <p><strong>Date:</strong> {session.date}</p>
        <p><strong>Time:</strong> {session.time}</p>
        <p><strong>Duration:</strong> {session.duration}</p>
        <p><strong>Participant:</strong> {session.participant}</p>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default ViewModal;
