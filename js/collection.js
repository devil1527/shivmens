/**
 * SHIV MENS — Collection Filtering, Lightbox & WhatsApp Builder
 */

document.addEventListener('DOMContentLoaded', () => {
  initCategoryFilters();
  initLightboxModal();
  initWhatsAppBuilder();
});

/**
 * Catalog Category Filtering
 */
function initCategoryFilters() {
  const filterBtns = document.querySelectorAll('.filter-pill, .filter-btn');
  const catalogCards = document.querySelectorAll('.lookbook-item, .catalog-card');

  if (!filterBtns.length || !catalogCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.dataset.filter;

      catalogCards.forEach(card => {
        const category = card.dataset.category;
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(8px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/**
 * Lightbox Modal for Collection Items
 */
function initLightboxModal() {
  const modal = document.querySelector('.lightbox-modal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.lightbox-close-btn');
  const modalImg = modal.querySelector('.lightbox-media img');
  const modalCategory = modal.querySelector('.lightbox-category');
  const modalTitle = modal.querySelector('.lightbox-title');
  const modalDesc = modal.querySelector('.lightbox-desc');
  const modalFit = modal.querySelector('.lightbox-fit-val');
  const modalMaterial = modal.querySelector('.lightbox-material-val');
  const modalInquireBtn = modal.querySelector('.lightbox-inquire-btn');

  const openLightbox = (card) => {
    const title = card.querySelector('.lookbook-title, .catalog-title')?.textContent || 'Apparel Piece';
    const category = card.querySelector('.lookbook-category-tag, .catalog-category')?.textContent || 'Apparel';
    const desc = card.querySelector('.lookbook-fit-text, .catalog-description')?.textContent || '';
    const imgSrc = card.querySelector('img')?.getAttribute('src') || '';
    const fit = card.dataset.fit || 'Regular Straight Leg';
    const fabric = card.dataset.fabric || 'Premium Textile';

    if (modalImg) modalImg.src = imgSrc;
    if (modalCategory) modalCategory.textContent = category;
    if (modalTitle) modalTitle.textContent = title;
    if (modalDesc) modalDesc.textContent = desc;
    if (modalFit) modalFit.textContent = fit;
    if (modalMaterial) modalMaterial.textContent = fabric;

    if (modalInquireBtn) {
      const waMessage = `Hi SHIV MENS, I'm inquiring about "${title}". Could you confirm available sizes and in-store availability?`;
      modalInquireBtn.href = getWhatsAppUrl(waMessage);
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  };

  const triggers = document.querySelectorAll('.lookbook-img-frame, .catalog-image-frame, .lookbook-quick-trigger');
  triggers.forEach(trig => {
    trig.addEventListener('click', (e) => {
      e.preventDefault();
      const card = trig.closest('.lookbook-item, .catalog-card');
      if (card) openLightbox(card);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeLightbox();
    }
  });
}

/**
 * WhatsApp Inquiry Builder (on Contact Page)
 */
function initWhatsAppBuilder() {
  const form = document.querySelector('#whatsappBuilderForm');
  if (!form) return;

  const topicSelect = form.querySelector('#inquiryTopic');
  const userNotes = form.querySelector('#inquiryNotes');
  const userSize = form.querySelector('#inquirySize');
  const previewText = document.querySelector('#builderPreviewText');
  const submitBtn = form.querySelector('#sendWhatsAppBtn');

  const updatePreview = () => {
    const topic = topicSelect?.value || 'General Inquiry';
    const size = userSize?.value ? ` (Size: ${userSize.value.trim()})` : '';
    const notes = userNotes?.value.trim() ? ` — Notes: ${userNotes.value.trim()}` : '';

    let generatedMessage = `Hi SHIV MENS, I would like to inquire regarding: ${topic}${size}.${notes}`;
    if (previewText) previewText.textContent = `"${generatedMessage}"`;

    if (submitBtn) {
      submitBtn.href = getWhatsAppUrl(generatedMessage);
    }
  };

  if (topicSelect) topicSelect.addEventListener('change', updatePreview);
  if (userNotes) userNotes.addEventListener('input', updatePreview);
  if (userSize) userSize.addEventListener('input', updatePreview);

  updatePreview();
}
