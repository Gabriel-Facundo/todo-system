import { useContext } from "react";
import {Link} from 'react-router-dom'
import { LOGIN, TODO } from "routes";

import { AuthContext } from "contexts";

import { Button, Divider, Typography } from "@material-ui/core";
import { CenterGrid, CenterGridItem, CenterPaper, FullDiv } from "shared"
import img from 'shared/images/death-bluescreen-resized.jpg'

const NotFound = () => {
    const {token} = useContext(AuthContext);

    const TextNotLogged = () => {
        return (
            <>
                <Typography style={{paddingBottom: '30px', paddingTop: '20px',marginLeft: '40px', marginRight: '40px'}}>
                    Mas não seja por isso ¯\_(ツ)_/¯ <br />
                    Enquanto nós não chegamos no seu tempo, que tal
                    <br />
                    logar na nossa página e desfrutar desse mundo maravilhoso?
                </Typography>

                <Button variant='contained' style={{marginBottom: '50px', backgroundColor: '#0C1D73'}}
                component={Link} to={LOGIN}
                >
                    <b>IR PARA LOGIN</b>
                </Button>
            </>
        )
    }

    const TextLogged = () => {
        return (
            <>
                <Typography style={{paddingBottom: '30px', paddingTop: '20px',marginLeft: '40px', marginRight: '40px'}}>
                    Mas pelo que eu to vendo, você já tá logado né? 
                    <br />
                    Então aproveita e vai desfrutar desse mundo maravilhoso meu guerreiro
                </Typography>

                <Button variant='contained' style={{marginBottom: '50px', backgroundColor: '#0C1D73'}}
                component={Link} to={TODO} 
                >
                    <b>MUNDO MARAVILHOSO</b>
                </Button>
            </>
        )
    }
   

    return (
        <FullDiv img={img}>
            <CenterGrid>
                <CenterGridItem>
                    <CenterPaper color='#243AA9'>
                        <Typography style={{paddingTop: '40px', paddingBottom: '20px'}}>
                            Macacos me mordam ⁀⊙﹏☉⁀ <br />
                            Você está muito a frente no nosso tempo<br />
                            <b>Parece que essa página não foi criada ainda</b> (╥﹏╥)
                        </Typography>

                        <Divider />
                        {!token && <TextNotLogged />}
                        {token && <TextLogged />}
                    </CenterPaper>
                </CenterGridItem>
            </CenterGrid>
        </FullDiv>
    )
}

export default NotFound;