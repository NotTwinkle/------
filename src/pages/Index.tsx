import React, { useState } from "react";
import Envelope from "../components/Envelope";
import ProposalLetter from "../components/ProposalLetter";
import Celebration from "../components/Celebration";
import MPINScreen from "../components/MPINScreen";
import ButterflyBackground from "../components/ButterflyBackground";

const Index = () => {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleResponse = (response: boolean) => {
    if (response) {
      setShowCelebration(true);
    }
  };

  const handleMPINSuccess = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <MPINScreen onSuccess={handleMPINSuccess} />;
  }

  if (showCelebration) {
    return <Celebration />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-blue-200 flex items-center justify-center p-4">
      <ButterflyBackground />
      {!isEnvelopeOpen ? (
        <Envelope onClick={() => setIsEnvelopeOpen(true)} />
      ) : (
        <ProposalLetter onResponse={handleResponse} />
      )}
    </div>
  );
};

export default Index;
