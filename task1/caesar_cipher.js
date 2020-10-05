module.exports = function caesar_cipher(text, action, shift) {
  console.log('\n');
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  if (action === 'encode') {
    let result = ''
    text.split('').forEach(c => {
      const ind = alphabet.indexOf(c);


      if (ind !== -1 && ind < 26) {
        if ((ind + shift) >= 26){
          result = result.concat(alphabet[(ind + shift) - 26])
        } else {
          result = result.concat(alphabet[ind+ shift]);
        }

      } else if (ind !== -1 && ind > 25) {
        if ((ind + shift) >= alphabet.length ){
          result = result.concat( alphabet[(ind + shift) - 26])
        } else {
          result = result.concat(alphabet[ind+ shift]);
        }
      } else {
        result = result.concat(c);
      }
    });
    return result;
  }


  if (action === 'decode') {
    shift = 0 - shift;
    let result = ''
    text.split('').forEach(c => {
      const ind = alphabet.indexOf(c);
      if (ind !== -1 && ind < 26) {
        if (c === 'a') { console.log(ind + shift);}
        if ((ind + shift) <= 0){
          result = result.concat( alphabet[(ind + shift)+ 26])
        } else {
          result = result.concat(alphabet[ind+ shift]);
        }

      } else if (ind !== -1 && ind >= 26) {
        // if (c === 'a') { console.log('a');}
        if ((ind + shift) <= 25 ){
          result = result.concat( alphabet[(ind + shift) + 26])
        } else {
          result = result.concat(alphabet[ind+ shift]);
        }
      } else {
        result = result.concat(c);
      }
    });
    return result;
  }
}
