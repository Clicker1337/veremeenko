import s from './App.module.scss';

import MainScreen from './sections/mainScreen/MainScreen';
import Sidebar from './components/sideBar/Sidebar';
import Cursor from './components/cursor/Cursor';
import AboutMe from './sections/aboutMe/AboutMe';
import Links from './sections/links/Links';
import Portfolio from './sections/portfolio/Portfolio';

function App() {
    return (
        <>
            <div className={s.container}>
                <div className={s.App}>
                    <MainScreen />
                    <AboutMe />
                    <Portfolio />
                    <Links />
                </div>
                    <Sidebar />
                <Cursor />
            </div>
        </>
    )
}

export default App