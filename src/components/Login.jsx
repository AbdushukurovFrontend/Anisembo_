import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa"; // Iconlar

import "../App.css";
import { IoIosLogOut } from "react-icons/io";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Parolni ko'rsatish / yashirish
  const navigate = useNavigate();

  const handleFormSubmit = () => {
    if (!name || !password) {
      toast.error("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }

    if (!isLogin && password !== repeatPassword) {
      toast.error("Parollar mos kelmaydi!");
      return;
    }

    toast.success(isLogin ? "Tizimga kirdingiz!" : "Ro'yxatdan o'tdingiz!");
    localStorage.setItem("name", name);
    localStorage.setItem("password", password);
    setTimeout(() => navigate("/"), 1000);
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className=" bg-image-container relative">
      <button
        onClick={handleClose}
        className="absolute top-9 right-9 text-cyan-50/100 text-center hover:text-white  hover:bg-cyan-500 hover:ps-1 rounded-lg text-[27px] z-10"
      >
        <IoIosLogOut />
      </button>
      <div className="min-h-screen flex flex-col ">
        <div className="flex flex-col lg:flex-row h-screen">
          {/* Chap tomondagi fon */}
          <div className=" w-full lg:w-7/10 bg-cover bg-center">
            {/* Tasvirga joylashgan joy bo'ladi */}
          </div>

          {/* O'ng tomondagi forma */}
          <div className="w-[800px] lg:w-3/10 flex justify-center items-center bacgroountrans p-4">
            <div className="form-container w-full max-w-md">
              <h2 className="text-white text-2xl font-bold mb-4 text-center">
                {isLogin ? "Tizimga kirish" : "Ro'yxatdan o'tish"}
              </h2>
              <form className="space-y-4">
                {/* Foydalanuvchi nomi input */}
                <div className="relative">
                  <FaUser className="absolute left-3 top-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Foydalanuvchi nomi"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input-field pl-10"
                  />
                </div>

                {/* Parol input */}
                <div className="relative">
                  <FaLock className="absolute left-3 top-4 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Parol"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-field pl-10"
                  />
                  <span
                    className="absolute right-3 top-4 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FaEyeSlash className="text-gray-400" />
                    ) : (
                      <FaEye className="text-gray-400" />
                    )}
                  </span>
                </div>

                {/* Parolni takrorlash input */}
                {!isLogin && (
                  <div className="relative">
                    <FaLock className="absolute left-3 top-4 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Parolni takrorlang"
                      value={repeatPassword}
                      onChange={(e) => setRepeatPassword(e.target.value)}
                      className="input-field pl-10"
                    />
                  </div>
                )}

                <button
                  type="button"
                  onClick={handleFormSubmit}
                  className="btn-primary"
                >
                  {isLogin ? "Kirish" : "Ro'yxatdan o'tish"}
                </button>
              </form>
              <div className="text-center mt-4">
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-blue-500 hover:underline"
                >
                  {isLogin ? "Ro'yxatdan o'tish" : "Tizimga kirish"}
                </button>
              </div>
              <p className="text-gray-500 text-xs mt-4 text-center">
                Kirish orqali siz Foydalanuvchi shartlari va Maxfiylik siyosati
                bilan rozi bo'lasiz
              </p>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
