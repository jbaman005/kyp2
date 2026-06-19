document.addEventListener('DOMContentLoaded', () => {
  
  const GOOGLE_CLIENT_ID = '15206403545-tlhgpd8r250koqlk00pnbihvjbj4bskl.apps.googleusercontent.com';
  const DRIVE_FOLDER_ID = '1orbLbFd1wemzElvWMd4a6cU2vW7JklBg';
  
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
  const googleDriveBtn = document.getElementById('google-drive-btn');
  const authStatusEl = document.getElementById('google-auth-status');
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

  // ===== GOOGLE DRIVE API FUNCTIONS =====
  let gapi_loaded = false;

  const initGoogleAPI = () => {
    if (gapi_loaded) return;
    
    // Wait for gapi to be available
    const checkGapi = setInterval(() => {
      if (window.gapi) {
        clearInterval(checkGapi);
        gapi.load('client:auth2', async () => {
          try {
            await gapi.client.init({
              clientId: GOOGLE_CLIENT_ID,
              scope: 'https://www.googleapis.com/auth/drive.readonly',
              discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
            });
            gapi_loaded = true;
            updateAuthStatus();
            if (googleDriveBtn) {
              googleDriveBtn.disabled = false;
              googleDriveBtn.style.opacity = '1';
              googleDriveBtn.title = 'Load photos from Google Drive';
            }
            console.log('Google Drive API initialized successfully');
          } catch (error) {
            console.error('Failed to initialize Google API:', error);
            if (authStatusEl) authStatusEl.textContent = 'Error loading Google Drive';
          }
        });
      }
    }, 100);
    
    // Timeout after 10 seconds
    setTimeout(() => {
      clearInterval(checkGapi);
      if (!gapi_loaded && authStatusEl) {
        authStatusEl.textContent = 'Failed to load Google API';
      }
    }, 10000);
  };

  const updateAuthStatus = () => {
    if (!window.gapi || !window.gapi.auth2) return;
    const auth2 = gapi.auth2.getAuthInstance();
    if (!auth2) return;
    const isSignedIn = auth2.isSignedIn.get();
    authStatusEl.textContent = isSignedIn ? '✓ Connected' : 'Not connected';
  };

  const authenticateGoogle = async () => {
    if (!window.gapi || !window.gapi.auth2) return;
    const auth2 = gapi.auth2.getAuthInstance();
    if (!auth2) return;
    
    try {
      if (!auth2.isSignedIn.get()) {
        await auth2.signIn();
      }
      updateAuthStatus();
      fetchDrivePhotos();
    } catch (error) {
      console.error('Authentication failed:', error);
      authStatusEl.textContent = 'Authentication failed';
    }
  };

  const fetchDrivePhotos = async () => {
    if (!window.gapi || !window.gapi.client) return;
    
    try {
      authStatusEl.textContent = 'Loading photos...';
      googleDriveBtn.disabled = true;

      // Query for image files in the folder
      const response = await gapi.client.drive.files.list({
        q: `'${DRIVE_FOLDER_ID}' in parents and mimeType contains 'image/' and trashed=false`,
        pageSize: 100,
        fields: 'files(id, name, mimeType, createdTime)',
        orderBy: 'createdTime desc',
      });

      const files = response.result.files || [];
      if (files.length === 0) {
        authStatusEl.textContent = 'No photos found';
        return;
      }

      // Add each photo to gallery
      files.forEach((file) => {
        const imageUrl = `https://drive.google.com/uc?id=${file.id}&export=view`;
        renderPhotoItem(imageUrl);
      });

      authStatusEl.textContent = `✓ Loaded ${files.length} photo${files.length !== 1 ? 's' : ''}`;
      googleDriveBtn.disabled = false;
    } catch (error) {
      console.error('Failed to fetch photos:', error);
      authStatusEl.textContent = 'Failed to load photos';
      googleDriveBtn.disabled = false;
    }
  };

  if (googleDriveBtn) {
    googleDriveBtn.addEventListener('click', async () => {
      if (!gapi_loaded) {
        if (authStatusEl) authStatusEl.textContent = 'API still loading...';
        return;
      }
      authenticateGoogle();
    });
    
    // Button disabled until API is ready
    googleDriveBtn.disabled = true;
    googleDriveBtn.style.opacity = '0.6';
    googleDriveBtn.title = 'Initializing Google Drive...';
  }

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

  // Initialize Google API automatically
  if (GOOGLE_CLIENT_ID && GOOGLE_CLIENT_ID !== 'YOUR_CLIENT_ID_HERE.apps.googleusercontent.com') {
    initGoogleAPI();
  } else if (authStatusEl) {
    authStatusEl.textContent = 'Client ID not configured';
  }
});
