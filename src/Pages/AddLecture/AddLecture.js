import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";

// import Spinner from "../../Components/Spinner/Spinner";

const AddLecture = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [image, setImage] = useState();

  return (
    <div className="wrapper add-lecture-wrapper">
      <div className="title">Add New Lecture</div>

      <form action="#" className="form">
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
          <input type="submit" value="Create" className="btn" />
        </div>
      </form>
    </div>
  );
};

export default AddLecture;
