import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, World!</h1>
        <p>This is a basic React app.</p>
      </div>
    );
  }
}

export default App;



// import React, { useState } from 'react';
// import './App.css';
// import Button from '@mui/material/Button';

// function App() {
//   // Define state to keep track of the visibility of each section
//   const [isSectionVisible, setIsSectionVisible] = useState({
//     frontend: false,
//     python: false,
//     dataStructures: false,
//     devOps: false,
//     reactNative: false,
//     serverSide: false,
//   });

//   // Function to toggle the visibility of a section
//   const toggleSection = (section) => {
//     setIsSectionVisible((prevState) => ({
//       ...prevState,
//       [section]: !prevState[section],
//     }));
//   };

//   return (
//     <div className="App">
//       <div className="overlay" id="overlay">
//         <header className="App-header">
//           <h1 className="text-with-glow">About Me</h1>

//           <p>
//             Hello, I'm Raphael, but my friends call me Raphie. Excited full-stack developer dedicated to creating innovative and meaningful web and mobile applications.
//           </p>

//           <p>
//             My expertise includes:
//           </p>

//           {/* Front-End Development */}
//           <h2>
//             <Button onClick={() => toggleSection('frontend')}>Front-End Development</Button>
//           </h2>
//           {isSectionVisible.frontend && (
//             <ul>
//               <li>HTML</li>
//               <li>CSS</li>
//               <li>JavaScript</li>
//               <li>Frameworks like Django (Python) for back-end development</li>
//               <li>Libraries like jQuery (JavaScript) for simplifying front-end tasks</li>
//               <li>Frameworks like Bootstrap for responsive web design</li>
//               <li>Libraries like jQuery for DOM manipulation</li>
//               <li>JavaScript (React is a JavaScript library)</li>
//               <li>State management libraries like Redux</li>
//               <li>Routing libraries like React Router</li>
//             </ul>
//           )}

//           {/* Python Development */}
//           <h2>
//             <Button onClick={() => toggleSection('python')}>Python Development</Button>
//           </h2>
//           {isSectionVisible.python && (
//             <ul>
//               <li>Python</li>
//               <li>Libraries like pandas for data manipulation</li>
//               <li>Frameworks like Flask and Django for web development</li>
//               <li>Libraries like NumPy for numerical computing and Flask for database interactions</li>
//             </ul>
//           )}

//           {/* Data Structures and Algorithms */}
//           <h2>
//             <Button onClick={() => toggleSection('dataStructures')}>Data Structures and Algorithms</Button>
//           </h2>
//           {isSectionVisible.dataStructures && (
//             <div>
//               <p>
//                 Proficient in concepts related to data structures and algorithms.
//               </p>
//               <p>
//                 Break a problem into smaller parts through divide and conquer, solves each part independently, and then combines the solutions to solve the original problem.
//               </p>
//             </div>
//           )}

//           {/* Modern Software Engineering with DevOps */}
//           <h2>
//             <Button onClick={() => toggleSection('devOps')}>Modern Software Engineering with DevOps</Button>
//           </h2>
//           {isSectionVisible.devOps && (
//             <ul>
//               <li>Various scripting languages like Python, Bash, or PowerShell</li>
//               <li>Tools like Docker and Kubernetes for containerization and orchestration</li>
//               <li>Continuous Integration/Continuous Deployment (CI/CD) tools like Jenkins</li>
//             </ul>
//           )}

//           {/* Multiplatform Mobile App Development with React Native */}
//           <h2>
//             <Button onClick={() => toggleSection('reactNative')}>Multiplatform Mobile App Development with React Native</Button>
//           </h2>
//           {isSectionVisible.reactNative && (
//             <ul>
//               <li>JavaScript (React Native is based on React)</li>
//               <li>Libraries and components specific to React Native</li>
//               <li>Mobile development concepts and tools</li>
//             </ul>
//           )}

//           {/* Server-side Development */}
//           <h2>
//             <Button onClick={() => toggleSection('serverSide')}>Server-side Development</Button>
//           </h2>
//           {isSectionVisible.serverSide && (
//             <ul>
//               <li>Node.js (JavaScript runtime)</li>
//               <li>Express (Node.js web framework)</li>
//               <li>MongoDB (NoSQL database)</li>
//               <li>Libraries like Mongoose for MongoDB interaction</li>
//             </ul>
//           )}
//         </header>
//       </div>
//     </div>
//   );
// }

// export default App;
