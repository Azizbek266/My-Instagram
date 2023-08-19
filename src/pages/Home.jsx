import React from "react";
// import { Link } from "react-router-dom";
import Posts from "../component/Posts/Posts";
// import "./style.css"

const Home = () => {
    return (
        <>
          <div className="home">
            <Posts/>
            <Posts/>
            <Posts/>
          </div>
        </>
    )
}

export default Home;