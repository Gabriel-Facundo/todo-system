import React, {useContext, useState} from 'react'
import { Redirect } from 'react-router'

import { Grid, TextField, Typography, Button as MaterialButton} from '@material-ui/core'
import {ReactComponent as MainLogo} from 'shared//images/logo-southsystem.svg'
import { FullDiv, CenterGrid, CenterGridItem, CenterPaper } from 'shared'
import img from 'shared/images/hero-home-bg-cutted.jpg'
import './login.css'

import { AuthContext } from 'contexts'
import styled from 'styled-components'

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
                <MainLogo style={{position: 'absolute', paddingBottom:"270px"}}/>
                    <CenterGridItem>
                            <CenterPaper color={'#F3814A'}>
                                <Typography style={{paddingTop: '40px'}}> 
                                    Salve salve meu patrão<br /> 
                                    vamos logar no sistema<br /> 
                                    e ver o que temos para hoje? 💯
                                </Typography>

                                <Grid item style={{paddingTop: '20px',paddingBottom: '20px', marginLeft: '40px', marginRight: '40px'}}>
                                    <TextField 
                                    color='secondary' 
                                    placeholder='Email'
                                    value={email}
                                    onChange={handleEmail}/>
                                </Grid>

                                <Grid item style={{paddingBottom: '30px'}}>
                                    <TextField 
                                    color='secondary' 
                                    placeholder='Senha' 
                                    type='password'
                                    value={password}
                                    onChange={handlePassword}/>
                                </Grid>

                                <Button className={failLogin} style={{marginBottom: '50px', backgroundColor: '#A43600', color: '#C9967E'}}
                                    onClick={() => login(email,password)}
                                >
                                    Entrar 🚀
                                </Button>
                            </CenterPaper>
                </CenterGridItem>
            </CenterGrid>
        </FullDiv>
    )
}

const Button = styled(MaterialButton).attrs({
    variant: 'contained'
})`
`

export default Login