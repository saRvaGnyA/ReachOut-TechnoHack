import React from "react";

const ContactUs = () => {
  return (
    <div className="antialised bg-gray-900 mt-16 md:mt-20">
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0  bg-teal-700 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white">
          <div className="flex flex-col space-y-8 justify-between">
            <div>
              <h1 className="font-bold text-4xl tracking-wide sm:mt-4">
                Contact Us
              </h1>
              <p className="pt-2 text-teal-100">
                Fill out the contact form for any queries and suggestions
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="inline-flex space-x-2 items-center">
                <ion-icon
                  name="call"
                  className="text-teal-300 text-xl"
                ></ion-icon>
                <span>+91 9999999999</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <ion-icon
                  name="mail"
                  className="text-teal-300 text-xl"
                ></ion-icon>
                <span>reachout@gmail.com</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <ion-icon
                  name="location"
                  className="text-teal-300 text-xl"
                ></ion-icon>
                <span>VJTI, Mumbai</span>
              </div>
            </div>
            <div className="flex space-x-4 text-lg">
              <a href="/" className="text-white text-decoration-none">
                <ion-icon
                  name="logo-facebook"
                  className="text-teal-300 text-xl"
                ></ion-icon>
              </a>
              <a href="/" className="text-white text-decoration-none">
                <ion-icon
                  name="logo-twitter"
                  className="text-teal-300 text-xl"
                ></ion-icon>
              </a>
              <a href="/" className="text-white text-decoration-none">
                <ion-icon
                  name="logo-linkedin"
                  className="text-teal-300 text-xl"
                ></ion-icon>
              </a>
              <a href="/" className="text-white text-decoration-none">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80">
              <form action="" className="flex flex-col space-y-4">
                <div>
                  <label htmlFor="" className="text-sm">
                    Full name
                  </label>
                  <input
                    type="text"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-2"
                    placeholder="Enter your name.."
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-sm">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-2"
                    placeholder="Enter your email address.."
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-sm">
                    Your message
                  </label>
                  <textarea
                    rows="4"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-2"
                    placeholder="Message.."
                  />
                </div>
                <button className="inline-block self-end bg-teal-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
