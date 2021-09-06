import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  FC,
  Children,
} from "react";

const AuthContext = createContext<{}>({});

// provider pattern to extend context
export const ContextProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export const useAuth = (): {} => {
  return useContext<{}>(AuthContext);
};
