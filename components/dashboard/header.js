import styled from "styled-components"
import { Container } from "../container"

const HeaderDashboard = ( ) =>{
    return(
       <Container>
        <HeaderD>
            <div>Logo</div>
        </HeaderD>
       </Container>
    )
}

export default HeaderDashboard


const HeaderD = styled.div`
    border-radius: 10px;
    background: white;  
    padding: 10px;

`