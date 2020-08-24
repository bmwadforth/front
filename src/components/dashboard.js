import React, { useState } from 'react';
import NavigationLine from './common/navigationLine';
import background from '../assets/styles/unnamed.gif';

export default function Dashboard() {
  const [step, setStep] = useState(0);
  return (
    <div className="dashboard-container" style={step === 4 ? { backgroundImage: `url(${background})` } : {}}>
      <NavigationLine />
      <div className="dashboard">
        <div className="credentials-container">
          <div className="credentials">
            <span>
              <sub>Brannon</sub>
              <sub>Australian</sub>
              <sub>Software Consultant</sub>
              <sub>Aspiring Ethical Hacker</sub>
            </span>
          </div>
        </div>
        {/*
        <div className="oh-no">
          {step === 0 && <h1 onClick={() => setStep(1)}>Click me</h1>}
          {step === 1 && <h1 onClick={() => setStep(2)}>Again.</h1>}
          {step === 2 && <h1 onClick={() => setStep(3)}>One more time.</h1>}
          {step === 3 && <h1 onClick={() => setStep(4)}>Ok no more.</h1>}
          {step === 4 && <h1 onClick={() => setStep(5)}>Don't.</h1>}
          {step === 5 && <h1 onClick={() => setStep(6)}>Stop.</h1>}
          {step === 6 &&
            window.location.replace('https://www.cyber.gov.au/acsc/view-all-content/programs/stay-smart-online')}
        </div>*/}
      </div>
    </div>
  );
}
