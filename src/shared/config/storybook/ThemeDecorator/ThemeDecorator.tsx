import { Story } from '@storybook/react';
import { THEMES } from '../../../../app/providers/ThemeProvider/lib/ThemeContext';

export const ThemeDecorator = (theme: THEMES) => (StoryComponent :Story) => {
    return (
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    );
};
