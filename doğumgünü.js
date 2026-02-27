// Doğum günü mesajı
window.onload = function() {
  setTimeout(() => {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position:fixed; inset:0; background:rgba(80,20,100,0.6);
      backdrop-filter:blur(8px); z-index:999;
      display:flex; align-items:center; justify-content:center; padding:20px;
    `;
    overlay.innerHTML = `
      <div style="background:linear-gradient(145deg,#fff0f8,#f9eeff);border-radius:28px;
        padding:44px 36px;max-width:460px;width:100%;text-align:center;
        box-shadow:0 30px 80px rgba(100,30,130,0.35);border:2px solid rgba(244,167,195,0.5);">
        <div style="font-size:2.5rem;margin-bottom:12px">🎂💜🌸</div>
        <h2 style="font-family:'Playfair Display',serif;color:#6c3483;font-size:1.8rem;margin-bottom:20px">
          İyi ki doğdun Mine!
        </h2>
        <p style="color:#7b5c8a;font-size:1.05rem;line-height:1.85;font-weight:300">
          Kardeşimm benim, iyiki varsın, iyiki doğdun, iyiki tanışmışız. 
          Umarım cennete kadar dostluğumuz daim olur. 
          Seni çok seviyorum, nice yıllara 💜
        </p>
        <button onclick="this.parentElement.parentElement.remove()" style="
          margin-top:24px;padding:12px 32px;background:linear-gradient(135deg,#e87ea1,#9b59b6);
          color:white;border:none;border-radius:50px;font-size:1rem;cursor:pointer;
          box-shadow:0 8px 20px rgba(155,89,182,0.3)">
          Teşekkürler 💜
        </button>
      </div>
    `;
    document.body.appendChild(overlay);
  }, 800);
};