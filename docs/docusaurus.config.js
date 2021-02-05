module.exports = {
    title: "Solana Docs",
    tagline:
    "Solana is an open source project implementing a new, high-performance, permissionless blockchain.",
    url: "https://docs.solana.com",
    baseUrl: "/",
    favicon: "img/favicon.ico",
    organizationName: "solana-labs", // Usually your GitHub org/user name.
	projectName: "solana", // Usually your repo name.
	onBrokenLinks: 'throw',
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'de', 'es', 'ru', 'ar', 'ko', 'zh'],
		localeConfigs: {
			en: {
			  label: 'English',
			},
			ru: {
			  label: 'Русский',
			},
			es: {
				label: 'Español',
			},
			de: {
				label: 'Deutsch',
			},
			ar: {
				label: 'العربية',
			},
			ko: {
				label: '한국어',
			}
		},
	},
    themeConfig: {
	navbar: {
	    logo: {
		alt: "Solana Logo",
		src: "img/logo-horizontal.svg",
		srcDark: "img/logo-horizontal-dark.svg",
	    },
	    items: [
		{
		    href: "https://spl.solana.com",
		    label: "Program Library »",
		    position: "left",
		},
		{
		    to: "developing/programming-model/overview",
		    label: "Develop",
		    position: "left",
		},
		{
		    to: "running-validator",
		    label: "Validate",
		    position: "left",
		},
		{
		    to: "integrations/exchange",
		    label: "Integrate",
		    position: "left",
		},
		{
		    to: "cluster/overview",
		    label: "Learn",
		    position: "left",
		},
		{
		    href: "https://discordapp.com/invite/pquxPsq",
		    label: "Chat",
		    position: "right",
		},
		{
		    href: "https://github.com/solana-labs/solana",
		    label: "GitHub",
		    position: "right",
		},
		{
			type: 'localeDropdown',
			position: 'left',
		},
	    ],
	},
	algolia: {
	    // This API key is "search-only" and safe to be published
	    apiKey: "d58e0d68c875346d52645d68b13f3ac0",
	    indexName: "solana",
	},
	footer: {
	    style: "dark",
	    links: [
		{
		    title: "Docs",
		    items: [
			{
			    label: "Introduction",
			    to: "introduction",
			},
			{
			    label: "Tour de SOL",
			    to: "tour-de-sol",
			},
		    ],
		},
		{
		    title: "Community",
		    items: [
			{
			    label: "Discord",
			    href: "https://discordapp.com/invite/pquxPsq",
			},
			{
			    label: "Twitter",
			    href: "https://twitter.com/solana",
			},
			{
			    label: "Forums",
			    href: "https://forums.solana.com",
			},
		    ],
		},
		{
		    title: "More",
		    items: [
			{
			    label: "GitHub",
			    href: "https://github.com/solana-labs/solana",
			},
		    ],
		},
	    ],
	    copyright: `Copyright © ${new Date().getFullYear()} Solana Foundation`,
	},
    },
    presets: [
	[
	    "@docusaurus/preset-classic",
	    {
		docs: {
		    path: "src",
		    routeBasePath: "/",
		    sidebarPath: require.resolve("./sidebars.js"),
		},
		theme: {
		    customCss: require.resolve("./src/css/custom.css"),
		},
	    },
	],
    ],
};
