import { Button, Typography } from "@material-ui/core";
import { AuthContext } from "contexts";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LOGIN, TODO } from "routes";
import { CenterGrid, CenterGridItem, CenterPaper, FullDiv } from "shared"
import img from 'shared/images/forbidden.jpg'

const NotAuthorized = () => {
    const {token} = useContext(AuthContext);

    const Logged = () => {
        return (
        <>
            <Typography variant='h5' style={{paddingTop: '40px', }}>
                <b>Opa meu camarada! Tudo bem?</b> <br />
            </Typography>

            <Typography style={{paddingBottom: '30px', marginLeft: '40px', marginRight: '40px'}}>
               Eu não sei porque você tentou acessar a página de "não autorizado" <br />
               sendo que você <b>está autorizado ಠ_ಠ</b> {' '}
               Eu poderia só ter te redirecionado pra página principal<br/>
               mas pela sua curiosidade, decidi não fazer isso.
            </Typography>
            
            <Button variant='contained' style={{ backgroundColor: '#000000', color: 'white'}} 
            component={Link} to={TODO} 
            >
                Menu principal
            </Button>
            <Typography style={{marginTop: '5px', paddingBottom: '40px', fontSize: '12px'}}>  
                (Mas sério meu patrão, clica ai)
            </Typography>
        </>
        )
    }

    const NotLogged =() => {
        return (<>
            <Typography variant='h5' style={{paddingTop: '40px', }}>
                <b>CALMA LÁ MEU PATRÃO, QUE ISSO? </b>🚨 <br />
            </Typography>
            <Typography style={{paddingBottom: '40px', marginLeft: '40px', marginRight: '40px'}}>
                Então, acontece que pra acessar essa página <br/>
                você <b>precisa estar logado.</b> <br />
                Mas não se preocupe, não vou chamar a polícia pelo acesso não autorizado, tudo bem? <br />
                Mas fala ai, aproveita e loga no sistema meu camarada
            </Typography>

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