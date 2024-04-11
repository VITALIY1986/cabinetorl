import Head from "next/head";
import React, { FC, ReactNode, useState } from "react";
import scss from "./Layout.module.scss";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import { useIntl } from "react-intl";

// Inter
import { Montserrat } from "next/font/google";

const font = Montserrat({ subsets: ["latin"] });

interface LayoutProps {
	children: ReactNode;
	dir?: any;
}

export interface IsOpenProps {
	isOpen: boolean;
	setIsOpen: (param: boolean) => void;
	isOpenDropdown: boolean;
	setIsOpenDropdown: (param: boolean) => void;
	isOpenDropdownLanguage: boolean;
	setIsOpenDropdownLanguage: (param: boolean) => void;
}

const Layout: FC<LayoutProps> = ({ children, dir }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenDropdown, setIsOpenDropdown] = useState(false);
	const [isOpenDropdownLanguage, setIsOpenDropdownLanguage] = useState(false);

	const props: any = {
		isOpen,
		setIsOpen,
		isOpenDropdown,
		setIsOpenDropdown,
		isOpenDropdownLanguage,
		setIsOpenDropdownLanguage
	};

	const intl: any = useIntl();

	const title: any = intl.formatMessage({ id: "page.head.home.title" });
	const description: any = intl.formatMessage({
		id: "page.head.meta.description"
	});

	return (
		<>
			<Head>
			
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
				<link rel="icon" href="/icon.png" />
				<meta property="og:title" content="Cabinet ORL Prof. dr. Radulescu Luminita" />
  <meta property="og:type" content="Cabinet ORL Prof. dr. Radulescu Luminita" />
  <meta property="og:image" content="https://example.com/image.jpg" />
  <meta property="og:url" content="https://cabinet-orl-iasi.ro/_ipx/w_3840,q_50/%2F_next%2Fstatic%2Fmedia%2FWoman.70dca9ef.webp?url=%2F_next%2Fstatic%2Fmedia%2FWoman.70dca9ef.webp&w=3840&q=50" />
  <meta property="og:description" content="Prof. Dr. Rădulescu Luminița Consultația cu investigațiile incluse / Examen clinic cu otoscopie/rinoscopie și bucofaringoscopie /fibroscopie/audiograma tonală/vocală/timpanograma/DPOAE/reflex Stapedian, etc." />
				{/*<link rel="icon" href="/icon.png" hrefLang="x-default" />
				<link rel="icon" href="/icon.png" hrefLang="ru" />
				<link rel="icon" href="/icon.png" hrefLang="en" />
	<link rel="icon" href="/icon.png" hrefLang="kg" />*/}
			</Head>
			<div dir={dir}>
				<div className={`${scss.layout} ${font.className}`}>
					<header>
						<Header {...props} />
					</header>
					<main>{children}</main>
					<footer>
						<Footer {...props} />
					</footer>
				</div>
			</div>
		</>
	);
};
export default Layout;
