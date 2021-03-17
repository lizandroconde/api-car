import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import styled from "styled-components";
import Loading from "../../components/box/loading";
import { Container } from "../../components/container";
import Headers from "../../components/header";



const TemplateAuth = (props) =>{
const router = useRouter();
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(false);
   const [auth, setAuth] = useState(true);
   const [user, setUser] = useState();

    useEffect(() => {
        let token = JSON.parse(sessionStorage.getItem('auth'));
        ( async ()=>{
            if(token){
            let fetchautenticate = await fetch('http://localhost:4000',{
                method: 'POST',
                headers: { "Content-Type": "application/json" ,"Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNjA2MzE4Nzc1fQ.S7dBrv3ZP8knJlRJYvineuMBucuoO7uNC7o1wMfBrDM` },
                body: JSON.stringify({  
                    query:`
                    {
                        AutenticateC(input:
                        {
                            iv: "${token.token.iv}",
                            content: "${token.token.content}"
                        }
                        ){
                            status
                            user
                        }
                    }
                    `
                })
                
            })
            
            let data = await fetchautenticate.json()
            try {
                if(data.data){
                    let {AutenticateC} = data.data
                    if(AutenticateC.status){
                        setUser(AutenticateC.user)
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

    })()


      },[]);

    if(auth == false){
        router.push("/login");
    }
      
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
            <Main>
            <Headers user={user} />
            {props.children}
            <FDevelopers>
                <Container>
                Desarrollado por Grupo <strong>Nexttime</strong>
                </Container>
            </FDevelopers>
            </Main>
          
      )
    }

    
}


export default TemplateAuth

const Main = styled.div`
    position: relative;
    height: 100%;
`

const FDevelopers = styled.div`
    position: sticky;
    background:#001529;
    bottom: 0;
    padding: 10px;
    text-align: center;
    width: 100%;
    color: white;
`