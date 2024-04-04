import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { CoinProps } from '../home/props';
import { CenterContent, Containner, ContentBox, ImgStyle, Loss, Profit } from './styles';

interface ResponseData{
    data: CoinProps
}

interface ErrorData{
    error: string;
}

type DataProps = ResponseData | ErrorData;

export function Details(){
    const {id} = useParams();
    const navigate = useNavigate();

    const [coin, setCoin] = useState<CoinProps>();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function getCoin(){
            try{
                fetch(`https://api.coincap.io/v2/assets/${id}`)
                .then(response => response.json())
                .then( (data: DataProps) => {
                    if ("error" in data){
                        navigate("/");
                        return;
                    }
    
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
    
                    const resultData = {
                        ...data.data,
                        formatedPrice: price.format(Number(data.data.priceUsd)),
                        formatedMarket: priceCompact.format(Number(data.data.marketCapUsd)),
                        formatedVolume: priceCompact.format(Number(data.data.volumeUsd24Hr)),
                    }
    
                    setCoin(resultData);
                    setLoading(false);
                })   
            } catch(err){
                console.log(err);
                navigate("/")
            }
           }

           getCoin();
    }, [id])


    if (loading || !coin) {
        return(
            <Containner>
                <CenterContent><h1>Carregando página...</h1></CenterContent>
            </Containner>
        )
    }

    return(
        <Containner>
            <CenterContent><h1>Detalhes da moeda: {id}</h1></CenterContent>
            <ContentBox>
                <ImgStyle src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}/>
                <h1>{coin.name} | {coin.symbol}</h1>
                <h2><b>Preço:</b> {coin.formatedPrice}</h2>
                <h2><b>Valor do mercado:</b> {coin.formatedMarket}</h2>
                <h2><b>Volume:</b> {coin.formatedVolume}</h2>
                {Number(coin.changePercent24Hr) > 0 ?
                    <Profit><b>Variação do dia:</b> <span>{Number(coin.changePercent24Hr).toFixed(2)}</span></Profit>:
                    <Loss><b>Variação do dia:</b> <span>{Number(coin.changePercent24Hr).toFixed(2)}</span></Loss>
                }
            </ContentBox>
        </Containner>
    )
}