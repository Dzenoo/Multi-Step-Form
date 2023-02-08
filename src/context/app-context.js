import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [plan, setPlan] = useState([""]);
  const [adds, setAdds] = useState([]);

  return (
    <AppContext.Provider value={{ plan, setPlan, adds, setAdds }}>
      {children}
    </AppContext.Provider>
  );
};
