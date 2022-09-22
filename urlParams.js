function urlParams(query) {
    var url = query.split('?')
    if (url.length === 1) {
      return {}
    }
  
    var params = url[1].split('&')
    var obj = {}
    for (var i = 0; i < params.length; i++) {
      var keyVal = params[i].split('=')
      obj[keyVal[0]] = keyVal[1]
    }
    return obj
  }
  
  
  console.log(urlParams("http://google.com/"))
  console.log(urlParams("http://google.com/?q=cats"))
  console.log(urlParams("http://google.com/?q=cats&type=images"))
  console.log(urlParams("http://google.com/?q=cats&type=images&format=gif"))