import { FC, useState } from "react";
import axios from "axios";
import scss from "./Contact.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormattedMessage, useIntl } from "react-intl";

import { Montserrat } from "next/font/google";

const font = Montserrat({ subsets: ["latin"] });

interface FormData {
	first_name: string;
	last_name: string;
	phone: string;
	subject: string;
	message: string;
}

interface ContactFormProps {
	className?: any;
}

const ContactForm: FC<ContactFormProps> = ({ className }) => {
	const [formData, setFormData] = useState<FormData>({
		first_name: "",
		last_name: "",
		phone: "",
		subject: "",
		message: ""
	});

	const [sendButton, setSendButton] = useState(false);

	

	

	return (
		<>
			<div className={className}>
				<form className={scss.form}  name="contact" method="POST" data-netlify="true">
					<div className={scss.container}>
						<div className={scss.titles}>
							<h2>
								<FormattedMessage id="page.contact.left.title" />
							</h2>
							<p>
								<FormattedMessage id="page.contact.left.text" />
							</p>
						</div>
						<div className={scss.inputs}>
							<div className={scss.inputBx}>
								<input
									type="text"
									name="first_name"
									
								/>
								<label htmlFor="first_name">
									<FormattedMessage id="page.contact.input.fitst.name" />
								</label>
							</div>

							<div className={scss.inputBx}>
								<input
									type="text"
									name="last_name"
									
								/>
								<label htmlFor="last_name">
									<FormattedMessage id="page.contact.input.last.name" />
								</label>
							</div>

							<div className={scss.inputBx}>
								<input
									type="text"
									name="phone"
									
								/>
								<label htmlFor="phone">
									<FormattedMessage id="page.contact.input.phone" />
								</label>
							</div>

							<div className={scss.inputBx}>
								<input
									type="text"
									name="subject"
									
								
									
								/>
								<label htmlFor="subject">
									<FormattedMessage id="page.contact.input.subject" />
								</label>
							</div>

							<div className={scss.textareaBx}>
						
							</div>
						</div>
						<button className={`${scss.button}`}>
						
						</button>
					
					</div>
				</form>
			</div>
		</>
	);
};

export default ContactForm;
