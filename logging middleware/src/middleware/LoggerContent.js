import React, { createContext, useContext } from 'react';
import { logToServer } from './logToServer';

const LoggerContext = createContext(() => {});

export const LoggerProvider = ({ children }) => {
  const log = async (stack, level, pkg, message) => {
    await logToServer(stack, level, pkg, message);
  };

  return (
    <LoggerContext.Provider value={log}>
      {children}
    </LoggerContext.Provider>
  );
};

export const useLoggerContext = () => useContext(LoggerContext);
