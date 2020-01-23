import React, { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import * as firebase from 'firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'

import Player from '../components/player'
import format from '../modules/format'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBol24r77-dCWITDh6tc3f-wwEEH2oDL0Y",
    authDomain: "kingalfredschool-10mtakeoff.firebaseapp.com",
    databaseURL: "https://kingalfredschool-10mtakeoff.firebaseio.com",
    projectId: "kingalfredschool-10mtakeoff",
    storageBucket: "kingalfredschool-10mtakeoff.appspot.com",
    messagingSenderId: "716459149474",
    appId: "1:716459149474:web:011b23245bf8f66466effb"
  })
}

const Map = () => {
  const [values, loading, error] = useCollectionData(
    firebase.firestore().collection('coords').orderBy('timestamp', 'desc').limit(10000),
    { idField: '_' }
  )

  return (
    <>
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{key:'AIzaSyD5kP6pc09w-kkIgz6QLQQe0QJ_Q8Rc4SE'}}
          defaultCenter={[51.56921275222058, -0.18460410871025212]}
          defaultZoom={15}
        >
          {
            values && format(values).map((x, i) => 
              <Player key={i} lat={x.coords.lat} lng={x.coords.lng} id={x.id} />
            )
          }
        </GoogleMapReact>
      </div>
    </>
  )
}

export default Map
