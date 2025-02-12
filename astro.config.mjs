// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Mezo Documentation',
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
				'./src/assets/fonts/riforma/font-face.css',
			],
			head: [
				{
				  tag: 'script',
				  content: `window.addEventListener('load', () => document.querySelector('.site-title').href += 'docs/')`,
				},
			],
			logo: {
				light: './src/assets/mezo-logo-light.svg',
				dark: './src/assets/mezo-logo-dark.svg',
				replacesTitle: true,
			},
			editLink: {
				baseUrl: 'https://github.com/mezo-org/documentation/tree/main/',
			},
			pagination: true,
			social: {
				github: 'https://github.com/mezo-org',
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
								label: 'Introduction',
								items: [
									'docs/users/introduction/what-is-mezo',
									'docs/users/introduction/bitcoins-economic-layer',
								]
							},
							'docs/users/mezo-alpha-builders',
							{   
								label: 'Getting Started',
								collapsed: true,
							    items: [
									{   
										label: 'Mezo Portal',
										items: [
											{ label: 'Overview', link: 'docs/users/getting-started/mezo-portal'},
											'docs/users/getting-started/mezo-portal/creating-an-account',
											'docs/users/getting-started/mezo-portal/supported-wallets'
										]
									},
									{   
										label: 'Mezo matsnet Alpha',
										items: [
											{ label: 'Overview', link: 'docs/users/getting-started/mezo-matsnet-alpha-testnet'},
											'docs/users/getting-started/mezo-matsnet-alpha-testnet/stack-matsnet-btc',
											'docs/users/getting-started/mezo-matsnet-alpha-testnet/connect-to-mezo-matsnet',
											'docs/users/getting-started/mezo-matsnet-alpha-testnet/deploy-and-verify-contracts',
										]
									},
								]
							},
							{   
								label: 'Concepts',
								collapsed: true,
							    items: [
									{   
										label: 'Bitcoin on Mezo',
										items: [
											{ label: 'Overview', link: 'docs/users/concepts/bitcoin-on-mezo'},
											'docs/users/concepts/bitcoin-on-mezo/btc-deposit-guide',
											{   
												label: 'tBTC',
												items: [
													{ label: 'Overview', link: 'docs/users/concepts/bitcoin-on-mezo/tbtc'},
													'docs/users/concepts/bitcoin-on-mezo/tbtc/minting-process',
													'docs/users/concepts/bitcoin-on-mezo/tbtc/guide'
												]
											},
											'docs/users/concepts/bitcoin-on-mezo/tbtc-and-wbtc-deposit-guide',
										]
									},
									{   
										label: 'Stablecoins and ERC-20',
										items: [
											{ label: 'Overview', link: 'docs/users/concepts/stablecoins-and-erc-20'},
											'docs/users/concepts/stablecoins-and-erc-20/deposit-guide'
										]
									},
									{   
										label: 'Fees',
										items: [
											{ label: 'Overview', link: 'docs/users/concepts/fees'},
											'docs/users/concepts/fees/tbtc-unmint-and-redemption',
										]
									},
									{   
										label: 'mats',
										items: [
											{ label: 'Overview', link: 'docs/users/concepts/mats'},
											'docs/users/concepts/mats/mats-for-btc',
											'docs/users/concepts/mats/mats-for-stablecoins',
											'docs/users/concepts/mats/leaderboard-and-my-mats',
											'docs/users/concepts/mats/invite-bonus',
										]
									},
								]
							},
							{   
								label: 'Resources',
								collapsed: true,
							    items: [
									'docs/users/resources/mezo-community',
									'docs/users/resources/release-notes',
									'docs/users/resources/faqs',
									'docs/users/resources/audits',
									'docs/users/resources/media-kit',
									'docs/users/resources/contracts-and-btc-custody',
								]
							},
						],
					},
				]),
			  ],
		}),
	],
});
