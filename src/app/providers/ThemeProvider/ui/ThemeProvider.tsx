import React, {FC, useMemo, useState} from "react";

import {LOCAL_STORAGE_THEME_KEY, ThemeContext, THEMES} from "../lib/ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEMES || THEMES.DARK;
export const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<THEMES>(defaultTheme);

    const themeContextData = useMemo(() => ({
        theme,
        setTheme,
    }), [theme])

    return (
        <ThemeContext.Provider  value={themeContextData}>
            {children}
        </ThemeContext.Provider>
    )
}

