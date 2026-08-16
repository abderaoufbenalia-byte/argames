/* ARGAMES ad loader — loads ClickAdilla only after dynamic game grids exist. */
(function(){
  const SRC="https://js.wpadmngr.com/static/adManager.js";
  function load(){
    if(window.__ARGAMES_ADMANAGER_LOADED) return;
    window.__ARGAMES_ADMANAGER_LOADED=true;
    const s=document.createElement("script");
    s.async=true; s.src=SRC; s.setAttribute("data-admpid","453249");
    document.body.appendChild(s);
  }
  if(document.getElementById("popularGrid")){
    window.addEventListener("argames:rendered",load,{once:true});
    setTimeout(load,3000);
  }else{
    if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",load,{once:true});
    else load();
  }
})();
