import { createContext } from "react";

export default function ThemeContext({ children }) {
  let theme = createContext(".theme-dark");
  return <>{children}</>;
}
