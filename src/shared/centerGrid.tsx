import { Grid } from '@material-ui/core'
import styled from 'styled-components'

const CenterGrid = ({children}: any) => {
    return (
        <MainGrid >
            {children}
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

export default CenterGrid