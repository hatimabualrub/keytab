import "./SearchCourse.css";

const FilterSubjects = ({ subject, setSubject }) => {
  return (
    <>
      <h4>Subject</h4>
      <div className="search-inputfield terms">
        <label className="check">
          <input
            type="checkbox"
            checked={subject === "Mathematics"}
            onChange={() => setSubject("Mathematics")}
          />
          <span className="checkmark"></span>
        </label>
        <p>Mathematics</p>
      </div>

      <div className="search-inputfield terms">
        <label className="check">
          <input
            type="checkbox"
            checked={subject === "English Language"}
            onChange={() => setSubject("English Language")}
          />
          <span className="checkmark"></span>
        </label>
        <p>English Language</p>
      </div>

      <div className="search-inputfield terms">
        <label className="check">
          <input
            type="checkbox"
            checked={subject === "Arabic Language"}
            onChange={() => setSubject("Arabic Language")}
          />
          <span className="checkmark"></span>
        </label>
        <p>Arabic Language</p>
      </div>
    </>
  );
};

export default FilterSubjects;
