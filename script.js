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
  
  const getGalleryData = () => {
    const stored = localStorage.getItem(storageKey);
    try {
      return stored ? JSON.parse(stored) : {};
    } catch (error) {
      console.error('Failed to parse gallery data', error);
      return {};
    }
  };

  const saveGalleryData = (data) => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(data));
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
      folderDiv.style.cssText = 'padding: 1rem; border: 2px solid #ddd; border-radius: 8px; cursor: pointer; text-align: center; background: linear-gradient(135deg, #f5f5f5, #fff);';
      folderDiv.innerHTML = `
        <div style="font-size: 2rem; margin-bottom: 0.5rem;">📁</div>
        <div style="font-weight: 500; margin-bottom: 0.5rem;">${folderName}</div>
        <div style="font-size: 0.85rem; color: #666;">${folders[folderName].length} photos</div>
      `;
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
      const folderName = prompt('Enter folder name:');
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

  const loadGallery = () => {
    updateFolderSelect();
    renderFolders();
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
