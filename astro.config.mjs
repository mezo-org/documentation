// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics';
import starlightImageZoom from 'starlight-image-zoom';
import lunaria from '@lunariajs/starlight';
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import sitemap from '@astrojs/sitemap';

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
	site: 'https://mezo.org/docs',
	integrations: [
		starlight({
			title: 'Mezo Documentation',
			components: {
				Head: './src/overrides/Head.astro',
				Header: './src/overrides/Header.astro',
				Footer: './src/overrides/Footer.astro',
				SocialIcons: './src/overrides/SocialIcons.astro',
				Pagination: './src/overrides/Pagination.astro',
			},
			customCss: [
				'./src/styles/custom.css',
				'./src/assets/fonts/riforma/font-face.css',
				'katex/dist/katex.min.css',
			],
			head: [
				{
					tag: 'script',
					content: `window.addEventListener('load', () => document.querySelector('.site-title').href = 'https://mezo.org/docs')`,
				},
				// Favicon & icon fallbacks
				{
					tag: 'link',
					attrs: { rel: 'icon', type: 'image/png', href: '/docs/images/mainnet/Mezo%20Logo%20Square.png' },
				},
				{
					tag: 'link',
					attrs: { rel: 'apple-touch-icon', href: '/docs/images/mainnet/Mezo%20Logo%20Square.png' },
				},
				{
					tag: 'link',
					attrs: { rel: 'mask-icon', href: '/favicon.svg', color: '#FF004D' },
				},
				// Ensure Open Graph/Twitter preview image across all pages
				{
					tag: 'meta',
					attrs: { property: 'og:image', content: 'https://mezo.org/docs/images/mainnet/gitbookbanner.png' },
				},
				{
					tag: 'meta',
					attrs: { property: 'og:image:alt', content: 'Mezo' },
				},
				{
					tag: 'meta',
					attrs: { name: 'twitter:card', content: 'summary_large_image' },
				},
				{
					tag: 'meta',
					attrs: { name: 'twitter:image', content: 'https://mezo.org/docs/images/mainnet/gitbookbanner.png' },
				},
				{
					tag: 'meta',
					attrs: { name: 'twitter:site', content: '@MezoNetwork' },
				},
				{
					tag: 'meta',
					attrs: { name: 'twitter:creator', content: '@MezoNetwork' },
				},
				{
					tag: 'script',
					attrs: { type: 'application/ld+json' },
					content: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'Organization',
						name: 'Mezo',
						url: 'https://mezo.org',
						logo: 'https://raw.githubusercontent.com/mezo-org/documentation/main/src/assets/Mezo-Mark-Red.svg',
						sameAs: [
							'https://github.com/mezo-org',
							'https://x.com/MezoNetwork',
							'https://discord.mezo.org',
						],
					}),
				},
				{
					tag: 'script',
					attrs: { type: 'application/ld+json' },
					content: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'WebSite',
						name: 'Mezo Documentation',
						url: 'https://mezo.org/docs',
						potentialAction: {
							'@type': 'SearchAction',
							target: 'https://mezo.org/docs/search?q={search_term_string}',
							'query-input': 'required name=search_term_string',
						},
					}),
				},
				],
			favicon: '/favicon.svg',
			logo: {
				light: './src/assets/mezo-logo-light.svg',
				dark: './src/assets/mezo-logo-dark.svg',
				replacesTitle: true,
			},
			pagination: true,
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/mezo-org' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.mezo.org' },
				{ icon: 'x.com', label: 'X', href: 'https://x.com/MezoNetwork' },
			],
			plugins: [
				starlightImageZoom(),
				lunaria({
					sync: true, // Sync locales with Starlight's i18n config
				}),
				starlightSidebarTopics([
      {
            label: 'User Documentation',
            id: 'users',
            link: '/docs/users/',
            icon: 'star',
            items: [
                  {
                        label: 'Getting Started',
                        collapsed: true,
                        items: [
                              'docs/users/getting-started/deposit-assets',
                              'docs/users/getting-started/connect',
                              'docs/users/getting-started/creating-an-account'
                        ]
                  },
                  {
                        label: 'Introduction',
                        collapsed: true,
                        items: [
                              'docs/users/introduction/why-bitcoin-needs-banking',
                              'docs/users/introduction/mezo-self-service-banking'
                        ]
                  },
                  {
                        label: 'Mainnet',
                        collapsed: true,
                        items: [
                              'docs/users/mainnet/bridges'
                        ]
                  },
                  {
                        label: 'MUSD',
                        collapsed: true,
                        items: [
                              'docs/users/musd',
                              'docs/users/musd/mint-musd',
                              'docs/users/musd/fees',
                              'docs/users/musd/architecture-and-terminology',
                              'docs/users/musd/liquidation-mechanics',
                              'docs/users/musd/musd-bridge',
                              'docs/users/musd/risks',
                              'docs/users/musd/concepts'
                        ]
                  },
                  {
                        label: 'MEZO',
                        collapsed: true,
                        items: [
                              'docs/users/mezo',
                              'docs/users/mezo/token-distribution',
                              'docs/users/mezo/emissions',
                              'docs/users/mezo/governance',
                              'docs/users/mezo/mezo-bridge'
                        ]
                  },
                  {
                        label: 'Mezo Earn',
                        collapsed: true,
                        items: [
                              {
                                    label: 'Overview',
                                    collapsed: true,
                                    items: [
                                          'docs/users/mezo-earn/overview',
                                          'docs/users/mezo-earn/overview/glossary'
                                    ]
                              },
                              {
                                    label: 'Lock',
                                    collapsed: true,
                                    items: [
                                          {
                                                label: 'veBTC',
                                                collapsed: true,
                                                items: [
                                                      'docs/users/mezo-earn/lock/vebtc',
                                                      'docs/users/mezo-earn/lock/vebtc/how-to-lock-btc',
                                                      'docs/users/mezo-earn/lock/vebtc/managing-locks-and-collecting-rewards',
                                                      'docs/users/mezo-earn/lock/vebtc/faqs-and-resources'
                                                ]
                                          },
                                          {
                                                label: 'veMEZO',
                                                collapsed: true,
                                                items: [
                                                      'docs/users/mezo-earn/lock/vemezo',
                                                      'docs/users/mezo-earn/lock/vemezo/how-to-lock-mezo',
                                                      'docs/users/mezo-earn/lock/vemezo/boost-mechanism',
                                                      'docs/users/mezo-earn/lock/vemezo/matching-market',
                                                      'docs/users/mezo-earn/lock/vemezo/faqs-and-resources'
                                                ]
                                          }
                                    ]
                              },
                              {
                                    label: 'Vote',
                                    collapsed: true,
                                    items: [
                                          'docs/users/mezo-earn/vote',
                                          'docs/users/mezo-earn/vote/how-to-vote',
                                          'docs/users/mezo-earn/vote/earning-and-managing-your-position',
                                          'docs/users/mezo-earn/vote/claiming-fees-emissions'
                                    ]
                              },
                              {
                                    label: 'Pools',
                                    collapsed: true,
                                    items: [
                                          'docs/users/mezo-earn/pools',
                                          'docs/users/mezo-earn/pools/using-mezo-pools-guide',
                                          'docs/users/mezo-earn/pools/pools-fees',
                                          'docs/users/mezo-earn/pools/pools-links-and-resources',
                                          'docs/users/mezo-earn/pools/mezo-swap'
                                    ]
                              },
                              'docs/users/mezo-earn/vaults'
                        ]
                  },
                  {
                        label: 'Integrations',
                        collapsed: true,
                        items: [
                              {
                                    label: 'Lolli',
                                    collapsed: true,
                                    items: [
                                          'docs/users/integrations/lolli',
                                          'docs/users/integrations/lolli/withdraw',
                                          'docs/users/integrations/lolli/using-mezo',
                                          'docs/users/integrations/lolli/faqs'
                                    ]
                              }
                        ]
                  },
                  {
                        label: 'Resources',
                        collapsed: true,
                        items: [
                              'docs/users/resources/audits',
                              'docs/users/resources/brand-kit',
                              'docs/users/resources/contracts-reference',
                              'docs/users/resources/faqs',
                              'docs/users/resources/network-stats',
                              'docs/users/resources/release-notes',
                              'docs/users/resources/support'
                        ]
                  }
            ]
      },
      {
            label: 'Developer Documentation',
            id: 'developers',
            link: '/docs/developers/',
            icon: 'seti:powershell',
            items: [
                  {
                        label: 'Getting Started',
                        collapsed: true,
                        items: [
                              'docs/developers/getting-started',
                              'docs/developers/getting-started/mezod',
                              'docs/developers/getting-started/dapp-requirements',
                              'docs/developers/getting-started/configure-environment',
                              'docs/developers/getting-started/configure-mezo-passport',
                              'docs/developers/getting-started/integrations-and-partners',
                              'docs/developers/getting-started/faqs'
                        ]
                  },
                  {
                        label: 'Mezo Nodes',
                        collapsed: true,
                        items: [
                              'docs/developers/mezo-nodes',
                              'docs/developers/mezo-nodes/validator-kit',
                              'docs/developers/mezo-nodes/validators'
                        ]
                  },
                  {
                        label: 'Architecture',
                        collapsed: true,
                        items: [
                              {
                                    label: 'Oracles',
                                    collapsed: true,
                                    items: [
                                          'docs/developers/architecture/oracles',
                                          'docs/developers/architecture/oracles/read-oracle'
                                    ]
                              }
                        ]
                  },
                  {
                        label: 'Mezo Earn',
                        collapsed: true,
                        items: [
                              'docs/developers/features/mezo-pools',
                              'docs/developers/features/mezo-earn/mezo-earn',
                              'docs/developers/features/mezo-earn/deploying-incentives'
                        ]
                  },
                  {
                        label: 'Bridge',
                        collapsed: true,
                        items: [
                              'docs/developers/bridge/mezo-bridge',
                              'docs/developers/bridge/wormhole-musd-bridge'
                        ]
                  },
                  {
                        label: 'MUSD',
                        collapsed: true,
                        items: [
                              'docs/developers/musd',
                              'docs/developers/musd/musd-redemptions'
                        ]
                  },
                  'docs/developers/chains',
                  'docs/developers/subgraphs'
            ]
      }
]),
			],
		}),
		sitemap(),
	],
	redirects: {
		// Existing redirects (updated to 301 for SEO)
		'/docs/users/stbtc-staked-bitcoin/redeeming-your-stbtc-deposits': {
			status: 301,
			destination: '/docs/users/'
		},
		'/docs/developers/getting-started/hello@boar.network': {
			status: 301,
			destination: '/docs/users/'
		},
		'/docs/developers/hello@boar.network': {
			status: 301,
			destination: '/docs/users/'
		},
		'/docs/images/musd/musd-economy.webp': {
			status: 301,
			destination: '/docs/users/musd/fees'
		},
		'/docs/users/musd/mezo.org': {
			status: 301,
			destination: '/docs/users/'
		},
		'/docs/users/musd/mint-musd.md': {
			status: 301,
			destination: '/docs/users/musd/mint-musd'
		},
		'/docs/users/resources/IR@thesis.co': {
			status: 301,
			destination: '/docs/users/resources/faqs'
		},
		'/': {
			status: 301,
			destination: '/docs/'
		},
		'/docs/users/home/what-is-mezo': {
			status: 301,
			destination: '/docs/users/introduction/why-bitcoin-needs-banking'
		},
		'/docs/users/home/what-is-mezo/bitcoins-economic-layer': {
			status: 301,
			destination: '/docs/users/introduction/mezo-self-service-banking'
		},
		'/docs/users/home/mezo-alpha-builders': {
			status: 301,
			destination: '/docs/users/'
		},
		'/docs/users/resources/mezo-alpha-builders': {
			status: 301,
			destination: '/docs/users/'
		},
		'/docs/users/user-guides/bitcoin-on-mezo': {
			status: 301,
			destination: '/docs/users/mainnet/bridges'
		},
		'/docs/users/user-guides/bitcoin-on-mezo/btc-deposit-guide': {
			status: 301,
			destination: '/docs/users/mainnet/bridges'
		},
		'/docs/users/user-guides/bitcoin-on-mezo/tbtc': {
			status: 301,
			destination: '/docs/users/mainnet/bridges'
		},
		'/docs/users/user-guides/bitcoin-on-mezo/tbtc/minting-process': {
			status: 301,
			destination: '/docs/users/mainnet/bridges'
		},
		'/docs/users/user-guides/bitcoin-on-mezo/tbtc/guide': {
			status: 301,
			destination: '/docs/users/mainnet/bridges'
		},
		'/docs/users/user-guides/bitcoin-on-mezo/tbtc-and-wbtc-deposit-guide': {
			status: 301,
			destination: '/docs/users/mainnet/bridges'
		},
		'/docs/users/user-guides/stablecoins-and-erc-20': {
			status: 301,
			destination: '/docs/users/mainnet/bridges'
		},
		'/docs/users/user-guides/stablecoins-and-erc-20/deposit-guide': {
			status: 301,
			destination: '/docs/users/mainnet/bridges'
		},
		'/docs/users/user-guides/fees': {
			status: 301,
			destination: '/docs/users/mainnet/bridges'
		},
		'/docs/users/user-guides/fees/tbtc-unmint-and-redemption': {
			status: 301,
			destination: '/docs/users/mainnet/bridges'
		},
		'/docs/users/user-guides/mats': {
			status: 301,
			destination: '/docs/users/'
		},
		'/docs/users/user-guides/mats/mats-for-btc': {
			status: 301,
			destination: '/docs/users/'
		},
		'/docs/users/user-guides/mats/mats-for-stablecoins': {
			status: 301,
			destination: '/docs/users/'
		},
		'/docs/users/user-guides/mats/leaderboard-and-my-mats': {
			status: 301,
			destination: '/docs/users/'
		},
		'/docs/users/user-guides/mats/invite-bonus': {
			status: 301,
			destination: '/docs/users/'
		},
		'/docs/users/official-links/mezo-community': {
			status: 301,
			destination: '/docs/users/'
		},
		'/docs/users/musd/architecture': {
			status: 301,
			destination: '/docs/users/musd/concepts'
		},
		'/docs/users/musd/concepts-and-terminology': {
			status: 301,
			destination: '/docs/users/musd/concepts'
		},
		'/docs/users/getting-started/mezo-matsnet-alpha-testnet/deploy-and-verify-contracts': {
			status: 301,
			destination: '/docs/developers/getting-started'
		},
		'/docs/users/resources/mezo-community': {
			status: 301,
			destination: '/docs/users/'
		},
		'/docs/users/concepts/mats': {
			status: 301,
			destination: '/docs/users/'
		},
		'/docs/users/concepts/mats/mats-for-btc': {
			status: 301,
			destination: '/docs/users/'
		},
		'/docs/users/concepts/mats/mats-for-stablecoins': {
			status: 301,
			destination: '/docs/users/'
		},
		'/docs/users/concepts/mats/leaderboard-and-my-mats': {
			status: 301,
			destination: '/docs/users/'
		},
		'/docs/users/concepts/mats/invite-bonus': {
			status: 301,
			destination: '/docs/users/'
		},
		'/docs/users/concepts/stablecoins-and-erc-20': {
			status: 301,
			destination: '/docs/users/mainnet/bridges'
		},
		'/docs/users/concepts/stablecoins-and-erc-20/deposit-guide': {
			status: 301,
			destination: '/docs/users/mainnet/bridges'
		},
		'/docs/users/concepts/bitcoin-on-mezo': {
			status: 301,
			destination: '/docs/users/mainnet/bridges'
		},
		'/docs/users/concepts/bitcoin-on-mezo/tbtc': {
			status: 301,
			destination: '/docs/users/mainnet/bridges'
		},
		'/docs/users/concepts/bitcoin-on-mezo/tbtc/minting-process': {
			status: 301,
			destination: '/docs/users/mainnet/bridges'
		},
		'/docs/users/concepts/bitcoin-on-mezo/tbtc/guide': {
			status: 301,
			destination: '/docs/users/mainnet/bridges'
		},
		'/docs/users/concepts/bitcoin-on-mezo/btc-deposit-guide': {
			status: 301,
			destination: '/docs/users/mainnet/bridges'
		},
		'/docs/users/concepts/bitcoin-on-mezo/tbtc-and-wbtc-deposit-guide': {
			status: 301,
			destination: '/docs/users/mainnet/bridges'
		},
		'/docs/users/concepts/fees': {
			status: 301,
			destination: '/docs/users/mainnet/bridges'
		},
		'/docs/users/concepts/fees/tbtc-unmint-and-redemption': {
			status: 301,
			destination: '/docs/users/mainnet/bridges'
		},
		'/docs/users/resources/media-kit': {
			status: 301,
			destination: '/docs/users/resources/brand-kit'
		},
		'/docs/users/matsnet/stack-matsnet-btc': {
			status: 301,
			destination: '/docs/users/'
		},
		'/docs/users/getting-started/depositing': {
			status: 301,
			destination: '/docs/users/getting-started/deposit-assets'
		},
		'/docs/users/resources/contracts-and-btc-custody': {
			status: 301,
			destination: '/docs/users/resources/contracts-reference'
		},

		// New redirects for broken URLs
		'/docs/users/resources/validators': {
			status: 301,
			destination: '/docs/developers/mezo-nodes/validators'
		},
		'/docs/users/resources/testnet-validators': {
			status: 301,
			destination: '/docs/developers/mezo-nodes/validators'
		},
		'/docs/users/resources/integrations-and-partners': {
			status: 301,
			destination: '/docs/developers/getting-started/integrations-and-partners'
		},
		'/docs/users/mainnet/mats': {
			status: 301,
			destination: '/docs/users/'
		},
		'/docs/users/introduction/what-is-mezo': {
			status: 301,
			destination: '/docs/users/introduction/why-bitcoin-needs-banking'
		},
		'/docs/users/introduction/bitcoins-economic-layer': {
			status: 301,
			destination: '/docs/users/introduction/mezo-self-service-banking'
		},
		'/docs/users/getting-started/mezo-portal': {
			status: 301,
			destination: '/docs/users/'
		},
		'/docs/users/getting-started/mezo-portal/supported-wallets': {
			status: 301,
			destination: '/docs/users/'
		},
		'/docs/users/getting-started/mezo-portal/creating-an-account': {
			status: 301,
			destination: '/docs/users/getting-started/creating-an-account'
		},
		'/docs/users/getting-started/mezo-matsnet-alpha-testnet': {
			status: 301,
			destination: '/docs/users/'
		},
		'/docs/users/getting-started/mezo-matsnet-alpha-testnet/stack-matsnet-btc': {
			status: 301,
			destination: '/docs/users/'
		},
		'/docs/users/getting-started/mezo-matsnet-alpha-testnet/connect-to-mezo-matsnet': {
			status: 301,
			destination: '/docs/users/'
		},
		'/docs/users/getting-started/bridging': {
			status: 301,
			destination: '/docs/users/getting-started/deposit-assets'
		},
		'/docs/users/developers/getting-started': {
			status: 301,
			destination: '/docs/developers/getting-started'
		},
		'/docs/users/bridge/musd-bridge': {
			status: 301,
			destination: '/docs/users/musd/musd-bridge'
		},
		'/docs/developers/infrastructure/oracles': {
			status: 301,
			destination: '/docs/developers/architecture/oracles'
		},
		'/docs/developers/getting-started/deploy-your-dapp-to-mezo': {
			status: 301,
			destination: '/docs/developers/getting-started'
		},
		'/docs/developers/architecture': {
			status: 301,
			destination: '/docs/developers/architecture/oracles'
		},

		// Fix double /docs/docs/ paths
		'/docs/docs/users/resources/faqs': {
			status: 301,
			destination: '/docs/users/resources/faqs'
		},
		'/docs/docs/users/resources/brand-kit': {
			status: 301,
			destination: '/docs/users/resources/brand-kit'
		},
		'/docs/docs/users/readme': {
			status: 301,
			destination: '/docs/users/'
		},
		'/docs/docs/users/musd/risks': {
			status: 301,
			destination: '/docs/users/musd/risks'
		},
		'/docs/docs/users/musd': {
			status: 301,
			destination: '/docs/users/musd'
		},
		'/docs/docs/users/mats/rewards-hub': {
			status: 301,
			destination: '/docs/users/mats/rewards-hub'
		},
		'/docs/docs/users/mainnet/bridges': {
			status: 301,
			destination: '/docs/users/mainnet/bridges'
		},
		'/docs/docs/users/introduction/bitcoins-economic-layer': {
			status: 301,
			destination: '/docs/users/introduction/mezo-self-service-banking'
		},
		'/docs/docs/users/getting-started/creating-an-account': {
			status: 301,
			destination: '/docs/users/getting-started/creating-an-account'
		},
		'/docs/docs/users/getting-started': {
			status: 301,
			destination: '/docs/users/getting-started/deposit-assets'
		},
		'/docs/docs/users': {
			status: 301,
			destination: '/docs/users/'
		},
		'/docs/docs/developers/bridge': {
			status: 301,
			destination: '/docs/developers/bridge/mezo-bridge'
		},
		'/docs/docs/developers': {
			status: 301,
			destination: '/docs/developers/'
		},

		// Fix /docs/summary/ paths
		'/docs/summary/users/resources/release-notes.md': {
			status: 301,
			destination: '/docs/users/resources/release-notes'
		},
		'/docs/summary/users/musd/mint-musd.md': {
			status: 301,
			destination: '/docs/users/musd/mint-musd'
		},
		'/docs/summary/users/musd/architecture-and-terminology.md': {
			status: 301,
			destination: '/docs/users/musd/architecture-and-terminology'
		},
		'/docs/users/mezo-earn': {
			status: 301,
			destination: '/docs/users/mezo-earn/overview'
		},
	}
});
