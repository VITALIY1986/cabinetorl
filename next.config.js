/** @type {import("next").NextConfig} */









const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.ctfassets.net',
				port: '', // оставьте пустым, если не требуется
				pathname: '/**', // разрешаем все пути
			},
		],
	},
	i18n: {
		locales: ["ro"], // оставляем только один язык
		defaultLocale: "ro", // назначаем его как основной
		localeDetection: false // при необходимости
	},

	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: [{ loader: "@svgr/webpack", options: { icon: true } }]
		});

		return config;
	}
};

module.exports = nextConfig;
















/** const nextConfig = {
	
	reactStrictMode: true,
	images: {
		remotePatterns: [
		  {
			protocol: 'https',
			hostname: 'images.ctfassets.net',
			port: '', // оставьте пустым, если не требуется
			pathname: '/**', // разрешаем все пути
		  },
		],
	  },
	i18n: {
		locales: ["en", "ro", "kg"],
		defaultLocale: "ro",
		localeDetection: false
	},

	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: [{ loader: "@svgr/webpack", options: { icon: true } }]
		});

		return config;
	}
};

module.exports = nextConfig;
*/