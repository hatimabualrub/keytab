import "../Details.css";
import image from "./profile.png";

const Review = () => {
  return (
    <div className="review">
      <div className="profile-img">
        <img src={image} alt="" />
      </div>
      <div className="profile-information">
        <h3>Profile Name</h3>
        <ul className="stars gold-stars">
          <li>
            <i className="fas fa-star"></i>
          </li>
          <li>
            <i className="fas fa-star"></i>
          </li>
          <li>
            <i className="far fa-star"></i>
          </li>
          <li>
            <i className="far fa-star"></i>
          </li>
          <li>
            <i className="far fa-star"></i>
          </li>
        </ul>
        <p>
          This course is so bad I hate you and I hate my life I will kill my
          self after finishing the course, please don't buy it, Thank You!
        </p>
      </div>
    </div>
  );
};

export default Review;
