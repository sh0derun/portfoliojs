import Currency from "./currency.js";
import { HttpClient } from "./http-client.js";
import Token from "./token.js";

const exchangeLookup = new Map([
    ["00", getTokensExchange],
    ["10", getTokensExchange],
    ["01", getTokensExchangeOnTimestamp],
    ["11", getTokenExchangeOnTimestamp],
]);

const key = args => +("token" in args) +""+ +("date" in args);

const http = new HttpClient();

export async function getExchange(args){
    return await exchangeLookup.get(key(args))(args.token, args.date);
}

async function getTokensExchange(token, timestamp = undefined, targetCurrency = Currency.USD){
    return await http.getTokensExchange(token ? [token] : Object.values(Token), targetCurrency);
}

async function getTokenExchangeOnTimestamp(token, timestamp, targetCurrency = Currency.USD){
    const date = new Date(timestamp).getTime();
    return await http.getTokenExchangeOnTimestamp(token, date, targetCurrency);
}

async function getTokensExchangeOnTimestamp(token = undefined, timestamp, targetCurrency = Currency.USD){
    let exchange = {...Token};
    const date = new Date(timestamp).getTime();
    exchange.BTC = await http.getTokenExchangeOnTimestamp(Token.BTC, date, targetCurrency).then((value => value[Token.BTC]));
    exchange.ETH = await http.getTokenExchangeOnTimestamp(Token.ETH, date, targetCurrency).then((value => value[Token.ETH]));
    exchange.XRP = await http.getTokenExchangeOnTimestamp(Token.XRP, date, targetCurrency).then((value => value[Token.XRP]));
    return exchange;
}