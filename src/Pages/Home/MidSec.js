import "./Home.css";

const Mid = () => {
  return (
    <div className="second-section">
      <div className="welcome">
        <h1>
          Welcome <span>Hatim </span>,
        </h1>
        <p>Let's start Learning</p>
      </div>

      <div className="presonal-info">
        <div className="container">
          <h4>Tell us about yourself</h4>
          <div className="grade">
            <p>
              I am currently at
              <select>
                <option value="1">first</option>
                <option value="2">second</option>
                <option value="3">third</option>
                <option value="4">fourth</option>
              </select>
              grade
            </p>
            <a href="/">Save</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mid;
