// Standalone preview only. WordPress uses the active theme's own menu behavior.
(() => {
  document.querySelectorAll('#page-header .menu-item-has-children > a').forEach(link => {
    if (!link.hasAttribute('href')) link.href = '#';
    link.addEventListener('click', event => {
      if (link.getAttribute('href') !== '#') return;
      event.preventDefault();
      const menu = link.parentElement.querySelector('.sub-menu');
      if (menu) {
        const open = link.parentElement.classList.contains('active');
        document.querySelectorAll('#page-header .menu-item-has-children.active').forEach(item => { item.classList.remove('active'); item.querySelector('a').setAttribute('aria-expanded','false'); });
        link.parentElement.classList.toggle('active', !open);
        link.setAttribute('aria-expanded',String(!open));
      }
    });
  });
  document.addEventListener('keydown',event=>{if(event.key==='Escape')document.querySelectorAll('#page-header .menu-item-has-children.active').forEach(item=>item.classList.remove('active'));});
  const hamburger = document.querySelector('#hamburger');
  if (hamburger) hamburger.addEventListener('click', () => {
    let dialog = document.querySelector('#preview-mobile-menu');
    if (!dialog) {
      dialog = document.createElement('dialog'); dialog.id = 'preview-mobile-menu';
      dialog.style.cssText='background:#090b16;color:white;border:0;padding:32px;width:100%;height:100%;max-width:100%;max-height:100%;margin:0';
      dialog.innerHTML='<button type="button" style="font-size:28px;background:transparent;color:white;border:0;float:right" aria-label="Закрыть меню">×</button><nav style="display:flex;flex-direction:column;gap:24px"><a href="#ssba-main">SmartShell Business</a><a href="https://smartshell.gg/smartgamer/">SmartGamer</a><a href="https://smartshell.gg/smartkiosk/">SmartKiosk</a><a href="https://smartshell.gg/price/">Тарифы</a></nav>';
      dialog.querySelector('button').onclick = () => dialog.close();
      dialog.querySelectorAll('a').forEach(a => a.onclick=()=>dialog.close());
      document.body.appendChild(dialog);
    }
    dialog.showModal();
  });
})();
