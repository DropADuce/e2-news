import { EnumIcons } from 'shared/constants/Icons';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface ISidebarItem {
    path: string,
    text: string,
    icon: EnumIcons
}
export const SidebarItems: Array<ISidebarItem> = [
    {
        path: RoutePath.main,
        icon: EnumIcons.MAIN_PAGE,
        text: 'Главная',
    },
    {
        path: RoutePath.about,
        icon: EnumIcons.ABOUT_PAGE,
        text: 'О проекте',
    },
    {
        path: RoutePath.profile,
        icon: EnumIcons.PROFILE_PAGE,
        text: 'Профиль',
    },
];
