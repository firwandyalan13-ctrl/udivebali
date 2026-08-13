/* Navigation drawer */
window.udHamOpen = function () {
  const btn = document.getElementById('ham-btn');
  const drawer = document.getElementById('nav-drawer');
  const overlay = document.getElementById('nav-overlay');
  if (!btn || !drawer || !overlay) return;
  btn.classList.add('is-open');
  drawer.classList.add('open');
  overlay.style.display = 'block';
  overlay.style.opacity = '1';
  document.body.style.overflow = 'hidden';
};

window.udHamClose = function () {
  const btn = document.getElementById('ham-btn');
  const drawer = document.getElementById('nav-drawer');
  const overlay = document.getElementById('nav-overlay');
  if (!btn || !drawer || !overlay) return;
  btn.classList.remove('is-open');
  drawer.classList.remove('open');
  overlay.style.display = 'none';
  overlay.style.opacity = '0';
  document.body.style.overflow = '';
};

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    window.udHamClose();
    document.querySelectorAll('[id$="-detail-modal"].open').forEach(el => closeModal(el.id));
    closeRoomModal();
  }
});

/* Course background video — iOS fallback */
(function () {
  const v = document.querySelector('.course-bg-video');
  if (!v) return;
  v.play().catch(function () {
    let started = false;
    function tryPlay() {
      if (started) return;
      started = true;
      v.play().catch(function () {});
      document.removeEventListener('touchstart', tryPlay);
      document.removeEventListener('click', tryPlay);
    }
    document.addEventListener('touchstart', tryPlay, { once: false });
    document.addEventListener('click', tryPlay, { once: false });
  });
})();

/* Booking form → WhatsApp */
function submitToWhatsApp(e) {
  e.preventDefault();
  const name = document.getElementById('bk_name').value;
  const contact = document.getElementById('bk_contact').value;
  const date = document.getElementById('bk_date').value;
  const interestEl = document.getElementById('bk_interest');
  const interest = interestEl.options[interestEl.selectedIndex].text;
  const notes = document.getElementById('bk_notes').value;

  const msg = `Hello Udive Bali! I would like to get a quote:%0A%0A*Name:* ${name}%0A*Contact:* ${contact}%0A*Date:* ${date}%0A*Interest:* ${interest}%0A*Notes:* ${notes || 'None'}`;
  window.open(`https://wa.me/6281225433175?text=${msg}`, '_blank');
}

/* Room photo modal */
const roomPhotoData = {
  'single-deluxe': {
    title: 'Single Deluxe',
    desc: 'Private bathroom, sea breeze, perfect for solo divers',
    photos: [
      'assets/images/rooms/Single1.jpg',
      'assets/images/rooms/single2.jpg',
      'assets/images/rooms/single3.jpg'
    ]
  },
  'double-standard': {
    title: 'Double Standard',
    desc: 'Spacious and comfortable, ideal for couples or friends',
    photos: [
      'assets/images/rooms/double1.jpg',
      'assets/images/rooms/double2.jpg',
      'assets/images/rooms/double3.jpg'
    ]
  }
};

function openRoomModal(key) {
  const data = roomPhotoData[key];
  if (!data) return;
  document.getElementById('room-modal-title').textContent = data.title;
  document.getElementById('room-modal-desc').textContent = data.desc;
  const img = document.getElementById('room-modal-img');
  img.src = data.photos[0];
  img.alt = data.title;
  const thumbsEl = document.getElementById('room-modal-thumbs');
  thumbsEl.innerHTML = '';
  if (data.photos.length > 1) {
    data.photos.forEach((src, i) => {
      const t = document.createElement('img');
      t.src = src;
      t.className = 'room-modal-thumb' + (i === 0 ? ' active' : '');
      t.onclick = () => {
        img.src = src;
        document.querySelectorAll('.room-modal-thumb').forEach(el => el.classList.remove('active'));
        t.classList.add('active');
      };
      thumbsEl.appendChild(t);
    });
    thumbsEl.style.display = 'flex';
  } else {
    thumbsEl.style.display = 'none';
  }
  document.getElementById('room-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeRoomModal() {
  document.getElementById('room-modal').classList.remove('open');
  document.body.style.overflow = '';
}

function openModal(id) {
  document.getElementById(id).classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow = '';
}
