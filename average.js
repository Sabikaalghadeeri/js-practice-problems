function average(list) {
    if (list.length === 0) {
      return 0
    }
    var sum = 0
    for (let i = 0; i < list.length; i++) {
      sum += list[i]
    }
    return sum / list.length
  }
  
  console.log(average([34, 44, 64, 86, 104]))
  console.log(average([]))