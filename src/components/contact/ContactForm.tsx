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

	const TOKEN = "6182732393:AAEaon3732C55YRsWvLNdaEtLRKh4TSGhww";
	const CHAT_ID = "-1001985016010";
	const API_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

	const messageModel = () => {
		let messageTG = `First Name: <b>${formData.first_name}</b>\n`;
		messageTG += `Last Name: <b>${formData.last_name}</b>\n`;
		messageTG += `Phone: <b>${formData.phone}</b>\n`;
		messageTG += `Subject: <b>${formData.subject}</b>\n`;
		messageTG += `Message: <b>${formData.message}</b>\n`;

		return messageTG;
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const notify = () => {
		toast.success("Ваша форма успешно отправлена!", {
			position: "top-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "dark"
		});
	};

	async function sendData(e: React.FormEvent<HTMLFormElement>): Promise<void> {
		e.preventDefault();

		setSendButton(!sendButton);

		try {
			await axios.post(API_URL, {
				chat_id: CHAT_ID,
				parse_mode: "html",
				text: messageModel()
			});

			notify();
			setSendButton(sendButton);

			setFormData({
				first_name: "",
				last_name: "",
				phone: "",
				subject: "",
				message: ""
			});
		} catch (err) {
			console.log(err);
		}
	}

	const intl: any = useIntl();

	return (
		<>
			<div className={className}>
			<form
    name="contact-form"
    method="POST"
    action="contact/?success=true"
  >
    <label htmlFor="name">Name *</label>
    <input
      id="name"
      name="name"
      required
      type="text"
    />
    <label htmlFor="company">Company *</label>
    <input id="company" name="company" required type="text" />
    <label htmlFor="email">E-mail Address *</label>
    <input id="email" type="email" name="email" required />
    <label htmlFor="message">Message *</label>
    <textarea id="message" name="message" required></textarea>
    <button type="submit">Submit</button>
  </form>
			</div>
		</>
	);
};

export default ContactForm;
