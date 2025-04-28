// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics';
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
	markdown: {
		remarkPlugins: [
		  remarkMath, // <- new plugin
		],
		rehypePlugins: [rehypeKatex], // <- new plugin
		shikiConfig: {
		  // For more themes, visit https://shiki.style/themes
		  themes: { light: "min-light", dark: "night-owl" },
		  wrap: true,
		},
	  },
	integrations: [
		starlight({
			title: 'Mezo Documentation',
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
				'./src/assets/fonts/riforma/font-face.css',
				'katex/dist/katex.min.css',
			],
			head: [
				{
				  tag: 'script',
				  content: `window.addEventListener('load', () => document.querySelector('.site-title').href = 'https://mezo.org')`,
				},
			],
			logo: {
				light: './src/assets/mezo-logo-light.svg',
				dark: './src/assets/mezo-logo-dark.svg',
				replacesTitle: true,
			},
			pagination: true,
			social: {
				github: 'https://github.com/mezo-org',
				discord: 'https://discord.mezo.org',
				twitter: 'https://x.com/MezoNetwork',
			},
			plugins: [
				starlightSidebarTopics([
					{
						label: 'User Documentation',
						id: 'users',
						link: '/docs/users/',
						icon: 'star',
						items: [
							{   
								label: 'Mezo Mainnet',
								collapsed: true,
							    items: [
									'docs/users/mainnet',
									'docs/users/mainnet/deposits',
									'docs/users/mainnet/bridges',
									'docs/users/mainnet/mats'
								]
							},
							{   
								label: 'MUSD (Mezo USD)',
								collapsed: true,
							    items: [
									'docs/users/musd',
									'docs/users/musd/concepts',
									'docs/users/musd/mint-musd',
									'docs/users/musd/fees',
									'docs/users/musd/risks',
									'docs/users/musd/architecture-and-terminology',
								]
							},
						],
					},
				]),
			  ],
		}),
	],
	redirects: {
		'/': {
			status: 302,
			destination: '/docs/'
	    },
		'/docs/users/home/what-is-mezo': {
			status: 302,
			destination: '/docs/users/introduction/what-is-mezo'
		},
		'/docs/users/home/what-is-mezo/bitcoins-economic-layer': {
			status: 302,
			destination: '/docs/users/introduction/bitcoins-economic-layer'
		},
		'/docs/users/home/mezo-alpha-builders': {
			status: 302,
			destination: '/docs/users/resources/mezo-alpha-builders'
		},
		'/docs/users/user-guides/bitcoin-on-mezo': {
			status: 302,
			destination: '/docs/users/concepts/bitcoin-on-mezo'
		},
		'/docs/users/user-guides/bitcoin-on-mezo/btc-deposit-guide': {
			status: 302,
			destination: '/docs/users/concepts/bitcoin-on-mezo/btc-deposit-guide'
		},
		'docs/users/user-guides/bitcoin-on-mezo/tbtc': {
			status: 302,
			destination: '/docs/users/concepts/bitcoin-on-mezo/tbtc'
		},
		'/docs/users/user-guides/bitcoin-on-mezo/tbtc/minting-process': {
			status: 302,
			destination: '/docs/users/concepts/bitcoin-on-mezo/tbtc/minting-process'
		},
		'/docs/users/user-guides/bitcoin-on-mezo/tbtc/guide': {
			status: 302,
			destination: '/docs/users/concepts/bitcoin-on-mezo/tbtc/guide'
		},
		'/docs/users/user-guides/bitcoin-on-mezo/tbtc-and-wbtc-deposit-guide': {
			status: 302,
			destination: '/docs/users/concepts/bitcoin-on-mezo/tbtc-and-wbtc-deposit-guide'
		},
		'/docs/users/user-guides/stablecoins-and-erc-20': {
			status: 302,
			destination: '/docs/users/mainnet/deposits'
		},
		'/docs/users/user-guides/stablecoins-and-erc-20/deposit-guide': {
			status: 302,
			destination: '/docs/users/mainnet/deposits'
		},
		'/docs/users/user-guides/fees': {
			status: 302,
			destination: '/docs/users/mainnet/'
		},
		'/docs/users/user-guides/fees/tbtc-unmint-and-redemption': {
			status: 302,
			destination: '/docs/users/mainnet/deposits'
		},
		'/docs/users/user-guides/mats': {
			status: 302,
			destination: '/docs/users/mainnet/mats'
		},
		'/docs/users/user-guides/mats/mats-for-btc': {
			status: 302,
			destination: '/docs/users/mainnet/mats'
		},
		'/docs/users/user-guides/mats/mats-for-stablecoins': {
			status: 302,
			destination: '/docs/users/mainnet/mats'
		},
		'/docs/users/user-guides/mats/leaderboard-and-my-mats': {
			status: 302,
			destination: '/docs/users/mainnet/mats'
		},
		'/docs/users/user-guides/mats/invite-bonus': {
			status: 302,
			destination: '/docs/users/mainnet/mats'
		},
		'/docs/users/official-links/mezo-community': {
			status: 302,
			destination: '/docs/users/'
		},
		'/docs/users/musd/architecture': {
			status: 302,
			destination: '/docs/users/musd/concepts-and-terminology'
		},
		'/docs/users/resources/mezo-community': {
			status: 302,
			destination: '/docs/users/'
		},
		'/docs/users/concepts/fees': {
			status: 302,
			destination: '/docs/users/mainnet/'
		},
		'/docs/users/concepts/mats': {
			status: 302,
			destination: '/docs/users/mainnet/mats'
		},
		'/docs/users/concepts/mats/mats-for-btc': {
			status: 302,
			destination: '/docs/users/mainnet/mats'
		},
		'/docs/users/concepts/mats/mats-for-stablecoins': {
			status: 302,
			destination: '/docs/users/mainnet/mats'
		},
		'/docs/users/concepts/mats/leaderboard-and-my-mats': {
			status: 302,
			destination: '/docs/users/mainnet/mats'
		},
		'/docs/users/concepts/mats/invite-bonus': {
			status: 302,
			destination: '/docs/users/mainnet/mats'
		},
		'/docs/users/concepts/stablecoins-and-erc-20': {
			status: 302,
			destination: '/docs/users/mainnet/deposits'
		},
		'/docs/users/concepts/stablecoins-and-erc-20/deposit-guide': {
			status: 302,
			destination: '/docs/users/mainnet/deposits'
		},
		'docs/users/concepts/bitcoin-on-mezo/': {
			status: 302,
			destination: '/docs/users/mainnet/deposits'
		},
		'docs/users/concepts/bitcoin-on-mezo/tbtc': {
			status: 302,
			destination: '/docs/users/mainnet/deposits'
		},
		'docs/users/concepts/bitcoin-on-mezo/tbtc/minting-process': {
			status: 302,
			destination: '/docs/users/mainnet/deposits'
		},
		'docs/users/concepts/bitcoin-on-mezo/tbtc/guide': {
			status: 302,
			destination: '/docs/users/mainnet/deposits'
		},
		'docs/users/concepts/bitcoin-on-mezo/btc-deposit-guide': {
			status: 302,
			destination: '/docs/users/mainnet/deposits'
		},
		'docs/users/concepts/bitcoin-on-mezo/tbtc-and-wbtc-deposit-guide': {
			status: 302,
			destination: '/docs/users/mainnet/deposits'
		},
		'docs/users/concepts/fees': {
			status: 302,
			destination: '/docs/users/mainnet/deposits'
		},
		'docs/users/concepts/fees/tbtc-unmint-and-redemption': {
			status: 302,
			destination: '/docs/users/mainnet/deposits'
		},
	  }
});