import React, { FC } from "react";
import scss from "./Footer.module.scss";
import { InstagramIcon, TelegramIcon, WhatAppIcon } from "@/components/svgs";
import SwitchLogo from "@/components/theme/SwitchLogo";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

import { IsOpenProps } from "@/components/layout/Layout";



interface FooterProps extends IsOpenProps {
	
	logo: string;
	
}
const Footer: FC<FooterProps> = (props) => {
	const { logo } = props;
	return (
		<div className={scss.footer}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.footer__top}>
						<div className={scss.block}>
							<Link
								className={scss.logo__link}
								href="/"
								onClick={() => {
									props.setIsOpen(false);
									props.setIsOpenDropdown(false);
									props.setIsOpenDropdownLanguage(false);
								}}
							>
								<div className={scss.bg}>
									<SwitchLogo className={scss.logoDevX} logo={logo} />
								</div>
							</Link>
							<p>
							Servicii principale: otomicroscopie, otoscopie, rinoscopie, fibroscopie, timpanogramă, DPOAE.
							</p>
						</div>
						<div className={scss.block}>
							<h4>
								<FormattedMessage id="page.footer.block_2.title" />
							</h4>
							<a className={scss.link__text} href="#">
								<FormattedMessage id="page.footer.block_2.text_1" />
							</a>
							<a className={scss.link__text} href="#service">
								<FormattedMessage id="page.footer.block_2.text_2" />
							</a>
							<a className={scss.link__text} href="#about">
								<FormattedMessage id="page.footer.block_2.text_3" />
							</a>
							<a className={scss.link__text} href="#contact">
								<FormattedMessage id="page.footer.block_2.text_4" />
							</a>
						</div>
						<div className={scss.block}>
							<h4>
								<FormattedMessage id="page.footer.block_3.title" />
							</h4>
							<a className={scss.link__text} href="#service">
								<FormattedMessage id="page.footer.block_3.text_1" />
							</a>
						
						</div>
						<div className={scss.block}>
							<h4>
								<FormattedMessage id="page.footer.block_4.title" />
							</h4>
							{/*<a className={scss.link__text} href="#">*/}
							{/*	boss.armsport@gmail.com*/}
							{/*</a>*/}
							<a className={scss.link__text} href="tel:+40724955956">
							+40724955956
							</a>
						
						</div>
					</div>
					<hr />
					<div className={scss.footer__bottom}>
						<div className={scss.copyright}>© 2019-2024 / Toate drepturile rezervate.</div>
						<div className={scss.icons}>
							<a
								className={scss.link}
								href="#"
								target="_blank"
								aria-label="Link to Instagram profile"
							>
								<InstagramIcon />
							</a>
							<a
								className={scss.link}
								href="#"
								target="_blank"
								aria-label="Link to WhatApp profile"
							>
								<WhatAppIcon />
							</a>
							<a
								className={scss.link}
								href="#"
								target="_blank"
								aria-label="Link to Telegram Call"
							>
								<TelegramIcon />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Footer;
