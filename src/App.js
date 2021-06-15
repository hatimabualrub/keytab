import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.css";
import Footer from "./Components/Footer/Footer";
import Main from "./Pages/Main/Main";
import Home from "./Pages/Home/Home";
// import MyCourses from "./Pages/MyCourses/MyCourses";
import LogIn from "./Pages/LogIn/LogIn";
import Signup from "./Pages/Signup/Signup";
import NavMain from "./Components/Nav/NavMain";
import NavHome from "./Components/Nav/NavHome";
import AuthRoute from "./hoc/AuthRoute";
import Course from "./Pages/Course/Course";
import CourseLecture from "./Pages/CourseLecture/CourseLecture";
import MyCourses from "./Pages/MyCourses/MyCourses";
import CreateCourse from "./Pages/CreateCourse/CreateCourse";
import AddLecture from "./Pages/AddLecture/AddLecture";
import SearchCourse from "./Pages/SearchCourse/SearchCourse";

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  
  return (
    <div className="page-container">
     {userInfo ? <NavHome /> : <NavMain />}

      <Switch>
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={Signup} />
        
        <AuthRoute path="/home" component={Home} />
        <AuthRoute path="/course/:id" component={Course} />
        <AuthRoute path="/lesson/:id" component={CourseLecture} />
        <AuthRoute path="/mycourses" component={MyCourses} />
        <AuthRoute path="/createcourse" component={CreateCourse} />
        <AuthRoute path="/addlecture/:id" component={AddLecture} />
        <AuthRoute path="/search" component={SearchCourse} />
        
        <Route path="/" component={Main} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
