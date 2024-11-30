import React, { useState } from "react";
import "../../App.css";
const VideoPlayer = ({ item }) => {
  const [selectedVideo, setSelectedVideo] = useState(
    item.series && item.series.length > 0 ? item.series[0].one : null
  );

  // Agar video ro'yxati mavjud bo'lmasa
  if (!item.series || item.series.length === 0) {
    return <div>Video mavjud emas</div>;
  }

  return (
    <div className=" flex gap-4">
      <div>
        {selectedVideo && (
          <>
            <div className=" w-[800px]">
              <iframe
                src={selectedVideo}
                className=" rounded-lg focus: outline-none"
                style={{ width: "100%", height: "440px", border: "none" }}
              ></iframe>
            </div>
          </>
        )}
      </div>

      {/* qismlar  */}
      <div className=" overflow-y-auto h-[440px]">
        <div className="flex flex-wrap w-[230px] gap-3">
          {Object.entries(item.series[0]).map(([key, url], index) => (
            <button
              className=" bacgrooundDetals w-[100px] h-[45px] rounded-lg"
              key={key}
              onClick={() => setSelectedVideo(url)}
            >
              {`${index + 1}-Qism`}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
