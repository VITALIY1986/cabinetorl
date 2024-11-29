import React, { FC } from "react";
import scss from "./Style.module.scss";
import { FormattedMessage } from "react-intl";
import Image from "next/image";
import TeethIcon from "@/assets/icons/Teeth.webp";
import ReactYoutube from "@/components/react-youtube/ReactYoutube";

interface AboutPageProps {
	rightimg: string;
  videoId: string;
  youtubedescription: string;
}

const AboutPage: FC<AboutPageProps> = ({ videoId,youtubedescription,rightimg }) => {
  return (
    <>
      <div id="about" className={scss.about__page}>
        <div className={scss.block__1}>
          <div className="container">
            <div className={scss.about__us}>
              {/* Главное изображение */}
              <Image
                priority={true}
                quality={1}
                loading="eager"
                className={scss.balance__for__mobile}
                src={TeethIcon}
                alt={"Cabinet ORL"}
              />
              {/* Иконки */}
              <div className={scss.icon__first}>
              <Image
                  priority={true}
                  quality={25}
				  width={400}
				  height={720}
				  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                  loading="eager"
                  src={rightimg}
                  alt={"Cabinet ORL Icon 2"}
                />
              </div>
              <div className={scss.icon__second}>
                <Image
                  priority={true}
                  quality={25}
				  width={400}
				  height={720}
				  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                  loading="eager"
                  src={rightimg}
                  alt={"Cabinet ORL Icon 2"}
                />
              </div>
              {/* Заголовок */}
              <h2 className={scss.title}>
                <FormattedMessage id="page.about.title" />
              </h2>
              {/* Видео и текст */}
              <div className={scss.video__text}>
                <ReactYoutube videoId={videoId} className={scss.youtube} />
                <p className={scss.text}>
                 {youtubedescription}
                </p>
                
              </div>
              <div>
              <h2 className={scss.title}>
                Despre Prof. Dr. Luminița Rădulescu
              </h2>
              <p>
              Prof. Dr. Luminita Radulescu este un medic ORL 
              respectat, cu multiple publicatii si participari la
               conferinte internationale. Cu o cariera de peste doua 
               decenii, aceasta a ajutat mii de pacienti sa isi imbunatateasca 
               calitatea vietii.</p>
               </div>
               <div>
               <h2 className={scss.title}>
               Intrebari frecvente despre consultatiile ORL la Iasi
              </h2>
              <h3><strong>Cand este indicata o consultatie ORL?</strong></h3>
              <p>
              Consultatia ORL este recomandata daca aveti simptome precum:</p>
              <ul>
                <li>Pierdere de auz.</li>
                <li>Durere persistenta in ureche, gat sau nas.</li>
                <li>Probleme de respiratie.</li>
                <li>Sforait excesiv sau apnee in somn.</li>
                <li>Pierderea sau schimbarea vocii.</li>
                </ul>
                <h3><strong>Ce investigatii sunt incluse in consultatie?</strong></h3>
              <p>
              Consultatia standard include:</p>
              <ul>
                <li>Otomicroscopie.</li>
                <li>Examen clinic complet (urechi, nas, gat).</li>
                <li>Fibroscopie si alte teste specifice, daca este necesar.</li>
              
                </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
