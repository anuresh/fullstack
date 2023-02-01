import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <article className="message-header"><p>Welcome to ABC Bank</p></article>
        <article className="message is-info"><div className="message-header">Dear Employee,
Welcome to the new login page of ABC Bank.
Its lighter look and feel is designed to give you the best possible user experience.
 Please continue to login using your email and password.</div></article>
        <div className="box has-text-centered">
            <Link to="login" className="button is-success">
            Login
            </Link>
        </div>
        <br />
        <div className="box has-text-centered">
            <Link to="signup" className="button is-success">
            SignUp
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
