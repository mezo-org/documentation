// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics';
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
	site: 'https://docs.mezo.org',
	integrations: [
		sitemap(),
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
			favicon: './src/assets/Mezo-Mark-Red.svg',
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
                        label: 'Getting Started',
                        collapsed: true,
                        items: [
                              'docs/users/getting-started/bridging',
                              'docs/users/getting-started/connect',
                              'docs/users/getting-started/creating-an-account'
                        ]
                  },
                  {
                        label: 'Introduction',
                        collapsed: true,
                        items: [
                              'docs/users/introduction/bitcoins-economic-layer',
                              'docs/users/introduction/what-is-mezo'
                        ]
                  },
                  {
                        label: 'Mainnet',
                        collapsed: true,
                        items: [
                              'docs/users/mainnet/bridges',
                              'docs/users/mainnet/mats'
                        ]
                  },
                  {
                        label: 'MUSD',
                        collapsed: true,
                        items: [
                              'docs/users/musd/architecture-and-terminology',
                              'docs/users/musd/concepts',
                              'docs/users/musd/fees',
                              'docs/users/musd',
                              'docs/users/musd/mint-musd',
                              'docs/users/musd/risks'
                        ]
                  },
                  {
                        label: 'Bridge',
                        collapsed: true,
                        items: [
                              'docs/users/bridge/musd-bridge'
                        ]
                  },
                  {
                        label: 'Features',
                        collapsed: true,
                        items: [
                              'docs/users/features/mezo-pools'
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
                              'docs/users/resources/integrations-and-partners',
                              'docs/users/resources/release-notes'
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
                              'docs/developers/getting-started/configure-environment',
                              'docs/developers/getting-started/configure-mezo-passport',
                              'docs/developers/getting-started/FAQs',
			      'docs/developers/getting-started/dapp-requirements',
                              'docs/developers/getting-started/deploy-your-dapp-to-mezo',
			      'docs/developers/getting-started/integrations-and-partners'
                        ]
                  },
                  {
                        label: 'Mezo Nodes',
                        collapsed: true,
                        items: [
                              'docs/developers/mezo-nodes'
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
                  }
            ]
      }
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
			destination: '/docs/users/'
		},
		'docs/users/resources/mezo-alpha-builders': {
			status: 302,
			destination: '/docs/users/'
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
		'/docs/users/user-guides/stablecoins-and-erc-20': {
			status: 302,
			destination: '/docs/users/mainnet/bridges'
		},
		'/docs/users/user-guides/stablecoins-and-erc-20/deposit-guide': {
			status: 302,
			destination: '/docs/users/mainnet/bridges'
		},
		'/docs/users/user-guides/fees': {
			status: 302,
			destination: '/docs/users/mainnet/'
		},
		'/docs/users/user-guides/fees/tbtc-unmint-and-redemption': {
			status: 302,
			destination: '/docs/users/mainnet/bridges'
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
		'/docs/users/getting-started/mezo-matsnet-alpha-testnet/deploy-and-verify-contracts': {
			status: 302,
			destination: '/docs/developers/getting-started'
		},
		'/docs/users/resources/mezo-community': {
			status: 302,
			destination: '/docs/users/'
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
			destination: '/docs/users/mainnet/bridges'
		},
		'/docs/users/concepts/stablecoins-and-erc-20/deposit-guide': {
			status: 302,
			destination: '/docs/users/mainnet/bridges'
		},
		'docs/users/concepts/bitcoin-on-mezo/': {
			status: 302,
			destination: '/docs/users/mainnet/bridges'
		},
		'docs/users/concepts/bitcoin-on-mezo/tbtc': {
			status: 302,
			destination: '/docs/users/mainnet/bridges'
		},
		'docs/users/concepts/bitcoin-on-mezo/tbtc/minting-process': {
			status: 302,
			destination: '/docs/users/mainnet/bridges'
		},
		'docs/users/concepts/bitcoin-on-mezo/tbtc/guide': {
			status: 302,
			destination: '/docs/users/mainnet/bridges'
		},
		'docs/users/concepts/bitcoin-on-mezo/btc-deposit-guide': {
			status: 302,
			destination: '/docs/users/mainnet/bridges'
		},
		'docs/users/concepts/bitcoin-on-mezo/tbtc-and-wbtc-deposit-guide': {
			status: 302,
			destination: '/docs/users/mainnet/bridges'
		},
		'docs/users/concepts/fees': {
			status: 302,
			destination: '/docs/users/mainnet/bridges'
		},
		'docs/users/concepts/fees/tbtc-unmint-and-redemption': {
			status: 302,
			destination: '/docs/users/mainnet/bridges'
		},
		'/docs/users/resources/media-kit': {
			status: 302,
			destination: '/docs/users/resources/brand-kit'
		},
		'/docs/users/matsnet/stack-matsnet-btc': {
			status: 302,
			destination: '/docs/users/'
		},
		'docs/users/getting-started/depositing': {
			status: 302,
			destination: '/docs/users/getting-started/bridging'
		},
		'docs/users/resources/contracts-and-btc-custody': {
			status: 302,
			destination: '/docs/users/resources/contracts-reference'
		},
	  }
});
