import { Button } from "@material-ui/core";
import { AuthContext } from "contexts";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LOGIN, TODO } from "routes";
import { CenterGrid, CenterGridItem, CenterPaper, FullDiv } from "shared"
import { StyledTypography } from "style/styledsComponents";
import img from 'shared/images/forbidden.jpg'

const NotAuthorized = () => {
    const {token} = useContext(AuthContext);

    const Logged = () => {
        return (
        <>
            <StyledTypography variant='h5' paddingtop={40}>
                <b>Opa meu camarada! Tudo bem?</b> <br />
            </StyledTypography>

            <StyledTypography paddingbottom= {30} marginleft={40} marginright={40}>
               Eu não sei porque você tentou acessar a página de "não autorizado" <br />
               sendo que você <b>está autorizado ಠ_ಠ</b> {' '}
               Eu poderia só ter te redirecionado pra página principal<br/>
               mas pela sua curiosidade, decidi não fazer isso.
            </StyledTypography>
            
            <Button variant='contained' style={{ backgroundColor: '#000000', color: 'white'}} 
            component={Link} to={TODO} 
            >
                Menu principal
            </Button>

            <StyledTypography margintop={5} paddingbottom={40} fontSize={12}>  
                (Mas sério meu patrão, clica ai)
            </StyledTypography>
        </>
        )
    }

    const NotLogged =() => {
        return (<>
            <StyledTypography paddingtop={40}>
                <b>CALMA LÁ MEU PATRÃO, QUE ISSO? </b>🚨 <br />
            </StyledTypography>

            <StyledTypography paddingbottom={40} marginleft={40} marginright={40}>
                Então, acontece que pra acessar essa página <br/>
                você <b>precisa estar logado.</b> <br />
                Mas não se preocupe, não vou chamar a polícia pelo acesso não autorizado, tudo bem? <br />
                Mas fala ai, aproveita e loga no sistema meu camarada
            </StyledTypography>

            <Button variant='contained' style={{marginBottom: '50px', backgroundColor: '#000000', color: 'white'}} 
            component={Link} to={LOGIN} 
            >
                Logar!
            </Button>
        </>)
    }

    return (
        <FullDiv img={img}> 
            <CenterGrid>
                <CenterGridItem>
                    <CenterPaper color='#525151'>
                        {!token && <NotLogged />}
                        {token && <Logged />}
                    </CenterPaper>
                </CenterGridItem>
            </CenterGrid>
        </FullDiv>
    )
}

export default NotAuthorized;