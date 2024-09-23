import React, { FC } from "react";
import YouTube, { YouTubeProps } from "react-youtube";

interface YoutubeProps {
  className: string;
  videoId: string; // Добавляем videoId в интерфейс
}

const ReactYoutube: FC<YoutubeProps> = ({ className, videoId }) => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <YouTube
      iframeClassName={className}
      videoId={videoId} // Используем переданный videoId
      opts={opts}
      onReady={onPlayerReady}
    />
  );
};

export default ReactYoutube;
