/**
 * SHIV MENS — Main Interactive JavaScript
 * High-fashion interactive controls: Sticky Header, Mobile Drawer, Video Controls & Dynamic Links.
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileDrawer();
  initHeroVideo();
  initDynamicConfig();
  initBackToTop();
});

/**
 * Sticky Header on Scroll
 */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * Mobile Navigation Drawer
 */
function initMobileDrawer() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const backdrop = document.querySelector('.drawer-backdrop');
  const closeBtn = document.querySelector('.drawer-close-btn');

  if (!toggleBtn || !drawer || !backdrop) return;

  const openDrawer = () => {
    drawer.classList.add('open');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
    toggleBtn.setAttribute('aria-expanded', 'true');
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
    toggleBtn.setAttribute('aria-expanded', 'false');
  };

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });

  const drawerLinks = drawer.querySelectorAll('.mobile-nav-item');
  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/**
 * Hero Background Video Controls
 */
function initHeroVideo() {
  const video = document.querySelector('.hero-video-elem, .hero-video');
  const toggleBtn = document.querySelector('.hero-playback-control');

  if (!video) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    video.pause();
    if (toggleBtn) toggleBtn.style.display = 'none';
    return;
  }

  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      if (toggleBtn) {
        toggleBtn.querySelector('.playback-text').textContent = 'Play';
      }
    });
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const textSpan = toggleBtn.querySelector('.playback-text');
      const iconWrap = toggleBtn.querySelector('.playback-icon');

      if (video.paused) {
        video.play();
        if (textSpan) textSpan.textContent = 'Pause';
        if (iconWrap) {
          iconWrap.innerHTML = `
            <svg viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
          `;
        }
      } else {
        video.pause();
        if (textSpan) textSpan.textContent = 'Play';
        if (iconWrap) {
          iconWrap.innerHTML = `
            <svg viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          `;
        }
      }
    });
  }
}

/**
 * Dynamic Configuration Injection
 */
function initDynamicConfig() {
  if (typeof SHIV_CONFIG === 'undefined') return;

  // WhatsApp Floating Action Button link
  const waFloatingBtn = document.querySelector('.whatsapp-float-btn');
  if (waFloatingBtn) {
    waFloatingBtn.href = getWhatsAppUrl();
  }

  // Header & Button WhatsApp links
  const waBtns = document.querySelectorAll('.js-whatsapp-link');
  waBtns.forEach(btn => {
    const customMsg = btn.dataset.waMessage;
    btn.href = getWhatsAppUrl(customMsg);
  });

  // Instagram links
  const igLinks = document.querySelectorAll('.js-instagram-link');
  igLinks.forEach(link => {
    link.href = SHIV_CONFIG.social.instagram.url;
  });

  // Facebook links
  const fbLinks = document.querySelectorAll('.js-facebook-link');
  fbLinks.forEach(link => {
    link.href = SHIV_CONFIG.social.facebook.url;
  });

  // Phone links
  const phoneLinks = document.querySelectorAll('.js-phone-link');
  phoneLinks.forEach(link => {
    link.href = `tel:+91${SHIV_CONFIG.contact.phoneRawPrimary}`;
  });

  // Copyright Year
  const yearSpans = document.querySelectorAll('.js-current-year');
  yearSpans.forEach(span => {
    span.textContent = new Date().getFullYear();
  });
}

/**
 * Back to Top Smooth Scroll
 */
function initBackToTop() {
  const backToTopBtn = document.querySelector('.back-to-top-btn, .back-to-top');
  if (!backToTopBtn) return;

  backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
