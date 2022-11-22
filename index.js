#!/usr/bin/env node

import { handleArgs, getLatestPortfolioValuePerToken } from "./src/protfolio-generator.js";


async function main(){
    const args = handleArgs(process.argv.slice(2));
    await getLatestPortfolioValuePerToken(args);
}

await main();