import "./SearchCourse.css";

const FilterSubjects = () => {
  return (
    <>
      <h4>Subject</h4>
      <div className="search-inputfield terms">
        <label className="check">
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <p>Math</p>
      </div>

      <div className="search-inputfield terms">
        <label className="check">
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <p>English</p>
      </div>

      <div className="search-inputfield terms">
        <label className="check">
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <p>Arabic</p>
      </div>
    </>
  );
};

export default FilterSubjects;
