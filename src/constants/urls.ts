import { Networks } from './networks';

export const THEGRAPH_API_URL_BY_NETWORK = {
  // must change to our mainnet address
  [Networks.MAINNET]: 'https://api.thegraph.com/subgraphs/name/ourzora/zora-v1',
  [Networks.RINKEBY]: "https://api.thegraph.com/subgraphs/name/pynchmeister/nft-marketplace",
};

export const THEGRAPH_UNISWAP_URL_BY_NETWORK = {
  [Networks.MAINNET]: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',
  [Networks.RINKEBY]:
    'https://api.thegraph.com/subgraphs/name/ianlapham/uniswap-v2-rinkeby',
};

export const OPENSEA_API_URL_BY_NETWORK = {
  [Networks.MAINNET]: 'https://api.opensea.io/api/v1/',
  [Networks.RINKEBY]: 'https://rinkeby-api.opensea.io/api/v1/',
};

// Should we change this too?
export const ZORA_USERNAME_API_URL = 'https://zora.co/api/users';
