import Courses from './Courses/Courses';
import './MyCourses.css';
import Sort from './Sort';

const My_Courses = () => {
    return ( 
    <>
        <div className="second-section">
            <h1>My courses</h1>
            <div className="en-created">
                <p className="pactive">Enrolled Courses</p>
                <p>Created Courses</p>
            </div>
        </div>

        <Sort />

        <Courses />

    </>
     );
}
 
export default My_Courses;