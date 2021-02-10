import gql from "graphql-tag";

export const LOGIN_CLIENT = gql`
    mutation LoginClient($username: String, $password: String){
        LoginC(input:{correo: $username, contrasenia: $password}){
            token{
                iv
                content
            },
            status
        }
    }
`


export const AUTENTICATE_CLIENT = gql`
    query Autenticateclient($iv: String, $content: String){
        AutenticateC(input:{iv:$iv,content:$content})
    }
`

export const VERIFI_CLIENT = gql`
    mutation VerificarClient($correo: String){
        VerificaClient(correo:$correo)
    }
`

export const NEW_CLIENT = gql`
    mutation createNewClient($name: String,$surname: String,$username: String,$password: String){
        crearCliente(input:{correo:$username,nombre:$name,contrasenia:$password,apellidos: $surname})
    }
`


