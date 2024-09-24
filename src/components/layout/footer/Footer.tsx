import React, { FC } from "react";
import scss from "./Footer.module.scss";
import { InstagramIcon, TelegramIcon, WhatAppIcon } from "@/components/svgs";
import SwitchLogo from "@/components/theme/SwitchLogo";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

import { IsOpenProps } from "@/components/layout/Layout";

interface FooterProps extends IsOpenProps {
	logo: string; // Убедитесь, что это свойство объявлено
}

const Footer: FC<FooterProps> = (props) => {
	const { logo } = props; // Извлечение свойства logo из props

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
								<FormattedMessage id="page.footer.block_1.title" />
							</p>
						</div>
						{/* Остальная часть кода */}
					</div>
					<hr />
					{/* Нижняя часть кода */}
				</div>
			</div>
		</div>
	);
};

export default Footer;
