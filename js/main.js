(function(){
  var root=document.documentElement;
  function isDark(){var t=root.getAttribute('data-theme');if(t)return t==='dark';return !!(window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches)}
  function syncIcon(){var d=isDark();document.getElementById('ico-moon').hidden=d;document.getElementById('ico-sun').hidden=!d}
  try{var saved=localStorage.getItem('yl-theme');if(saved==='dark'||saved==='light')root.setAttribute('data-theme',saved)}catch(e){}
  syncIcon();
  document.getElementById('theme-btn').addEventListener('click',function(){
    var next=isDark()?'light':'dark';root.setAttribute('data-theme',next);syncIcon();
    try{localStorage.setItem('yl-theme',next)}catch(e){}
  });
  try{matchMedia('(prefers-color-scheme: dark)').addEventListener('change',syncIcon)}catch(e){}

  var views=['home','projects','experience','skills'];
  var anchorView={featured:'home',contact:'home','h-solve':'home','h-how':'home','h-exp':'home','p-report':'projects','p-tax':'projects','p-notice':'projects','p-price':'projects','p-game':'projects','p-km':'projects'};
  function show(token,smooth){
    var view=views.indexOf(token)>=0?token:(anchorView[token]||'home');
    document.querySelectorAll('[data-view]').forEach(function(el){el.hidden=el.getAttribute('data-view')!==view});
    document.querySelectorAll('[data-go]').forEach(function(a){
      var g=a.getAttribute('data-go');
      var inMobile=!!a.closest('.mnav'), inMain=!!a.closest('.nav-links');
      if((inMobile||inMain)&&g===view)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');
    });
    var target=anchorView[token]?document.getElementById(token):null;
    if(target){requestAnimationFrame(function(){target.scrollIntoView({behavior:smooth?'smooth':'auto',block:'start'})})}
    else window.scrollTo(0,0);
  }
  document.addEventListener('click',function(e){
    var a=e.target.closest('[data-go]');if(!a)return;
    e.preventDefault();var g=a.getAttribute('data-go');
    try{history.replaceState(null,'','#'+g)}catch(err){}
    show(g,true);
  });
  window.addEventListener('hashchange',function(){show(location.hash.slice(1),true)});
  try{if('scrollRestoration' in history)history.scrollRestoration='manual'}catch(e){}
  (function(){var t=(location.hash||'#home').slice(1);
    if(anchorView[t]){var v=anchorView[t];try{history.replaceState(null,'','#'+v)}catch(e){}t=v}
    show(t,false);window.scrollTo(0,0)})();

  var copied=document.getElementById('copied');
  document.querySelectorAll('.js-copy').forEach(function(btn){btn.addEventListener('click',function(){
    var el=btn.parentElement.querySelector('#mail, .mail-m')||document.getElementById('mail'),t=el.textContent.trim();
    function fallback(){var r=document.createRange();r.selectNodeContents(el);var s=getSelection();s.removeAllRanges();s.addRange(r);copied.textContent='已選取 Email，請按 Ctrl+C 複製'}
    try{navigator.clipboard.writeText(t).then(function(){copied.textContent='已複製 Email';btn.textContent='已複製';setTimeout(function(){btn.textContent='複製'},1800)},fallback)}catch(err){fallback()}
  })});
  document.getElementById('yr').textContent=new Date().getFullYear();
})();
