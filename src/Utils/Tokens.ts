const CELO = {
  name: "celo",
  symbol: "CELO",
  address: "0x471EcE3750Da237f93B8E339c536989b8978a438" as `0x${string}`,
  decimals: 18,
  image:
    "https://assets.coingecko.com/coins/images/11090/standard/InjXBNx9_400x400.jpg",
};

const cUSD = {
  name: "celo-dollar",
  symbol: "cUSD",
  address: "0x765de816845861e75a25fca122bb6898b8b1282a" as `0x${string}`,
  decimals: 18,
  image:
    "https://assets.coingecko.com/coins/images/13161/standard/icon-celo-dollar-color-1000-circle-cropped.png",
};

const cEUR = {
  name: "celo-euro",
  symbol: "cEUR",
  address: "0xd8763cba276a3738e6de85b4b3bf5fded6d6ca73" as `0x${string}`,
  decimals: 18,
  image: "https://assets.coingecko.com/coins/images/16756/standard/CEUR.png",
};

const cREAL = {
  name: "celo-real-creal",
  symbol: "cREAL",
  address: "00xe8537a3d056DA446677B9E9d6c5dB704EaAb4787" as `0x${string}`,
  decimals: 18,
  image: "https://assets.coingecko.com/coins/images/27205/standard/creal.png",
};

const MCUSD = {
  name: "moola-celo-dollars",
  symbol: "MCUSD",
  address: "0x918146359264c492bd6934071c6bd31c854edbc3" as `0x${string}`,
  decimals: 18,
  image:
    "https://assets.coingecko.com/coins/images/22380/standard/McUSD_Blue_128x128_Square.jpg",
};

//update the ckes contract
const cKES = {
  name: "celo-kenyan-shilling",
  symbol: "cKes",
  address: "0x456a3d042c0dbd3db53d5489e98dfb038553b0d0" as `0x${string}`,
  decimals: 18,
  image:
    "https://assets.coingecko.com/coins/images/38052/standard/cKES_200x200.png",
};

export const MainnetTokens = [cUSD, cEUR, cREAL, CELO, cKES, MCUSD];

