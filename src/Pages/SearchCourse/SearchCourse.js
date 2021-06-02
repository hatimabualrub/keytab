import FilterGradeLevel from './FilterGradeLevel';
import FilterSubjects from './FilterSubjects';
import './SearchCourse.css';
import SearchResult from './SearchResult';

const SearchCourse = () => {
    return ( 
    <div className="container">
      <input className="input" type="text" placeholder="Search Courses.." />
      <p className="num-of-results">2,434 results</p>

      <div className="filter">
        <i className="fas fa-filter"></i> 
        <p>Filter</p>
      </div>

      <div className="second-container">

        <div className="filter-area">
            <FilterSubjects />
            <FilterGradeLevel />
        </div>

        <SearchResult />
      </div>

    </div>
     );
}
 
export default SearchCourse;