import Nav from '../../Components/Nav/Nav_Home';
import Courses from './Courses/Courses';
import './My_Courses.css';
import Sort from './Sort';

const My_Courses = () => {
    return ( 
    <div>
        <Nav />

        <div className="second-section">
            <h1>My courses</h1>
            <div className="en-created">
                <p className="pactive">Enrolled Courses</p>
                <p>Created Courses</p>
            </div>
        </div>

        <Sort />

        <Courses />

    </div>
     );
}
 
export default My_Courses;