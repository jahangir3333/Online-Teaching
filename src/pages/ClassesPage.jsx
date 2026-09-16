import { useState } from 'react';
import { classes } from '../data/content';

function ClassesPage({ onBack }) {
  const [joinedClass, setJoinedClass] = useState(null);

  const handleJoinClass = (classItem) => {
    if (!classItem.zoomLink) {
      window.alert('This class does not have a Zoom link set up yet. Please check back soon.');
      return;
    }

    const idMatch = classItem.zoomLink.match(/\/j\/(\d+)/);
    const meetingId = idMatch ? idMatch[1] : 'See link';

    setJoinedClass({ title: classItem.title, meetingId, meetingUrl: classItem.zoomLink });
    window.open(classItem.zoomLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="classes-page">
      <nav className="topbar classes-topbar" aria-label="Classes navigation">
        <button className="back-button" type="button" onClick={onBack}>← Back home</button>
        <span className="brand"><span className="brand-star">✦</span><span>Jahangir Classes</span></span>
        <span className="member-badge">Member area</span>
      </nav>
      <section className="classes-intro"><p className="eyebrow"><span className="eyebrow-dot" /> Live learning</p><h1>Choose a class.<br /><em>Make it yours.</em></h1><p>Small, focused groups. Real conversation. A little momentum every week.</p></section>
      <section className="class-list" aria-label="Available classes">
        {classes.map((classItem) => <article className="class-option" key={classItem.title}><div className={`class-color ${classItem.color}`}><span>✦</span></div><div className="class-details"><p className="class-type">Live workshop</p><h2>{classItem.title}</h2><p>with {classItem.mentor}</p><div className="class-info"><span>{classItem.schedule}</span><span>{classItem.seats}</span></div></div><div className="class-action">{joinedClass?.title === classItem.title ? <><span className="joined-label">Joined ✓</span><span className="meeting-id">Meeting ID: {joinedClass.meetingId}</span><a className="zoom-link" href={joinedClass.meetingUrl} target="_blank" rel="noreferrer">Rejoin Zoom meeting <span>↗</span></a></> : <button className="primary-button" type="button" onClick={() => handleJoinClass(classItem)}>Join now <span>↗</span></button>}</div></article>)}
      </section>
      <p className="classes-note">Can’t make a live class? Every session is recorded and available in your learning space.</p>
    </main>
  );
}

export default ClassesPage;