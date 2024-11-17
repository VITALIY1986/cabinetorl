import React, { FC, useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import styles from "./ReactYoutube.module.scss"; // Импорт CSS или SCSS файла
import Image from "next/image";
interface YoutubeProps {
	className: string;
	videoId: string;
}

const ReactYoutube: FC<YoutubeProps> = ({ className, videoId }) => {
	const [isLoaded, setIsLoaded] = useState(false);

	// Функция вызывается, когда видео загружено
	const onPlayerReady: YouTubeProps["onReady"] = (event) => {
		event.target.playVideo(); // Начать воспроизведение сразу после загрузки
	};

	const opts: YouTubeProps["opts"] = {
		playerVars: {
			autoplay: 1, // Включить автозапуск при загрузке видео
		},
	};

	return (
		<div className={styles.preview} onClick={() => setIsLoaded(true)}>
		{!isLoaded ? (
		  <>
			<div className={styles.overlay}></div> {/* Затемнение */}
			<Image
			  src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
			  alt="Doctorul Luminița Rădulescu discută despre unul dintre simțurile de bază ale omului la BZI LIVE"
			 width={600}
			 height={400}
			  loading="lazy"
			/>
			<div className={styles.playButton}>
			  &#9658;
			</div>
		  </>
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

