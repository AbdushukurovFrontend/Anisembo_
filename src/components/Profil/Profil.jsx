import React, { useEffect, useState } from "react";
import "../../App.css";
import userDefaultimg from "../../Img/userDefaultimg.png";
import axios from "axios";
import { userDate } from "../../Api/Api";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Profil() {
  const [activTab, setActiveTab] = useState("profil");
  const [data, setData] = useState([]);

  const [passwordVisible, setPasswordVisible] = useState(false); // Password visibility state

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); // Toggle the password visibility
  };

  const userImg = localStorage.getItem("userImg");
  const userName = localStorage.getItem("name");
  const userpassword = localStorage.getItem("password");

  useEffect(() => {
    axios
      .get(userDate)

      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        console.log("Error fetching user data: ", e);
      });
  });

  return (
    <div>
      <div className="container">
        {/* Profil header */}

        {/* profil header */}
        <div className="flex space-x-4 mb-4 mt-10">
          {" "}
          {/* Add space between buttons */}
          {["profil", "sevimlilar", "galeriya"].map((tab) => {
            return (
              <button
                key={tab}
                className={`cursor-pointer px-4 py-2 transition-all duration-500 relative inline-block uppercase text-decoration-none rounded-full transform transition-all ease-in-out ${
                  activTab === tab
                    ? "btn-white activeTabSty"
                    : "btn-white activeTabdefault"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                <span className="btn::after absolute top-0 left-0 w-full h-full rounded-full z-[-1] transition-all duration-400"></span>
              </button>
            );
          })}
        </div>
        <hr />

        {/* Profil content */}
        {activTab === "profil" && (
          <div className="mt-4">
            <div className="flex items-center gap-8 flex-wrap">
              {/* User Image Section */}
              <div className="w-[200px] h-[246px] relative">
                <img
                  // src={userImg}
                  src="https://i.pinimg.com/736x/3a/cb/c5/3acbc52506384cdd6ffd812d4dbbd24f.jpg"
                  alt="userImg not defined"
                  className="rounded-xl w-full object-cover shadow-2xl"
                />
                {/* Add/Edit User Image */}
                <div className="w-[70px] absolute top-44 right-0">
                  <img
                    className="w-full cursor-pointer transition-transform duration-300 hover:scale-110 hover:translate-y-[-3px] rounded-full "
                    src={userDefaultimg}
                    alt="User"
                  />
                </div>
              </div>

              {/* User Info Section */}
              <div className="bg-slate-700 w-[400px] rounded-lg p-6 h-[250px] shadow-xl">
                <button className=" p-2 bg-white shadow-md rounded-lg w-[350px] text-black text-start px-3">
                  <h2 className=" font-semibold">{userName}</h2>
                </button>
                <div className="flex items-center relative mt-4">
                  <p className="text-md font-medium mr-3  p-2 bg-white shadow-md rounded-lg w-[350px] text-black text-start px-3">
                    {passwordVisible
                      ? userpassword
                      : "•".repeat(userpassword.length)}
                    {/* Show password or dots */}
                  </p>

                  {/* Eye Icon for toggling password visibility */}
                  <button
                    onClick={togglePasswordVisibility}
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
                  >
                    {passwordVisible ? (
                      <FaEyeSlash size={22} />
                    ) : (
                      <FaEye size={22} />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Sevimlilar content */}
        {activTab === "sevimlilar" && (
          <div className="mt-4">
            <div>Sevimlilar</div>
          </div>
        )}

        {/* Galeriya content */}
        {activTab === "galeriya" && (
          <div className="mt-4">
            <div>Galeriya</div>
          </div>
        )}

        {/* Profil footer */}
      </div>
    </div>
  );
}

export default Profil;