const tokenPairs = {
  cUSD: [
    {
      address: "0x765DE816845861e75A25fCA122bb6898B8B1282a",
      symbol: "cUSD",
      decimals: 18,
      name: "Celo Dollar",
  image:
    "https://assets.coingecko.com/coins/images/13161/standard/icon-celo-dollar-color-1000-circle-cropped.png",
      
    },
    {
      address: "0x471EcE3750Da237f93B8E339c536989b8978a438",
      symbol: "CELO",
      decimals: 18,
      name: "Celo",
      image:
        "https://assets.coingecko.com/coins/images/11090/standard/InjXBNx9_400x400.jpg",
    },
    {
      address: "0x456a3D042C0DbD3db53D5489e98dFb038553B0d0",
      symbol: "cKES",
      decimals: 18,
      name: "Celo Kenyan Shilling",
      image:
        "https://assets.coingecko.com/coins/images/38052/standard/cKES_200x200.png",
    },
    {
      address: "0xcebA9300f2b948710d2653dD7B07f33A8B32118C",
      symbol: "USDC",
      decimals: 6,
      name: "USD Coin",
      image:
        "https://raw.githubusercontent.com/compound-finance/token-list/master/assets/asset_USDC.svg",
    },
    {
      address: "0xEB466342C4d449BC9f53A865D5Cb90586f405215",
      symbol: "axlUSDC",
      decimals: 18,
      name: "Axelar USD Coin",
      image: "/svg/axlUSDC.svg",
    },
    {
      address: "0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e",
      symbol: "USDT",
      decimals: 6,
      name: "Tether",
      image:
        "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png",
    }
  ],
  CELO: [
    {
      address: "0x471EcE3750Da237f93B8E339c536989b8978a438",
      symbol: "CELO",
      decimals: 18,
      name: "Celo",
      image:
        "https://assets.coingecko.com/coins/images/11090/standard/InjXBNx9_400x400.jpg",
    },
    {
      address: "0x765DE816845861e75A25fCA122bb6898B8B1282a",
      symbol: "cUSD",
      decimals: 18,
      name: "Celo Dollar",
  image:
    "https://assets.coingecko.com/coins/images/13161/standard/icon-celo-dollar-color-1000-circle-cropped.png",
    },
    {
      address: "0xD8763CBa276a3738E6DE85b4b3bF5FDed6D6cA73",
      symbol: "cEUR",
      decimals: 18,
      name: "Celo Euro",
  image: "https://assets.coingecko.com/coins/images/16756/standard/CEUR.png",
    },
    {
      address: "0xe8537a3d056DA446677B9E9d6c5dB704EaAb4787",
      symbol: "cREAL",
      name: "Celo Real",
      decimals: 18,
  image: "https://assets.coingecko.com/coins/images/27205/standard/creal.png",
    },
    {
      address: "0x73F93dcc49cB8A239e2032663e9475dd5ef29A08",
      symbol: "eXOF",
      name: "eXOF",
      decimals: 18,
      image:
        "https://github.com/mento-protocol/mento-web/blob/main/src/images/tokens/eXOF.svg",
    }
  ],
  cEUR: [
    {
      address: "0xD8763CBa276a3738E6DE85b4b3bF5FDed6D6cA73",
      symbol: "cEUR",
      name: "Celo Euro",
      decimals: 18,
  image: "https://assets.coingecko.com/coins/images/16756/standard/CEUR.png",
    },
    {
      address: "0x471EcE3750Da237f93B8E339c536989b8978a438",
      symbol: "CELO",
      name: "Celo",
      decimals: 18,
      image:
        "https://assets.coingecko.com/coins/images/11090/standard/InjXBNx9_400x400.jpg",
    },
    {
      address: "0xEB466342C4d449BC9f53A865D5Cb90586f405215",
      symbol: "axlUSDC",
      name: "Axelar USD Coin",
      decimals: 18,
      image:"/svg/axlUSDC.svg",
    },
    {
      address: "0x061cc5a2C863E0C1Cb404006D559dB18A34C762d",
      symbol: "axlEUROC",
      name: "Axelar Euro Coin",
      decimals: 18,
      image:
      "/svg/axlEUROC.svg",

    },
    {
      address: "0xcebA9300f2b948710d2653dD7B07f33A8B32118C",
      symbol: "USDC",
      name: "USD Coin",
      decimals: 6,
      image:
        "https://raw.githubusercontent.com/compound-finance/token-list/master/assets/asset_USDC.svg",
    }
  ],
  cREAL: [
    {
      address: "0xe8537a3d056DA446677B9E9d6c5dB704EaAb4787",
      symbol: "cREAL",
      name: "Celo Real",
      decimals: 18,
  image: "https://assets.coingecko.com/coins/images/27205/standard/creal.png",
    },
    {
      address: "0x471EcE3750Da237f93B8E339c536989b8978a438",
      symbol: "CELO",
      name: "Celo",
      decimals: 18,
      image:
        "https://assets.coingecko.com/coins/images/11090/standard/InjXBNx9_400x400.jpg",
    },
    {
      address: "0xcebA9300f2b948710d2653dD7B07f33A8B32118C",
      symbol: "USDC",
      name: "USD Coin",
      decimals: 6,
      image:
        "https://raw.githubusercontent.com/compound-finance/token-list/master/assets/asset_USDC.svg",
    },
    {
      address: "0xEB466342C4d449BC9f53A865D5Cb90586f405215",
      symbol: "axlUSDC",
      name: "Axelar USD Coin",
      decimals: 18,
      image:
        "/svg/axlUSDC.svg",
    }
  ],
  USDC: [
    {
      address: "0xcebA9300f2b948710d2653dD7B07f33A8B32118C",
      symbol: "USDC",
      name: "USD Coin",
      decimals: 6,
      image:
        "https://raw.githubusercontent.com/compound-finance/token-list/master/assets/asset_USDC.svg",
    },
    {
      address: "0xe8537a3d056DA446677B9E9d6c5dB704EaAb4787",
      symbol: "cREAL",
      name: "Celo Real",
      decimals: 18,
  image: "https://assets.coingecko.com/coins/images/27205/standard/creal.png",
    },
    {
      address: "0xD8763CBa276a3738E6DE85b4b3bF5FDed6D6cA73",
      symbol: "cEUR",
      name: "Celo Euro",
      decimals: 18,
  image: "https://assets.coingecko.com/coins/images/16756/standard/CEUR.png",
    },
    {
      address: "0x765DE816845861e75A25fCA122bb6898B8B1282a",
      symbol: "cUSD",
      name: "Celo Dollar",
      decimals: 18,
  image:
    "https://assets.coingecko.com/coins/images/13161/standard/icon-celo-dollar-color-1000-circle-cropped.png",
    },
    {
      address: "0xEB466342C4d449BC9f53A865D5Cb90586f405215",
      symbol: "axlUSDC",
      name: "Axelar USD Coin",
      decimals: 18,
      image:
       "/svg/axlUSDC.svg",
    }
  ],
  
  axlUSDC: [
    {
      address: "0xEB466342C4d449BC9f53A865D5Cb90586f405215",
      symbol: "axlUSDC",
      name: "Axelar USD Coin",
      decimals: 18,
      image:
       "/svg/axlUSDC.svg",
    },
    {
      address: "0xe8537a3d056DA446677B9E9d6c5dB704EaAb4787",
      symbol: "cREAL",
      name: "Celo Real",
      decimals: 18,
  image: "https://assets.coingecko.com/coins/images/27205/standard/creal.png",
    },
    {
      address: "0xD8763CBa276a3738E6DE85b4b3bF5FDed6D6cA73",
      symbol: "cEUR",
      name: "Celo Euro",
      decimals: 18,
  image: "https://assets.coingecko.com/coins/images/16756/standard/CEUR.png",
    },
    {
      address: "0x765DE816845861e75A25fCA122bb6898B8B1282a",
      symbol: "cUSD",
      name: "Celo Dollar",
      decimals: 18,
  image:
    "https://assets.coingecko.com/coins/images/13161/standard/icon-celo-dollar-color-1000-circle-cropped.png",
    },
    {
      address: "0xcebA9300f2b948710d2653dD7B07f33A8B32118C",
      symbol: "USDC",
      name: "USD Coin",
      decimals: 6,
      image:
        "https://raw.githubusercontent.com/compound-finance/token-list/master/assets/asset_USDC.svg",
    }
  ],
  axlEUROC: [
    {
      address: "0x061cc5a2C863E0C1Cb404006D559dB18A34C762d",
      symbol: "axlEUROC",
      name: "Axelar Euro Coin",
      decimals: 18,
      image:
      "/svg/axlEUROC.svg",
      
    },
    {
      address: "0xD8763CBa276a3738E6DE85b4b3bF5FDed6D6cA73",
      symbol: "cEUR",
      name: "Celo Euro",
      decimals: 18,
  image: "https://assets.coingecko.com/coins/images/16756/standard/CEUR.png",
    },
    {
      address: "0x73F93dcc49cB8A239e2032663e9475dd5ef29A08",
      symbol: "eXOF",
      name: "eXOF",
      decimals: 18,
      image:
        "/svg/eXOF.svg",
    }
  ],
  cKES: [
    {
      address: "0x456a3D042C0DbD3db53D5489e98dFb038553B0d0",
      symbol: "cKES",
      name: "Celo Kenyan Shilling",
      decimals: 18,
      image:
        "https://assets.coingecko.com/coins/images/38052/standard/cKES_200x200.png",
    },
    {
      address: "0x765DE816845861e75A25fCA122bb6898B8B1282a",
      symbol: "cUSD",
      name: "Celo Dollar",
      decimals: 18,
  image:
    "https://assets.coingecko.com/coins/images/13161/standard/icon-celo-dollar-color-1000-circle-cropped.png",
    }
  ],
  eXOF: [
    {
      address: "0x73F93dcc49cB8A239e2032663e9475dd5ef29A08",
      symbol: "eXOF",
      name: "eXOF",
      decimals: 18,
      image:
        "/svg/eXOF.svg",
    },
    {
      address: "0x471EcE3750Da237f93B8E339c536989b8978a438",
      symbol: "CELO",
      name: "Celo",
      decimals: 18,
      image:
        "https://assets.coingecko.com/coins/images/11090/standard/InjXBNx9_400x400.jpg",
    },
    {
      address: "0x061cc5a2C863E0C1Cb404006D559dB18A34C762d",
      symbol: "axlEUROC",
       name: "Axelar Euro Coin",
       decimals: 18,
       image:
         "/svg/axlEUROC.svg",
    }
  ],
  USDT: [
    {
      address: "0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e",
      symbol: "USD₮",
      name: "Tether",
      decimals: 6,
      image:
        "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png",
    },
    {
      address: "0x765DE816845861e75A25fCA122bb6898B8B1282a",
      symbol: "cUSD",
      name: "Celo Dollar",
      
      decimals: 18,
      
  image:
    "https://assets.coingecko.com/coins/images/13161/standard/icon-celo-dollar-color-1000-circle-cropped.png",
    }
  ]
};

export default tokenPairs;
