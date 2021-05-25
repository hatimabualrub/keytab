import "./Details.css";

const Description = ({ description }) => {
  return (
    <div className=" description box">
      <h2>Course Description</h2>
      <p>{description}</p>
    </div>
  );
};

export default Description;
