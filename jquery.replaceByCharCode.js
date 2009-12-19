if (document.getElementById('hello')) { 
var stringly = '23²*23'; 
var newStringly = $.replaceByCharCode(stringly); 
  document.getElementById('hello').innerHTML = stringly.charCodeAt(0); 
  document.getElementById('hello').innerHTML += newStringly; 
} 
 
 
(function($){ 
jQuery.replaceByCharCode = function(theString){  
    var splitString = theString.split(''); 
    for(var i=0, ii=splitString.length;i<ii;i++){ 
      var charcode = splitString[i].charCodeAt(0); 
      if(charcode == 178){ 
        splitString[i] = "@2"; 
      } 
    } 
    return splitString.join(''); 
  }; 
})(jQuery);