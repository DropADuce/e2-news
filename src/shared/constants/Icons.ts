import React from 'react';

import MainPage from '../assets/icons/mainPageIcon.svg';
import AboutPage from '../assets/icons/aboutPageIcon.svg';
import ProfilePage from '../assets/icons/profilePageIcon.svg';
import Article from '../assets/icons/articles.svg';
import Eye from '../assets/icons/eye.svg';
import Calendar from '../assets/icons/calendar.svg';
import Copy from '../assets/icons/copy.svg';

export enum EnumIcons {
    ABOUT_PAGE = 'AboutPage',
    MAIN_PAGE = 'MainPage',
    PROFILE_PAGE = 'ProfilePage',
    ARTICLE = 'article',
    EYE = 'eye',
    CALENDAR = 'calendar',
    COPY = 'copy',
}

export const Icons: Record<EnumIcons, React.VFC<React.SVGProps<SVGSVGElement>>> = {
    [EnumIcons.ABOUT_PAGE]: AboutPage,
    [EnumIcons.MAIN_PAGE]: MainPage,
    [EnumIcons.PROFILE_PAGE]: ProfilePage,
    [EnumIcons.ARTICLE]: Article,
    [EnumIcons.EYE]: Eye,
    [EnumIcons.CALENDAR]: Calendar,
    [EnumIcons.COPY]: Copy,
};
