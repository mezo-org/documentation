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
	site: 'https://mezo.org/docs',
	integrations: [
		sitemap(),
		starlight({
			title: 'Mezo Documentation',
			components: {
				Header: './src/overrides/Header.astro',
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
				{
				  tag: 'script',
				  content: '(function(){try{var t=document.title||"Mezo Documentation";var m=document.querySelector("meta[name=\"description\"]");var d=m?m.content:"";var url=location.origin+location.pathname;var web={"@context":"https://schema.org","@type":["WebPage","TechArticle"],"headline":t,"name":t,"description":d,"url":url,"mainEntityOfPage":url};var s=document.createElement("script");s.type="application/ld+json";s.textContent=JSON.stringify(web);document.head.appendChild(s);var parts=location.pathname.replace(/\/$/,"").split("/").filter(Boolean);if(parts.length){var map={"docs":"Documentation","users":"User Documentation","developers":"Developer Documentation","mainnet":"Mainnet","musd":"MUSD","features":"Features","resources":"Resources","getting-started":"Getting Started","introduction":"Introduction","bridge":"Bridge","stbtc-staked-bitcoin":"stBTC","architecture":"Architecture","oracles":"Oracles"};var items=[];var acc="";for(var i=0;i<parts.length;i++){acc+="/"+parts[i];var isLast=i===parts.length-1;var name=isLast?t:(map[parts[i]]||parts[i].replace(/-/g," "));items.push({"@type":"ListItem","position":i+1,"name":name,"item":location.origin+acc+"/"});}var crumb={"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":items};var s2=document.createElement("script");s2.type="application/ld+json";s2.textContent=JSON.stringify(crumb);document.head.appendChild(s2);}var p=location.pathname.replace(/\/$/,"");if(p==="/docs/users/getting-started/bridging"){var howTo={"@context":"https://schema.org","@type":"HowTo","name":"How to Bridge Assets to Mezo","mainEntityOfPage":url,"url":url,"step":[{"@type":"HowToStep","position":1,"name":"Open Mezo App and sign in","text":"Go to mezo.org/overview and sign in with a supported wallet."},{"@type":"HowToStep","position":2,"name":"Add funds","text":"Click Add funds and select the asset you want to bridge and the amount."},{"@type":"HowToStep","position":3,"name":"Review and confirm","text":"Review transfer details and confirm the transaction in your wallet."}]};var s3=document.createElement("script");s3.type="application/ld+json";s3.textContent=JSON.stringify(howTo);document.head.appendChild(s3);}if(p==="/docs/users/resources/faqs"){var faq={"@context":"https://schema.org","@type":"FAQPage","mainEntityOfPage":url,"url":url,"mainEntity":[{"@type":"Question","name":"What is Mezo?","acceptedAnswer":{"@type":"Answer","text":"Mezo is a Bitcoin-centric platform enabling borrowing, spending, and building on Bitcoin."}},{"@type":"Question","name":"What is MUSD?","acceptedAnswer":{"@type":"Answer","text":"MUSD is Mezo’s Bitcoin-backed stablecoin used for borrowing and payments."}}]};var s4=document.createElement("script");s4.type="application/ld+json";s4.textContent=JSON.stringify(faq);document.head.appendChild(s4);} }catch(e){}})();'
				}
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
                              'docs/users/musd/liquidation-mechanics',
                              'docs/users/musd/mint-musd',
                              'docs/users/musd/musd-bridge',
                              'docs/users/musd/risks'
                        ]
                  },
                  {
                        label: 'Features',
                        collapsed: true,
                        items: [
                              {
                                    label: 'Mezo Pools',
                                    collapsed: true,
                                    items: [
                                          'docs/users/features/mezo-pools/mezo-pools',
                                          'docs/users/features/mezo-pools/fees'
                                    ]
                              },
                              'docs/users/features/mezo-swap'
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
                              'docs/developers/getting-started/dapp-requirements',
                              'docs/developers/getting-started/deploy-your-dapp-to-mezo',
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
                  },
                  {
                        label: 'Features',
                        collapsed: true,
                        items: [
                              'docs/developers/features/mezo-pools'
                        ]
                  }
            ]
      }
]),
			  ],
		}),
	],
	redirects: {
		'/docs/developers/getting-started/hello@boar.network': {
			status: 302,
			destination: '/docs/users'
		},
		'/docs/developers/hello@boar.network': {
			status: 302,
			destination: '/docs/users'
		},
		'/docs/images/musd/musd-economy.webp': {
			status: 302,
			destination: '/docs/users/musd/fees'
		},
		'/docs/users/musd/mezo.org': {
			status: 302,
			destination: '/docs/users'
		},
		'/docs/users/musd/mint-musd.md': {
			status: 302,
			destination: '/docs/users/musd/mint-musd'
		},
		'/docs/users/resources/IR@thesis.co': {
			status: 302,
			destination: '/docs/users/resources/faqs'
		},
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
