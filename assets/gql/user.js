import gql from "graphql-tag";

export const LOGIN = gql`
    mutation Loginuser($username: String, $password: String){
        Login(input:{correo: $username, contrasenia: $password}){
            token{
                iv
                content
            },
            status
        }
    }
`


export const AUTENTICATE = gql`
    query Autenticateuser($iv: String, $content: String){
        Autenticate(input:{iv:$iv,content:$content})
    }
`