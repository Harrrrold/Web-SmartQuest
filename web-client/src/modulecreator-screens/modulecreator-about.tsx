import React from 'react';
import Sidebar from '../components/sidebar';
import '../styles/global.css';
import Logo2 from '../assets/Logo2.png';

const ModuleCreatorAbout = () => {
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <div className="about-screen">
          <div className="screen-title">About</div>

          <div className="brand-logo-large">
            <img src={Logo2} alt="SmartQuest" />
          </div>

          <p className="about-description">
            SmartQuest is a mobile game-based learning application designed to make mathematics fun and
            engaging for pupils. It combines interactive quizzes, customizable characters, and achievement
            rewards to enhance learning through play. With features like a quiz-to-game converter, dashboard
            statistics, and a module system, SmartQuest supports personalized learning while keeping pupils
            motivated.
          </p>

          <div className="dev-section">
            <div className="dev-title">Developed by:</div>
            <ul className="dev-list">
              <li>Harrold Resma</li>
              <li>John Ryan Gomez</li>
              <li>Charles Elejean Elegino</li>
              <li>Raul William Rafols</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModuleCreatorAbout;