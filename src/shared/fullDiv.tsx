import { CenterDiv } from "style/styledsComponents"
const FullDiv = (props: any) => {
    return (
        <CenterDiv style={{backgroundImage: `url(${props.img})`, backgroundColor: props.color}}>
            {props.children}
        </CenterDiv>
    )
}
export default FullDiv

