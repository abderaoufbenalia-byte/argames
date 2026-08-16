(() => {
 const origin=window.location.origin;
 const setMeta=(name,content)=>{let e=document.querySelector(`meta[name="${name}"]`);if(!e){e=document.createElement("meta");e.name=name;document.head.appendChild(e)}e.content=content};
 const setProp=(prop,content)=>{let e=document.querySelector(`meta[property="${prop}"]`);if(!e){e=document.createElement("meta");e.setAttribute("property",prop);document.head.appendChild(e)}e.content=content};
 const canonical=origin+window.location.pathname;
 let c=document.querySelector('link[rel="canonical"]'); if(c)c.href=canonical;
 setProp('og:url',canonical); setProp('og:image',origin+'/assets/argames-horizontal.png');
 setMeta('twitter:image',origin+'/assets/argames-horizontal.png');
 const schema=document.getElementById('site-schema'); if(schema){try{const x=JSON.parse(schema.textContent);x.url=canonical;x.potentialAction.target.urlTemplate=canonical+'?q={search_term_string}';schema.textContent=JSON.stringify(x)}catch(e){}}
})();