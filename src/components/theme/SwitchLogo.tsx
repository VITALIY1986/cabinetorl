import React, { FC } from "react";
import Image from "next/image";
// import logoDark from "@/assets/logo-dark.png";
// import logoLight from "@/assets/logo.png";
import logoOrtodont from "@/assets/ortodont-logo.webp";
import { useTheme } from "next-themes";

interface SwitchLogoProps {
	logo: string;
	className?: any;
}

const SwitchLogo: FC<SwitchLogoProps> = ({ className , logo}) => {
	
	// const logo: any = resolvedTheme === "light" ? logoDark : logoLight;
	

	return (
		<>
			<Image className={className} src={logo} alt="logo"  width={400}
				  height={720}
				  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
				  
				  
				  
				  />
		</>
	);
};

export default SwitchLogo;
