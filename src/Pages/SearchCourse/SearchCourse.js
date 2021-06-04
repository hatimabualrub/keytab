import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchCourses } from "../../actions/courseActions";

import FilterGradeLevel from "./FilterGradeLevel";
import FilterSubjects from "./FilterSubjects";
import SearchResult from "./SearchResult";
import Spinner from "../../Components/Spinner/Spinner";
import "./SearchCourse.css";

const SearchCourse = () => {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [gradeLevel, setGradeLevel] = useState("");

  const searchCourse = useSelector((state) => state.searchCourse);
  const { courses, loading } = searchCourse;

  const dispatch = useDispatch();

  const onTitleChange = (e) => {
    setTitle(e.target.value);
    onSearchChange();
  };
  const onSearchChange = () => {
    dispatch(searchCourses(title, subject, gradeLevel));
  };

  return (
    <div className="search-container">
      {loading && <Spinner />}
      <input
        className="search-input"
        type="text"
        placeholder="Search Courses.."
        onChange={onTitleChange}
      />

      <p className="num-of-results">
        {courses ? courses.length + " results" : "0 results"}
      </p>

      <div className="filter" onClick={onSearchChange}>
        <i className="fas fa-filter"></i>
        <p>Filter</p>
      </div>

      <div className="second-container">
        <div className="filter-area">
          <FilterSubjects subject={subject} setSubject={setSubject} />
          <FilterGradeLevel setGradeLevel={setGradeLevel} />
        </div>

        <div className="results-area">
          {courses &&
            courses.map((course) => (
              <SearchResult key={course.course._id} course={course} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchCourse;
