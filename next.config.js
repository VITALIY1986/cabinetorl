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
			{
				protocol: 'https',
				hostname: 'img.youtube.com',
				port: '', // оставьте пустым
				pathname: '/**', // разрешаем все пути
			},
		],
	},
	i18n: {
		locales: ["ro"], // оставляем только один язык
		defaultLocale: "ro", // назначаем его как основной
		localeDetection: false, // при необходимости
	},
	async redirects() {
		return [
			{
				source: '/:path*',
				has: [
					{
						type: 'host',
						value: 'stately-lr.netlify.app',
					},
				],
				destination: 'https://cabinet-orl-iasi.ro/:path*',
				permanent: true,
			},
		];
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: [{ loader: "@svgr/webpack", options: { icon: true } }],
		});

		return config;
	},
};

module.exports = nextConfig;
