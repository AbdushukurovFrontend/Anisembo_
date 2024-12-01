import React, { useState } from "react";
import { IoIosExit } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the default styles

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repaitpassword, setrepaitpassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [regs, setregs] = useState(false);

  const navigate = useNavigate();
  const userName = localStorage.getItem("name");
  const userPassword = localStorage.getItem("password");

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

  return (
    <div className="w-full h-screen flex flex-col md:flex-row bacgorunG relative">
      {/* Close Button (Top right corner) */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-[50px] z-10"
      >
        <IoIosExit />
      </button>

      {/* GIF (Top half) */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full relative z-0">
        {/* <img
          className="w-full h-full object-cover"
          src="https://anilife.vercel.app/static/media/vedio.d1a1d71b52d92096f352.gif"
          alt="Login Animation"
        /> */}
      </div>

      {/* Login Form (Bottom half or right side) */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center backdrop-blur-sm p-4 md:p-8 rounded-lg shadow-lg">
        <div className="w-full max-w-md">
          {regs ? (
            <>
              <form
                className="w-full flex flex-col gap-6"
                onSubmit={handleLogin}
              >
                <h2 className="text-3xl font-bold text-center text-blue-300">
                  Tizimga kirish
                </h2>
                <input
                  type="text"
                  name="name"
                  className="p-4 border-none font-mono bg-gray-50 rounded-xl text-black placeholder:text-zinc-400 focus:placeholder:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Foydalanuvchi nomi"
                />
                <input
                  type="password"
                  name="password"
                  className="p-4 border-none font-mono bg-gray-50 rounded-xl text-black focus:outline-none focus:placeholder:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Parolingizni kiriting..."
                />
                <input
                  type="password"
                  name="password"
                  className="p-4 border-none font-mono bg-gray-50 rounded-xl text-black focus:outline-none focus:ring-2 focus:placeholder:text-white focus:ring-blue-500 focus:border-blue-500 transition-all"
                  value={repaitpassword}
                  onChange={(e) => setrepaitpassword(e.target.value)}
                  placeholder="Parolingizni qayta kiriting..."
                />
                <button
                  onClick={handleRegister}
                  type="submit"
                  className="hover:bg-blue-950 w-full text-white rounded-xl p-4 bg-blue-400 hover:text-white transition-all "
                >
                  Ro'yxatdan o'tish
                </button>
                <div className="flex justify-between">
                  <span className="text-blue-200 text-[16px] font-mono">
                    Hisobingiz bormi?{" "}
                  </span>
                  <span
                    className="cursor-pointer text-[16px] font-mono text-blue-200 hover:underline"
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
                className="w-full flex flex-col gap-6"
                onSubmit={handleLogin}
              >
                <h2 className="text-3xl font-bold text-center font-mono text-blue-300">
                  Tizimga kirish
                </h2>
                <input
                  type="text"
                  name="name"
                  className="p-4 border-none bg-gray-50 rounded-xl text-black focus:outline-none font-mono focus:placeholder:text-white placeholder:font-mono placeholder:text-zinc-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Foydalanuvchi nomi"
                />
                <input
                  type="password"
                  name="password"
                  className="p-4 border-none bg-gray-50 rounded-xl text-black focus:outline-none font-mono focus:placeholder:text-white focus:ring-2 focus:ring-blue-500 placeholder:font-mono placeholder:text-zinc-400 focus:border-blue-500 transition-all"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Parolingizni kiriting"
                />
                <div className="w-full text-center mt-8">
                  <button
                    type="submit"
                    className="hover:bg-blue-950 w-full text-white rounded-xl p-4 bg-blue-400 hover:text-white transition-all "
                  >
                    Tizimga kirish
                  </button>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200 text-[16px] font-mono">
                    Hisobingiz yo'qmi?{" "}
                  </span>
                  <span
                    className="cursor-pointer text-[16px] font-mono text-blue-200 hover:underline"
                    onClick={handleRegistir}
                  >
                    Ro'yxatdan o'tish
                  </span>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
      {/* Login page almost done /// */}

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}

export default Login;
