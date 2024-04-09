import React, { FC } from "react";
import scss from "./Style.module.scss";
import ContactForm from "@/components/contact/ContactForm";
import Image from "next/image";
import { EmailIcon, MarkerIcon, PhoneIcon } from "@/components/svgs";
import logo from "@/assets/ortodont.webp";
import AnimatedNumbers from "@/components/framer-motion/AnimatedNumbers";
import { FormattedMessage } from "react-intl";

const ContactPage: FC = () => {
	return (
		<>
			<div id="contact" className={scss.contact__page}>
				<div className="container">
					<div className={scss.content}>
						
						<div className={scss.right}>
							<div className={scss.block}>
								<div className={scss.texts}>
									<h1 className={scss.title}>
										<FormattedMessage id="page.contact.right.title" />
									</h1>
									{/*<p className={`${scss.text} ${scss.email}`}>*/}
									{/*	<EmailIcon />*/}
									{/*	boss.armsport@gmail.com*/}
									{/*</p>*/}
									<p className={scss.text}>
										<a className={scss.tel} href="tel:+40724955956">
											<PhoneIcon />
											
													+40724955956
										</a>
									</p>
									<p className={scss.text}>
										<a className={scss.tel} href="tel:+40724955956">
											<PhoneIcon />
											
										+40724955956
										</a>
									</p>
									<p className={scss.text}>
										<MarkerIcon />
										Cabinet ORL
										{/*DevX&nbsp;*/}
										{/*<AnimatedNumbers value={911} />*/}
									</p>
								</div>
								<div className={scss.logo}>
									<div className={scss.logo__bg}>
										<Image
											priority={true}
											quality={25}
											loading="eager"
											className={scss.logo__img}
											src={logo}
											alt="logo"
										/>
									</div>
								</div>
							</div>
							<div className={scss.map}>
								<iframe
									src="/map.html"
									frameBorder="0"
									title="Map on 2GIS"
								></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default ContactPage;
