import Head from "next/head";
import React, { FC, ReactNode, useState } from "react";
import scss from "./Layout.module.scss";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import { useIntl } from "react-intl";
import logo from "@/assets/ortodont.webp";
import woman from "@/assets/img/Woman.webp";
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
			
				<title>Profesor Doctor ORL Iasi: Radulescu Luminita 🏆</title>
				<meta name="description" content=" Cautați un specialist ORL de inalta calificare in Iasi? Profesor Doctor ORL Radulescu Luminita ofera cele mai bune servicii ORL, inclusiv cabinete si urgente ORL în Iasi." />
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
				<meta name="robots" content="index, follow"/>
				<link rel="icon" href="/icon.png" />
				<link rel="canonical" href="https://cabinet-orl-iasi.ro/" />
<link rel="shortlink" href="https://cabinet-orl-iasi.ro/" />
<meta property="og:type" content="Profesor Doctor ORL Iasi: Radulescu Luminita 🏆" />
<meta property="og:url" content="https://cabinet-orl-iasi.ro/" />
<meta property="og:title" content="Profesor Doctor ORL Iasi: Radulescu Luminita 🏆" />
<meta property="og:image" content={`https://cabinet-orl-iasi.ro${woman}`} />
<meta name="google-site-verification" content="b5rsNgu8NoLvPn8hLeR5pwrIT3mJfHbpi-yphT49cOc" />
<meta property="og:image:type" content="image/webp" />
<meta name="dcterms.title" content="Profesor Doctor ORL Iasi: Radulescu Luminita 🏆" />
<meta name="dcterms.type" content="Profesor Doctor ORL Iasi: Radulescu Luminita 🏆" />
<meta name="dcterms.format" content="text/html" />
<meta name="dcterms.identifier" content="https://cabinet-orl-iasi.ro/" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="Profesor Doctor ORL Iasi: Radulescu Luminita 🏆" />

<meta name="twitter:image" content={`https://cabinet-orl-iasi.ro${logo.src}`} />
<meta name="twitter:image:alt" content="Profesor Doctor ORL Iasi: Radulescu Luminita 🏆" />




				
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
