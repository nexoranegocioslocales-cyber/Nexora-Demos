const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.site-nav');

// Identidad visual oficial de Sabor Para Bailar.
const brandMark=document.querySelector('.brand-mark');
if(brandMark){
  brandMark.textContent='';
  brandMark.style.background="url('assets/images/logo-cafe.webp') center/cover no-repeat";
  brandMark.style.borderRadius='10px';
  brandMark.style.border='1px solid rgba(255,255,255,.08)';
}
const heroMedia=document.querySelector('.hero-media');
if(heroMedia){
  heroMedia.style.backgroundImage="url('assets/images/logo-completo.webp')";
  heroMedia.style.backgroundPosition='center';
  heroMedia.style.backgroundSize='cover';
  heroMedia.style.backgroundRepeat='no-repeat';
}

menuToggle?.addEventListener('click',()=>{
  const open=nav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded',String(open));
});

nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  nav.classList.remove('is-open');
  menuToggle?.setAttribute('aria-expanded','false');
}));

document.querySelectorAll('.menu-tab').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.menu-tab').forEach(b=>b.classList.remove('is-active'));
  document.querySelectorAll('.menu-panel').forEach(p=>p.classList.remove('is-active'));
  btn.classList.add('is-active');
  document.getElementById(btn.dataset.menu)?.classList.add('is-active');
}));

const reason=document.getElementById('reason');
const conditionals=[...document.querySelectorAll('.conditional')];
function syncConditional(){
  const value=reason?.value||'';
  conditionals.forEach(el=>{
    const show=(el.dataset.showFor||'').split(' ').includes(value);
    el.classList.toggle('is-visible',show);
    el.querySelectorAll('input').forEach(input=>input.required=show);
  });
}
reason?.addEventListener('change',syncConditional);
syncConditional();

const form=document.getElementById('contact-form');
form?.addEventListener('submit',e=>{
  if(form.action.includes('PENDIENTE-DE-CONFIRMAR-EMAIL')){
    e.preventDefault();
    alert('El formulario está preparado, pero falta confirmar el email receptor del establecimiento antes de activarlo.');
  }
});

const io=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){
    entry.target.classList.add('is-visible');
    io.unobserve(entry.target);
  }
}),{threshold:.14});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

const lightbox=document.getElementById('lightbox');
document.querySelectorAll('[data-lightbox]').forEach(btn=>btn.addEventListener('click',()=>{
  lightbox.querySelector('img').src=btn.dataset.lightbox;
  lightbox.showModal();
}));
lightbox?.querySelector('.lightbox-close')?.addEventListener('click',()=>lightbox.close());
lightbox?.addEventListener('click',e=>{if(e.target===lightbox)lightbox.close();});

const legalDialog=document.getElementById('legal-dialog');
const legalTitle=document.getElementById('legal-title');
const legalCopy=document.getElementById('legal-copy');
const legal={
  aviso:['Aviso legal','Datos identificativos del titular: [PENDIENTE DE CONFIRMAR]. Antes de la publicación definitiva deben incorporarse los datos legales facilitados por el cliente.'],
  privacidad:['Privacidad','Responsable del tratamiento: [PENDIENTE DE CONFIRMAR]. La información legal debe completarse con los datos facilitados por el titular antes de activar el formulario.'],
  cookies:['Cookies','Esta versión no instala cookies publicitarias propias. Los servicios externos incrustados pueden aplicar sus propias tecnologías. La configuración definitiva debe revisarse antes de la publicación.']
};

document.querySelectorAll('[data-legal]').forEach(a=>a.addEventListener('click',e=>{
  e.preventDefault();
  const item=legal[a.dataset.legal];
  legalTitle.textContent=item[0];
  legalCopy.textContent=item[1];
  legalDialog.showModal();
}));
legalDialog?.querySelector('.lightbox-close')?.addEventListener('click',()=>legalDialog.close());
