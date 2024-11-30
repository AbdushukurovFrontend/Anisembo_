import React, { useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ item }) => {
  const [selectedVideo, setSelectedVideo] = useState(
    item.series && item.series.length > 0 ? item.series[0].one : null
  );

  // Agar video ro'yxati mavjud bo'lmasa
  if (!item.series || item.series.length === 0) {
    return <div>Video mavjud emas</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      {/* Video oynasi */}
      <div style={{ flex: 2, marginRight: "20px" }}>
        {selectedVideo && (
          <div style={{ maxWidth: "1800px", width: "100%", margin: "0 auto" }}>
            <ReactPlayer
              url={selectedVideo}
              width="100%"
              height="415px"
              controls
              playing={false} // O'yin avtomatik boshlanishi uchun
              config={{
                youtube: {
                  playerVars: {
                    modestbranding: 1, // Brandingni yashirish
                    rel: 0, // Video tugagandan keyin boshqa tavsiyalarni ko'rsatmaslik
                  },
                },
              }}
            />
          </div>
        )}
      </div>

      {/* Seriyalar tugmalari */}
      <div style={{ flex: 1 }} className=" w-[33%]">
        <h3 style={{ marginBottom: "10px" }}>Qisimlar ro'yxati:</h3>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {Object.entries(item.series[0]).map(([key, url], index) => (
            <li key={key} style={{ flex: "0 1 auto" }}>
              <button onClick={() => setSelectedVideo(url)}>
                {`${index + 1}-Qism`}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VideoPlayer;
