import { createContext } from 'react';

export enum THEMES {
    DARK = 'app_dark_theme',
    LIGHT = 'app_light_theme',
}

export interface IThemeContextProps {
    theme?: THEMES,
    setTheme?: (theme: THEMES) => void,
}
export const ThemeContext = createContext<IThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
