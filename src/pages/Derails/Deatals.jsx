import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../../App.css";
import VideoPlayer from "./VideoPlayer";
import { aniDubApi } from "../../Api/Api";
import Header from "../../components/Header";

// Comments Component
function Comments({ item }) {
  if (!item?.comments?.length) {
    return <p>Hozircha izohlar yo'q.</p>;
  }
  return (
    <div>
      {item.comments.map((comment, index) => (
        <p key={index}>{comment}</p>
      ))}
    </div>
  );
}

function Details() {
  const { id } = useParams();
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activeTab, setActiveTab] = useState("malumot");

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios
      .get(`${aniDubApi}/${id}`)
      .then((res) => {
        setItem(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Ma'lumotni olishda xato:", error);
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Yuklanmoqda...</div>;
  }

  if (error) {
    return <div>Ma'lumotni yuklashda xato yuz berdi!</div>;
  }

  return (
    <div className="">
      <div className="">
        <Header />
        <div className="container mt-16 ms-2">
          {/* Details Header */}

          <div
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundSize: "cover", // Ensures the image covers the element without distorting
              backgroundPosition: "start", // Centers the image within the element
              backgroundRepeat: "no-repeat", // Prevents the image from repeating if it doesn't fill the element
            }}
            className="flex flex-col lg:flex-row gap-8 mt-6 p-6 shadow-lg rounded-lg"
          >
            {/* Info Section */}
            <div className="w-full lg:w-[300px] bacgrooundDetals p-4 text-white rounded-lg flex-shrink-0">
              <h2 className="text-2xl font-semibold text-[#47dae4] tracking-wide border-b-2 pb-2 border-[#47dae4] mb-4">
                {item?.name || "Noma'lum"}
              </h2>
              <p className=" text-sm leading-relaxed tracking-wide overflow-y-auto h-[200px] custom-scrollbar mb-6">
                {item?.desc}
              </p>

              <div className="space-y-2 ">
                <p>
                  <span className="font-medium text-[#00F0FF]">
                    Ko'rishlar soni:{" "}
                  </span>
                  {item?.eye || "Ma'lumot mavjud emas"}
                </p>
                <p>
                  <span className="font-medium text-[#00F0FF]">Rejissor: </span>
                  {item?.Director || "Ma'lumot mavjud emas"}
                </p>
                <p>
                  <span className="font-medium text-[#00F0FF]">Yili: </span>
                  {item?.data || "Ma'lumot mavjud emas"}
                </p>
                <p>
                  <span className="font-medium text-[#00F0FF]">Janr: </span>
                  {item?.genre || "Ma'lumot mavjud emas"}
                </p>
              </div>
            </div>

            {/* Video Player */}
            <div className="flex-1 rounded-lg overflow-hidden shadow-md">
              <VideoPlayer item={item} />
            </div>
          </div>

          {/* Details Footer */}
          <div className="flex items-center gap-14 font-bold mt-6">
            {["malumot", "izohlar", "kadrlar"].map((tab) => (
              <button
                key={tab}
                className={`cursor-pointer ${
                  activeTab === tab ? "text-[#00F0FF] underline" : ""
                }`}
                onClick={() => setActiveTab(tab)}
              >
                <span className="text-[#00F0FF]">{tab[0].toUpperCase()}</span>
                {tab.slice(1)}
              </button>
            ))}
          </div>

          <hr className="my-4" />

          {/* Tab Content */}
          <div className="content mt-4">
            {/* Malumot */}
            {activeTab === "malumot" && (
              <div>
                <h2 className="text-xl font-bold">
                  {item?.title || "Noma'lum"}
                </h2>
                <p>{item?.desc || "Ma'lumot mavjud emas."}</p>
              </div>
            )}
            {/* Izohlar */}
            {activeTab === "izohlar" && (
              <div>
                <h3 className="text-lg font-bold">Izohlar:</h3>
                <Comments item={item} />
              </div>
            )}
            {/* Kadrlar */}
            {activeTab === "kadrlar" && (
              <div>
                <h3 className="text-lg font-bold">Kadrlar:</h3>
                {item?.img ? (
                  <img src={item.img} alt="Kadrlar" className="mb-4" />
                ) : (
                  <p>Kadrlar mavjud emas.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
