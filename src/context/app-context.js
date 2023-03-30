import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [plan, setPlan] = useState([""]);
  const [adds, setAdds] = useState([]);
  const [currentPage, setcurrentPage] = useState(0);
  const [changePlanMonth, setchangePlanMonth] = useState(false);

  const nextStepHandler = () => {
    setcurrentPage((prevPage) => prevPage + 1);
    if (currentPage === 3) {
      setcurrentPage(0);
    }
  };

  const backStepHandler = () => {
    setcurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <AppContext.Provider
      value={{
        plan,
        setPlan,
        adds,
        setAdds,
        nextStepHandler,
        backStepHandler,
        currentPage,
        changePlanMonth,
        setchangePlanMonth,
        setcurrentPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
