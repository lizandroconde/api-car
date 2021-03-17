import styled from "styled-components"


const Loading = () =>{
    return(
        <LoadingB>
            <img src="/loading.svg" />
        </LoadingB>
    )
}

export default Loading


const LoadingB = styled.div`
    width:100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`