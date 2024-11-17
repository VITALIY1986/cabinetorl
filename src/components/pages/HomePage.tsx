import React, { FC } from "react";
import scss from "./Style.module.scss";
import Head from "next/head";
import { FormattedMessage, useIntl } from "react-intl";
import Image from "next/image";
import { InstagramIcon, TelegramIcon, WhatAppIcon } from "@/components/svgs";
import AnimatedNumbers from "@/components/framer-motion/AnimatedNumbers";
import { Typewriter } from "react-simple-typewriter";
import CoverImage from "./cover-image"; // Убедитесь, что путь правильный

interface CoverImageProps {
	
  title: string;
  url: string;
  slug?: string; // Опциональный пропс
}

interface HomePageProps {
	text: string;
  url: string; // Определяем ожидаемый пропс
}

const HomePage: FC<HomePageProps> = ({ url,text }) => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "page.head.home.title" });

  // Пример данных для CoverImage
  const coverImageProps: CoverImageProps = {
    title: "Hero Image Title", // Убедитесь, что у вас есть значение для title
    url: url, // Передаем url
    slug: "example-slug", // Если нужно, передавайте slug
  };

  return (
    <>
      
      <div id="/" className={scss.home__page}>
        <div className={scss.container_home}>
          <div className={scss.content}>
            {/* ! left */}
            <div className={scss.left}>
              <div className={scss.sub__title}>
				
                <h1 className={scss.title}>
				{text}
                </h1>
              {/*   <div className={scss.button__call}>
                  <div className={scss.icons}>
                    <a className={`${scss.link} ${scss.instagram}`} href="#" target="_blank" aria-label="Link to Instagram profile">
                      <InstagramIcon />
                    </a>
                    <a className={`${scss.link} ${scss.what__app}`} href="#" target="_blank" aria-label="Link to WhatApp profile">
                      <WhatAppIcon />
                    </a>
                    <a className={`${scss.link} ${scss.telegram}`} href="#" target="_blank" aria-label="Link to Telegram Call">
                      <TelegramIcon />
                    </a>
                  </div>
                </div>*/}
              </div>

              <div className={scss.stats}>
                <div className={scss.customers}>
                
                 
                  
                  <h1>
                    <AnimatedNumbers value={1687} />+
                  </h1>
                  <div className={scss.yearset}>
                  clienți mulțumiți
                  </div>
                </div>
                <div className={scss.years}>
               
                  <h1>
                    <AnimatedNumbers value={20} />+
                  </h1>
                 
                  <div className={scss.yearset}>
                   ani de practica
                    </div>
                </div>
              </div>
            </div>

            {/* ! right */}
            <div className={scss.right}>
              <div className={scss.woman}>
           {/*    width={520}
              height={900}  ЧТОБ УВЕЛИЧИТЬ СКОРОСТЬ     */}
				<Image
				
              priority={true}
              width={390}
              height={600}
            
			  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
			  
			 
              className={scss.balance__for__mobile}
              src={url}
              alt={"Profesor Doctor Radulescu Luminita - Specialist Otorinolaringolog (ORL)"}
            />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
