import './CourseLecture.css'
import Details from './LectureDetails'
import LectureVideo from './LectureVideo'

function CourseLecture() {
    return (
    <>
    <div className="embed-lecture">
        <LectureVideo />
        <Details />
    </div>
   
    <div className="move-lectures">
        <div>
          <a href="\"  className="moving-btn" id="move-btn"> <i className="fas fa-arrow-left"></i> {'\u00A0'} Previous  </a>
        </div>
        <div>
          <a href="\" className="moving-btn" id="move-btn"> Next  {'\u00A0'} <i className="fas fa-arrow-right"></i> </a>
        </div>
    </div>
    </>
    )
}

export default CourseLecture
