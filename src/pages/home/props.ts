export interface CoinProps {
    id: string,
    rank: string,
    symbol: string,
    name: string,
    supply: string,
    maxSupply: string,
    marketCapUsd: string,
    volumeUsd24Hr: string,
    priceUsd: string,
    changePercent24Hr: string,
    vwap24Hr:string,
    explorer: string,
    formatedPrice?: string,
    formatedMarket?: string,
    formatedVolume?: string
}

export interface DataProps{
    data: CoinProps[],
}