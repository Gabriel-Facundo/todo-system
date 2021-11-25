import { Grid, TextField, Typography, Paper, Button as MaterialButton} from '@material-ui/core'
import {ReactComponent as MainLogo} from 'images/logo-southsystem.svg'
import styled from 'styled-components'
import React from 'react'
import './login.css'

const Login = () => {
    return (
        <MainGrid >
            <MainLogo style={{position: 'absolute', paddingBottom:"390px"}}/>
            <Grid item>
                <Grid container>
                    <Grid item xs={4}></Grid>
                    <Grid item>
                        <Paper style={{borderRadius: '10px', backgroundColor: '#F3814A'}} elevation={24} >
                            <Typography style={{paddingTop: '40px'}}> 
                                Salve salve meu patrão<br /> 
                                vamos logar no sistema<br /> 
                                e ver o que temos para hoje? 💯
                            </Typography>

                            <Grid item style={{paddingTop: '20px',paddingBottom: '20px', marginLeft: '40px', marginRight: '40px'}}>
                                <Typography>
                                    Email:
                                </Typography>
                                <TextField color='secondary'/>
                            </Grid>

                            <Grid item style={{paddingBottom: '30px'}}>
                                <Typography>
                                    Senha:
                                </Typography>
                                <TextField color='secondary'/>
                            </Grid>

                            <Button style={{marginBottom: '50px', backgroundColor: '#A43600', color: '#C9967E'}}>
                                Entrar
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </MainGrid>
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
export default Login