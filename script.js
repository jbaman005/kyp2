document.addEventListener('DOMContentLoaded', () => {
  const surpriseBtn = document.getElementById('surprise-btn');
  const introOverlay = document.getElementById('intro-overlay');
  const loveLetterCard = document.getElementById('love-letter-card');
  const navLinks = document.querySelectorAll('.nav-link');
  const introReturn = document.getElementById('intro-return');
  const openLetterBtn = document.getElementById('open-letter-btn');
  const loveQuestionOverlay = document.getElementById('love-question-overlay');
  const answerYes = document.getElementById('answer-yes');
  const answerNo = document.getElementById('answer-no');
  const pageButtons = document.querySelectorAll('[data-page]');
  const photoUploadInput = document.getElementById('photo-upload-input');
  const galleryGrid = document.querySelector('.gallery-grid');
  const galleryStorageKey = 'kypGalleryPhotos';

  const renderPhotoItem = (src) => {
    if (!galleryGrid) return;
    const item = document.createElement('div');
    item.className = 'gallery-item uploaded';
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Uploaded photo';
    item.appendChild(img);
    galleryGrid.appendChild(item);
  };

  const loadSavedPhotos = () => {
    if (!galleryGrid) return;
    const stored = localStorage.getItem(galleryStorageKey);
    if (!stored) return;
    try {
      const photos = JSON.parse(stored);
      if (Array.isArray(photos)) {
        photos.forEach((src) => {
          renderPhotoItem(src);
        });
      }
    } catch (error) {
      console.error('Failed to load saved photos', error);
    }
  };

  const savePhotos = (photos) => {
    try {
      localStorage.setItem(galleryStorageKey, JSON.stringify(photos));
    } catch (error) {
      console.error('Failed to save photos', error);
    }
  };

  const getSavedPhotos = () => {
    const stored = localStorage.getItem(galleryStorageKey);
    try {
      const photos = stored ? JSON.parse(stored) : [];
      return Array.isArray(photos) ? photos : [];
    } catch (error) {
      return [];
    }
  };

  if (photoUploadInput) {
    photoUploadInput.addEventListener('change', (event) => {
      const files = Array.from(event.target.files || []);
      if (!files.length) return;
      const savedPhotos = getSavedPhotos();
      files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          const src = reader.result;
          savedPhotos.push(src);
          savePhotos(savedPhotos);
          renderPhotoItem(src);
        };
        reader.readAsDataURL(file);
      });
      photoUploadInput.value = '';
    });
  }

  loadSavedPhotos();

  const showPage = (pageId) => {
    document.querySelectorAll('.page').forEach((page) => {
      page.classList.toggle('active', page.id === `page-${pageId}`);
    });
    if (pageId === 'love-letter') {
      loveLetterCard?.classList.remove('hidden');
    }
  };

  const openQuestion = () => {
    loveQuestionOverlay?.classList.remove('hidden');
  };

  const closeQuestion = () => {
    loveQuestionOverlay?.classList.add('hidden');
  };

  const closeIntro = () => {
    if (!introOverlay) return;
    introOverlay.classList.remove('active');
    setTimeout(() => introOverlay.remove(), 500);
  };

  if (surpriseBtn) {
    surpriseBtn.addEventListener('click', () => {
      showPage('love-letter');
    });
  }

  if (openLetterBtn) {
    openLetterBtn.addEventListener('click', () => {
      openQuestion();
    });
  }

  if (answerYes) {
    answerYes.addEventListener('click', () => {
      closeQuestion();
      closeIntro();
      showPage('love-letter');
    });
  }

  const moveNoButton = () => {
    if (!answerNo) return;
    const container = answerNo.parentElement;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const btnRect = answerNo.getBoundingClientRect();
    const padding = 12;

    const maxLeft = Math.max(0, rect.width - btnRect.width - padding);
    const maxTop = Math.max(0, rect.height - btnRect.height - padding);
    const left = Math.max(padding / 2, Math.random() * maxLeft);
    const top = Math.max(padding / 2, Math.random() * maxTop);

    answerNo.style.position = 'absolute';
    answerNo.style.left = `${left}px`;
    answerNo.style.top = `${top}px`;
  };

  if (answerNo) {
    answerNo.addEventListener('mouseenter', () => {
      moveNoButton();
    });
  }

  pageButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const targetPage = button.getAttribute('data-page');
      if (targetPage) {
        closeIntro();
        showPage(targetPage);
      }
    });
  });

  navLinks.forEach((button) => {
    button.addEventListener('click', () => {
      const page = button.getAttribute('data-page');
      if (page) {
        showPage(page);
      }
    });
  });

  if (introReturn) {
    introReturn.addEventListener('click', () => {
      location.reload();
    });
  }
});
