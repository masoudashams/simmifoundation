import React from "react";
import Slider from "../components/Slider";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Card from "../components/Card";
import Card2 from "../components/Card2";
import Card3 from "../components/Card3";
import { carditems } from "../constants/data";
import { mycard } from "../constants/data";
import { carddata } from "../constants/data";
import Banner from "../components/Banner";
import Counter from "../components/Counter";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <motion.div>
      <motion.div>
        <Banner />
      </motion.div>

      <Slider />

      <div className="bg-[#212529] text-white  flex justify-between items-center mx-w-[1140px] px-4 border-b-2">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 1, scale: 1 }}
          transition={{
            type: "fade-right",
            stiffness: 260,
            damping: 20,
          }}
        ></motion.div>
        <div className="container mx-auto flex flex-col items-center text-center text-white px-44">
          <h1 className="mb-2  text-[40px] ">
            Welcome to <span className="text-orange-500">SIMMI</span>
          </h1>
          <p className="mt-2 md:mt-10 text-sm sm:text-xl text-justify ">
            Smart India Multi Management Institute is a pan India NGO registered
            in Haryana, India; carrying out welfare projects on education,
            healthcare, livelihood and women empowerment. We believe that unless
            members of the civil society are involved proactively in the process
            of development, sustainable change will not happen. Based on this,
            Simmi Foundation sensitizes and engages the civil society, making it
            an active partner in all its welfare initiatives.{" "}
          </p>
        </div>

        <div className="w-[599px]  ">
          <Link to={"/"}>
            <img src={require("../assets/map.png")} alt="MAP" />
          </Link>
        </div>
      </div>

      {/* card     */}
      <section className="container mx-4 overflow-x-scroll sm:mx-auto  bg-[#eeeeee] ">
        <h1 className="text-center mt-12 font-thin">Objectives</h1>
        <div className="container w-full mx-auto py-10">
          <div className="flex flex-row">
            {carditems.map((item, i) => (
              <Card key={i} index={i} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* card2     */}
      <section>
        <div className="help-bg h-full">
          <div className="container px-4 h-full flex flex-col items-center text-center mx-auto  text-white py-12">
            <h1 className="mb-2  text-[64px] font-black ">
              How can you help us
            </h1>
            <div className="container w-full mx-auto py-20 ">
              <div className="flex flex-row">
                {mycard.map((item, i) => (
                  <Card2 key={i} index={i} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-[#212529] text-white  justify-between items-center   ">
          <h1 className="text-center p-2 font-thin">Objectives</h1>
          <div className="container w-full mx-auto py-10">
            <div className="flex my-8 flex-wrap justify-center md:justify-evenly items-center ">
              {carddata.map((item, i) => (
                <Card3 key={i} index={i} item={item} className="bg-white " />
              ))}
            </div>
          </div>

          <Counter />
        </div>
      </section>
    </motion.div>
  );
}

export default Home;
