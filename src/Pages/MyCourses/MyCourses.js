import { useState } from "react";
import { Link } from "react-router-dom";

import CreatedCourses from "./CreatedCourses";
import EnrolledCourses from "./EnrolledCourses";
import "./MyCourses.css";

const MyCourses = () => {
  const [viewEnrolled, setViewEnrolled] = useState(true);
  return (
    <>
      <div className="my-courses-header">
        <div className="header-row">
          <h1>My courses</h1>
          <Link className="create-button" to="/createcourse">
            Create Course
          </Link>
        </div>
        <div className="en-created">
          <p
            className={viewEnrolled ? "pactive" : ""}
            onClick={() => setViewEnrolled(true)}
          >
            Enrolled Courses
          </p>
          <p
            className={!viewEnrolled ? "pactive" : ""}
            onClick={() => setViewEnrolled(false)}
          >
            Created Courses
          </p>
        </div>
      </div>
      {viewEnrolled ? <EnrolledCourses /> : <CreatedCourses />}
    </>
  );
};

export default MyCourses;
