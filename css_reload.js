var reloadStyles = function(event){
  event.preventDefault();
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

var setup = function(){
  var reload = document.createElement('a');
  reload.setAttribute("id", "reload_stylesheets");
  reload.setAttribute("href", "#");
  reload.style.cssText = "background:rgba(0,0,0,0.5);color:#FFF;display:block;position:absolute;padding:5px;top:0;"
  reload.textContent = "Reload Styles";
  document.body.insertBefore(reload);
};

window.onload = function(){
  setup();
  var reloadButton = document.querySelector("#reload_stylesheets");
  reloadButton.onclick = reloadStyles;
};