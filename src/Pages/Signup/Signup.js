import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { requestSignup } from "../../actions/userActions";
import Spinner from "../../Components/Spinner/Spinner";

import "../LogIn/LogIn.css";

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userSignup = useSelector((state) => state.userSignup);
  const { loading, error } = userSignup;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  const history = useHistory();

  const onSignupRequest = () => {
    dispatch(requestSignup(name, email, password));
  };

  useEffect(() => {
    if (userInfo) {
      history.push("/home");
    }

    if (error) {
      alert(error);
    }
  }, [userInfo, history, error]);

  return (
    <div className="login">
      {loading && <Spinner />}
      <h1>Sign up</h1>
      <p>
        Already Have an account? <span>Log in</span>
      </p>

      <label>Full Name</label>
      <input
        type="text"
        placeholder="Enter your full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Password</label>
      <div className="eye">
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <i className="fas fa-eye"></i>
      </div>

      <div className="para">
        <p>
          By signing up you agree to our <span>Terms</span> and{" "}
          <span>Privacy policy</span>
        </p>
      </div>
      <button onClick={onSignupRequest}>Sign Up</button>
    </div>
  );
};

export default SignIn;
