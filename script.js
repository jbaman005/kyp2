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
    ...[
      ['2026-07', 'July 2026'],
      ['2026-08', 'August 2026'],
      ['2026-09', 'September 2026'],
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
    selectYear('2027');
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
