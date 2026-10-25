// Copiar código
document.querySelectorAll("pre").forEach(p=>{const b=document.createElement("button");b.className="copy";b.textContent="Copiar";b.onclick=()=>{navigator.clipboard.writeText(p.innerText.replace(/^Copiar\n?/,"")).then(()=>{b.textContent="¡Copiado!";setTimeout(()=>b.textContent="Copiar",1500)})};p.append(b)});
// Aviso obligatorio: hay que marcarlo y aceptarlo para seguir (se vuelve a mostrar en cada visita nueva)
const g=document.getElementById("gate"),ck=document.getElementById("ck"),go=document.getElementById("go");let seen=false;
try{seen=sessionStorage.getItem("sb-env-ok")==="1"}catch(e){}
if(!seen){g.classList.add("on");document.body.style.overflow="hidden"}
ck.onchange=()=>go.disabled=!ck.checked;
go.onclick=()=>{try{sessionStorage.setItem("sb-env-ok","1")}catch(e){}g.classList.remove("on");document.body.style.overflow="";location.hash="#paso0"};
document.querySelectorAll("[data-gate]").forEach(a=>a.onclick=e=>{e.preventDefault();ck.checked=false;go.disabled=true;g.classList.add("on")});
