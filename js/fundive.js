let locExtra = 0;
let diveCount = 1;
let diveBase = 550000;
const addons = { area: 0, night: 0, nitrox: 0, boat: 0 };
const addonRates = { area: 50000, night: 100000, nitrox: 30000, boat: 300000 };

function setLoc(el, extra) {
  document.querySelectorAll('.loc-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  locExtra = extra;
  updatePrice();
}

function setDives(el, count, base) {
  document.querySelectorAll('.dive-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  diveCount = count;
  diveBase = base;
  updatePrice();
}

function adjAddon(key, delta) {
  addons[key] = Math.max(0, addons[key] + delta);
  document.getElementById(key + '-val').textContent = addons[key];
  updatePrice();
}

function updatePrice() {
  let total = 0;
  let addonTotal = 0;

  if (locExtra === 2800000) {
    total = locExtra;
  } else {
    addonTotal =
      addons.area * addonRates.area +
      addons.night * diveCount * addonRates.night +
      addons.nitrox * diveCount * addonRates.nitrox +
      addons.boat * addonRates.boat;
    total = diveBase + addonTotal + locExtra;
  }
  const deposit = Math.round(total / 2);
  const fmt = n => 'IDR ' + n.toLocaleString('id-ID');

  document.getElementById('ps-pkg').textContent = locExtra === 2800000 ? fmt(locExtra) : fmt(diveBase);
  document.getElementById('ps-addons').textContent = fmt(locExtra === 2800000 ? 0 : addonTotal + locExtra);
  document.getElementById('ps-total').textContent = fmt(total);
  document.getElementById('ps-deposit').innerHTML = '50% deposit to confirm: <strong>' + fmt(deposit) + '</strong>';
  document.getElementById('ps-currencies').innerHTML =
    '<small>MYR (×3,600): MYR ' + Math.round(total / 3600).toLocaleString() + '</small>' +
    '<small>CNY (×2,100): CNY ' + Math.round(total / 2100).toLocaleString() + '</small>';
}

document.addEventListener('DOMContentLoaded', updatePrice);
