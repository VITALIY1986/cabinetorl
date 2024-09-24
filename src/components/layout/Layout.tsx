import Head from "next/head";
import React, { FC, ReactNode, useState } from "react";
import scss from "./Layout.module.scss";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import { useIntl } from "react-intl";
import logo from "@/assets/ortodont.webp";
import woman from "@/assets/img/Prof-Dr-LuminitaRadulescu.png";
// Inter
import { Montserrat } from "next/font/google";

const font = Montserrat({ subsets: ["latin"] });

interface LayoutProps {
	logo: string;
	metadescription: string;
	metatitle: string;
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

const Layout: FC<LayoutProps> = ({ children, dir, metatitle, metadescription, logo}) => {
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



	return (
		<>
			<Head>
			
				<title>{metatitle}</title>
				<meta name="description" content={metadescription} />

				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
				<meta name="robots" content="index, follow"/>
				<link rel="icon" href="/icon.png" />
				<link rel="canonical" href="https://cabinet-orl-iasi.ro/" />
<link rel="shortlink" href="https://cabinet-orl-iasi.ro/" />
<meta property="og:type" content={metatitle} />
<meta property="og:url" content="https://cabinet-orl-iasi.ro/" />
<meta property="og:title" content={metatitle} />
<meta property="og:image" content={`https://cabinet-orl-iasi.ro${woman.src}`} />
<meta name="google-site-verification" content="b5rsNgu8NoLvPn8hLeR5pwrIT3mJfHbpi-yphT49cOc" />
<meta property="og:image:type" content="image/webp" />
<meta name="dcterms.title" content={metatitle} />
<meta name="dcterms.type" content={metatitle} />
<meta name="dcterms.format" content="text/html" />
<meta name="dcterms.identifier" content="https://cabinet-orl-iasi.ro/" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content={metatitle} />

<meta name="twitter:image" content={`https://cabinet-orl-iasi.ro${logo}`} />
<meta name="twitter:image:alt" content={metatitle} />




				
				{/*<link rel="icon" href="/icon.png" hrefLang="x-default" />
				<link rel="icon" href="/icon.png" hrefLang="ru" />
				<link rel="icon" href="/icon.png" hrefLang="en" />
	<link rel="icon" href="/icon.png" hrefLang="kg" />*/}
			</Head>
			<div dir={dir}>
				<div className={`${scss.layout} ${font.className}`}>
					<header>
						<Header {...props}logo={logo} />
					</header>
					<main>{children}</main>
					<footer>
						<Footer {...props} logo={logo}/>
					</footer>
				</div>
			</div>
	
		</>
	);
};
export default Layout;
