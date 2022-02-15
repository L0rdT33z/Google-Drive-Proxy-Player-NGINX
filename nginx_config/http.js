
	function ord( string ) {


  var str = string,
    code = str.charCodeAt( 0 );
  if ( 0xD800 <= code && code <= 0xDBFF ) {
    var high = code;
    if ( str.length === 1 ) {
      return code;
    }
    var low = str.charCodeAt( 1 );
    return ( ( high - 0xD800 ) * 0x400 ) + ( low - 0xDC00 ) + 0x10000;
  }
  if ( 0xDC00 <= code && code <= 0xDFFF ) {
    return code;
  }
  return code;
}


function chr( codePt ) {

  if ( codePt > 0xFFFF ) { 
    codePt -= 0x10000;
    return String.fromCharCode( 0xD800 + ( codePt >> 10 ), 0xDC00 + ( codePt & 0x3FF ) );
  }
  return String.fromCharCode( codePt );
}

function HexToString(str1)
 {
	var hex  = str1.toString();
	var str = '';
	for (var n = 0; n < hex.length; n += 2) {
		str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
	}
	return str;
 }
 
 
 function StringToUnicodez(theString) {
  var unicodeString = '';
  for (var i=0; i < theString.length; i++) {
    var theUnicode = theString.charCodeAt(i).toString(16).toUpperCase();
    while (theUnicode.length < 4) {
      theUnicode = '0' + theUnicode;
    }
    theUnicode = '\\u' + theUnicode;
    unicodeString += theUnicode;
  }
  return unicodeString;
}

function unicodeToChar(text) {
   return text.replace(/\\u[\dA-F]{4}/gi, 
          function (match) {
               return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
          });
}
 

function rc4( pwd, data ) {
  var key = [],
      box = [],
      cipher = "",
      pwdLength = pwd.length,
      dataLength = data.length,
      i,
      j,
      k;

  for( i = 0; i < 256; ++i ) {
    key[i] = ord( pwd[ i % pwdLength ] );
    box[i] = i;
  }

  

  for ( j = i = 0; i < 256; ++i ) {
        j = ( j + box[i] + key[i] ) % 256;
        var tm = box[i];
        box[i] = box[j];
        box[j] = tm;
  }

  for ( k = j = i = 0; i < dataLength; ++i ) {
        k = ( k + 1 ) % 256;
        j = ( j + box[k] ) % 256;
        var tmp = box[k];
        box[k] = box[j];
        box[j] = tmp;
        var l = box[( ( box[k] + box[j] ) % 256 ) ];
        cipher += chr( ord( data[i] ) ^ l );
  }

  return cipher;

}

function replaceAll(string, search, replace) {
  return string.split(search).join(replace);
}

 
function urldecode(str) {
	
    return decodeURIComponent(str);
}

function encodez(r) {
	return StringToUnicodez(rc4("xx0x",replaceAll(r.args.url,"!","&")));
}


function decodez(r) {
	 return rc4("xx0x",unicodeToChar(replaceAll(r.args.video,"!",'\\u00')));
}

export default {decodez,encodez};