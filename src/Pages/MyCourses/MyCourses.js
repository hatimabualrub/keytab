import { useState } from "react";

import CreatedCourses from "./CreatedCourses";
import EnrolledCourses from "./EnrolledCourses";
import "./MyCourses.css";

const MyCourses = () => {
  const [viewEnrolled, setViewEnrolled] = useState(true);
  return (
    <>
      <div className="my-courses-header">
        <h1>My courses</h1>
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
