import styled from "styled-components"

const BannerPerfil = ({url}) =>{
    return(
        <Image src={url} />
    )
}


const Image = styled.img`
    width:100%;
    height: 400px;
    object-fit: cover;
    position: absolute;
`
export default BannerPerfil