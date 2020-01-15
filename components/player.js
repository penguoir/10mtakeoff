import React from 'react'
import randomcolor from 'randomcolor'

const Player = ({ id, timestamp }) => (
  <div style={{
    borderRadius: '99999px',
    height: '10px',
    width: '10px',
    backgroundColor: randomcolor({ seed: id }) }}>
      
  </div>
)

export default Player