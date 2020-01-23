const format = (everything) => {
  var obj = everything.reduce((total, x, i) => {
    if (total[x.id]) {
      if (total[x.id].timestamp < x.timestamp) {
        // If the id was already recorded and the timestamp is more recent, replace with newer value
        
        // Check that distance exists in new one, if it doesn't, add it from previous
        if (!x.distance) {
          x.distance = total[x.id].distance
        }
        
        total[x.id]['history'] =
          total[x.id]['history']
          ? [...total[x.id]['history'], x]
          : [x]
        total[x.id] = x
      } else {
        // Otherwise, add to past places
        total[x.id]['history'] =
          total[x.id]['history']
          ? [...total[x.id]['history'], x]
          : [x]
      }
    } else {
      console.log('id doesn\'t exist yet')
      // If the id doesn't exist, create it. 
      total[x.id] = x
    }

    console.log(total)
    return total
  }, {})
  
  return Object.values(obj)
}

export default format
