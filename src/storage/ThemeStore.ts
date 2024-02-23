import { create } from 'zustand';

interface ThemeStore {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const useThemeStore = create<ThemeStore>((set) => {
  const savedDarkMode = localStorage.getItem('darkMode');
  const initialDarkMode = savedDarkMode ? JSON.parse(savedDarkMode) : false;

  return {
    darkMode: initialDarkMode,
    toggleDarkMode: () => set((state) => {
      const newDarkMode = !state.darkMode;
      localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
      return { darkMode: newDarkMode };
    }),
  };
});
