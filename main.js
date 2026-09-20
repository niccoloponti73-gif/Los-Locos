
document.addEventListener('DOMContentLoaded', () => {

  /* ============================================================
     STICKY MOBILE BAR — visibile dopo scroll
     ============================================================ */
  const stickyBar = document.querySelector('.sticky-bar');
  let ticking = false;

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const hero = document.querySelector('.hero');
        const heroBottom = hero ? hero.offsetHeight : 600;
        if (window.scrollY > heroBottom - 200) {
          stickyBar.classList.add('visible');
        } else {
          stickyBar.classList.remove('visible');
        }
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  /* ============================================================
     MENU TABS — switching
     ============================================================ */
  const tabs = document.querySelectorAll('.menu-tab');
  const categories = document.querySelectorAll('.menu-category');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const target = tab.getAttribute('data-category');
      categories.forEach(cat => {
        cat.classList.toggle('active', cat.id === `cat-${target}`);
      });
      // scroll la categoria in vista
      const activeCat = document.getElementById(`cat-${target}`);
      if (activeCat) activeCat.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ============================================================
     FORM PRENOTAZIONE — validazione base + invio demo
     ============================================================ */
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(bookingForm);
      const nome = data.get('nome')?.trim();
      const telefono = data.get('telefono')?.trim();
      const persone = data.get('persone');
      const dataPren = data.get('data');
      const ora = data.get('ora');

      if (!nome || !telefono || !persone || !dataPren || !ora) {
        alert('Per favore, completa tutti i campi.');
        return;
      }

      // In produzione, qui si invia al backend reale.
      // Ora: demo → mostra conferma.
      alert(
        `✅ Richiesta di prenotazione ricevuta!\n\n` +
        `Nome: ${nome}\nPersone: ${persone}\nData: ${dataPren}\nOra: ${ora}\nTelefono: ${telefono}\n\n` +
        `📞 Chiamando allo 0543 480735 verrai confermato/a.\n` +
        `(Questo form è una demo — in produzione si integra il backend reale.)`
      );
      bookingForm.reset();
    });
  }

  /* ============================================================
     ANALYTICS READY — eventi placeholder (senza ID reali)
     ============================================================ */
  function gtagEvent(category, action, label) {
    if (typeof gtag === 'function') {
      gtag('event', action, { event_category: category, event_label: label });
    }
    console.log(`[GA4 placeholder] ${category} > ${action}: ${label}`);
  }

  document.querySelectorAll('.btn--primary, .btn--secondary, .btn--ghost, .sticky-bar__item, .where-btn').forEach(el => {
    el.addEventListener('click', (e) => {
      const href = el.getAttribute('href') || '';
      let cat = 'cta', action = 'click', label = el.textContent.trim();

      if (href.startsWith('tel:'))        { cat = 'telefono'; action = 'click_tel'; }
      else if (href.includes('maps'))     { cat = 'maps';    action = 'click_maps'; }
      else if (href.includes('facebook')) { cat = 'social';  action = 'click_facebook'; }
      else if (el.classList.contains('sticky-bar__item')) {
        const lbl = el.querySelector('.sticky-bar__lbl')?.textContent || label;
        if (lbl.includes('Prenota'))  { cat = 'prenotazione'; action = 'click_prenota_sticky'; }
        else if (lbl.includes('Ordina'))  { cat = 'ordine';     action = 'click_ordina_sticky'; }
        else if (lbl.includes('Chiama')) { cat = 'telefono';   action = 'click_chiama_sticky'; }
        else { cat = 'sticky_cta'; action = 'click_sticky'; }
      }
      gtagEvent(cat, action, label);
    });
  });

  const menuItems = document.querySelectorAll('.menu-item .menu-item__name');
  menuItems.forEach(item => {
    item.parentElement.addEventListener('click', () => {
      gtagEvent('menu', 'view_item', item.textContent.trim());
    });
  });

  console.log('🚀 Los Locos — sito pronto. Analytics placeholder attivi.');
});
