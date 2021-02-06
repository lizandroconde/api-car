import { useLazyQuery, useMutation } from "@apollo/client";
import { AUTENTICATE } from "../gql/user";


const loginAuth=()=>{
    //const [getAutenticate] = useLazyQuery(AUTENTICATE);

    let token = JSON.parse(sessionStorage.getItem('auth'));
    ( async ()=>{
        if(token){
        let fetchautenticate = await fetch('http://192.168.1.3:4000',{
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
        
        let data = await fetchautenticate

        console.log(data)
        }else{
            console.log('no logueado')
        }

    })()
     
}

export default loginAuth