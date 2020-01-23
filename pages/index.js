import React from 'react'
import Head from 'next/head'
import * as firebase from 'firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'

import Map from '../components/map'
import PlayerCard from '../components/playercard'
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

export default () => {
  const [values, loading, error] = useCollectionData(
    firebase.firestore().collection('coords').orderBy('distance', 'desc').limit(10000),
    { idField: '_' }
  )

  return (<>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
    </Head>
    <div style={{width:'100%', maxHeight:'100vh', display:'flex'}}>
      <div style={{height: '100vh', width:'70vw', display:'inline-block'}}>
        <Map />
      </div>
      <div style={{height: '100vh',  width:'28vw', display:'inline-block', boxSizing:'border-box', maxHeight:'100vh', overflow:'scroll'}}>
        {
          values && format(values).map((x, i) =>
             x.distance && <PlayerCard key={i} id={x.id} distance={x.distance} />
          )
        }
      </div>
    </div>
  </>)
}
