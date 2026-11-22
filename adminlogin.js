// Dialog login admin (email + kata sandi, sandi disamarkan). Dipakai peta.html dan panti.html.
// Mengembalikan Promise: { email, pw } atau null kalau dibatalkan.
window.askAdminLogin = function () {
  return new Promise(function (resolve) {
    var wrap = document.createElement('div');
    wrap.style.cssText = 'position:fixed;inset:0;background:rgba(20,30,28,.55);z-index:99999;display:grid;place-items:center;padding:20px';
    wrap.innerHTML =
      '<form style="background:#fff;border-radius:18px;padding:20px;width:100%;max-width:340px;font-family:system-ui,sans-serif;color:#1D3532">' +
      '<h3 style="margin:0 0 12px;font-size:18px">Login Admin</h3>' +
      '<input name="e" type="email" autocomplete="username" placeholder="Email admin" required style="width:100%;padding:12px;border:1.5px solid #ccd6d2;border-radius:10px;font-size:15px;margin-bottom:10px;box-sizing:border-box">' +
      '<input name="p" type="password" autocomplete="current-password" placeholder="Kata sandi" required style="width:100%;padding:12px;border:1.5px solid #ccd6d2;border-radius:10px;font-size:15px;box-sizing:border-box">' +
      '<div style="display:flex;gap:10px;margin-top:14px">' +
      '<button type="button" data-x style="flex:1;padding:12px;border:0;border-radius:10px;background:#eef2f0;font-weight:700;font-size:14px">Batal</button>' +
      '<button type="submit" style="flex:1;padding:12px;border:0;border-radius:10px;background:#2E5F57;color:#fff;font-weight:700;font-size:14px">Masuk</button>' +
      '</div></form>';
    document.body.appendChild(wrap);
    var form = wrap.querySelector('form');
    function done(v) { wrap.remove(); resolve(v); }
    wrap.querySelector('[data-x]').onclick = function () { done(null); };
    form.onsubmit = function (ev) {
      ev.preventDefault();
      done({ email: form.e.value.trim(), pw: form.p.value });
    };
    form.e.focus();
  });
};
