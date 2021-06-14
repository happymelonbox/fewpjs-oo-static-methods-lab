class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string){
  // found this online but does not lowercase the filler words
  //   let titled = string.split(' ')
  //  .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
  //  .join(' ')
  //  return titled

  //found this online, it lowers more words than the test requires so it needs adapting.
  //Uses RegExp which I had to research as its pretty complicated. Hopefully I will learn more about this soon.
  
  //Assigns variables
  let i, j, str, lowers, uppers;

  //makes the entire string have the first letter uppercase. The \W metacharacter is used to find a non-word character.
  //A word character is a character from a-z, A-Z, 0-9, including the _ (underscore) character.
  /*The \s metacharacter is used to find a whitespace character. So its looking for any each word by looking for elements that 
  have whitespace or non-word characters in there and its replacing it with the same word but with a capitalised first letter.
*/

  str = string.replace(/([^\W_]+[^\s-]*) */g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });

  // Certain minor words should be left lowercase unless 
  // they are the first or last words in the string
  lowers = ['A', 'An', 'The', 'And', 'But', 'Or', 'For', 'Nor', 'As', 'At', 
  'By', 'For', 'From', 'In', 'Into', 'Near', 'Of', 'On', 'Onto', 'To', /*'With' should 
be part of this but the test doesnt recognise it.*/];

/*loops through the excluded elements array (lowers) and replaces any item that has whitespace on either the front side ('\\s'+) or
on the back side (+'\\s') of the iteration of the lowers array. Basically it searches for the element in the string
and changes it to all lower case
*/
  for (i = 0, j = lowers.length; i < j; i++)
    str = str.replace(new RegExp('\\s' + lowers[i] + '\\s', 'g'), 
      function(txt) {
        return txt.toLowerCase();
      });

  // Certain words such as initialisms or acronyms should be left uppercase
  /* This is not required by the test but I left it in for completeness, it does the same as above but changes them to 
  uppercase to ensure they are gramatically correct
  */
  uppers = ['Id', 'Tv'];
  for (i = 0, j = uppers.length; i < j; i++)
    str = str.replace(new RegExp('\\b' + uppers[i] + '\\b', 'g'), 
      uppers[i].toUpperCase());

  return str;
}

}