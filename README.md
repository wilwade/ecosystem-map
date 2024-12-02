# [Polkadot ecosystem map](https://JUSTVenturesGmbH.github.io/ecosystem-map/)

👋 This repository is the data source for the community-sourced Ecosystem directory curated by JUST Opensource team. 

Our aim is to curate an accurate, up-to-date database of projects in the Polkadot ecosystem to help orient the new teams and provide a solid base for user research and collaboration for already existing teams. Therefore, we have made this an open, community-driven repo to which anyone can contribute.

It’s a shared space for all of us to geek out on cool projects where we aim to pursue the values of Web3 and maintain an open and transparent environment. We do, however, reserve the right to omit some projects or metrics without further explanation.

As things change and grow, so does this repo. It may evolve over time as the community helps our team maintain the map going forward and propose new ideas and directions. 

# ✨ Potential use-cases

**🚀** Navigate the ecosystem in general or follow specific categories

**🛞** Find out the tooling/projects to collaborate on

**🔬** Gather basic metrics to build project/team KPIs

**🧫** Use it as a base for product/UX/stakeholders research

**🪄** If you are interested in those, but don’t know where to start - reach out to JUST team, we provide advisory services.

# 📋 Description

## Target audience

| Commercial business unit | Non-commercial business unit |
| ------------------------ | ---------------------------- |
| Startup | Research Institute |
| Established corporation | Governmental organization |
| Institutional investor | Community DAO |
| Personal investor | Individual tinkerer |
| | Dev team (grants) |

## Technology readiness

- In research
- Validated POC/testnet
- In development
- In production
- Connected to relay chain
- Connected to parachain
- Discontinued

## Business readiness

- Business concept/low adoption
- Verified in market/high adoption
- Scaling/Alliance

## Awareness funnel

> [!NOTE]
> Media exposure is the metrics that we used for several reasons:
> Identify the most popular marketing channels and calculate average values across the engagement funnel for the ecosystem to then compare with the competitors.
>
> To verify the assumption, that deviation from the median is not significant for the majority of projects, thus indirectly confirming the total number of users engaged with the ecosystem and individual projects and that fluctuations in the number of engaged users within individual projects on yearly snapshots can be an indication of their success or decline

Education - The percentage of ppl who dive deeper into videos/articles/Discord after reading the team’s X

Tech engagement - The percentage of ppl who star repo after seeing videos/reading articles/joining Discord

Engagement - The percentage of app downloads/installations after reading the team’s X

## Type/layer

0 - protocol

1 - consensus (consensus, node operators, parachains)

2 - scaling (off-chain computing, messages, governance, bridges)

3 - smart contracts, dApps

4 - identity, keys

## Category

| Infrastructure | Ecosystem |
| -------------- | --------- |
| exchange | DAO |
| oracle | wallet |
| validator provider | game |
| indexer | DeFi |
| analytics | Marketplace |
| data | Social |
| bridge | dApp |
| EVM | Aggregator |
| API | NFT |
| Smart contracts | Privacy |

# 🤝 How To Contribute & Guidelines

We welcome you to independently verify the information and contribute to the dataset.

Adding a new entity consists of two simple steps:

1. Fork the repository. Create a new markdown file in the directory with the copy of the template, filled with your details. Add a new .svg or .png logo image in the directory. 
2. Once you're done, create a pull request in the main repo. The pull request should only contain *two new files*—the Markdown file created from the template and a logo image.

Below is an example submission for Acala
```

name: Acala / Karura
category:
  - DeFi
description: DeFi platform that offers a suite of financial products and
  services, including lending, borrowing, staking, and trading, in a secure and
  scalable way. Acala is also Ethereum-compatible, making it easy for developers
  to bring their existing applications to the Polkadot ecosystem.
readiness:
  business: Scaling/Alliance
  technology: Connected to Relay chain
target_audience:
  - Dev teams
  - Startup
  - Personal investors
  - Institutional investors
  - Community DAO
layer:
  - Layer-3
web:
  logo: Acala - Karura.jpg
  site: https://acala.network/
  twitter: AcalaNetwork

```

Below are the available markdown headers for adding entities with guidelines for each header (only input what is applicable for what you are adding):

- `name`: The project  name (will also be used as page name)
- `category`: A  list of categories describing the project, each starts by dash and on the new line. [See the list](#category)
- `description`: The short project description
- `Business readiness`: Choose one from the [list](#business-readiness)
- `Technology readiness`: Choose one from the [list](#technology-readiness)
- `Target audience`: A list of customers, each starts by dash and on the new line. [See the list](#target-audience)
- `Layer`: A list of layers, each starts by dash and on the new line. [See the list](#typelayer)
- `logo`: A relative path to the corresponding SVG/PNG image
- `website`: A URL to the project website
- `twitter`: A Twitter handle
- `youtube`: A YouTube handle
- `blog`: A URL to the blogging platform of choice (Medium/Linkedin/etc.), preferably with subscribers counter
- `github`: A URL to the GitHub page

# 🗿 Data sources

All of the data is taken from open sources (mostly X, Youtube, Medium, Linkedin, Github, app stores, teams websites and comms, gov proposals) some fields might be empty. The database is being updated 2 times per year by @faultcore and @oshakarishvili to the best of our knowledge. We welcome you to update it as well, especially if you are part of the project.

*The directory is available for general information purposes only and is not an official endorsement of the projects by JUST team.* 

*We will also take the liberty of not disclosing some of the metrics by which we evaluate projects, although we would be more than happy to engage in a productive discussion about unifying the metrics by which projects in the ecosystem are categorized.*

# Other ecosystem navigators

Discover projects in the ecosystem with the help of other providers:

https://github.com/haquefardeen/awesome-dot?tab=readme-ov-file

https://polkaproject.com/

https://parachains.info/

https://polkadot.network/ecosystem/dapps/

https://www.dotmarketcap.com/ecosystem

https://www.alchemy.com/ecosystem/polkadot

https://dotinsights.subwallet.app/

https://www.dtmb.xyz
