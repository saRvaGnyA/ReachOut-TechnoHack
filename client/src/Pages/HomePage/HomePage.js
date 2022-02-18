import React from "react";
import "./HomePage.css";
const HomePage = () => {
  return (
    <div className="bg-gray-800">
      <section id="header" className="pt-28">
        <div className="container fluid nav_bg ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-col justify-center">
                  <h1 className="text-teal-400"> &#8226; BEST JOBS PLACE</h1>
                  <h2 className="my-3 text-white">The Easiest Way to Get Your New Job or List Your Job</h2>
                  {/* <span>Each month, more than 3 million job seekers turn to website in their search for work, making over 140,000 applications every single day</span> */}
                  <div className="my-3 inline-flex">
                    <button class="bg-teal-500 hover:bg-teal-400 text-black font-bold py-2 px-4 border-b-4 border-teal-700 hover:border-teal-500 rounded-full my-3 mx-10">
                      Search a job  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </button>
                    <button class="bg-teal-500 hover:bg-teal-400 text-black font-bold py-2 px-4 border-b-4 border-teal-700 hover:border-teal-500 rounded-full my-3">
                      Post a job  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src="http://wp.alithemes.com/html/jobhub/frontend/assets/imgs/banner/banner.png"
                    alt=""
                    className="animated lg:w-96"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="container mx-auto sm:mt-96  roles">
        <h1 className="text-center uppercase text-3xl	font-bold text-white">Popular roles</h1>
        <div class="grid grid-cols-5 sm:gap-20 lg:gap-20 md:gap-40">
          <button class="bg-teal-500 hover:bg-teal-400 text-black font-bold py-2 px-2 border-b-4 border-teal-700 hover:border-teal-500 rounded-full my-3 sm:h-20 sm:w-28 lg:h-16">
            Colourblind testing
          </button>
          <button class="bg-teal-500 hover:bg-teal-400 text-black font-bold py-2 px-2 border-b-4 border-teal-700 hover:border-teal-500 rounded-full my-3 sm:h-20 sm:w-28 lg:h-16">
            Game tester
          </button>
          <button class="bg-teal-500 hover:bg-teal-400 text-black font-bold py-2 px-2 border-b-4 border-teal-700 hover:border-teal-500 rounded-full my-3 sm:h-20 sm:w-28 lg:h-16">
            Desk jobs
          </button>
          <button class="bg-teal-500 hover:bg-teal-400 text-black font-bold py-2 px-2 border-b-4 border-teal-700 hover:border-teal-500 rounded-full my-3 sm:h-20 sm:w-28 lg:h-16">
            Healthcare testing
          </button>
          <button class="bg-teal-500 hover:bg-teal-400 text-black font-bold py-2 px-2 border-b-4 border-teal-700 hover:border-teal-500 rounded-full my-3 sm:h-20 sm:w-28 lg:h-16">
            Teaching
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
