import { Grid, TextField, Typography, Paper, Button as MaterialButton} from '@material-ui/core'
import {ReactComponent as MainLogo} from './images/logo-southsystem.svg'
import styled from 'styled-components'
import React, {useContext, useState} from 'react'
import img from './images/hero-home-bg-cutted.jpg'
import { AuthContext } from 'contexts'
import { Redirect } from 'react-router'
import {TODO} from 'routes'
import './login.css'


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
        <FullDiv>
            {token && <Redirect to={TODO} />}
            <MainGrid >
                <MainLogo style={{position: 'absolute', paddingBottom:"270px"}}/>
                <Grid item>
                    <Grid container>
                        <Grid item xs={4}></Grid>
                        <Grid item>
                            <Paper style={{borderRadius: '10px', backgroundColor: '#F3814A', marginTop: '80px'}} elevation={24} >
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
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </MainGrid>
        </FullDiv>
    )
}

const MainGrid = styled(Grid).attrs({
    container: true,
    justifyContent: 'center',
    alignItems: 'center',
})`
    display: flex; 
    flex-direction: column;
    text-align: center;
    min-height: 95vh;
`

const Button = styled(MaterialButton).attrs({
    variant: 'contained'
})`
`
const FullDiv = styled.div`
    height: 100%;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    background-image: url(${img});
`
export default Login