import Description from "./Description";
import Feedback from "./Feedback";
import Price from "./Price";
import Reviews from "./Reviews/Reviews";
import "./MainCourses.css";
import Header from "../../Components/CourseHeader/Header";
import Course from "../Course/Course";

const MainCourses = () => {
  return (
    <>
      <Header />

      {/*<Price />

      <Description />

      <Feedback />

      <Reviews />*/}

      <Course />
    </>
  );
};

export default MainCourses;
