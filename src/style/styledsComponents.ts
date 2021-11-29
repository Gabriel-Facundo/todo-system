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
    background-color: ${(props) => props.backgroundColor};
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
    padding-top: ${(props) => props.paddingTop}px;
    padding-bottom: ${(props) => props.paddingBottom}px;
    padding: ${(props) => props.padding}px;
    margin-left: ${(props) => props.marginLeft}px;
    margin-right: ${(props) => props.marginRight}px;
    margin-bottom: ${(props) => props.marginBottom}px;
    color: ${(props) => props.mainColor};
    text-decoration: ${(props) => props.textDecoration};
`

export const GridItemDirection = styled(Grid).attrs({
    item: true
})<IStyles>`
    padding-top: ${(props) => props.paddingTop}px;
    padding-bottom: ${(props) => props.paddingBottom}px;
    margin-left: ${(props) => props.marginLeft}px;
    margin-right: ${(props) => props.marginRight}px;
    padding: ${(props) => props.padding}px;
`

export const StyledButton = styled(Button).attrs({
    variant: 'contained',
    disabledElevation: false
})<IStyles>`
    padding-top: ${(props) => props.paddingTop}px;
    padding-bottom: ${(props) => props.paddingBottom}px;
    margin-left: ${(props) => props.marginLeft}px;
    margin-right: ${(props) => props.marginRight}px;
    margin-bottom: ${(props) => props.marginBottom}px;
    color: ${(props) => props.mainColor};
    background-color: ${(props) => props.backgroundColor};
    font-sive: ${(props) => props.fontSize};

    &:hover{
        background-color: ${(props) => props.backgroundColor};
        box-shadow: 0px 0px 15px black;
    }   
`

export const StyledTextField = styled(TextField)<IStyles>`
    padding-top: ${(props) => props.paddingTop}px;
    padding-bottom: ${(props) => props.paddingBottom}px;
    margin-left: ${(props) => props.marginLeft}px;
    margin-right: ${(props) => props.marginRight}px;
    margin-bottom: ${(props) => props.marginBottom}px;
    border-radius: ${(props) => props.borderRadius}px;
    width: ${(props) => props.mainWidth}%;
`

export const StyledAppBar = styled(AppBar)<IStyles>`
    padding: ${(props) => props.padding}px;
    background-color: ${(props) => props.backgroundColor};
`