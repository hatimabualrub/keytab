import './My_Courses.css';

const Sort = () => {
    return ( 
    <div className="enrolled-courses">

        <div className="selection">

            <div className="sort-by select-box">
                <h4>Sort by</h4>
                <div className="color">
                    <p className="para">Rcenty added</p> <i className="fas fa-chevron-down"></i>
                </div>
            </div>

            <div className="filter-by select-box">
                <h4>Filter by</h4>
                <div className="color">
                    <p className="para">Instructor</p> <i className="fas fa-chevron-down"></i>
                </div>
            </div>

            <div className="reset">Reset</div>
        </div>

    </div>
    );
}

export default Sort;
