document.addEventListener('DOMContentLoaded', () => {
  const monthlyLetters = [
    {
      month: '2026-06',
      title: 'June 2026',
      greeting: 'To the love of my life,',
      paragraphs: [
        'Being with you has been one of the greatest experiences of my life. Every new moment we share feels more meaningful, and from the moment you came into my life, everything finally made sense. It is with you that I want to share my happiest days, and it is you I turn to when life brings adversity or struggle. Thank you for loving me so earnestly and thoughtfully, and for every little thing you do, big and small. Even in the moments we have shared so far, I already see a bright future ahead of us.',
        'I am so grateful for every joke we laugh at, every connection we make, and every moment we spend together. You have a way of making my heart feel safe, comforted, and overjoyed all at the same time. Your kindness, your unwavering dedication, your understanding of my flaws, and the way you care so deeply not only for me but for those around you are some of the many reasons I fell in love with you.',
        "Thank you for being my one and only, my best friend, and my greatest blessing. I am so lucky to call you mine, and I can't wait to see our relationship blossom to new heights. There aren't enough words in the dictionary to describe how much I love you, Kinno. May we stay together forever and always."
      ],
      closing: 'Always yours,',
      signature: 'James'
    },
    {
      month: '2026-07',
      title: 'July 2026',
      greeting: 'To the love of my life,',
      paragraphs: [
        'I want to start this letter by thanking you for your endless patience. The distance between us is something I think about every single day, and I know how much it hurts, because it hurt for me too. Yet you still continued to love me truthfully, adoringly, and always so amazingly. You have given me nothing but kindness despite the kilometers that separate us, and for that, I am so, so, so grateful.',
        'There will always be a part of me wishing I could give you more, wishing I could hold your hand whenever you needed me, or be there in person to celebrate your good days and comfort you through the exhausting ones. There was always a sinking feeling in my chest because it had been so long since I had seen my gorgeous and handsome boyfriend. To see your striking features would have meant the whole world to me. The guilt of not being able to give you what you deserve sometimes overwhelms me, yet you always remind me that you love me despite it all. You remind me, without ever saying it, that your love for me is unconditional.',
        'I know waiting for the day we can finally be together in person takes strength. I see that strength in you every single day, in the way you show up for me despite the distance, in the way you never let this hardship diminish what we have. Thank you for believing in us when it would be so easy to give up. For now, know that even though I cannot hold you, my heart is always with you, and my dreams are always of the moment we stop counting the days and start counting our forever.'
      ],
      closing: 'Always yours, always waiting,',
      signature: 'James'
    },
    {
      month: '2026-08',
      title: 'August 2026',
      greeting: 'To the love of my life,',
      paragraphs: [
        'It\'s been about two weeks since I moved to Davao, and these past few weeks with you in Davao have been nothing short of magic. All the time we spent apart was worth it since I got to see you so many times, and ever since I moved here, I really got to experience the thrill of being with you in person that phone calls and text messages could never quite capture. I find myself wondering how I ever lived without seeing your smile every single day, without being able to reach over and hold your hand whenever I want. You have completely changed my point of view in life, Kinno, and I am so deeply grateful.',
        'Thank you for spending so much time with me. Thank you for every moment we share, from the quiet mornings to the late nights filled with laughter. I\'m so glad that the hardest part is over, and thank you so much, my love, for investing so much of yourself into building this beautiful thing we have.',
        'My heart is so full of love for you, Kinno. Not just because of the distance we have overcome, but because of who you are, how you love, and the life we are building together. The hardest part is over, and now we get to enjoy the sweetest reward: each other, any time we want. I love you more than words could ever express.'
      ],
      closing: 'Always yours,',
      signature: 'James'
    },
    {
      month: '2026-09',
      title: 'September 2026 - Our 3rd Monthsary',
      greeting: 'To the love of my life,',
      paragraphs: [
        'When I first met you, I thought nothing much of it. At first glance, you were just some cute guy who swiped right on me and chatted first. But somehow, I had a feeling that you were different, not like the others I had been swiping through on the app. Sure, you barely chatted at first, but something inside me felt like you were the one, and I\'m so glad I was right.',
        'From the very first chats we had, I could tell that you were special. You were thoughtful, kind, sweet, and caring, everything I\'ve been looking for in a man, all in one beautiful and gorgeous body. Seriously, you truly do have a face for modeling with the right training.',
        'You are the most beautiful man I have ever met. Your eyes shine a glow that could spark a flame in the darkest of nights. Your smile could cheer me up anytime, and you truly do have the lips of an angel, and they make me feel as if you\'re the home I\'ve always wanted to return to. Every day with your beauty is a reminder to myself that I am the luckiest man on Earth.',
        'You\'ve truly made me the happiest I\'ve ever been, but that isn\'t to say it\'s been smooth sailing these past few months. If anything, it\'s been the opposite. But all the time and effort you give, every affirmation you make, and all the love and attention you so often pour out to me have been so, so worth it. For the past few months, I\'ve been struggling with my mental, financial, and physical health, but you make me feel like I\'m on top of the world, and I\'m so grateful for that. Now that I have an allowance, I\'m super thrilled to finally be able to do the same for you and make you feel how happy you\'ve made me.',
        'I also want you to know that I love the little things about us - the random chats in the middle of the day, the way you always give time to update me even when you\'re busy, and how even the most boring days feel lighter when I get to share it with you. I never thought I\'d find someone who makes me feel this safe, but you do, every single day.',
        'There\'s a quiet kind of sweetness I\'ve come to treasure in you, too. The way you give your 100% whenever may special day tayo, the way your voice softens when I\'ve had a hard day, the way you make me laugh even when I\'m trying to stay upset with you. You have this gentle way of making ordinary moments feel like something worth keeping, and I hold onto every one of them.',
        'I promise to keep showing up for you, to listen when you need someone to talk to, and to be as patient with you as you\'ve been with me. I know I\'m not perfect, hon, and I still have a lot to work on, but I\'ll always try my best for us. Without a doubt, you are the one I want to spend my life with. You\'re the shoulder I cry on during tough days and the one I want to celebrate my wins with, and yours too if you\'ll let me.',
        'The man of my dreams, the love of my life, I really, really, really love you, with all my heart and all my soul. You take up a whole lot of space in my mind, my heart, and my soul, if not all of it. I\'m so glad I got to spend these last three months with you, and may the tides turn in our favor so we get to spend a lifetime together, if not the next one too.',
        'You are everything to me, hon. You are the cosmos, the sun, my universe. You fill me with endless joy and happiness, and I will forever be overjoyed that I get to be yours.'
      ],
      closing: 'Always yours,',
      signature: 'James'
    },
    ...[
      ['2026-10', 'October 2026'],
      ['2026-11', 'November 2026'],
      ['2026-12', 'December 2026'],
      ['2027-01', 'January 2027'],
      ['2027-02', 'February 2027'],
      ['2027-03', 'March 2027'],
      ['2027-04', 'April 2027'],
      ['2027-05', 'May 2027'],
      ['2027-06', 'June 2027'],
      ['2027-07', 'July 2027'],
      ['2027-08', 'August 2027'],
      ['2027-09', 'September 2027'],
      ['2027-10', 'October 2027'],
      ['2027-11', 'November 2027'],
      ['2027-12', 'December 2027']
    ].map(([month, title]) => ({
      month,
      title,
      greeting: 'To the love of my life,',
      paragraphs: ['A new letter is waiting to be written here.'],
      closing: 'Always yours,',
      signature: 'James'
    }))
  ];

  const letterYears = document.getElementById('letter-years');
  const letterMonthSelect = document.getElementById('letter-month-select');
  const letterTitle = document.getElementById('letter-title');
  const letterBody = document.getElementById('letter-body');

  const renderLetter = (letter) => {
    if (!letterTitle || !letterBody) return;
    letterTitle.textContent = letter.title;
    letterBody.replaceChildren();

    const greeting = document.createElement('p');
    greeting.className = 'letter-greeting';
    greeting.textContent = letter.greeting;
    letterBody.appendChild(greeting);

    letter.paragraphs.forEach((text) => {
      const paragraph = document.createElement('p');
      paragraph.textContent = text;
      letterBody.appendChild(paragraph);
    });

    const closing = document.createElement('p');
    closing.textContent = letter.closing;
    letterBody.appendChild(closing);

    const signature = document.createElement('p');
    const strong = document.createElement('strong');
    strong.textContent = letter.signature;
    signature.appendChild(strong);
    letterBody.appendChild(signature);
  };

  const lettersByYear = monthlyLetters.reduce((groups, letter) => {
    const year = letter.month.slice(0, 4);
    groups[year] = groups[year] || [];
    groups[year].push(letter);
    return groups;
  }, {});

  const renderMonthOptions = (year) => {
    if (!letterMonthSelect) return;
    letterMonthSelect.replaceChildren();
    lettersByYear[year].forEach((letter) => {
      const option = document.createElement('option');
      option.value = letter.month;
      option.textContent = letter.title.replace(` ${year}`, '');
      letterMonthSelect.appendChild(option);
    });
  };

  const selectYear = (year) => {
    document.querySelectorAll('.letter-year-button').forEach((yearButton) => {
      yearButton.classList.toggle('active', yearButton.dataset.year === year);
    });
    renderMonthOptions(year);
    const letters = lettersByYear[year];
    const selectedLetter = letters[letters.length - 1];
    letterMonthSelect.value = selectedLetter.month;
    renderLetter(selectedLetter);
  };

  if (letterYears && letterMonthSelect && monthlyLetters.length) {
    Object.keys(lettersByYear).forEach((year) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'letter-year-button';
      button.dataset.year = year;
      button.textContent = year;
      button.addEventListener('click', () => {
        selectYear(year);
      });
      letterYears.appendChild(button);
    });
    letterMonthSelect.addEventListener('change', () => {
      const selectedLetter = monthlyLetters.find((letter) => letter.month === letterMonthSelect.value);
      if (selectedLetter) renderLetter(selectedLetter);
    });
    // Start at July 2026
    const julyLetter = monthlyLetters.find((letter) => letter.month === '2026-07');
    if (julyLetter) {
      selectYear('2026');
      letterMonthSelect.value = '2026-07';
      renderLetter(julyLetter);
    } else {
      selectYear('2027');
    }
  }

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
  const storageKey = 'kypGalleryFolders';

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

  const loadGallery = () => {
    initializeDefaultFolders();
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
