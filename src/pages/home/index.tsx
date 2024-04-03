import { FormEvent, useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import * as s from './styles'

import { GoSearch } from "react-icons/go";

interface CoinProps {
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

interface DataProps{
    data: CoinProps[],
}

export function Home() {
    const [input, setInput] = useState("");
    const [coins, setCoins] = useState<CoinProps[]>([]);
    const [limit, setLimit] = useState(10);


    //Chamar os dados da api apenas quando a página carrega a primeira vez
    useEffect(() => {
       getData();
    }, [limit])

    //Recebendo dados da API e formatando
    async function getData(){
        fetch(`https://api.coincap.io/v2/assets?limit=${limit}&offset=0`)
        .then(response => response.json())
        .then( (data: DataProps) => {
            //Criando a const coinsData para evitar escrever "data.data" várias vezes
            const coinsData = data.data;

            // Formatar valor da moeda
            const price = Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            })

            // Formatar valores grandes que não tem a necessidade de serem mostrados
            const priceCompact = Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                notation: "compact"
            })

            // Pega os válores de coinsData e para cade item acrescenta o valor formatado a lista
            const formatedResult = coinsData.map( (item) => {
                const formated = {
                    ...item,
                    // Valor atual da moeda
                    formatedPrice: price.format(Number(item.priceUsd)),
                    // Market cap da moeda
                    formatedMarket: priceCompact.format(Number(item.marketCapUsd)),
                    // Volume do mercado nas últimas 24h
                    formatedVolume: priceCompact.format(Number(item.volumeUsd24Hr)),
                }
                return formated
            })

            setCoins(formatedResult);
        })
    } 

    //Criar rota para página de detalhes
    const navigate = useNavigate();

    function handleSubmit(e : FormEvent){
        e.preventDefault();

        if(!input){
            return;
        }

        navigate(`/details/${input}`);
        // console.log(input);

        setInput("");
    }

    //Função para carregar mais moedas
    function handleGetMore(){
        setLimit(limit + 10)
    }


    return(
        <s.Containner>
            <s.Form
                onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Digite o símbolo da sua moeda: ...BTC"
                    value={input}
                    onChange={ (e) => setInput(e.target.value) }
                />
                <s.Search>
                    <GoSearch size={30} color="#fff"/>
                </s.Search>
            </s.Form>

            <s.Table>
                <thead>
                    <tr>
                        <th scope="col">Moeda</th>
                        <th scope="col">Valor do mercado</th>
                        <th scope="col">Preço</th>
                        <th scope="col">Volume</th>
                    </tr>
                </thead>
                {coins.length > 0 && coins.map( (item) => (
                        <tbody>
                            <tr key={item.id}>
                                <s.TdCoin>
                                    <s.CoinLogo src={`https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`}/>
                                    <Link to={`/details/${item.id}`}>{item.name} | {item.symbol}</Link>
                                </s.TdCoin>
                                <s.TdMarketCap>
                                    {item.formatedMarket}
                                </s.TdMarketCap>
                                <s.TdValue>
                                    {item.formatedPrice}
                                </s.TdValue>
                                {Number(item.changePercent24Hr) > 0 ? (
                                    <s.TdValuation>
                                        {/* Define a quantidade de casas decimais e usa span para inserir % no before*/}
                                        <span>{Number(item.changePercent24Hr).toFixed(2)}</span>
                                    </s.TdValuation>) : (
                                    <s.TdLoss>
                                        {/* Define a quantidade de casas decimais e usa span para inserir % no before*/}
                                        <span>{Number(item.changePercent24Hr).toFixed(2)}</span>
                                    </s.TdLoss>
                                )}
                            </tr>
                        </tbody>
                    ))    
                }
            </s.Table>
            <s.switchPage>
                <s.PageButton onClick={handleGetMore}>Carregar mais</s.PageButton>
            </s.switchPage>
        </s.Containner>
    )
}