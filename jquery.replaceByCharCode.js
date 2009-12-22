;(function($){
  jQuery.replaceByCharCode=function(n){
    var split_n = n.split('');
    for(var i=0, ii=split_n.length;i<ii;i++){
      var charCode = split_n[i].charCodeAt(0);
      if(jQuery.replaceByCharCode.replaceBy[charCode]){
        split_n[i] = jQuery.replaceByCharCode.replaceBy[charCode];
      }
    }
  
    return split_n.join('');
  };
  
  jQuery.replaceByCharCode.replaceBy = {
    178: "@2",
    106: "--",
    107: "--"
  };
})(jQuery);