import React from "react";
import FirstSession from "./FirstSessionLP";
import SecondSession from "./SecondSessionLP";

const Home = () => {
    return (
        <div className="bg-[#131313] flex flex-col ">
        <FirstSession />
        <SecondSession />
        </div>
    );
};

export default Home;
