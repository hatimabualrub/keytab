import Header from "./CourseHeader/Header";
import CourseNavBar from "./CourseNavBar/CourseNavBar";
import Details from "./Details/Details";
import Lectures from "./Lectures/Lectures";

const Course = () => {
  return (
    <>
      <Header />
      <CourseNavBar />
      <Details />
      {/* <Lectures /> */}
    </>
  );
};

export default Course;
