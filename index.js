class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string){
    let split = string.split(' ')
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    split[0].charAt(0).toUpperCase()
    for (let value of split){
      for (let val of exceptions){
        if (value !== val){
          return value.charAt(0).toUpperCase()
        }
      }
    }
    return split.join(',')
  }
}