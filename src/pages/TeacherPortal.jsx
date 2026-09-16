import { useState } from 'react';
import { classes, courses } from '../data/content';
import '../Portal.css';

function TeacherPortal({ onBack }) {
  const availableSpecialties = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'JAVA', 'C', 'SQL'];
  const [teacherSpecialties, setTeacherSpecialties] = useState(['HTML', 'CSS']);
  const [profileEditing, setProfileEditing] = useState(false);
  const [draftSpecialties, setDraftSpecialties] = useState(teacherSpecialties);
  const teacherCourses = courses.filter((course) => teacherSpecialties.includes(course.category));
  const [classFormOpen, setClassFormOpen] = useState(false);
  const [teacherClasses, setTeacherClasses] = useState(() => classes.filter((classItem) => teacherSpecialties.includes(classItem.course)));
  const [newClass, setNewClass] = useState({ course: 'HTML', title: '', schedule: '', seats: '' });

  const handleCreateClass = (event) => {
    event.preventDefault();
    const course = teacherCourses.find((item) => item.category === newClass.course);
    setTeacherClasses((currentClasses) => [...currentClasses, {
      title: newClass.title,
      course: newClass.course,
      mentor: 'Maya Okafor',
      schedule: newClass.schedule,
      seats: `${newClass.seats} seats left`,
      color: course.color,
      zoomLink: '',
    }]);
    setNewClass({ course: 'HTML', title: '', schedule: '', seats: '' });
    setClassFormOpen(false);
  };

  const handleEditProfile = () => {
    setDraftSpecialties(teacherSpecialties);
    setProfileEditing(true);
  };

  const handleSaveProfile = (event) => {
    event.preventDefault();
    setTeacherSpecialties(draftSpecialties);
    setTeacherClasses((currentClasses) => {
      const remainingClasses = currentClasses.filter((classItem) => draftSpecialties.includes(classItem.course));
      const matchingClasses = classes.filter((classItem) => draftSpecialties.includes(classItem.course));
      const existingKeys = new Set(remainingClasses.map((classItem) => `${classItem.title}-${classItem.schedule}`));
      return [...remainingClasses, ...matchingClasses.filter((classItem) => !existingKeys.has(`${classItem.title}-${classItem.schedule}`))];
    });
    setProfileEditing(false);
  };

  return (
    <main className="portal-page teacher-portal">
      <nav className="portal-topbar" aria-label="Teacher portal navigation">
        <button className="back-button" type="button" onClick={onBack}>← Back home</button>
        <span className="brand"><span className="brand-star">✦</span><span>Jahangir Classes</span></span>
        <span className="portal-role">Teacher portal</span>
      </nav>

      <section className="portal-hero teacher-hero">
        <div><p className="eyebrow"><span className="eyebrow-dot" /> Teaching workspace</p><h1>Make the next<br /><em>lesson count.</em></h1><p>Good morning, Maya. Your classes are ready for their next thoughtful iteration.</p></div>
        <button className="primary-button hero-portal-action" type="button" onClick={() => setClassFormOpen(!classFormOpen)}>{classFormOpen ? 'Close form' : 'Create a class'} <span>↗</span></button>
      </section>

      {classFormOpen && <section className="class-creator"><div className="class-creator-heading"><p className="eyebrow">New live class</p><h2>Create a class for your course.</h2><p>Set the details once and your learners will see it in their upcoming classes.</p></div><form onSubmit={handleCreateClass}><div className="form-field"><label htmlFor="class-course">Course</label><select id="class-course" value={newClass.course} onChange={(event) => setNewClass({ ...newClass, course: event.target.value })}>{teacherSpecialties.map((specialty) => <option key={specialty} value={specialty}>{specialty}</option>)}</select></div><div className="form-field"><label htmlFor="class-title">Class title</label><input id="class-title" required value={newClass.title} onChange={(event) => setNewClass({ ...newClass, title: event.target.value })} placeholder="e.g. Build a responsive page" /></div><div className="form-field"><label htmlFor="class-schedule">Date and time</label><input id="class-schedule" required value={newClass.schedule} onChange={(event) => setNewClass({ ...newClass, schedule: event.target.value })} placeholder="e.g. Monday, 6:00 PM" /></div><div className="form-field"><label htmlFor="class-seats">Available seats</label><input id="class-seats" required min="1" type="number" value={newClass.seats} onChange={(event) => setNewClass({ ...newClass, seats: event.target.value })} placeholder="10" /></div><button className="primary-button" type="submit">Publish class <span>↗</span></button></form></section>}

      <section className="portal-content">
        <div className="metric-grid"><article className="metric-card"><span>Active learners</span><strong>248</strong><small>↑ 12% this month</small></article><article className="metric-card"><span>Average attendance</span><strong>94%</strong><small>↑ 4% this month</small></article><article className="metric-card"><span>Course rating</span><strong>4.9 <small>/ 5</small></strong><small>From 186 reviews</small></article><article className="metric-card accent"><span>Next live class</span><strong>Mon, 6 PM</strong><small>HTML foundations live class</small></article></div>

        <section className="teacher-profile"><div className="profile-avatar">M</div><div className="profile-intro"><p className="eyebrow">Your teacher profile</p><h2>Maya Okafor</h2><p>Frontend developer and patient guide helping new builders turn ideas into clear, confident interfaces.</p></div><div className="profile-details"><span>Specialties</span><div className="specialty-list">{teacherSpecialties.map((specialty) => <span key={specialty}>{specialty}</span>)}</div><span className="profile-label">Teaching style</span><strong>Practical · Encouraging · Project-led</strong></div><button className="small-action edit-profile-button" type="button" onClick={handleEditProfile}>Edit profile</button></section>
        {profileEditing && <form className="profile-editor" onSubmit={handleSaveProfile}><div><p className="eyebrow">Update your skills</p><h2>What do you teach?</h2></div><div className="skill-options">{availableSpecialties.map((specialty) => <label key={specialty}><input type="checkbox" checked={draftSpecialties.includes(specialty)} onChange={() => setDraftSpecialties((current) => current.includes(specialty) ? current.filter((item) => item !== specialty) : [...current, specialty])} />{specialty}</label>)}</div><div className="profile-editor-actions"><button className="text-button" type="button" onClick={() => setProfileEditing(false)}>Cancel</button><button className="primary-button" type="submit" disabled={draftSpecialties.length === 0}>Save profile <span>↗</span></button></div></form>}

        <div className="portal-columns teacher-columns">
          <section><div className="portal-section-heading compact"><div><p className="eyebrow">Your teaching</p><h2>Course performance</h2></div><button className="text-button" type="button">View reports ↗</button></div><div className="performance-list">{teacherCourses.map((course) => <article className="performance-row" key={course.id}><div className={`course-mark small ${course.color}`}><span>{course.category.slice(0, 1)}</span></div><div className="performance-name"><strong>{course.title}</strong><span>{course.lessons} · {course.level}</span></div><div className="performance-value"><strong>{course.category === 'HTML' ? '82%' : '71%'}</strong><span>complete</span></div></article>)}</div></section>
          <aside className="portal-card task-panel"><p className="eyebrow">Today</p><h2>Teaching checklist</h2><label><input type="checkbox" defaultChecked /> Review portfolio submissions</label><label><input type="checkbox" /> Add notes to next class</label><label><input type="checkbox" /> Share the class recording</label><button className="text-button" type="button">Open full checklist ↗</button></aside>
        </div>

        <section className="class-management"><div className="portal-section-heading compact"><div><p className="eyebrow">Schedule</p><h2>Upcoming classes</h2></div><button className="text-button" type="button">Manage calendar ↗</button></div><div className="teacher-class-list">{teacherClasses.filter((classItem) => teacherSpecialties.includes(classItem.course)).map((classItem) => <article className="teacher-class-row" key={`${classItem.title}-${classItem.schedule}`}><span className={`schedule-dot ${classItem.color}`} /><div><strong>{classItem.title}</strong><span>Course: {classItem.course} · {classItem.schedule}</span></div><span className="enrollment-count">{classItem.seats}</span><button className="small-action" type="button">Edit</button></article>)}</div></section>
      </section>
    </main>
  );
}

export default TeacherPortal;
