/* Typing */
const text = "Frontend Web Developer";
let i = 0;
(function typing(){
  document.querySelector(".typing").innerText = text.slice(0,i++);
  if(i<=text.length) setTimeout(typing,120);
})();

/* Reveal */
window.addEventListener("scroll",()=>{
  document.querySelectorAll(".reveal").forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
});

/* Progress Bar */
window.addEventListener("scroll",()=>{
  const st = document.documentElement.scrollTop;
  const h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  document.getElementById("progress-bar").style.width = (st/h)*100+"%";
});

/* Cursor */
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove",e=>{
  cursor.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
});

/* Scroll Top */
const btn = document.getElementById("scrollTop");
window.addEventListener("scroll",()=>{
  btn.style.display = window.scrollY>400?"block":"none";
});
btn.onclick = ()=>window.scrollTo({top:0,behavior:"smooth"});

/* PARTICLES */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resize(){
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
window.addEventListener("resize",resize);

const count = innerWidth < 768 ? 35 : 70;
const particles = Array.from({length:count},()=>({
  x:Math.random()*canvas.width,
  y:Math.random()*canvas.height,
  r:Math.random()*2+1,
  dx:Math.random()-.5,
  dy:Math.random()-.5
}));

(function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle="#00e5ff";
    ctx.fill();
    p.x+=p.dx; p.y+=p.dy;
    if(p.x<0||p.x>canvas.width) p.dx*=-1;
    if(p.y<0||p.y>canvas.height) p.dy*=-1;
  });
  requestAnimationFrame(animate);
})();
