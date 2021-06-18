import Description from "./Description";
import Feedback from "./Feedback";
import Reviews from "./Reviews/Reviews";

const Details = (props) => {
  const { course, enrollments, userState } = props.course;
  return (
    <>
      {course.longDescription && (
        <Description description={course.longDescription} />
      )}
      <Feedback enrollments={enrollments} />
      <Reviews courseId={course._id} userState={userState} />
    </>
  );
};

export default Details;
