// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "LESA Gaming Documentation",
	tagline: "Dinosaurs are cool",
	url: "https://your-docusaurus-test-site.com",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	organizationName: "lesagaming", // Usually your GitHub org/user name.
	projectName: "docs", // Usually your repo name.
	plugins: [
		[
			require.resolve("@easyops-cn/docusaurus-search-local"),
			{
				hashed: true,
				language: ["en"],
			},
		],
	],
	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					editUrl: "https://github.com/lesagaming/docs/edit/main/",
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl: "https://github.com/lesagaming/docs/edit/main/website/blog/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: "LESA Gaming",
				logo: {
					alt: "LESA Gaming",
					src: "img/logo.png",
				},
				items: [
					{
						type: "doc",
						docId: "intro",
						position: "left",
						label: "Documentation",
					},
					{
						to: "blog",
						position: "left",
						label: "Blog",
					},
					{
						href: "https://github.com/lesagaming/docs",
						label: "GitHub",
						position: "right",
					},
				],
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Docs",
						items: [
							{
								label: "Introduction",
								to: "/docs/intro",
							},
						],
					},
					{
						title: "Community",
						items: [
							{
								label: "Discord",
								href: "https://go.lesagaming.com/discord",
							},
							{
								label: "Appplication",
								href: "https://joinlesa.com",
							},
							{
								label: "Forums",
								href: "https://lesagaming.com/forums",
							},
						],
					},
					{
						title: "More",
						items: [
							{
								label: "GitHub",
								href: "https://github.com/lesagaming",
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} LESA Gaming. All rights reserved.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
