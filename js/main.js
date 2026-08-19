/**
 * StateFlow Games - Ana Etkileşim & Dinamik Script
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderGames('all');
  initCategoryFilters();
  initContactForm();
});

/* -------------------------------------------------------------------------- */
/* Navbar & Scroll Behavior                                                   */
/* -------------------------------------------------------------------------- */
function initNavbar() {
  const header = document.querySelector('.header');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = mobileToggle.querySelector('i') || mobileToggle;
      if (navMenu.classList.contains('open')) {
        mobileToggle.innerHTML = '✕';
      } else {
        mobileToggle.innerHTML = '☰';
      }
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        if (mobileToggle) mobileToggle.innerHTML = '☰';
      });
    });
  }
}

/* -------------------------------------------------------------------------- */
/* Games Rendering & Filtering                                                */
/* -------------------------------------------------------------------------- */
function renderGames(filterCategory = 'all') {
  const container = document.getElementById('gamesGrid');
  if (!container || typeof STATEFLOW_GAMES === 'undefined') return;

  const filtered = filterCategory === 'all'
    ? STATEFLOW_GAMES
    : STATEFLOW_GAMES.filter(g => g.category.toLowerCase() === filterCategory.toLowerCase());

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
        <p>Bu kategoride henüz bir oyun bulunmamaktadır.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(game => {
    const isLive = game.status === 'live';
    const statusClass = isLive ? 'status-live' : 'status-soon';
    const statusText = isLive ? '● Yayında' : '⏳ Çok Yakında';
    const btnActionText = isLive ? 'Google Play' : 'Ön Kayıt';

    return `
      <div class="game-card" data-category="${game.category.toLowerCase()}">
        <div class="game-media">
          <img src="${game.banner}" alt="${game.title}" class="game-banner" loading="lazy">
          <span class="game-category-tag">${game.category}</span>
          <span class="game-status-tag ${statusClass}">${statusText}</span>
        </div>
        
        <div class="game-body">
          <div class="game-header-info">
            <img src="${game.icon}" alt="${game.title} İkon" class="game-icon">
            <div>
              <h3 class="game-title">${game.title}</h3>
              <div class="game-rating">
                <span>★</span>
                <span>${game.rating}</span>
                <span style="color: var(--text-dim); font-size: 0.8rem;">(${game.reviewsCount})</span>
              </div>
            </div>
          </div>
          
          <p class="game-desc">${game.shortDesc}</p>
          
          <div class="game-tags">
            ${game.tags.map(t => `<span class="game-tag">#${t}</span>`).join('')}
          </div>
          
          <div class="game-footer">
            <button class="btn btn-secondary" onclick="openGameModal('${game.id}')">
              Detaylar
            </button>
            <a href="${game.playStoreUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg>
              ${btnActionText}
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function initCategoryFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter') || 'all';
      renderGames(category);
    });
  });
}

/* -------------------------------------------------------------------------- */
/* Game Detail Modal                                                          */
/* -------------------------------------------------------------------------- */
function openGameModal(gameId) {
  const game = STATEFLOW_GAMES.find(g => g.id === gameId);
  if (!game) return;

  const modalOverlay = document.getElementById('gameModal');
  const modalContent = document.getElementById('modalContent');
  if (!modalOverlay || !modalContent) return;

  modalContent.innerHTML = `
    <div style="display: flex; gap: 20px; align-items: center; margin-bottom: 24px;">
      <img src="${game.icon}" alt="${game.title}" style="width: 72px; height: 72px; border-radius: 16px; object-fit: cover; border: 1px solid var(--border-glow);">
      <div>
        <h2 style="font-size: 1.8rem; margin-bottom: 4px;">${game.title}</h2>
        <p style="color: var(--accent-cyan); font-weight: 600; font-size: 0.95rem;">${game.category} • ★ ${game.rating} (${game.reviewsCount}) • ${game.downloads} İndirme</p>
      </div>
    </div>

    <img src="${game.banner}" alt="${game.title} Banner" style="width: 100%; border-radius: var(--radius-md); max-height: 280px; object-fit: cover; margin-bottom: 20px; border: 1px solid var(--border-color);">

    <div style="margin-bottom: 24px;">
      <h4 style="font-size: 1.1rem; color: #fff; margin-bottom: 8px;">Oyun Hakkında</h4>
      <p style="color: var(--text-muted); line-height: 1.7;">${game.fullDesc}</p>
    </div>

    <div style="margin-bottom: 28px;">
      <h4 style="font-size: 1.1rem; color: #fff; margin-bottom: 12px;">Öne Çıkan Özellikler</h4>
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px;">
        ${game.features.map(f => `
          <li style="display: flex; align-items: center; gap: 10px; color: var(--text-muted); font-size: 0.95rem;">
            <span style="color: var(--accent-cyan);">✦</span> ${f}
          </li>
        `).join('')}
      </ul>
    </div>

    <div style="display: flex; gap: 16px; flex-wrap: wrap;">
      <a href="${game.playStoreUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="flex: 1; min-width: 200px; padding: 14px 24px;">
        Google Play Store Sayfasına Git
      </a>
      <button class="btn btn-secondary" onclick="closeGameModal()">Kapat</button>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeGameModal() {
  const modalOverlay = document.getElementById('gameModal');
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

// Modal dışına tıklandığında kapat
window.addEventListener('click', (e) => {
  const modalOverlay = document.getElementById('gameModal');
  if (e.target === modalOverlay) {
    closeGameModal();
  }
});

/* -------------------------------------------------------------------------- */
/* Contact Form Handling                                                      */
/* -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('gameSelect').value || 'StateFlow Games Destek / İletişim';
    const message = document.getElementById('message').value;

    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = 'İletiliyor...';
    btn.disabled = true;

    // E-posta istemcisini doğrudan stateflowgames@gmail.com ile tetikle
    const mailtoUrl = `mailto:stateflowgames@gmail.com?subject=${encodeURIComponent(subject + ' - ' + name)}&body=${encodeURIComponent("Ad: " + name + "\nE-Posta: " + email + "\n\nMesaj:\n" + message)}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      alert('Mesajınız hazırlandı! E-posta uygulamanız açılarak doğrudan stateflowgames@gmail.com adresine iletilecektir.');
      form.reset();
      btn.innerHTML = originalText;
      btn.disabled = false;
    }, 500);
  });
}
