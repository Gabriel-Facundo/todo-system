import { MainPaper } from 'style/styledsComponents'

const CenterPaper = (props: any) => {
    return (
        <MainPaper style={{backgroundColor: props.color}} >
            {props.children}
        </MainPaper>
    )
}

export default CenterPaper