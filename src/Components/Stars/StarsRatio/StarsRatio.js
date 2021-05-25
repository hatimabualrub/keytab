const StartRatio = (props) => {
  let fullStars = [];
  let emptyStars = [];

  for (let i = 0; i < 5; i++) {
    if (i < props.rate) {
      fullStars.push(
        <li key={i}>
          <i className="fas fa-star"></i>
        </li>
      );
    } else {
      emptyStars.push(
        <li key={i}>
          <i className="far fa-star"></i>
        </li>
      );
    }
  }

  return (
    <ul className="stars gold-stars">
      <li>({props.percentage}%)</li>
      {fullStars}
      {emptyStars}
    </ul>
  );
};

export default StartRatio;
