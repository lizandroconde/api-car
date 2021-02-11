import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import Headers from "../../components/header";



const TemplateAuth = (props) =>{
const router = useRouter();
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(false);
   const [auth, setAuth] = useState(true);

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
                        ) 
                    }
                    `
                })
                
            })
            
            let data = await fetchautenticate.json()
            try {
                if(data.data){
                    let {AutenticateC} = data.data
                    if(AutenticateC){
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
            <h1>Loadding</h1>
        )
    }

    if(error){
        return(
            <h1>error</h1>
        )
    }

    if(error == false && loading == false){
        return(
            <>
            <Headers user={}/>
            {props.children}
            </>
          
      )
    }

    
}


export default TemplateAuth