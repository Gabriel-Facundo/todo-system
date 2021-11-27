import { Paper} from '@material-ui/core'

const CenterPaper = (props: any) => {
    return (
        <Paper style={{borderRadius: '10px', backgroundColor: props.color, marginTop: '80px'}} elevation={24} >
            {props.children}
        </Paper>
    )
}

export default CenterPaper