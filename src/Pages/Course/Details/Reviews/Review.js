import RatingStars from "../../../../Components/Stars/RatingStars";
import "../Details.css";
import image from "./profile.png";

const Review = ({ review }) => {
  return (
    <div className="review">
      <div className="profile-img">
        <img src={image} alt="" />
      </div>
      <div className="profile-information">
        <h3>{review.user.name}</h3>
        <RatingStars rating={review.rate} />
        <p>{review.review}</p>
      </div>
    </div>
  );
};

export default Review;
