import { createContext, useState } from "react";

export const StepContext = createContext();

export const StepContextProvider = ({ children }) => {
  var no=1
  const [step, setStep] = useState(no);
  return (
    <StepContext.Provider value={{ step, setStep }}>
      {children}
    </StepContext.Provider>
  );
};
