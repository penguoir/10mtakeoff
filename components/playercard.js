import React from 'react'
import randomcolor from 'randomcolor'

const PlayerCard = ({ id, distance }) => (
  <div style={{margin: '1rem', padding: '12px 16px', borderRadius: '2px', boxShadow: '1px 1px 10px 5px rgba(0, 0, 0, 0.1)', flexGrow: '1', borderTop:`3px solid ${randomcolor({ seed: id })}`, fontFamily:'monospace'}}>
    <p><b>{id}</b></p>
    <p>Distance: {distance && distance.toFixed(2)}m</p>
  </div>
)

export default PlayerCard
