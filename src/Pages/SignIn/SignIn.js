import Nav from "../../Components/Nav/Nav_First"
import '../LogIn/LogIn.css';

const SignIn = () => {
    return ( 
    <div>
        <Nav />
        
        <div className="login">
            <h1>Sign up</h1>
            <p>Already Have an account? <span>Log in</span></p>
           
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" />
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
            <label>Password</label>

            <div className="eye">
                <input type="password" placeholder="Enter your password" />
                <i className="fas fa-eye"></i>
            </div>

            <div className="para"> 
                <p>By signing up you agree to our <span>Terms</span> and <span>Privacy policy</span></p>
            </div>
            <a href="#">Sign Up</a>
            </div>  
    </div>
    );
}
 
export default SignIn;