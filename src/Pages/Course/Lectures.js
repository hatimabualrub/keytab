
const Lectures = ({lectuers}) => {
    console.log(lectuers);
    

    return( 
        <div className="box">
        <div className="lecture">
          <div className="thumbnail">
            <img src="images/thumb.jpg" alt="thumbnail"/>
          </div>
          <div className="lecture-information">
            {/*<h3>1. lecture one</h3>*/}
            <h3>{lectuers.id}. {lectuers.title}</h3>
           {/*<p>This lecture talking about nothing </p>*/}
            <p>{lectuers.body}</p>
            <i className="fas fa-play-circle"></i> <label>{lectuers.time} min</label>
          </div>
        </div>
    </div>

    )
}

export default Lectures;
