var reloadStyles = function(event){
  var styleSheets = document.querySelectorAll("link[rel='stylesheet']");
  for (var i = styleSheets.length - 1; i >= 0; i--){
    var stylesheet = styleSheets[i];
    var queryString = '?reload=' + new Date().getTime();
    var newHref = stylesheet.attributes.href.value.replace(/\?.*|$/, queryString);
    stylesheet.attributes.href.value = newHref;
  };
};

window.onload = function(){
  setInterval(reloadStyles, 15);
};