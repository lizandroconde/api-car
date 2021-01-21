import { useLazyQuery, useMutation } from "@apollo/client";
import { AUTENTICATE } from "../gql/user";


const loginAuth=()=>{
    //const [getAutenticate] = useLazyQuery(AUTENTICATE);

    let token = JSON.parse(sessionStorage.getItem('auth'));
    async( async ()=>{
        if(token.status){
        let fetchautenticate = await fetch('http://localhost:4000',{
            method: 'POST',
            body: JSON.stringify({  
                query:`
                  {
                    Autenticate(input:{
                        ${token.token}
                      }) 
                  }
                `
            })
        })
        }else{
            console.log('no logueado')
        }

    })()
     
}

export default loginAuth