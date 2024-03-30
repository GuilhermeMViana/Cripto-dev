import { Link } from 'react-router-dom'

import { Containner, Form, Search, Table, TableBody, TdCoin, TdMarketCap,  TdValue, TdValuation } from './styles'

import { GoSearch } from "react-icons/go";

export function Home() {
    return(
        <Containner>
            <Form>
                <input 
                    type="text" 
                    placeholder="Digite o símbolo da sua moeda: ...BTC"
                />
                <Search>
                    <GoSearch size={30} color="#fff"/>
                </Search>
            </Form>

            <Table>
                <thead>
                    <tr>
                        <th scope="col">Moeda</th>
                        <th scope="col">Valor do mercado</th>
                        <th scope="col">Preço</th>
                        <th scope="col">Volume</th>
                    </tr>
                </thead>
                <TableBody>
                    <tr>
                        <TdCoin>
                            <span>Bitcoin | <Link to="/detail/BTC">BTC</Link></span>
                        </TdCoin>
                        <TdMarketCap>
                            R$1990.000.000
                        </TdMarketCap>
                        <TdValue>
                            R$50
                        </TdValue>
                        <TdValuation>
                            <span>+50%</span>
                        </TdValuation>
                    </tr>
                </TableBody>
            </Table>
        </Containner>
    )
}