import './Main.css';

const HowTo = () => {
    return ( 
        <div className="how-to">
              <h2 className="h2">How To Learn With Us ?</h2>
              <div className="Menu">
                    <div className="step">
                            <div className="icon"><i className="fas fa-user-circle"></i></div>
                            <div className="para"><p>Create account</p></div>
                    </div>
                    <div className="step">
                        <div className="icon"><i className="fas fa-search"></i></div>
                        <div className="para"><p>Search Courses</p></div>
                    </div>
                    <div className="step">
                        <div className="icon"> <i className="fas fa-cart-plus"></i></div>
                        <div className="para"><p>Enroll Courses</p></div>
                    </div>
                    <div className="step">
                        <div className="icon"> <i className="fas fa-desktop"></i></div>
                        <div className="para"><p>Watch Lessons</p></div>
                    </div>

              </div>
         </div>
     );
}
 
export default HowTo;
