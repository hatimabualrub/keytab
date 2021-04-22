import "../Home.css";

const subject = () => {
  return (
    <>
      <div className="subjects">
        <h1>English Language</h1>

        <div className="courses">
          <div className="course">
            <div className="img">
              <img
                src="https://via.placeholder.com/200x120/0000FF/FFFFFF?text=Course"
                alt=""
              />
            </div>

            <div className="details">
              <h4>Course Name</h4>
              <p>Instructor Name</p>
              <div className="rating">
                <span>3.7</span>
                <ul className="stars">
                  <li>
                    <i className="fas fa-star"></i>
                  </li>
                  <li>
                    <i className="fas fa-star"></i>
                  </li>
                  <li>
                    <i className="fas fa-star"></i>
                  </li>
                  <li>
                    <i className="fas fa-star-half-alt"></i>
                  </li>
                  <li>
                    <i className="far fa-star"></i>
                  </li>
                </ul>

                <span className="rate"> (5,673)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default subject;
