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
