/** @type {import("next").NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
	  remotePatterns: [
		{
		  protocol: 'https',
		  hostname: 'images.ctfassets.net',
		  port: '',
		  pathname: '/**',
		},
		{
		  protocol: 'https',
		  hostname: 'img.youtube.com',
		  port: '',
		  pathname: '/**',
		},
	  ],
	},
	i18n: {
	  locales: ['ro'],
	  defaultLocale: 'ro',
	  localeDetection: false,
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
		use: [{ loader: '@svgr/webpack', options: { icon: true } }],
	  });
  
	  return config;
	},
  };
  
  module.exports = nextConfig;
  