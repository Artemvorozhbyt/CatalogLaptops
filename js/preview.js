(function () {
  var canvas = document.getElementById("xCanvas");
  if (!canvas) return;

  var ctx = canvas.getContext("2d");
  var W;
  var H;
  var pts = [];

  function resize() {
    var sec = canvas.parentElement;
    W = canvas.width = sec.offsetWidth || 1200;
    H = canvas.height = sec.offsetHeight || 800;
  }

  function initPts() {
    pts = [];
    var n = Math.floor((W * H) / 9000);
    for (var i = 0; i < n; i++) {
      pts.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.7 + 0.4,
        op: Math.random() * 0.45 + 0.12,
      });
    }
  }

  resize();
  initPts();

  window.addEventListener(
    "resize",
    function () {
      resize();
      initPts();
    },
    { passive: true },
  );

  var mx = -999;
  var my = -999;
  document.addEventListener(
    "mousemove",
    function (e) {
      mx = e.clientX;
      my = e.clientY;
    },
    { passive: true },
  );

  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = "#05050f";
    ctx.fillRect(0, 0, W, H);

    var g = ctx.createRadialGradient(W * 0.52, H * 0.38, 0, W * 0.52, H * 0.38, H * 0.65);
    g.addColorStop(0, "rgba(38,14,96,.24)");
    g.addColorStop(1, "rgba(5,5,15,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);

    for (var i = 0; i < pts.length; i++) {
      var p = pts[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;

      var dd = Math.hypot(p.x - mx, p.y - my);
      var op2 = dd < 150 ? p.op + (1 - dd / 150) * 0.6 : p.op;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(175,148,255," + op2 + ")";
      ctx.fill();

      for (var j = i + 1; j < pts.length; j++) {
        var q = pts[j];
        var d2 = Math.hypot(p.x - q.x, p.y - q.y);
        if (d2 < 100) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = "rgba(124,58,237," + (1 - d2 / 100) * 0.13 + ")";
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }
  draw();

  function counter(id, target, suf, delay) {
    var n = 0;
    setTimeout(function () {
      var el = document.getElementById(id);
      var t = setInterval(function () {
        n = Math.min(n + 2, target);
        if (el) el.innerHTML = n + "<em>" + suf + "</em>";
        if (n >= target) clearInterval(t);
      }, 30);
    }, delay);
  }
  counter("xCnt", 55, "+", 400);
  counter("xSat", 98, "%", 600);

  var phrases = ["Legion 5 Ryzen 7...", "MacBook Air M3...", "ThinkPad i7 16GB...", "ROG Strix RTX...", "HP Spectre x360..."];
  var pi = 0;
  var ci = 0;
  var deleting = false;
  var inp = document.getElementById("xSearchInput");

  window.setPreviewSearchPhrases = function (nextPhrases) {
    if (!Array.isArray(nextPhrases) || nextPhrases.length === 0) return;
    phrases = nextPhrases;
    pi = 0;
    ci = 0;
    deleting = false;
    if (inp) inp.placeholder = "";
  };

  function typewriter() {
    if (!inp) return;
    var phrase = phrases[pi] || "";
    if (!deleting) {
      ci++;
      inp.placeholder = phrase.slice(0, ci);
      if (ci >= phrase.length) {
        deleting = true;
        setTimeout(typewriter, 1800);
        return;
      }
      setTimeout(typewriter, 80);
    } else {
      ci--;
      inp.placeholder = phrase.slice(0, ci);
      if (ci <= 0) {
        deleting = false;
        pi = (pi + 1) % phrases.length;
        setTimeout(typewriter, 400);
        return;
      }
      setTimeout(typewriter, 40);
    }
  }
  setTimeout(typewriter, 900);

  var viewers = 147;
  setInterval(function () {
    var d = Math.floor(Math.random() * 5) - 2;
    viewers = Math.max(130, Math.min(180, viewers + d));
    var el = document.getElementById("xViewers");
    if (el) el.textContent = viewers;
  }, 2500);

  document.querySelectorAll(".xstag").forEach(function (tag) {
    tag.addEventListener("click", function () {
      if (inp) {
        inp.value = tag.textContent;
        inp.focus();
      }
    });
  });
})();
