const $siteList=$(".siteList"),$lastLi=$siteList.find("li.last"),x=localStorage.getItem("x"),xObject=JSON.parse(x),hashMap=xObject||[{logo:"A",url:"https://www.acfun.cn"},{logo:"B",url:"https://www.bilibili.com"}],simplifyUrl=s=>s.replace("https://","").replace("http://","").replace("www.","").replace(/\/.*/,""),render=()=>{$siteList.find("li:not(.last)").remove(),hashMap.forEach(((s,e)=>{const l=$(`<li>\n      <div class="site">\n        <div class="logo">${s.logo}</div>\n        <div class="link">${simplifyUrl(s.url)}</div>\n        <div class="close">\n          <svg class="icon">\n            <use xlink:href="#icon-close"></use>\n          </svg>\n        </div>\n      </div>\n    </li>`).insertBefore($lastLi);l.on("click",(()=>{window.open(s.url)})),l.on("click",".close",(s=>{s.stopPropagation(),hashMap.splice(e,1),render()}))}))};render(),$(".addButton").on("click",(()=>{let s=window.prompt("请问你要添加的网址是啥？");0!==s.indexOf("http")&&(s="https://"+s),console.log(s),hashMap.push({logo:simplifyUrl(s)[0].toUpperCase(),url:s}),render()})),window.onbeforeunload=()=>{const s=JSON.stringify(hashMap);localStorage.setItem("x",s)},$(document).on("keypress",(s=>{const{key:e}=s;for(let s=0;s<hashMap.length;s++)hashMap[s].logo.toLowerCase()===e&&window.open(hashMap[s].url)}));
//# sourceMappingURL=index.b1482587.js.map
