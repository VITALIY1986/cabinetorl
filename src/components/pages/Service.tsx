import React, { FC } from "react";
import scss from "./Style.module.scss";
import { FormattedMessage } from "react-intl";
import Image from "next/image";
import TeethIcon from "@/assets/icons/Teeth.webp";
import MedPlus from "@/assets/icons/med_plus.png";
import CheckMark from "@/assets/icons/check_mark.png";
import BxChild from "@/assets/icons/bx-child.png";
import ReactYoutube from "@/components/react-youtube/ReactYoutube";
import ContactForm from "@/components/contact/ContactForm";
interface ServiceProps {
	programaretitle: string;
	programaredescription:string;
}
const Service: FC<ServiceProps> = ({programaretitle, programaredescription}) => {
	return (
		<>	<div className="container">
			<div id="service" className={scss.about__page}>
				<div className={scss.block__1}>
				<div className={scss.title1}>
						
							<p>
							Cautati un specialist <strong>ORL in Iasi? </strong>
							Cabinetul nostru va ofera servicii de
							 inalta calitate in domeniul otorinolaringologiei,
							  sub indrumarea<strong> Prof. Dr. Luminita Radulescu, medic
							  ORL </strong> cu peste 20 de ani de experienta. Cu utilizarea tehnologiilor
							   avansate si a cunostintelor acumulate de-a lungul anilor in domeniul ORL,
							    suntem aici pentru a va oferi cele mai bune solutii pentru sanatatea dumneavoastra.
								<br/>
								Programati-va acum pentru o consultatie completa si beneficiati de investigatii detaliate: otomicroscopie, timpanograma, fibroscopie si multe altele.
							</p>
						</div>
						<div className={scss.title1}>
							<h2>
							Despre Cabinet ORL Iași
							</h2>
							<p>
							Principalul cabinet ORL din Iasi, situat pe strada Moara de Foc, 30, are ca specializare principala sanatatea urechilor, nasului si gatului. Sub indrumarea profesorului doctor Luminita Radulescu, cabinetul ofera consultatii complexe si investigatii moderne atat pentru adulti, cat si pentru copii.
<br/>
Cu <strong> peste 1687 de pacienti multumiti </strong> si <strong>20 de ani de practica,</strong> cabinetul nostru se numara printre cele mai respectate centre ORL din Iasi.
							</p>
						</div>
				
					
				
						<div className={scss.content}>
						
						<div className={scss.price }>
							<div className={scss.titles }>
							<h2 >Consultație ORL completa</h2>
							<p>Consultatia cu investigatiile incluse </p>
							<ul>
							     <li>Otomicroscopie </li>
								<li>Examen clinic cu otoscopie </li>
								<li>rinoscopie și bucofaringoscopie</li>
								<li>fibroscopie</li>
								
								<li>timpanograma</li>
								<li>DPOAE</li>
								
							</ul>
							
							</div>
						</div>


					<div className={scss.left}>
							<ContactForm 
							className={scss.form__block} 
							programaretitle={programaretitle} 
							programaredescription={programaredescription}
							/>
						</div>
					</div>
					</div>
				</div>

				
			</div>
		</>
	);
};
export default Service;
