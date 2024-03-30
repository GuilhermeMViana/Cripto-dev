import { Link } from 'react-router-dom'

import { Containner } from './styles'

import logoimg from '../../assets/logo.svg'

export default function Header(){
    return(
        <Containner>
            <Link to="/">
                <img src={logoimg}/>
            </Link>
        </Containner>
    )
}