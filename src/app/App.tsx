import React, {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";

import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {useTheme} from "app/providers/ThemeProvider/lib/useTheme";
import {classNames} from "shared/lib/helpers/classNames";
import 'app/styles/index.scss';


export const App = () => {
    const [theme, setTheme] = useTheme();


    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={setTheme}>ChangeTheme</button>
            <Link to='/'>Главная</Link>
            <Link to='/about'>Обо мне</Link>
            <Suspense fallback={<span>...loading...</span>}>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/about' element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}
