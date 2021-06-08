#!/usr/bin/env bash

npx get-graphql-schema https://api.thegraph.com/subgraphs/name/pynchmeister/nft-marketplace > graph-schemas/nft-marketplace.graphql
npx get-graphql-schema https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2 > graph-schemas/uniswap.graphql
