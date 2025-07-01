import React from 'react';
import { PlayCircle, Download, Eye, Trash2 } from 'lucide-react';
import './SessionCard.css';

function SessionCard({ session, onView, onDelete }) {
    return (
        <div className="session-card">
            {/* Left Info Block */}
            <div className="session-info">
                <p><strong>Session ID:</strong> {session.id}</p>
                <p><strong>Date:</strong> {session.date}</p>
                <p><strong>Time:</strong> {session.time}</p>
                <p><strong>Duration:</strong> {session.duration}</p>
                <p><strong>Participant:</strong> {session.participant}</p>
            </div>

            {/* Right Action Buttons */}
            <div className="session-actions">
                <button className="replay-btn">
                    <PlayCircle size={18} style={{ marginRight: '6px' }} />
                    Replay
                </button>
                <button className="download-btn">
                    <Download size={18} style={{ marginRight: '6px' }} />
                    Download
                </button>
                <button className="view-btn" onClick={() => onView(session)}>
                    <Eye size={18} style={{ marginRight: '6px' }} />
                    View
                </button>
                <button className="delete-btn" onClick={() => onDelete(session.id)}>
                    <Trash2 size={18} style={{ marginRight: '6px' }} />
                    Delete
                </button>

            </div>
        </div>
    );
}

export default SessionCard;




