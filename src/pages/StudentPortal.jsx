import { useState } from 'react';
import { classes } from '../data/content';
import CourseDetailsPage from './CourseDetailsPage';
import '../Portal.css';

function StudentPortal({ enrolledCourses = [], onRemoveCourse, onBack }) {
  const [joinedClass, setJoinedClass] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const liveClasses = classes.filter((classItem) => enrolledCourses.some((course) => course.category === classItem.course));

  const handleRemoveCourse = (courseId) => {
    onRemoveCourse(courseId);
  };

  const handleJoinClass = (classItem) => {
    if (!classItem.zoomLink) {
      window.alert('This class does not have a Zoom link yet.');
      return;
    }

    setJoinedClass(classItem.title);
    window.open(classItem.zoomLink, '_blank', 'noopener,noreferrer');
  };

  if (selectedCourse) return <CourseDetailsPage course={selectedCourse} onBack={() => setSelectedCourse(null)} />;

  return (
    <main className="portal-page student-portal">
      <nav className="portal-topbar" aria-label="Student portal navigation">
        <button className="back-button" type="button" onClick={onBack}>← Back home</button>
        <span className="brand"><span className="brand-star">✦</span><span>Jahangir Classes</span></span>
        <span className="portal-role">Student portal</span>
      </nav>

      <section className="portal-hero">
        <div>
          <p className="eyebrow"><span className="eyebrow-dot" /> Your learning space</p>
          <h1>Keep your<br /><em>momentum.</em></h1>
          <p>Welcome back, Alex. You are 68% of the way through your current learning plan.</p>
        </div>
        <div className="progress-panel" aria-label="Overall progress">
          <span className="progress-label">Overall progress</span>
          <strong>68%</strong>
          <div className="progress-track"><span style={{ width: '68%' }} /></div>
          <span className="progress-foot">12 of 18 lessons complete</span>
        </div>
      </section>

      <section className="portal-content">
        {enrolledCourses.length > 0 && <div className="enrollment-notice"><span className="success-icon">✓</span><div><strong>{enrolledCourses.length} course{enrolledCourses.length > 1 ? 's' : ''} in your learning space</strong><span>Your selected courses are ready to continue</span></div></div>}
        <div className="portal-section-heading"><div><p className="eyebrow">Continue learning</p><h2>Pick up where you left off.</h2></div><button className="text-button" type="button">View all courses ↗</button></div>
        <div className="student-course-grid">
          {enrolledCourses.map((course, index) => (
            <article className="portal-card learning-card" key={course.id}>
              <div className={`course-mark ${course.color}`}><span>{String(index + 1).padStart(2, '0')}</span></div>
              <div className="learning-card-body"><button className="course-title-button" type="button" onClick={() => setSelectedCourse(course)}><span className="level-tag">{course.category.toLowerCase()} / {course.level.toLowerCase()}</span><h3>{course.title}</h3></button><p>Ready to start · Added course</p><div className="mini-progress"><span style={{ width: `${Math.max(28, 72 - (index * 11))}%` }} /></div><div className="course-actions"><button className="card-action" type="button" onClick={() => setSelectedCourse(course)}>{'Continue lesson ↗'}</button><button className="remove-course" type="button" onClick={() => handleRemoveCourse(course.id)}>Remove course</button></div></div>
            </article>
          ))}
        </div>
        {enrolledCourses.length === 0 && <p className="empty-courses">No courses added yet. Go back home to choose your first course.</p>}

        <div className="portal-columns">
          <section><div className="portal-section-heading compact"><div><p className="eyebrow">Coming up</p><h2>Live classes</h2></div><button className="text-button" type="button">See calendar ↗</button></div><div className="schedule-list">{liveClasses.map((classItem) => <article className="schedule-row" key={classItem.title}><span className={`schedule-dot ${classItem.color}`} /><div><strong>{classItem.title}</strong><span>Course: {classItem.course}</span><span>{classItem.schedule} · with {classItem.mentor}</span></div>{joinedClass === classItem.title ? <a className="zoom-link" href={classItem.zoomLink} target="_blank" rel="noreferrer">Rejoin Zoom ↗</a> : <button className="small-action join-now-button" type="button" onClick={() => handleJoinClass(classItem)}>Join now ↗</button>}</article>)}{liveClasses.length === 0 && <p className="empty-courses">Add a course to see its upcoming live classes.</p>}</div></section>
          <aside className="streak-panel"><p className="eyebrow">Your streak</p><strong>7 days</strong><p>Keep showing up. One small lesson is still progress.</p><span className="streak-line">● ● ● ● ● ● ●</span></aside>
        </div>
      </section>

    </main>
  );
}

export default StudentPortal;
