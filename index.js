class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string){
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    string.charAt(0).toUpperCase()
    let splitsy = string.split(' ')
    console.log(splitsy)
    splitsy.join()
    console.log(splitsy)
  }
  }
