import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { addLesson as addLessonAction } from "../../actions/lessonActions";

import Spinner from "../../Components/Spinner/Spinner";
import { ADD_LESSON_RESET } from "../../constants/lessonConstants";

const AddLecture = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [image, setImage] = useState();

  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const addLesson = useSelector((state) => state.addLesson);
  const { loading, success } = addLesson;

  const submitHandler = (e) => {
    e.preventDefault();
    const lesson = {
      title,
      description,
      videoLink:
        "https://www.youtube.com/embed/" +
        videoLink.substr(videoLink.indexOf("=") + 1),
      course: id,
    };

    dispatch(addLessonAction(lesson, image));
  };

  useEffect(() => {
    if (success) {
      history.push(`/course/${id}`);
    }
    return dispatch({ type: ADD_LESSON_RESET });
  }, [success, history, dispatch, id]);

  return (
    <div className="wrapper add-lecture-wrapper">
      {loading && <Spinner />}
      <div className="title">Add New Lecture</div>
      <form action="#" className="form" onSubmit={submitHandler}>
        <div className="inputfield">
          <label>Title</label>
          <input
            type="text"
            className="input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="inputfield">
          <label>Description</label>
          <input
            type="text"
            className="input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="inputfield">
          <label>Url (Video Link)</label>
          <input
            type="url"
            className="youtube-video"
            name="youtube-video"
            value={videoLink}
            onChange={(e) => setVideoLink(e.target.value)}
            required
          />
        </div>

        <div className="inputfield">
          <label>Upload cover photo</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>

        <div className="inputfield">
          <input type="submit" value="Create" className="submit-btn" />
        </div>
      </form>
    </div>
  );
};

export default AddLecture;
