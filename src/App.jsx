import React, { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Header from './components/Header'; // Import the Header component

function App() {
  // Define state to keep track of the visibility of each section
  const [isSectionVisible, setIsSectionVisible] = useState({
    frontend: false,
    python: false,
    dataStructures: false,
    devOps: false,
    reactNative: false,
    serverSide: false,
  });

  // Function to toggle the visibility of a section
  const toggleSection = (section) => {
    setIsSectionVisible((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="App">
      {/* Include the Header component */}
      <Header />

      <h1>About Me</h1>

      <p>
        Hello, I'm Raphael, but my friends call me Raphie. Excited full-stack developer dedicated to creating innovative and meaningful web and mobile applications.
      </p>

      <p>
        My expertise includes:
      </p>

      {/* Front-End Development */}
      <h2>
        <Button onClick={() => toggleSection('frontend')}>Front-End Development</Button>
      </h2>
      {isSectionVisible.frontend && (
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          {/* Add more items here */}
        </ul>
      )}

      {/* Python Development */}
      <h2>
        <Button onClick={() => toggleSection('python')}>Python Development</Button>
      </h2>
      {isSectionVisible.python && (
        <ul>
          <li>Python</li>
          <li>Libraries like pandas for data manipulation</li>
          {/* Add more items here */}
        </ul>
      )}

      {/* Data Structures and Algorithms */}
      <h2>
        <Button onClick={() => toggleSection('dataStructures')}>Data Structures and Algorithms</Button>
      </h2>
      {isSectionVisible.dataStructures && (
        <div>
          <p>
            Proficient in concepts related to data structures and algorithms.
          </p>
          <p>
            Break a problem into smaller parts through divide and conquer, solves each part independently, and then combines the solutions to solve the original problem.
          </p>
        </div>
      )}

      {/* Add more sections here */}
    </div>
  );
}

export default App;
