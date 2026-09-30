(function () {
  var SOL = "So11111111111111111111111111111111111111112";
  var raw = (window.SITRUMP_CA || "").trim();
  var ready = raw && raw !== "PASTE_CONTRACT_ADDRESS_HERE";

  var buy = ready
    ? "https://swap.pump.fun/?input=" +
      SOL +
      "&output=" +
      encodeURIComponent(raw)
    : "https://swap.pump.fun/";
  var dex = ready
    ? "https://dexscreener.com/solana/" + encodeURIComponent(raw)
    : "https://dexscreener.com/solana/";
  var shown = ready ? raw : "CA coming soon";

  document.querySelectorAll("[data-buy]").forEach(function (el) {
    el.setAttribute("href", buy);
  });
  document.querySelectorAll("[data-dex]").forEach(function (el) {
    el.setAttribute("href", dex);
  });
  document.querySelectorAll("[data-ca]").forEach(function (el) {
    el.textContent = shown;
  });

  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (!ready) return;
      navigator.clipboard.writeText(raw).then(function () {
        var prev = btn.innerHTML;
        btn.innerHTML = '<i class="bi bi-check2"></i> Copied';
        setTimeout(function () {
          btn.innerHTML = prev;
        }, 1600);
      });
    });
  });

  var toggle = document.querySelector(".hud-toggle");
  var tray = document.querySelector(".hud-tray");
  if (toggle && tray) {
    toggle.addEventListener("click", function () {
      var open = tray.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    tray.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        tray.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
})();
