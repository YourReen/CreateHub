function copyIP(){
  const ip = 'play.createhub.ru';
  navigator.clipboard.writeText(ip).then(()=>{
    const hint = document.getElementById('ip-hint');
    if(hint){
      const old = hint.textContent;
      hint.textContent = 'скопировано!';
      setTimeout(()=>hint.textContent=old,1500);
    } else {
      alert('IP скопирован: ' + ip);
    }
  }).catch(()=>{
    alert('IP сервера: ' + ip);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const menu = document.getElementById('menu');
  if(burger && menu){
    burger.addEventListener('click', (e)=>{
      e.stopPropagation();
      menu.classList.toggle('open');
    });
    document.addEventListener('click',(e)=>{
      if(!menu.contains(e.target) && !burger.contains(e.target)){
        menu.classList.remove('open');
      }
    });
  }

  document.querySelectorAll('.faq-q').forEach(q=>{
    q.addEventListener('click',()=>{
      const item = q.parentElement;
      const a = item.querySelector('.faq-a');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i=>{
        i.classList.remove('open');
        const inner = i.querySelector('.faq-a');
        if(inner) inner.style.maxHeight = null;
      });
      if(!isOpen){
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });
});
