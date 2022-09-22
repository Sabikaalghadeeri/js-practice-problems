function biggest(list) {
    if (list.length === 0) {
      return undefined
    }
  
    var biggest = list[0]
    for (let i = 0; i < list.length; i++) {
      if (list[i] > biggest) {
        biggest = list[i]
      }
    }
    return biggest
  }
  console.log(biggest([12, 32, 43, 200, 125]))
  console.log(biggest([]))