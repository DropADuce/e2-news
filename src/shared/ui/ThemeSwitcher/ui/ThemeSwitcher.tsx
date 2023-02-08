import React, {FC} from "react";

import {useTheme} from "app/providers/ThemeProvider/inedx";
import {Button} from "shared/ui/Button";
import ThemeSwitcherIcon from '../../../assets/icons/themeSwitcher.svg'

interface IThemeSwitcherProps {
    mix?: string,
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = () => {

    const [_, setTheme] = useTheme();

    return (
        <Button
            onClick={setTheme}
        >
            <ThemeSwitcherIcon />
        </Button>
    )
}
