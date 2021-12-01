import React, {useContext, useState} from 'react'
import { Redirect } from 'react-router'

import { TextField} from '@material-ui/core'
import { FullDiv, CenterGrid, CenterGridItem, CenterPaper } from 'shared'
import img from 'shared/images/hero-home-bg-cutted.jpg'
import './login.css'

import { AuthContext } from 'contexts'
import { MainLogo, StyledTypography, GridItemDirection, StyledButton } from 'style/styledsComponents'

import {TODO} from 'routes'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {login, token, failLogin} = useContext(AuthContext);

    function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value);
    }

    function handleEmail(e: React.ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value);
    }

    return (
        <FullDiv img={img}>
            { token && <Redirect to={TODO} />}
            <CenterGrid >
                <MainLogo/>
                    <CenterGridItem>
                        <CenterPaper color={'#F3814A'}>
                            <StyledTypography paddingtop={40} maincolor={"#AD4E00"}> 
                                Salve salve meu patrão<br /> 
                                vamos logar no sistema<br /> 
                                e ver o que temos para hoje? 💯
                            </StyledTypography>

                            <GridItemDirection paddingtop={20} paddingbottom={20} marginleft={40} marginright={40}>
                                <TextField 
                                color='secondary' 
                                placeholder='Email'
                                value={email}
                                onChange={handleEmail}/>
                            </GridItemDirection>

                            <GridItemDirection paddingbottom={30}>
                                <TextField 
                                color='secondary' 
                                placeholder='Senha' 
                                type='password'
                                value={password}
                                onChange={handlePassword}/>
                            </GridItemDirection>

                            <StyledButton className={failLogin}  marginbottom={50} backgroundcolor={'#A43600'} maincolor={'#C9967E'}
                                onClick={() => login(email,password)}
                            >
                                Entrar 🚀
                            </StyledButton>
                        </CenterPaper>
                </CenterGridItem>
            </CenterGrid>
        </FullDiv>
    )
}


export default Login