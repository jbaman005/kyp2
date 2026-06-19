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
  const folderSelect = document.getElementById('folder-select');
  const newFolderBtn = document.getElementById('new-folder-btn');
  const foldersDisplay = document.getElementById('folders-display');
  const storageKey = 'kypGalleryFolders'; // Format: { folderName: [photo1, photo2, ...] }

  // ===== GALLERY FOLDER SYSTEM =====
  
  const sanitizeGalleryData = (data) => {
    if (!data || typeof data !== 'object' || Array.isArray(data)) {
      return {};
    }

    return Object.entries(data).reduce((result, [folderName, photos]) => {
      if (typeof folderName !== 'string' || !folderName.trim()) return result;
      if (!Array.isArray(photos)) {
        result[folderName] = [];
        return result;
      }
      result[folderName] = Array.from(new Set(
        photos.filter((src) => typeof src === 'string' && src.trim())
      ));
      return result;
    }, {});
  };

  const getGalleryData = () => {
    const stored = localStorage.getItem(storageKey);
    if (!stored) return {};
    try {
      const parsed = JSON.parse(stored);
      const sanitized = sanitizeGalleryData(parsed);
      if (JSON.stringify(sanitized) !== stored) {
        saveGalleryData(sanitized);
      }
      return sanitized;
    } catch (error) {
      console.error('Failed to parse gallery data', error);
    }
    localStorage.removeItem(storageKey);
    return {};
  };

  const saveGalleryData = (data) => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(sanitizeGalleryData(data)));
    } catch (error) {
      console.error('Failed to save gallery data', error);
    }
  };

  const renderPhotoItem = (src, folderId) => {
    if (!galleryGrid) return;
    const item = document.createElement('div');
    item.className = 'gallery-item uploaded';
    item.dataset.folder = folderId;
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Photo';
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-photo-btn';
    deleteBtn.innerHTML = '✕';
    deleteBtn.style.cssText = 'position: absolute; top: 5px; right: 5px; background: rgba(0,0,0,0.7); color: white; border: none; border-radius: 50%; width: 30px; height: 30px; cursor: pointer; display: none;';
    deleteBtn.onclick = (e) => {
      e.stopPropagation();
      const folders = getGalleryData();
      folders[folderId] = folders[folderId].filter(p => p !== src);
      saveGalleryData(folders);
      item.remove();
    };
    item.style.position = 'relative';
    item.appendChild(img);
    item.appendChild(deleteBtn);
    item.onmouseenter = () => deleteBtn.style.display = 'block';
    item.onmouseleave = () => deleteBtn.style.display = 'none';
    galleryGrid.appendChild(item);
  };

  const renderFolders = () => {
    const folders = getGalleryData();
    foldersDisplay.innerHTML = '';
    
    Object.keys(folders).forEach((folderName) => {
      const folderDiv = document.createElement('div');
      folderDiv.style.cssText = 'padding: 1rem; border: 2px solid #ddd; border-radius: 8px; cursor: pointer; text-align: center; background: linear-gradient(135deg, #f5f5f5, #fff); position: relative;';
      
      const deleteBtn = document.createElement('button');
      deleteBtn.innerHTML = '🗑️';
      deleteBtn.style.cssText = 'position: absolute; top: 5px; right: 5px; background: rgba(0,0,0,0.7); color: white; border: none; border-radius: 50%; width: 30px; height: 30px; cursor: pointer; font-size: 16px;';
      deleteBtn.onclick = (e) => {
        e.stopPropagation();
        if (confirm(`Delete folder "${folderName}" and all photos inside?`)) {
          const data = getGalleryData();
          delete data[folderName];
          saveGalleryData(data);
          if (folderSelect.value === folderName) {
            folderSelect.value = '';
            galleryGrid.innerHTML = '';
          }
          updateFolderSelect();
          renderFolders();
        }
      };
      
      folderDiv.innerHTML = `
        <div style="font-size: 2rem; margin-bottom: 0.5rem;">📁</div>
        <div style="font-weight: 500; margin-bottom: 0.5rem;">${folderName}</div>
        <div style="font-size: 0.85rem; color: #666;">${folders[folderName].length} photos</div>
      `;
      folderDiv.appendChild(deleteBtn);
      folderDiv.onclick = () => {
        folderSelect.value = folderName;
        renderGalleryForFolder(folderName);
      };
      foldersDisplay.appendChild(folderDiv);
    });
  };

  const updateFolderSelect = () => {
    const folders = getGalleryData();
    const currentValue = folderSelect.value;
    folderSelect.innerHTML = '<option value="">-- Select Folder --</option>';
    Object.keys(folders).forEach((folderName) => {
      const option = document.createElement('option');
      option.value = folderName;
      option.textContent = folderName;
      folderSelect.appendChild(option);
    });
    folderSelect.value = currentValue;
  };

  const renderGalleryForFolder = (folderName) => {
    const folders = getGalleryData();
    if (!folderName || !folders[folderName]) {
      galleryGrid.innerHTML = '';
      return;
    }
    galleryGrid.innerHTML = '';
    folders[folderName].forEach((src) => {
      renderPhotoItem(src, folderName);
    });
  };

  if (folderSelect) {
    folderSelect.addEventListener('change', (e) => {
      renderGalleryForFolder(e.target.value);
    });
  }

  if (newFolderBtn) {
    newFolderBtn.addEventListener('click', () => {
      const rawName = prompt('Enter folder name:');
      const folderName = rawName ? rawName.trim() : '';
      if (!folderName) return;
      
      const folders = getGalleryData();
      if (folders[folderName]) {
        alert('Folder already exists!');
        return;
      }
      
      folders[folderName] = [];
      saveGalleryData(folders);
      updateFolderSelect();
      renderFolders();
      folderSelect.value = folderName;
      renderGalleryForFolder(folderName);
    });
  }

  if (photoUploadInput) {
    photoUploadInput.addEventListener('change', (event) => {
      const selectedFolder = folderSelect.value;
      if (!selectedFolder) {
        alert('Please select or create a folder first!');
        return;
      }

      const files = Array.from(event.target.files || []);
      if (!files.length) return;

      const folders = getGalleryData();
      if (!folders[selectedFolder]) {
        folders[selectedFolder] = [];
      }

      files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          const src = reader.result;
          folders[selectedFolder].push(src);
          saveGalleryData(folders);
          renderPhotoItem(src, selectedFolder);
        };
        reader.readAsDataURL(file);
      });
      
      photoUploadInput.value = '';
    });
  }

  const initializeDefaultFolders = () => {
    const folders = getGalleryData();
    // Only create default folders if no folders exist yet
    if (Object.keys(folders).length === 0) {
      const defaultFolders = {
        'Challenge with him 𖹭': [],
        'Davao Date ✿': [],
        'First Meet ♡': [],
        'Panabo Date ❤︎⁠': []
      };
      saveGalleryData(defaultFolders);
    }
  };

  const staticPhotoManifest = {
    'Challenge with him 𖹭': ['IMG_8019.jpg'],
    'Davao Date ✿': [],
    'First Meet ♡': ['IMG_7884.jpg', 'IMG_7904.jpg', 'IMG_7913.jpg', 'IMG_7915.jpg', 'IMG_7921.jpg'],
    'Panabo Date ❤︎⁠': ['IMG_8015.jpg', 'IMG_8035.jpg', 'IMG_8041.jpg', 'IMG_8047.jpg']
  };

  const loadStaticPhotos = async () => {
    const folders = getGalleryData();
    const syncedFolders = { ...folders };

    for (const [folderName, filenames] of Object.entries(staticPhotoManifest)) {
      const folderPaths = Array.isArray(filenames)
        ? filenames
            .filter((filename) => typeof filename === 'string' && filename.trim())
            .map((filename) =>
              `./photos/${encodeURIComponent(folderName)}/${encodeURIComponent(filename)}`
            )
        : [];
      syncedFolders[folderName] = Array.from(new Set(folderPaths));
    }

    saveGalleryData(syncedFolders);
  };

  const loadGallery = async () => {
    initializeDefaultFolders();
    await loadStaticPhotos();
    updateFolderSelect();
    renderFolders();
    if (folderSelect.value === '' && Object.keys(getGalleryData()).length) {
      const firstFolder = Object.keys(getGalleryData())[0];
      folderSelect.value = firstFolder;
      renderGalleryForFolder(firstFolder);
    }
  };

  loadGallery();

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
