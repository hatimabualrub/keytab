import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Mid from "./MidSec";
import Details from "./details";
import HowTo from "./HowTo";
import "./Main.css";

const Home = () => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const history = useHistory();

  useEffect(() => {
    if (userInfo) {
      history.push("/home");
    }
  }, [userInfo, history]);

  return (
    <>
      <Mid />
      <Details />
      <HowTo />
    </>
  );
};

export default Home;
