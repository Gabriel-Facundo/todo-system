import styled from 'styled-components'

const FullDiv = (props: any) => {
    return (
        <Div style={{backgroundImage: `url(${props.img})`, backgroundColor: props.color}}>
            {props.children}
        </Div>
    )
}
export default FullDiv

const Div = styled.div`
    height: 100%;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
 
`