const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    let result = [];
    for (let i = 0; i < letters[0].length; i ++){
      result.push([]);
    }
  
    for (let row = 0; row < letters.length; row++) {
      for (let col = 0; col < letters[row].length; col++) {
        result[col][row] = letters[row][col];
      }
    }

    const verticalJoin = letters.map(ls => ls.join('')) 
    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }
    return false;
    
}

module.exports = wordSearch
