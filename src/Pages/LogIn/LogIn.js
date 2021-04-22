import './LogIn.css';

const LogIn = () => {
    return ( 
        <div className="login">
                <h1>Log in</h1>
                <p>Don't have an account yet? <span>Sign up</span></p>
           
                <label>Email</label>
                <input type="email" placeholder="Enter your email" />
                <label>Password</label>
                <div className="eye">
                <input type="password" placeholder="Enter your password" />
                <i className="fas fa-eye"></i>
                </div>

                <div className="para hidden"> 
                    <p>By signing up you agree to our <span>Terms</span> and <span>Privacy policy</span></p>
                </div>
                <a href="#">Log in</a>
        </div>
     );
}
 
export default LogIn;