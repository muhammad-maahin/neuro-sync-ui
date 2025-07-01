import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import SessionCard from '../components/SessionCard';
import ViewModal from '../components/ViewModal';
import './SessionHistoryScreen.css';
import DashboardLayout from '../components/DashboardLayout';

const dummySessions = [
  {
    id: '#NS-2025-011',
    date: 'June 21, 2025',
    time: '08:42 PM',
    duration: '12 mins 48 sec',
    participant: 'TestSubject001',
  },
  {
    id: '#NS-2025-010',
    date: 'June 20, 2025',
    time: '07:15 PM',
    duration: '10 mins 30 sec',
    participant: 'Subject_A',
  },
  {
    id: '#NS-2025-009',
    date: 'June 19, 2025',
    time: '05:50 PM',
    duration: '14 mins 02 sec',
    participant: 'Participant_9',
  },
  {
    id: '#NS-2025-008',
    date: 'June 18, 2025',
    time: '06:00 PM',
    duration: '11 mins 27 sec',
    participant: 'NeuroTest_44',
  },
  {
    id: '#NS-2025-007',
    date: 'June 17, 2025',
    time: '09:18 AM',
    duration: '9 mins 10 sec',
    participant: 'TestAlphaX',
  },
];

function SessionHistoryScreen() {
  const [sessions, setSessions] = useState(dummySessions);
  const [selectedSession, setSelectedSession] = useState(null);

  const handleView = (session) => {
    setSelectedSession(session);
  };

  const closeModal = () => {
    setSelectedSession(null);
  };

  const handleDelete = (id) => {
    const updatedSessions = sessions.filter((s) => s.id !== id);
    setSessions(updatedSessions);
  };

return (
  <>
    <Helmet>
      <title>NeuroSync | Session History</title>
    </Helmet>

    <DashboardLayout active="session-history">
      <div className="session-history-wrapper">
        <h2>Session History</h2>

        {sessions.map((session) => (
          <SessionCard
            key={session.id}
            session={session}
            onView={handleView}
            onDelete={handleDelete}
          />
        ))}

        {selectedSession && (
          <ViewModal session={selectedSession} onClose={closeModal} />
        )}
      </div>
    </DashboardLayout>
  </>
);

}

export default SessionHistoryScreen;





