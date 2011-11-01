var reloadStyles = function(event){
  var styleSheets = document.querySelectorAll("link[rel='stylesheet']");
  for (var i = styleSheets.length - 1; i >= 0; i--){
    // Remove stylesheets first
    var style = styleSheets[i];
    var head = document.querySelector("head");
    head.removeChild(style);
    
    // Add them back in
    var stylesheet = document.createElement('link');
    var queryString = '?reload=' + new Date().getTime();
    newHref = style.attributes.href.value.replace(/\?.*|$/, queryString);
    stylesheet.setAttribute('href', newHref);
    stylesheet.setAttribute('rel', style.rel);
    stylesheet.setAttribute('type', style.type);
    stylesheet.setAttribute('media', style.media);
    head.appendChild(stylesheet);
  };
};

window.onload = function(){
  setInterval(reloadStyles, 500);
};