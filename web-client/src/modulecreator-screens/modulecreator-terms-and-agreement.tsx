import React from 'react';
import Sidebar from '../components/sidebar';
import '../styles/global.css';
import Logo2 from '../assets/Logo2.png';

const ModuleCreatorTermsAndAgreement = () => {
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <div className="terms-screen">
          <div className="about-title">Terms and Agreement</div>

          <div className="brand-logo-large">
            <img src={Logo2} alt="SmartQuest" />
          </div>

          <h2 className="terms-heading">Terms and Agreement</h2>

          <p className="terms-text">
            By using the SmartQuest application, you agree to follow its terms of use. All features and content
            provided are for educational purposes only and must be used responsibly. SmartQuest may collect
            non-personal data, such as user progress, to improve learning experience; no private information is
            shared with third parties. Users must not misuse the app or attempt to interfere with its
            functionality. All content within the app is the property of SmartQuest and may not be copied or
            redistributed without permission. Continued use of the app implies acceptance of these terms.
          </p>
        </div>
      </div>
    </>
  );
};

export default ModuleCreatorTermsAndAgreement;