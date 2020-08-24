import React, { useState } from 'react';
import SocialLine from './common/social';
import NavigationLine from './common/navigationLine';
import background from '../assets/styles/unnamed.gif';

export default function Dashboard() {
  const [step, setStep] = useState(0);
  return (
    <div className="dashboard-container" style={step === 4 ? { backgroundImage: `url(${background})` } : {}}>
      <NavigationLine />
      <div className="dashboard">
        <div className="oh-no">
          {step === 0 && <h1 onClick={() => setStep(1)}>Click me</h1>}
          {step === 1 && (
            <h1 onClick={() => setStep(2)}>Never, ever click something when someone asks you to. Click me again.</h1>
          )}
          {step === 2 && <h1 onClick={() => setStep(3)}>.........</h1>}
          {step === 3 && <h1 onClick={() => setStep(4)}>Don't.</h1>}
          {step === 4 && <h1 onClick={() => setStep(5)}>Stop.</h1>}
          {step === 5 &&
            window.location.replace('https://www.cyber.gov.au/acsc/view-all-content/programs/stay-smart-online')}
        </div>
      </div>
      <SocialLine />
    </div>
  );
}
