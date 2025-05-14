"use client";

import { createContext, useContext, useReducer, ReactNode } from "react";

// State Type
interface LayoutState {
  isNavOpen: boolean;
}

// Action Types
type LayoutAction = { type: "TOGGLE_NAV" };

// Initial State
const initialState: LayoutState = {
  isNavOpen: false,
};

// Reducer Function
const layoutReducer = (
  state: LayoutState,
  action: LayoutAction
): LayoutState => {
  switch (action.type) {
    case "TOGGLE_NAV":
      return { ...state, isNavOpen: !state.isNavOpen };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

// Context Type
interface LayoutContextType {
  state: LayoutState;
  dispatch: React.Dispatch<LayoutAction>;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayout must be used within LayoutProvider");
  }
  return context;
};

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(layoutReducer, initialState);

  return (
    <LayoutContext.Provider value={{ state, dispatch }}>
      {children}
    </LayoutContext.Provider>
  );
};
