import "./App.css";
import Footer from "./Components/Footer/Footer";
import MainCourses from "./Pages/MainCourses/MainCourses";
import Main from './Pages/Main/Main';
import Home from './Pages/Home/Home';
import MyCourses from "./Pages/MyCourses/MyCourses";
import LogIn from './Pages/LogIn/LogIn';
import SignIn from './Pages/SignIn/SignIn';
import Nav from "./Components/Nav/NavMain";
import NAV from './Components/Nav/NavHome';

function App() {
  return <div>
    <Nav />

    {/*<NAV />*/}

    {/*<Main />*/}

    {/*<Home />*/}

    {/*<MyCourses />*/}

    <MainCourses />

    {/*<LogIn />*/}

    {/*<SignIn />*/}

   <Footer />
  </div>;
}

export default App;
