import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { requestSignin } from "../../actions/userActions";
import Spinner from "../../Components/Spinner/Spinner";
import "./LogIn.css";

const LogIn = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  // const [showPassword, setShowPassword] = useState(false);

  const userSignin = useSelector((state) => state.userSignin);
  const { loading, error, userInfo } = userSignin;

  const dispatch = useDispatch();
  const history = useHistory();

  const onSigninRequest = (e) => {
    e.preventDefault();
    dispatch(requestSignin(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      history.push("/home");
    }
  }, [userInfo, history]);

  return (
    <div className="wrapper">
      {loading && <Spinner />}
      <div className="title"> Log in</div>
      {error && <p className="auth-error">{error}</p>}

      <form className="form" onSubmit={(e) => onSigninRequest(e)}>
        <div className="inputfield">
          <label>Email </label>
          <input
            type="email"
            className="input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
          />
        </div>

        <div className="inputfield">
          <label>Password</label>
          <input
            type="password"
            className="input"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
          />
        </div>
        <a className="forget" href="\">
          Forgot your password?
        </a>

        <div className="inputfield terms">
          <label className="check">
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <p>I trust this device. Keep me logged in.</p>
        </div>

        <div className="inputfield">
          <input type="submit" value="Log in" className="btn" />
        </div>
      </form>
    </div>
  );
};

export default LogIn;
