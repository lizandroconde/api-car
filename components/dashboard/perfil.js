import { useEffect, useState } from "react"
import styled from "styled-components"
import Loading from "../box/loading";

const Perfil = () =>{
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [auth, setAuth] = useState(true);
    const [user, setUser] = useState();
    const [data, Se] = useState();

    useEffect(() => {
        let token = JSON.parse(sessionStorage.getItem("auth"));
        
        (async () => {
          if (token) {
            let myperfil = await fetch("http://localhost:4000", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                 Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNjA2MzE4Nzc1fQ.S7dBrv3ZP8knJlRJYvineuMBucuoO7uNC7o1wMfBrDM`
              },
              body: JSON.stringify({
                query: `
                    {
                      GetPerfil(input:
                        {
                            iv: "${token.token.iv}",
                            content: "${token.token.content}"
                        }
                        ){
                        nombre
                        apellidos
                        correo
                        }
                    }
                    `
              })
            });
    
            let data = await myperfil.json()
            try {
                if(data.data){
                    let {GetPerfil} = data.data
                    if(GetPerfil){
                        setUser(GetPerfil)
                        setLoading(false)
                    }else{
                        setAuth(false)
                    }
                }else{
                    setError(true)
                }

            } catch (error) {
                setError(true)
            }
            
            }else{
                setAuth(false)
            }
          
        })();
      }, []);

    
      if(loading){
        return(
          <Loading />
        )
    }

    if(error){
        return(
            <h1>error</h1>
        )
    }

    if(error == false && loading == false){
        return(
            <PerfilD>
                  <HeaderP>
                  Bienvenido de Nuevo,
                      <h1 style={{fontSize: "1.7rem",marginBottom: "0"}}>{user.nombre}. {user.apellidos}</h1>
                      <h2>@{user.correo}</h2>
                  </HeaderP>
                  <DescriptionP>
                     .
                  </DescriptionP>
                </PerfilD>
        )
    }

    
}

export default Perfil

const PerfilD = styled.div`
  background: white;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 4px 0 rgb(0 0 0 / 8%), 0 2px 4px 0 rgb(0 0 0 / 12%);
`

const HeaderP = styled.div`
  background: #164188;
  color:white;
  padding: 10px;
  h2,h1{
    color: white;
  }
`

const DescriptionP = styled.div`
  background: white;
  padding: 10px;
`