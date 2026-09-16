import { useState } from 'react';
import '../Portal.css';

function CourseDetailsPage({ course, onBack }) {
  const [started, setStarted] = useState(false);
  const syllabus = course.syllabus || ['Course introduction', 'Core concepts and guided practice', 'Build a practical project', 'Review and next steps'];

  return (
    <main className="portal-page course-details-page">
      <nav className="portal-topbar" aria-label="Course details navigation">
        <button className="back-button" type="button" onClick={onBack}>← Back to my courses</button>
        <span className="brand"><span className="brand-star">✦</span><span>Jahangir Classes</span></span>
        <span className="portal-role">Course details</span>
      </nav>
      <section className="course-details-content">
        <div className={`course-details-banner ${course.color}`}><span>{course.category}</span><strong>{course.lessons}</strong></div>
        <p className="eyebrow">{course.level} course</p>
        <h1>{course.title}</h1>
        <p className="course-details-intro">Learn with {course.instructor} through practical, instructor-led lessons designed to help you build with confidence.</p>
        <div className="course-details-meta"><span>Instructor<strong>{course.instructor}</strong></span><span>Level<strong>{course.level}</strong></span><span>Lessons<strong>{course.lessons}</strong></span></div>
        <section className="full-syllabus"><p className="eyebrow">Your roadmap</p><h2>Course syllabus</h2><ol className="syllabus-list">{syllabus.map((lesson) => <li key={lesson}>{lesson}</li>)}</ol></section>
        <button className="primary-button" type="button" onClick={() => setStarted(true)}>{started ? 'Lesson ready ✓' : 'Start lesson'} <span>↗</span></button>
        {started && <section className="lesson-content" aria-live="polite"><p className="eyebrow">Lesson 01 · Start here</p><h2>{syllabus[0]}</h2><p>Begin with this guided lesson, then practise the idea by creating a small {course.category} example of your own.</p><div className="resource-list"><article><span>Read</span><strong>{course.category} quick reference</strong><p>Review the core concepts before you start building.</p></article><article><span>Watch</span><strong>Instructor walkthrough</strong><p>Follow along with a practical example from {course.instructor}.</p></article><article><span>Try</span><strong>Build a small project</strong><p>Apply the lesson and check your work against the syllabus.</p></article></div></section>}
      </section>
    </main>
  );
}

export default CourseDetailsPage;
