import styled from 'styled-components'
import { AppBar, Button, Grid, Paper, TextField, Typography } from '@material-ui/core'
import {ReactComponent as Logo} from 'shared/images/logo-southsystem.svg'
import IStyles from 'interfaces/IStyles'

export const MainGrid = styled(Grid).attrs({
    container: true,
    justifyContent: 'center',
    alignItems: 'center',
})`
    display: flex; 
    flex-direction: column;
    text-align: center;
    min-height: 95vh;
`

export const MainPaper = styled(Paper).attrs({
    elevation: 24
})`
    border-radius: 10px;
    margin-top: 80px;
`

export const StyledPaper = styled(Paper)<IStyles>`
    text-align: center;
    background-color: ${(props) => props.backgroundcolor};
`

export const CenterDiv = styled.div`
    height: 100%;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    overflow: auto;
`

export const MainLogo = styled(Logo)`
    position: absolute;
    padding-bottom: 270px;
`

export const StyledTypography = styled(Typography)<IStyles>`
    padding-top: ${(props) => props.paddingtop}px;
    padding-bottom: ${(props) => props.paddingbottom}px;
    padding: ${(props) => props.padding}px;
    margin-left: ${(props) => props.marginleft}px;
    margin-right: ${(props) => props.marginright}px;
    margin-bottom: ${(props) => props.marginbottom}px;
    color: ${(props) => props.maincolor};
    text-decoration: ${(props) => props.textDecoration};
`

export const GridItemDirection = styled(Grid).attrs({
    item: true
})<IStyles>`
    padding-top: ${(props) => props.paddingtop}px;
    padding-bottom: ${(props) => props.paddingbottom}px;
    margin-left: ${(props) => props.marginleft}px;
    margin-right: ${(props) => props.marginright}px;
    padding: ${(props) => props.padding}px;
`

export const StyledButton = styled(Button).attrs({
    variant: 'contained'
})<IStyles>`
    padding-top: ${(props) => props.paddingtop}px;
    padding-bottom: ${(props) => props.paddingbottom}px;
    margin-left: ${(props) => props.marginleft}px;
    margin-right: ${(props) => props.marginright}px;
    margin-bottom: ${(props) => props.marginbottom}px;
    color: ${(props) => props.maincolor};
    background-color: ${(props) => props.backgroundcolor};
    font-sive: ${(props) => props.fontSize};

    &:hover{
        background-color: ${(props) => props.backgroundcolor};
        box-shadow: 0px 0px 15px black;
    }   
`

export const StyledTextField = styled(TextField)<IStyles>`
    padding-top: ${(props) => props.paddingtop}px;
    padding-bottom: ${(props) => props.paddingbottom}px;
    margin-left: ${(props) => props.marginleft}px;
    margin-right: ${(props) => props.marginright}px;
    margin-bottom: ${(props) => props.marginbottom}px;
    border-radius: ${(props) => props.borderradius}px;
    width: ${(props) => props.mainwidth}%;
`

export const StyledAppBar = styled(AppBar)<IStyles>`
    padding: ${(props) => props.padding}px;
    background-color: ${(props) => props.backgroundcolor};
`