// Nút và hiệu ứng thank you
const btn = document.getElementById('confirm-btn');
const thank = document.getElementById('thank-you-msg');

btn.addEventListener('click', function() {
  btn.classList.add('activated');
  setTimeout(() => {
    btn.style.display = 'none';
    thank.classList.add('active');
    thank.style.display = 'block';
    launchConfetti();
  }, 450);
});

// Confetti animation
function launchConfetti() {
  const colors = ['#6366f1', '#facc15', '#38bdf8', '#f472b6', '#4ade80', '#f87171'];
  const confetti = document.createElement('div');
  confetti.className = 'confetti';
  document.body.appendChild(confetti);

  for(let i=0;i<36;i++) {
    let span = document.createElement('span');
    let color = colors[Math.floor(Math.random()*colors.length)];
    span.style.background = color;
    span.style.left = (Math.random()*100) + 'vw';
    span.style.top = '-4vh';
    const fall = 54 + Math.random()*22;
    const rot = -40 + Math.random()*80;
    span.style.transform = `rotate(${rot}deg)`;
    span.style.opacity = 0.7 + Math.random()*0.3;
    span.animate([
      {top: '-4vh', opacity: 1},
      {top: fall + 'vh', opacity: 0.85, transform: `rotate(${rot+60}deg)`},
      {top: (fall+18) + 'vh', opacity: 0}
    ], {
      duration: 1620 + Math.random()*850,
      easing: 'cubic-bezier(.4,1.6,.2,.87)',
      fill: 'forwards',
      delay: Math.random()*190
    });
    confetti.appendChild(span);
  }
  setTimeout(()=>{ confetti.remove(); }, 2400);
}

// Countdown timer
document.addEventListener("DOMContentLoaded", function () {
  // Countdown setup
  const targetDate = new Date('2025-06-28T09:00:00+07:00'); // Giờ Việt Nam UTC+7
  const elDay = document.getElementById('count-days');
  const elHour = document.getElementById('count-hours');
  const elMin = document.getElementById('count-mins');
  const elSec = document.getElementById('count-secs');

  function pad(num) {
    return num < 10 ? '0' + num : '' + num;
  }
  let lastValues = [null, null, null, null];
  function tickCountdown() {
    const now = new Date();
    let remain = Math.max(0, targetDate - now);
    let s = Math.floor(remain/1000);
    let d = Math.floor(s/86400); s -= d*86400;
    let h = Math.floor(s/3600); s -= h*3600;
    let m = Math.floor(s/60); s -= m*60;
    let arr = [d, h, m, s];
    [elDay, elHour, elMin, elSec].forEach(function(el, i){
      if (el.innerText !== pad(arr[i])) {
        el.classList.remove('tick');
        void el.offsetWidth; // trigger reflow
        el.innerText = pad(arr[i]);
        el.classList.add('tick');
      }
    });
  }
  setInterval(tickCountdown, 950);
  tickCountdown();

  // Thêm hiệu ứng confetti nhỏ liên tục:
  setInterval(()=>{
    launchConfettiFloating();
  }, 4800);
});

// Animation số countdown
const cssTick = document.createElement('style');
cssTick.innerHTML = `.tick { animation: numPop 0.32s cubic-bezier(.46,1.4,.48,1); }
@keyframes numPop { 0%{transform:scale(1.15);color:#818cf8;box-shadow:0 0 0 0 #818cf822;} 80%{transform:scale(0.93);} 100%{transform:scale(1);color:inherit;} }`;
document.head.appendChild(cssTick);

// Confetti nhẹ lơ lửng nền trên cùng
function launchConfettiFloating() {
  const colors = ['#6366f199', '#facc1588', '#38bdf888', '#f472b688', '#4ade8088', '#f8717188'];
  const confetti = document.createElement('div');
  confetti.className = 'confetti';
  document.body.appendChild(confetti);
  const amount = Math.random()>0.5 ? 8: 5;
  for(let i=0;i<amount;i++) {
    let span = document.createElement('span');
    let color = colors[Math.floor(Math.random()*colors.length)];
    span.style.background = color;
    span.style.left = (12+Math.random()*76) + 'vw';
    span.style.top = '-3vh';
    span.style.opacity = 0.33+Math.random()*0.29;
    const fall = 19 + Math.random()*22;
    const rot = Math.random()*90;
    span.style.transform = `rotate(${rot}deg)`;
    span.animate([
      {top: '-3vh', opacity: 1},
      {top: (fall)+'vh', opacity: .88, transform: `rotate(${rot+40}deg)` },
      {top: (fall+4)+'vh',opacity: 0.1}
    ], {
      duration: 2200 + Math.random()*2200,
      easing: 'cubic-bezier(.7,.11,.18,.97)',
      fill: 'forwards',
      delay: Math.random()*1800+
        (Math.sign(Math.random()-0.5)==1?300:0)
    });
    confetti.appendChild(span);
  }
  setTimeout(()=>{ confetti.remove(); }, 4490);
}
