import diagram from 'assets/images/diagram.svg';
import flag from 'assets/images/flag.svg';
import risk from 'assets/images/risk.svg';

// welcome section
const welcomeTexts = {
  description: 'Discover what life insurance can look like on web3.',
  title: 'Life Insurance for Everyone.',
};

const welcomeHeroCard = {
  description: 'Life insurance.',
  title: 'AdaLife',
  button: {
    label: 'Discover',
    link: '#marketplace',
  }
};

const welcomeCards = {
  card1: {
    buttonLabel: 'Learn more',
    buttonLink: '#howItWorks',
    description: 'Include AdaLife into your portfolio to receive gains from insurance premiums.',
    title: 'Secure your future'
  },
  card2: {
    description: 'Launch Policies',
    title: '3'
  },
  card3: {
    description: 'APY',
    title: '16-54%'
  }
};

// our mission section
const ourMissionTexts = {
  title: 'Our Mission',
  description: 'Ensuring comprehensive coverage for global emerging risks by redefining how risk is transferred is a financial, social, and moral imperative.',
  values: [
    { value: '$10 tn', label: 'Estimated gap\n(Financial Times)' },
    { value: '66%', label: 'Losses remain uncovered' },
    { value: '40%', label: 'Median operational friction' },
    { value: '$12 - $29 bln', label: 'Parametric insurance\n2022 - 2030' }
  ]
};

const missionCards = [
  {
    description: 'Investors can build diversified investment portfolios to increase capital efficiency and generate leverage as insurance companies do.',
    imageSrc: risk,
    isReversed: true,
    isRoseText: true,
    title: 'Fida is a <rose>Risk Transfer Protocol</rose> built on top of Cardano.'
  },
  {
    description: "Ensuring comprehensive coverage for global emerging risks by redefining how risk is transferred is a financial, social, and moral imperative. Using catastrophe insurance as an example: even though climate catastrophes has surged ninefold, a staggering 66% of these losses remain uncovered by the insurance sector. This glaring protection gap is not unique to climate insurance. However, it highlights the impact of industry's capital constraints on people’s lives. The industry is struggling to adapt. It is losing its access to capital to newer financial services.",
    imageSrc: diagram,
    subtitle: 'The insurance industry is failing to cover customers',
    title: "ADA Life will help you protect those around you"
  },
  {
    description: 'Lorem Ipsum.',
    imageSrc: flag,
    isReversed: true,
    isRoseText: true,
    title: 'Be the herald of the <rose>Insurance Revolution</rose>',
    subtitle: 'Recovering Liquidity, Optimizing Portfolio Revenue'
  },
  {
    description: 'Smart contracts become the cornerstone of our platform, introducing unparalleled efficiency. The result? Dramatically reduced costs and atomic, predictable claim payouts for policyholders, without sacrificing the essence of insurance that has been trusted since time immemorial.',
    imageSrc: flag,
    title: 'Setup insurance sidecars and find the liquidity you need to grow your company.',
    subtitle: 'Elevating Efficiency, Ensuring Predictable Outcomes'
  },
  {
    description: 'Fida redefines insurance investment, unlocking the potential of solvency universally. This innovation ushers in higher yields across the board, democratizing profit opportunities for investors.',
    imageSrc: flag,
    isReversed: true,
    isRoseText: true,
    title: 'Follow insurance experts and gain an edge by leveraging uncorrelated assets as your investment base.',
    subtitle: 'Unleashing Solvency for All'
  }
];

const howItWorks = {
  description: 'You can think of Fida as a crowd funded reinsurance group. The Fida Risk Transfer Protocol decentralizes risk. In so doing, it makes insurance liquid, safe, and efficient for everyone. Users receive coverage on submitted policies, earn premiums from policy payments and collect fees of protocol usage. In the process of creating a Fida Policy, there are three main actors involved: the policy broker, the policy owner (who have purchased the insurance), and the investors (who provide collateral for the policy). This process proceeds as follows: Clients initially approach the policy broker with the intention of purchasing a policy. Subsequently, they must agree on the cost the client must pay for the policy. Once agreed upon, the policy broker (using the clior web app) creates a policy and provides an address (Fida Policy Contract Address) where the client must send the agreed amount (premium amount). You can continue to read into the process, which is fully documented at ',
  title: 'How it all works',
  link: {
    label: 'docs.fida.finance',
    href: 'https://docs.fida.finance/'
  }
};

// conquer risk section
const conquerRiskTexts = {
  title: 'Divide and <rose>conquer risk!</rose>',
  description: 'Our revolutionary protocol offers unique benefits:',
  points: ['Proof of Reserves', 'Liquid Assets (ILS NFTs)', 'Capital Efficiency']
};

// fida marketplace section
const fidaMarketplaceTexts = {
  description: 'Rediscover liquidity, even when the collateral is safely maintained. Trade Fida Cards to improve your Risk Diversification.',
  title: 'The Fida Marketplace'
};

// seamlessAI section
const seamlessAITexts = {
  title: 'Seamless AI',
  description: "Behind the scenes we bring immutable verified AI training data on-chain. Transparent confirmation of Risk prediction. risk diversification score that powers protocol stability. AI assistant on Fida Card trades. Fida is built on Ai and blockchain, but you wouldn't notice. It just works."
};

// road map section
const roadMapTexts = {
  title: 'The Roadmap',
  description: 'We are on our way to covering the insurance protection gap with our technology. Our phased roll-out is optimized so the protocol is fully functional from Phase 1. Unlocking additional use cases on each subsequent phase.',
  phases: [
    ['CLI', 'Core risk transfer protocol'],
    ['On-chain contract audits', 'Webapp'],
    ['Voting', 'Multi coin support', 'Staking'],
    ['Card transfer', 'Marketplace', 'Oracle integration'],
    ['Transparent fiat integration', 'Portfolio diversity score', 'Protocol solvency audit'],
    ['Multi chain support', 'Fund pools', 'Under collateralization support'],
  ]
};

// newsletter section
const newsletterTexts = {
  title: 'Stay informed!',
  description: 'We look forward to connecting with the community!',
  buttonLabel: 'Sign up',
  placeholder: 'email@email.com',
};

export {
  conquerRiskTexts,
  fidaMarketplaceTexts,
  howItWorks,
  missionCards,
  newsletterTexts,
  ourMissionTexts,
  roadMapTexts,
  seamlessAITexts,
  welcomeCards,
  welcomeHeroCard,
  welcomeTexts
};
