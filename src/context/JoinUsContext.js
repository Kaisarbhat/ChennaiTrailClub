'use client';
import { createContext, useContext, useState } from 'react';

const JoinUsContext = createContext();

export function JoinUsProvider({ children }) {
  const [isJoinUsOpen, setIsJoinUsOpen] = useState(false);

  const toggleJoinUs = () => {
    setIsJoinUsOpen(!isJoinUsOpen);
  };

  return (
    <JoinUsContext.Provider
      value={{ isJoinUsOpen, setIsJoinUsOpen, toggleJoinUs }}
    >
      {children}
    </JoinUsContext.Provider>
  );
}

export function useJoinUs() {
  const context = useContext(JoinUsContext);
  if (context === undefined) {
    throw new Error('useJoinUs must be used within a JoinUsProvider');
  }
  return context;
}
