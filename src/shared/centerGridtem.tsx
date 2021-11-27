import { Grid } from '@material-ui/core'

const CenterGridItem = ({children}: any) => {
    return (
        <Grid item>
            <Grid container>
                <Grid item xs={4}></Grid>
                <Grid item>
                    {children}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CenterGridItem