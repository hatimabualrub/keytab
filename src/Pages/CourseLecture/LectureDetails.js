const { Link } = require("react-router-dom");


function Details() {
    return (
        <div className="container">

        <div className="information">
          <h1 className="title">Lecture Name</h1>
          <p className="lecture-description">Lecture Description Lecture DescriptionLecture DescriptionLecture DescriptionLecture DescriptionLecture DescriptionLecture</p>
        </div>

        <div className="back-to-course">
          <a id="move-btn" href="/course/:id">Back To Course</a>
        </div>

      </div>
    )
}

export default Details
