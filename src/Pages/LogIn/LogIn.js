import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { requestSignin } from "../../actions/userActions";
import Spinner from "../../Components/Spinner/Spinner";
import "./LogIn.css";

const LogIn = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { loading, error, userInfo } = userSignin;

  const dispatch = useDispatch();
  const history = useHistory();

  const onSigninRequest = () => {
    dispatch(requestSignin(email, password));
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
      <h1>Log in</h1>
      <p>
        Don't have an account yet? <Link to='signup'><span >Sign up</span></Link>
      </p>
      <label>Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />
      <label>Password</label>
      <div className="eye">
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <i className="fas fa-eye"></i>
      </div>
      <div className="para hidden">
        <p>
          By signing up you agree to our <span>Terms</span> and{" "}
          <span>Privacy policy</span>
        </p>
      </div>
      <button onClick={onSigninRequest}>Log in</button>
    </div>
  );
};

export default LogIn;
