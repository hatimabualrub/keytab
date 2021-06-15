import React, { useState } from 'react';
import '../Details.css';

const Comment = () => {

    const [closeBtn, setCloseBtn] = useState(true);

    return ( 
    <div >
   {closeBtn && <div className= "content-area">
        <form>
        <div className="close" onClick={()=> setCloseBtn(!closeBtn)}>+</div>
        <img src="images/profile.png" alt="profile picture" />
            <div className="student-rate">
                <ul className="stars gold-stars">
                <li><i className="far fa-star"></i></li>
                <li><i className="far fa-star"></i></li>
                <li><i className="far fa-star"></i></li>
                <li><i className="far fa-star"></i></li>
                <li><i className="far fa-star"></i></li>
                </ul>
            </div>
            <textarea    
            className="your-review" 
            placeholder="Write your review about this course here..." />  
            <input type="submit" className="submit-your-review" />
        </form>   
    </div>}
    </div>
    );
}
 
export default Comment;