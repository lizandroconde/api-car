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
    mutation createService($cliente:TokenInput,$titulo:String,$precio:Float,$descripcion:NotificacionDescripcion,$empieza:NotificacionUbicacion,$termina:NotificacionUbicacion,$servicio: String){
        createNotificacion(input:{
            cliente: $cliente, 
            precio: $precio,
            titulo: $titulo,
            descripcion: $descripcion,
            empieza: $empieza,
            termina: $termina,
            servicio: $servicio
        })
    }
`


export const ALL_SERVICES = gql`
    query getAllServices{
        Notificacions{
            _id
            titulo
            fecha
            descripcion{
                detalles
                modelo
                marca
                asientos
                anio
            }
            precio
            empieza{
            direccion
            }
            termina{
            direccion
            }
            servicio
            subasta{
            comentario
            
            }
        } 
    }
 `

 export const POST_SUBASTA = gql`
 mutation createSubastas($notificacion: String, $input: SubastaNotificacion, $usuario: TokenInput){
    createSubasta(notificacion: $notificacion,input:$input,usuario:$usuario)
  }
 `

 export const POST_DELETE_SUBASTA = gql`
  mutation deletesubasta($notificacion: String, $subasta: String){
      DeleteSubasta(notificacion: $notificacion,subasta: $subasta)
  }
 `

 