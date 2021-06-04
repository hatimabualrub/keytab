import RatingStars from "../../Components/Stars/RatingStars";
import "./SearchCourse.css";

const SearchResult = () => {
  return (
    <div className="results-area">
      <div className="search-box">
        <div className="course-box">
          <div className="search-thumbnail">
            <img
              src="https://keytab-api.glitch.me/images/60aa4463578850058324acdc"
              alt="thumbnail"
            />
          </div>

          <div className="search-course-information">
            <h3 className="search-course-name">Course name</h3>
            <p className="search-short-decription">
              course descriptin course descriptin course descriptincourse
              descriptincourse descriptincourse descriptincourse descriptin{" "}
            </p>

            <div className="rating">
              <span className="out-of-five">3.7</span>
              <RatingStars rating={4} />

              <span className="rate"> (5,673)</span>
            </div>
            <span className="instructor-name">instructor name | </span>
            <span className="lectures-of-course">20 lectures</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
