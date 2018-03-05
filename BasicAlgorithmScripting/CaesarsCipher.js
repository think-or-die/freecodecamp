/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
Thus 'A' ↔ 'N', 'B' ↔  'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), 
but do pass them on.
*/

function rot13(str) { // LBH QVQ VG!
  var decoded = "";
  for(var x=0; x<str.length; x++) {
    var code = str.charCodeAt(x);
    if (code < 65 || code > 90) decoded += String.fromCharCode(code);
    else if (code < 78) decoded += String.fromCharCode(code + 13);
    else decoded += String.fromCharCode(code - 13);
  }
  return decoded;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
