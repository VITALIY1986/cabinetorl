import React, { FC, useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";

interface YoutubeProps {
	className: string;
	videoId: string;
}

const ReactYoutube: FC<YoutubeProps> = ({ className, videoId }) => {
	const [isLoaded, setIsLoaded] = useState(false);

	const onPlayerReady: YouTubeProps["onReady"] = (event) => {
		event.target.pauseVideo();
	};

	const opts: YouTubeProps["opts"] = {
		playerVars: {
			autoplay: 0,
		},
	};

	return (
		<div className={className} onClick={() => setIsLoaded(true)}>
			{!isLoaded ? (
				<img
					src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
					alt="YouTube Preview"
					style={{ cursor: "pointer" }}
				/>
			) : (
				<YouTube
					iframeClassName={className}
					videoId={videoId}
					opts={opts}
					onReady={onPlayerReady}
				/>
			)}
		</div>
	);
};

export default ReactYoutube;
