import React from 'react'
import { GoogleMap,withScriptjs,withGoogleMap, Marker } from 'react-google-maps'

const Map = (prosp) =>{
    return(
        <GoogleMap
    defaultZoom={20}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <Marker
      position={{ lat: -34.397, lng: 150.644 }}
    />
  </GoogleMap>
    )
}

export default withScriptjs(
    withGoogleMap(
        Map
    )
)