function emoji_encode(data) {
if (data) {
var str = data;
var highsurrogate = 0;
var suppCP;
var pad;

  var outputString = '';
  for (var i = 0; i < str.length; i++) {
    var cc = str.charCodeAt(i); 
    if (cc < 0 || cc > 0xFFFF) {
      outputString += '!Error in convertCharStr2UTF16: unexpected charCodeAt result, cc=' + cc + '!';
      }
    if (highsurrogate != 0) { // this is a supp char, and cc contains the low surrogate
      if (0xDC00 <= cc && cc <= 0xDFFF) {
        suppCP = 0x10000 + ((highsurrogate - 0xD800) << 10) + (cc - 0xDC00); 
          suppCP -= 0x10000; 
          outputString += '\\u'+ $scope.dec2hex4(0xD800 | (suppCP >> 10)) +'\\u'+ $scope.dec2hex4(0xDC00 | (suppCP & 0x3FF));
        highsurrogate = 0;
        continue;
        }
      else {
        outputString += 'Error in convertCharStr2UTF16: low surrogate expected, cc=' + cc + '!';
        highsurrogate = 0;
        }
      }
    if (0xD800 <= cc && cc <= 0xDBFF) { // start of supplementary character
      highsurrogate = cc;
      }
    else { 
      switch (cc) {
        case 0: outputString += '\\0'; break;
        case 8: outputString += '\\b'; break;
        case 9: outputString += '\\t'; break;
        case 10: outputString += '\\n'; break;
        case 13: outputString += '\\r'; break;
        case 11: outputString += '\\v'; break;
        case 12: outputString += '\\f'; break;
        case 34: outputString += '\\\"'; break;
        case 39: outputString += "\\\'"; break;
        case 92: outputString += '\\\\'; break;
        default: 
          if (cc > 0x1f && cc < 0x7F) { 
            outputString += String.fromCharCode(cc)
            }
          else { 
            pad = cc.toString(16).toUpperCase();
            while (pad.length < 4) { pad = '0'+pad; }
            outputString += '\\u'+pad 
            }
        }
      }
    }
var outputString= outputString.replace(/\\"/g, " ").replace(/\\'/g, " ");
  return outputString;
}
 
};

function emoji_decode(str) {
if (str) {
var decoded = str
  .replace(/\\n/g, " ")
  .replace(/\\u(....)/g, function(match, p1) { return String.fromCharCode(parseInt(p1, 16))})
  .replace(/\\(\d{3})/g, function(match, p1) { return String.fromCharCode(parseInt(p1,  8))}).replace(/\\/g, " ")
return decoded; 
}  
};
