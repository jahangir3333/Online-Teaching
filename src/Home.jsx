import { useState } from 'react';
import './Home.css';
import ClassesPage from './pages/ClassesPage';
import StudentPortal from './pages/StudentPortal';
import TeacherPortal from './pages/TeacherPortal';
import { categories, courses } from './data/content';

const tabLabels = {
  'All courses': 'All courses',
  HTML: 'HTML',
  CSS: 'CSS',
  JAVASCRIPT: 'JAVASCRIPT',
  REACT: 'REACT',
  JAVA: 'JAVA',
  C: 'C',
  SQL: 'SQL',
};

function Home() {
  const [activeCategory, setActiveCategory] = useState('All courses');
  const [saved, setSaved] = useState(false);
  const [joinOpen, setJoinOpen] = useState(false);
  const [joined, setJoined] = useState(false);
  const [exploring, setExploring] = useState(false);
  const [portal, setPortal] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const visibleCourses = activeCategory === 'All courses' ? courses : courses.filter((course) => course.category === activeCategory);

  const handleJoin = (event) => {
    event.preventDefault();
    setJoined(true);
  };

  const handleStartExploring = () => {
    setJoinOpen(false);
    setExploring(true);
  };

  const handleStartCourse = (course) => {
    setEnrolledCourses((currentCourses) => currentCourses.some((enrolledCourse) => enrolledCourse.id === course.id)
      ? currentCourses
      : [...currentCourses, course]);
    setPortal('student');
  };

  const handleRemoveCourse = (courseId) => {
    setEnrolledCourses((currentCourses) => currentCourses.filter((course) => course.id !== courseId));
  };

  if (exploring) return <ClassesPage onBack={() => setExploring(false)} />;
  if (portal === 'student') return <StudentPortal enrolledCourses={enrolledCourses} onRemoveCourse={handleRemoveCourse} onBack={() => setPortal(null)} />;
  if (portal === 'teacher') return <TeacherPortal onBack={() => setPortal(null)} />;

  return (
    <main className="home-shell">
      <nav className="topbar" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Jahangir Classes home"><span className="brand-star">✦</span><span>Jahangir Classes</span></a>
        <div className="nav-links"><a href="#explore">Courses</a><a href="#community">Reviews</a><a href="#about">About</a></div>
        <div className="nav-actions">
          <button className="portal-link" type="button" onClick={() => setPortal('student')}>Student portal</button>
          <button className="portal-link" type="button" onClick={() => setPortal('teacher')}>Teacher portal</button>
          <button className="icon-button" type="button" aria-label="Search">⌕</button>
          <button className="login-button" type="button">Log in</button>
          <button className="signup-button" type="button" onClick={() => { setJoined(false); setJoinOpen(true); }}>Join free</button>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="editor-window">
          <div className="editor-body">
            <div className="editor-line">
              <span className="line-no">01</span>
              <span className="code-comment"> for the thing you keep meaning to start</span>
            </div>
            <div className="editor-line editor-line-headline">
              <span className="line-no">02</span>
              <h1>Make room for what's next.</h1>
            </div>
            <div className="editor-line editor-line-body">
              <span className="line-no">03</span>
              <p className="hero-description">Practical, instructor-led courses in the languages people actually build with — taught in small live classes, at a pace that fits your week.</p>
            </div>
            <div className="editor-line editor-line-actions">
              <span className="line-no">04</span>
              <div className="hero-actions">
                <button className="run-button" type="button" onClick={() => handleStartCourse(courses[0])}><span className="run-icon">▶</span> Start your first lesson</button>
                <button className="ghost-button" type="button">View the syllabus</button>
              </div>
            </div>
            <div className="editor-line editor-line-stat">
              <span className="line-no">05</span>
              <p className="hero-stat"><span className="live-dot" />24,128 learners enrolled this year</p>
            </div>
          </div>
        </div>
      </section>

      <section className="course-section" id="explore">
        <div className="section-heading">
          <h2>Courses for your<br />next big step.</h2>
          <p className="section-note">Explore practical courses taught by people who build for a living. Choose a subject and find your next skill.</p>
        </div>
        <div className="tab-row" role="tablist" aria-label="Course categories">
          {categories.map((category) => (
            <button key={category} className={activeCategory === category ? 'tab active' : 'tab'} type="button" onClick={() => setActiveCategory(category)}>
              {tabLabels[category] || category.toLowerCase()}
            </button>
          ))}
        </div>
        <div className="course-grid">
          {visibleCourses.map((course) => (
            <article className="course-card" key={course.id}>
              <div className={`snippet-block ${course.color}`}>
                <span className="snippet-code">{course.category}</span>
              </div>
              <div className="course-content">
                <span className="level-tag">{course.level.toLowerCase()}</span>
                <h3>{course.title}</h3>
                <p className="course-meta-line">{course.instructor} — {course.lessons}</p>
                <button className="course-card-action" type="button" onClick={() => handleStartCourse(course)}>Start learning <span>↗</span></button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="quote-section" id="community">
        <div className="comment-card">
          <div className="comment-head">
            <span className="comment-avatar">L</span>
            <span className="comment-author">@lena.codes</span>
            <span className="comment-time">left a review</span>
          </div>
          <p className="comment-body">I came for a course in strategy. I stayed for the feeling that I could actually do this.</p>
          <button className={saved ? 'save-button saved' : 'save-button'} type="button" onClick={() => setSaved(!saved)}>{saved ? 'Saved to your list' : 'Save your spot'}</button>
        </div>
      </section>

      <footer className="footer" id="about">
        <span className="brand"><span className="brand-star">✦</span> Jahangir Classes</span>
        <span>Small classes. Real progress, one language at a time.</span>
        <span>© 2025 Jahangir Classes</span>
      </footer>

      {joinOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setJoinOpen(false); }}>
          <section className="signup-modal" role="dialog" aria-modal="true" aria-labelledby="signup-title">
            <button className="modal-close" type="button" aria-label="Close signup form" onClick={() => setJoinOpen(false)}>×</button>
            {joined ? (
              <div className="signup-success">
                <span className="success-icon">✓</span>
                <h2>You're in.</h2>
                <p>Your first class link will be in your inbox shortly.</p>
                <button className="primary-button" type="button" onClick={handleStartExploring}>See this week's classes</button>
              </div>
            ) : (
              <>
                <h2 id="signup-title">Start learning today.</h2>
                <p className="modal-intro">Create a free account to save your progress and join live classes each week.</p>
                <form onSubmit={handleJoin}>
                  <label htmlFor="join-name">Your name</label>
                  <input id="join-name" name="name" type="text" placeholder="e.g. Alex Morgan" required />
                  <label htmlFor="join-email">Email address</label>
                  <input id="join-email" name="email" type="email" placeholder="you@example.com" required />
                  <button className="primary-button modal-submit" type="submit">Create free account</button>
                </form>
                <p className="modal-terms">By joining, you agree to our terms and privacy policy.</p>
              </>
            )}
          </section>
        </div>
      )}

    </main>
  );
}

export default Home;
