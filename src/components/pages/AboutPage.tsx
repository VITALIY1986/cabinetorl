import React, { FC } from "react";
import scss from "./Style.module.scss";
import { FormattedMessage } from "react-intl";
import Image from "next/image";
import TeethIcon from "@/assets/icons/Teeth.webp";
import ReactYoutube from "@/components/react-youtube/ReactYoutube";

interface AboutPageProps {
	videoId: string;
	youtubedescription: string;
}

const AboutPage: FC<AboutPageProps> = ({ videoId,youtubedescription }) => {
	return (
		<div id="about" className={scss.about__page}>
			<div className={scss.block__1}>
				<div className="container">
					<div className={scss.about__us}>
						<Image
							priority={true}
							quality={1}
							loading="eager"
							className={scss.balance__for__mobile}
							src={TeethIcon}
							alt="Cabinet ORL"
						/>
						<h1 className={scss.title}>
							<FormattedMessage id="page.about.title" />
						</h1>
						<div className={scss.video__text}>
							<ReactYoutube videoId={videoId} className={scss.youtube} />
							<p className={scss.text}>
								{youtubedescription}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
