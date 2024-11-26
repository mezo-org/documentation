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
			logo: {
				light: './src/assets/mezo-logo-light.svg',
				dark: './src/assets/mezo-logo-dark.svg',
				replacesTitle: true,
			},
			social: {
				github: 'https://github.com/mezo-org',
			},
			plugins: [
				starlightSidebarTopics([
					{
						label: 'User Documentation',
						id: 'users',
						link: '/users/',
						icon: 'star',
						items: [
							{   
								label: 'Introduction',
								items: [
									'users/introduction/what-is-mezo',
									'users/introduction/bitcoins-economic-layer',
								]
							},
							'users/mezo-alpha-builders',
							{   
								label: 'Getting Started',
								collapsed: true,
							    items: [
									{   
										label: 'Mezo Portal',
										items: [
											{ label: 'Overview', link: 'users/getting-started/mezo-portal'},
											'users/getting-started/mezo-portal/creating-an-account',
											'users/getting-started/mezo-portal/supported-wallets'
										]
									},
									{   
										label: 'Mezo matsnet Alpha',
										items: [
											{ label: 'Overview', link: 'users/getting-started/mezo-matsnet-alpha-testnet'},
											'users/getting-started/mezo-matsnet-alpha-testnet/stack-matsnet-btc',
											'users/getting-started/mezo-matsnet-alpha-testnet/connect-to-mezo-matsnet',
											'users/getting-started/mezo-matsnet-alpha-testnet/deploy-and-verify-contracts',
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
											{ label: 'Overview', link: 'users/concepts/bitcoin-on-mezo'},
											'users/concepts/bitcoin-on-mezo/btc-deposit-guide',
											{   
												label: 'tBTC',
												items: [
													{ label: 'Overview', link: 'users/concepts/bitcoin-on-mezo/tbtc'},
													'users/concepts/bitcoin-on-mezo/tbtc/minting-process',
													'users/concepts/bitcoin-on-mezo/tbtc/guide'
												]
											},
											'users/concepts/bitcoin-on-mezo/tbtc-and-wbtc-deposit-guide',
										]
									},
									{   
										label: 'Stablecoins and ERC-20',
										items: [
											{ label: 'Overview', link: 'users/concepts/stablecoins-and-erc-20'},
											'users/concepts/stablecoins-and-erc-20/deposit-guide'
										]
									},
									{   
										label: 'Fees',
										items: [
											{ label: 'Overview', link: 'users/concepts/fees'},
											'users/concepts/fees/tbtc-unmint-and-redemption',
										]
									},
									{   
										label: 'mats',
										items: [
											{ label: 'Overview', link: 'users/concepts/mats'},
											'users/concepts/mats/mats-for-btc',
											'users/concepts/mats/mats-for-stablecoins',
											'users/concepts/mats/leaderboard-and-my-mats',
											'users/concepts/mats/invite-bonus',
										]
									},
								]
							},
							{   
								label: 'Resources',
								collapsed: true,
							    items: [
									'users/resources/mezo-community',
									'users/resources/release-notes',
									'users/resources/faqs',
									'users/resources/audits',
									'users/resources/media-kit',
									'users/resources/contracts-and-btc-custody',
								]
							},
						],
					},
				]),
			  ],
		}),
	],
});
