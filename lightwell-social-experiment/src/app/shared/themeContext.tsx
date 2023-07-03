// import { createContext, useContext } from 'react';

// export type Theme = 'light' | 'dark'

// interface ThemeContext {
//   setTheme: (value: Theme) => void;
//   theme: Theme
// }

// export const ThemeContext = createContext<ThemeContext | undefined>(undefined);

// export const useThemeContext = () => {
//   const themeContext = useContext(ThemeContext);
//   if(!themeContext) {
//     throw new Error("Must be wrapped with Theme Context Provider")
//   }

//   console.log(themeContext.theme)
//   return {
//     setTheme: themeContext.setTheme,
//     theme: themeContext.theme
//   }
// }
export {}