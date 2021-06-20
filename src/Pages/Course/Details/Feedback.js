import RatingStars from "../../../Components/Stars/RatingStars";
import StartRatio from "../../../Components/Stars/StarsRatio/StarsRatio";
import "./Details.css";

const Feedback = ({ enrollments }) => {
  const { rateRatios } = enrollments;
  return (
    <div className="feedback box">
      <h2>Student feedback</h2>
      <div className="course-rating">
        <div className="student-rate">
          <span>{enrollments.rateValue.toFixed(1)}</span>
          <RatingStars rating={enrollments.rateValue} />
          <span>Course Rating</span>
        </div>

        <div className="percentage">
          <StartRatio
            percentage={rateRatios === 0 ? 0 : rateRatios.fiveRatio}
            rate={5}
          />
          <StartRatio
            percentage={rateRatios === 0 ? 0 : rateRatios.fourRatio}
            rate={4}
          />
          <StartRatio
            percentage={rateRatios === 0 ? 0 : rateRatios.threeRatio}
            rate={3}
          />
          <StartRatio
            percentage={rateRatios === 0 ? 0 : rateRatios.twoRatio}
            rate={2}
          />
          <StartRatio
            percentage={rateRatios === 0 ? 0 : rateRatios.oneRatio}
            rate={1}
          />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
