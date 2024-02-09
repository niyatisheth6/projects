import React from "react";
import YouTube from "react-youtube";

const Video = ({ videoId, title }) => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <YouTube videoId={videoId} opts={opts} />
      <h1 className="heading-md mt-4">Title : {title}</h1>
    </div>
  );
};

export default Video;
