import { useState } from "react";

import "./CreateCourse.css";

const CreateCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("");
  const [semester, setSemester] = useState("");
  const [gradeLevel, setGradeLevel] = useState(1);
  const [longDescription, setLongDescription] = useState("");
  const [image, setImage] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    const request = {
      title,
      description,
      subject,
      semester,
      gradeLevel,
      longDescription,
    };
    console.log(request);
  };

  return (
    <div className="wrapper">
      <div className="title"> Create New Course</div>

      <form className="form" onSubmit={submitHandler}>
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
          <label>Subject</label>
          <div className="custom_select">
            <select required onChange={(e) => setSubject(e.target.value)}>
              <option value="">Select</option>
              <option value="Mathematics">Mathematics</option>
              <option value="English Language">English Language</option>
              <option value="Arabic Language">Arabic Language</option>
            </select>
          </div>
        </div>

        <div className="inputfield">
          <label>Grade Level</label>
          <div className="custom_select">
            <select
              required
              onChange={(e) => setGradeLevel(parseInt(e.target.value))}
            >
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
        </div>

        <div className="inputfield">
          <label>Semester</label>
          <div className="custom_select">
            <select required onChange={(e) => setSemester(e.target.value)}>
              <option value="">Select</option>
              <option value="First">First</option>
              <option value="Second">Second</option>
              <option value="Both">Both</option>
            </select>
          </div>
        </div>

        <div className="inputfield">
          <label>Long Description</label>
          <textarea
            className="textarea"
            required
            value={longDescription}
            onChange={(e) => setLongDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="inputfield">
          <label>Upload cover photo</label>
          <input
            type="file"
            required
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <div className="inputfield">
          <input type="submit" value="Create" className="btn" />
        </div>
      </form>
    </div>
  );
};

export default CreateCourse;
