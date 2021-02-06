import gql from "graphql-tag";

export const ALL_SERVICE = gql`
    mutation AllService($iv: String, $content: String){
        NotificacionsClient(input:{iv: $iv, content: $content}){
            cliente
            _id
            fecha
            cliente
        }
    }

`

export const CREATE_SERVICE = gql`
    mutation createService($cliente:TokenInput,$titulo:String,$precio:Float,$descripcion:NotificacionDescripcion,$empieza:NotificacionUbicacion,$termina:NotificacionUbicacion){
        createNotificacion(input:{
            cliente: $cliente, 
            precio: $precio,
            titulo: $titulo,
            descripcion: $descripcion,
            empieza: $empieza,
            termina: $termina
        })
    }
`


