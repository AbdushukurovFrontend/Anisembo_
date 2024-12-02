import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import exit from "../Img/exit.png";
import { IoIosLogOut } from "react-icons/io";
import { FaLock, FaRegEyeSlash, FaUser, FaUserCircle } from "react-icons/fa";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repaitpassword, setrepaitpassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [regs, setregs] = useState(false);
  const [passwods, setPasswods] = useState(false);
  const navigate = useNavigate();
  const userName = localStorage.getItem("name");
  const userPassword = localStorage.getItem("password");

  const passwordShow = () => {
    setPasswods((prev) => !prev);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (name && password) {
      if (name === userName && password === userPassword) {
        setIsValid(true);
        localStorage.setItem("isLoggedIn", "true");
        navigate("/");
      } else {
        setIsValid(false);
        toast.error("Siz ro'yxatdan o'tmagansiz!");
      }
    } else {
      toast.error("Iltimos, barcha maydonlarni to'ldiring!");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (name && password.length >= 6 && repaitpassword) {
      if (password === repaitpassword) {
        localStorage.setItem("name", name);
        localStorage.setItem("password", password);
        setregs(false);
        toast.success("Ro'yxatdan o'tdingiz!");
        navigate("/");
      } else {
        toast.error("Parollar mos kelmadi!");
      }
    } else {
      toast.error("Iltimos, barcha maydonlarni to'ldiring!");
    }
  };

  const handleRegistir = () => {
    setregs(!regs);
    setName("");
    setPassword("");
    setrepaitpassword("");
  };

  const handleClose = () => {
    navigate("/"); // or navigate to a specific route or close the modal
  };
  // login with password

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col md:flex-row bacgorunG relative">
      {/* Close Button (Top right corner) */}
      <button
        onClick={handleClose}
        className="absolute top-9 right-9 text-cyan-50/100 text-center hover:text-white  hover:bg-cyan-500 hover:ps-1 rounded-lg text-[40px] z-10"
      >
        <IoIosLogOut />
      </button>

      {/* Login Form (Bottom half or right side) */}
      <div className="w-[50%] h-[94%] xl:h-[82%] xl:w-[50%] backdrop-blur-lg flex items-center justify-center p-4 md:p-8 rounded-3xl shadow-lg">
        <div className="w-full max-w-md">
          {regs ? (
            <>
              <form
                className="w-full flex flex-col gap-6"
                onSubmit={handleLogin}
              >
                <div className="relative w-full flex justify-center mb-6">
                  <span className="absolute top-[-180px] flex items-center font-bold font-mono">
                    <FaUserCircle className="text-[160px] text-slate-500" />
                  </span>
                </div>
                <div className="relative w-full">
                  {/* Ikona */}
                  <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
                    <FaUser />
                  </span>
                  <input
                    type="text"
                    name="name"
                    className="w-full pl-12 p-4 border-none backdrop-blur-lg bg-cyan-50/25 text-white rounded-xl focus:outline-none font-mono focus:placeholder:text-gray-50/0
                   placeholder:font-sans placeholder:tracking-widest placeholder:text-stone-300 focus:ring-2 focus:ring-cyan-500 transition-all"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Foydalanuvchi nomi"
                  />
                </div>
                <div className="relative w-full">
                  {/* Ikona */}
                  <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
                    <FaLock />
                  </span>
                  <span className="absolute inset-y-0 right-4 flex items-center text-gray-400">
                    <FaRegEyeSlash />
                  </span>
                  <input
                    type="password"
                    name="password"
                    className="w-full pl-12 p-4 border-none backdrop-blur-lg bg-cyan-50/25 text-white rounded-xl focus:outline-none font-mono focus:placeholder:text-gray-50/0
                   placeholder:font-sans placeholder:tracking-widest placeholder:text-stone-300 focus:ring-2 focus:ring-cyan-500 transition-all"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Parolingizni kiriting..."
                  />
                </div>
                <div className="relative w-full">
                  {/* Ikona */}
                  <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
                    <FaLock />
                  </span>
                  <span className="absolute inset-y-0 right-4 flex items-center text-gray-400">
                    <FaRegEyeSlash />
                  </span>
                  <input
                    type="password"
                    name="password"
                    className="w-full pl-12 p-4 border-none backdrop-blur-lg bg-cyan-50/25 text-white rounded-xl focus:outline-none font-mono focus:placeholder:text-gray-50/0
                   placeholder:font-sans placeholder:tracking-widest placeholder:text-stone-300 focus:ring-2 focus:ring-cyan-500 transition-all"
                    value={repaitpassword}
                    onChange={(e) => setrepaitpassword(e.target.value)}
                    placeholder="Parolingizni qayta kiriting..."
                  />
                </div>
                <button
                  onClick={handleRegister}
                  type="submit"
                  className="w-full bg-slate-50/40 text-white hover:bg-slate-50/40 hover:text-slate-100 font-semibold font-sans tracking-widest rounded-xl p-4 transition-all "
                >
                  Ro'yxatdan o'tish
                </button>
                <div className="flex justify-between">
                  <span className="text-stone-300 text-[15px] tracking-wider font-mono">
                    Hisobingiz bormi?{" "}
                  </span>
                  <span
                    className="cursor-pointer text-[15px] font-mono tracking-wider text-stone-300 hover:underline"
                    onClick={handleRegistir}
                  >
                    Tizimga kirish
                  </span>
                </div>
              </form>
            </>
          ) : (
            <>
              {/* Login Form */}
              <form
                className="w-[100%] flex flex-col gap-6"
                onSubmit={handleLogin}
              >
                <div className="relative w-full flex justify-center mb-6">
                  <span className="absolute top-[-180px] flex items-center font-bold font-mono">
                    <FaUserCircle className="text-[190px] text-slate-500" />
                  </span>
                </div>

                <div className="relative w-full">
                  {/* Ikona */}
                  <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
                    <FaUser />
                  </span>
                  {/* Input */}
                  <input
                    type="text"
                    name="name"
                    className="w-full pl-12 p-4 border-none backdrop-blur-lg bg-cyan-50/25 text-white rounded-xl focus:outline-none font-mono focus:placeholder:text-gray-50/0
                   placeholder:font-sans placeholder:tracking-widest placeholder:text-stone-300 focus:ring-2 focus:ring-cyan-500 transition-all"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Foydalanuvchi nomi"
                  />
                </div>

                <div className="relative w-full">
                  {/* Ko'z ikonkasiga bosilganda parolni ko'rsatish/yashirish */}
                  <span
                    className="absolute inset-y-0 right-4 flex items-center text-gray-400 cursor-pointer"
                    onClick={passwordShow}
                  >
                    {passwods ? <FaRegEyeSlash /> : <FaRegEyeSlash />}{" "}
                    {/* Ko'z ikonkasi */}
                  </span>
                  {/* Lock ikonkasi */}
                  <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
                    <FaLock />
                  </span>
                  {/* Input */}
                  <input
                    type={passwods ? "text" : "password"} // Agar parol ko'rsatilsa, turi 'text' bo'ladi
                    name="password"
                    className="w-full pl-12 p-4 border-none backdrop-blur-lg bg-cyan-50/25 text-white rounded-xl focus:outline-none font-mono focus:placeholder:text-gray-50/0 placeholder:font-sans placeholder:tracking-widest placeholder:text-stone-300 focus:ring-2 focus:ring-cyan-500 transition-all"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Parolni o'zgartirish
                    placeholder="Parolingizni kiriting"
                  />
                </div>

                <div className="w-full text-center mt-4">
                  <button
                    type="submit"
                    className="w-full bg-slate-50/40 text-white hover:bg-slate-50/40 hover:text-slate-100 font-semibold font-sans tracking-widest rounded-xl p-4 transition-all "
                  >
                    Tizimga kirish
                  </button>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-300 text-[15px] tracking-wider font-mono">
                    Hisobingiz yo'qmi?
                  </span>
                  <span
                    className="cursor-pointer text-[15px] font-mono tracking-wider text-stone-300 hover:underline"
                    onClick={handleRegistir}
                  >
                    Ro'yxatdan o'tish
                  </span>
                </div>
              </form>
            </>
          )}
        </div>
        {/* <button className="p-4 rounded-full bg-gray-50/75">button</button> */}
      </div>
      {/* Login page almost done /// */}

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}

export default Login;
