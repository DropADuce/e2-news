import {useContext} from "react";

import {LOCAL_STORAGE_THEME_KEY, ThemeContext, THEMES} from "../lib/ThemeContext";

type TUseThemeResult = [THEMES, () => void]

export const useTheme = (): TUseThemeResult => {
    const {theme, setTheme} = useContext(ThemeContext);
    const toggleTheme = () => {
        const newTheme = theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    };

    return [theme, toggleTheme]
};

