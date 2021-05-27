import { Link } from "react-router-dom";

export const NavButtons = ({ lessonNav }) => {
  const { previousLesson, nextLesson } = lessonNav;
  return (
    <div className="move-lectures">
      <div>
        <Link
          to={`/lesson/${previousLesson?._id}`}
          className={
            previousLesson !== null ? "moving-btn" : "moving-btn disabled"
          }
          id="move-btn"
        >
          {" "}
          <i className="fas fa-arrow-left"></i> {"\u00A0"} Prev{" "}
        </Link>
      </div>
      <div>
        <Link
          to={`/lesson/${nextLesson?._id}`}
          className={nextLesson !== null ? "moving-btn" : "moving-btn disabled"}
          id="move-btn"
        >
          {" "}
          Next {"\u00A0"} <i className="fas fa-arrow-right"></i>{" "}
        </Link>
      </div>
    </div>
  );
};
