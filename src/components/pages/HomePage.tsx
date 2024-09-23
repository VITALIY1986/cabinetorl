import React, { FC } from "react";
import scss from "./Style.module.scss";
import Head from "next/head";
import { FormattedMessage, useIntl } from "react-intl";
import Image from "next/image";
import woman from "@/assets/img/Woman.webp";
import animate from "@/assets/img/Animate.webp";
import AnimatedNumbers from "@/components/framer-motion/AnimatedNumbers";
import { Typewriter } from "react-simple-typewriter";
import { InstagramIcon, TelegramIcon, WhatAppIcon } from "@/components/svgs";

const HomePage: FC = () => {
	const intl: any = useIntl();

	const title: any = intl.formatMessage({ id: "page.head.home.title" });

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<div id="/" className={scss.home__page}>
				<div className={scss.container_home}>
					<div className={scss.content}>
						{/* ! left */}
						{/* 	cursor*/}
											{/*cursorStyle="|"*/}
						<div className={scss.left}>
							<div className={scss.sub__title}>
								<h1 className={scss.title}>
									<Typewriter
										words={[intl.formatMessage({ id: "page.home.title" })]}
										loop={true}
									
										typeSpeed={50}
										deleteSpeed={10}
										delaySpeed={1500}
									/>
								</h1>
								<div className={scss.button__call}>
									<div className={scss.icons}>
										<a
											className={`${scss.link} ${scss.instagram}`}
											href="#"
											target="_blank"
											aria-label="Link to Instagram profile"
										>
											<InstagramIcon />
										</a>
										<a
											className={`${scss.link} ${scss.what__app}`}
											href="#"
											target="_blank"
											aria-label="Link to WhatApp profile"
										>
											<WhatAppIcon />
										</a>
										<a
											className={`${scss.link} ${scss.telegram}`}
											href="#"
											target="_blank"
											aria-label="Link to Telegram Call"
										>
											<TelegramIcon />
										</a>
									</div>
								</div>
							</div>

							<div className={scss.stats}>
								<div className={scss.customers}>
									<h1>
										<AnimatedNumbers value={1687} />+
									</h1>
									<hr />
									<p>
										<FormattedMessage id="page.home.stat.first" />
									</p>
								</div>
								<div className={scss.years}>
									<h1>
										<AnimatedNumbers value={20} />+
									</h1>
									<hr />
									<p>
										<FormattedMessage id="page.home.stat.second" />
									</p>
								</div>
							</div>
						</div>

						{/* ! right */}
						<div className={scss.right}>
							<div className={scss.woman}>
								<Image
									priority={true}
									quality={50}
									loading="eager"
									src={woman}
									alt="Profesor Doctor ORL Iasi: Radulescu Luminita 🏆"
								/>
							</div>
							{/*<div className={scss.animate_rotate}>
								<Image
									priority={true}
									quality={20}
									loading="eager"
									src={animate}
									alt="Cabinet ORL"
									width={550}
								/>
							</div>*/}
						</div>


						



						
					</div>
				</div>
			</div>
		</>
	);
};
export default HomePage;
