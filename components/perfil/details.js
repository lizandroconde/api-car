import { Button } from "antd"
import Layout from "antd/lib/layout/layout"
import styled from "styled-components"
import { NewComponet } from "../../styles/general"

const Details = () =>{
    return(
        <NewComponet>
            <LayoutPerfil>
                <Photo src="https://cdn6.f-cdn.com/ppic/153785354/logo/47443227/KzGkO/profile_logo_.jpg" />
                <Detail>
                    <Name>
                        <Na>
                            <strong>Lizandro C.</strong>&nbsp;
                            <span>@lizandroconde</span>
                        </Na>
                        <Button type="primary">
                            Editar Perfil
                        </Button>

                    </Name>
                </Detail>
            </LayoutPerfil>
        </NewComponet>
    )
}

const Na = styled.div`
    font-size: 1.5rem;
`

const Name = styled.div`
    display: flex;
    justify-content: space-between;
`
const  LayoutPerfil = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr 2fr;
`

const Photo = styled.img`
    padding: 10px;
`

const Detail = styled.div`

`

export default Details