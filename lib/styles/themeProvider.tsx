import React, { createContext, useState } from "react";

// 1. Create a custom theme object
interface Theme {
  Colors: {
    primary: string;
    onPrimary: string;
    secondary: string;
    onSecondary: string;
    background: string;
    text: string;
    border: string;
    success: string;
    link: string;
    danger: string;
  };
  FontStyles: {
    fontFamily: string;
    fontSize: number;
    fontWeight: string;
  };
}

const customTheme: Theme = {
  Colors: {
    primary: "#007bff",
    onPrimary: "#fff",
    secondary: "#6c757d",
    onSecondary: "#fff",
    background: "#fff",
    text: "#212529",
    success: "#28a745",
    link: "#007bff",
    danger: "#dc3545",
    border: "#e9ecef",
  },
  FontStyles: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: 14,
    fontWeight: "normal",
  },
};
interface UIProviderProps {
  children: JSX.Element;
  theme: Theme;
}
// 2. Create a ThemeContext
export const ThemeContext = createContext<Theme>(customTheme);

// 3. Create a UIProvider component
export default function BeansProvider(props: UIProviderProps) {
  const { theme, children } = { ...props };
  const currentTheme = useState<typeof theme>(theme)[0];
  return (
    <ThemeContext.Provider value={currentTheme}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => React.useContext(ThemeContext);
