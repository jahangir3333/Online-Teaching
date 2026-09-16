export const categories = ['All courses', 'HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'JAVA', 'C', 'SQL'];

export const courses = [
  { id: 'html-brand', title: 'Build your first web page', instructor: 'Maya Okafor', category: 'HTML', lessons: '12 lessons', level: 'Beginner', color: 'coral', snippet: '<h1>Hello, world</h1>', syllabus: ['HTML structure and semantic elements', 'Links, images, and accessible content', 'Forms and user input', 'Build and publish a complete page'] },
  { id: 'css-founder', title: 'Style interfaces with confidence', instructor: 'Jon Bell', category: 'CSS', lessons: '18 lessons', level: 'Intermediate', color: 'blue', snippet: '.card { color: teal; }', syllabus: ['Selectors, cascade, and the box model', 'Responsive layouts with Flexbox', 'Grid systems and reusable components', 'Transitions and polished UI states'] },
  { id: 'js-craft', title: 'Write JavaScript that feels like craft', instructor: 'Ravi Shah', category: 'JAVASCRIPT', lessons: '24 lessons', level: 'Advanced', color: 'yellow', snippet: 'const magic = () => {}', syllabus: ['Modern syntax and data types', 'Functions, objects, and modules', 'Async code and API requests', 'Build an interactive browser app'] },
  { id: 'react-craft', title: 'Build interfaces that feel like craft', instructor: 'Ravi Shah', category: 'REACT', lessons: '24 lessons', level: 'Advanced', color: 'blue', snippet: '<Component />', syllabus: ['Components and JSX', 'Props, state, and events', 'Effects and data fetching', 'Build a responsive React interface'] },
  { id: 'java-oop', title: 'Master object-oriented Java', instructor: 'Priya Nair', category: 'JAVA', lessons: '20 lessons', level: 'Intermediate', color: 'coral', snippet: 'public class Main {}', syllabus: ['Classes, objects, and methods', 'Inheritance and interfaces', 'Collections and error handling', 'Build a practical Java application'] },
  { id: 'c-lang', title: 'Learn C from the ground up', instructor: 'Tom Bricker', category: 'C', lessons: '16 lessons', level: 'Beginner', color: 'yellow', snippet: 'int main(void) {}', syllabus: ['Variables, types, and control flow', 'Functions and memory basics', 'Pointers and arrays', 'Compile and debug a C program'] },
  { id: 'sql-data', title: 'Ask better questions of your data', instructor: 'Ines Park', category: 'SQL', lessons: '14 lessons', level: 'Beginner', color: 'blue', snippet: 'SELECT * FROM ideas;', syllabus: ['Tables, rows, and relationships', 'Filtering and sorting results', 'Joins and aggregate queries', 'Create a useful data report'] },
];



// Replace each zoomLink below with the real Zoom meeting URL for that class
// (from your Zoom account: Meetings -> Schedule a Meeting -> copy the invite link).
export const classes = [
  { title: 'HTML foundations live class', course: 'HTML', mentor: 'Maya Okafor', schedule: 'Mon, 6:00 PM', seats: '8 seats left', color: 'coral', zoomLink: 'https://zoom.us/j/1111111111?pwd=REPLACE_ME' },
  { title: 'CSS layout workshop', course: 'CSS', mentor: 'Jon Bell', schedule: 'Tue, 7:00 PM', seats: '4 seats left', color: 'blue', zoomLink: 'https://zoom.us/j/2222222222?pwd=REPLACE_ME' },
  { title: 'JavaScript coding lab', course: 'JAVASCRIPT', mentor: 'Ravi Shah', schedule: 'Wed, 6:30 PM', seats: '12 seats left', color: 'yellow', zoomLink: 'https://zoom.us/j/3333333333?pwd=REPLACE_ME' },
  { title: 'React interface studio', course: 'REACT', mentor: 'Ravi Shah', schedule: 'Thu, 7:00 PM', seats: '6 seats left', color: 'blue', zoomLink: 'https://zoom.us/j/4444444444?pwd=REPLACE_ME' },
  { title: 'Java programming workshop', course: 'JAVA', mentor: 'Priya Nair', schedule: 'Fri, 6:00 PM', seats: '10 seats left', color: 'coral', zoomLink: 'https://zoom.us/j/5555555555?pwd=REPLACE_ME' },
  { title: 'C fundamentals lab', course: 'C', mentor: 'Tom Bricker', schedule: 'Sat, 10:00 AM', seats: '9 seats left', color: 'yellow', zoomLink: 'https://zoom.us/j/6666666666?pwd=REPLACE_ME' },
  { title: 'SQL data clinic', course: 'SQL', mentor: 'Ines Park', schedule: 'Sat, 2:00 PM', seats: '7 seats left', color: 'blue', zoomLink: 'https://zoom.us/j/7777777777?pwd=REPLACE_ME' },
];