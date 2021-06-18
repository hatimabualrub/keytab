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

  const onSignupRequest = (e) => {
    e.preventDefault();
    dispatch(requestSignup(name, email, password));
  };

  useEffect(() => {
    if (userInfo) {
      history.push("/home");
    }
  }, [userInfo, history]);

  return (
    <div className="wrapper">
      {loading && <Spinner />}
      <div className="title"> Sign Up</div>
      {error && <p className="auth-error">{error}</p>}
      <form className="form">
        <div className="inputfield">
          <label>Full Name</label>
          <input
            type="text"
            className="input"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="inputfield">
          <label>Email Address</label>
          <input
            type="text"
            className="input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inputfield">
          <label>Password</label>
          <input
            type="password"
            className="input"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="inputfield">
          <label>Confirm Password</label>
          <input
            type="password"
            className="input"
            placeholder="Enter your password again"
          />
        </div>

        <div className="inputfield">
          <label>Gender</label>
          <div className="custom_select">
            <select>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>

        <div className="inputfield terms">
          <label className="check">
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <p>
            By signing up you agree to our <span>Terms</span> and{" "}
            <span>Privacy policy</span>
          </p>
        </div>

        <div className="inputfield">
          <input
            type="submit"
            value="Sign up"
            className="btn"
            onClick={(e) => onSignupRequest(e)}
          />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
