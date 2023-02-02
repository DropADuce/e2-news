import React, {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";

import {MainPage} from "./pages/MainPage";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames";
import './styles/index.scss';

export const App = () => {
    const [theme, setTheme] = useTheme();


    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={setTheme}>ChangeTheme</button>
            <Link to='/'>Главная</Link>
            <Link to='/about'>Обо мне</Link>
            <Suspense fallback={<><span>...loading...</span></>}>
            <Routes>
                <Route path='/' element={<MainPage />}/>
                <Route path='/about' element={<AboutPageLazy />} />
            </Routes>
            </Suspense>
        </div>
    )
}
