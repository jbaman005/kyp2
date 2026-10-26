document.addEventListener('DOMContentLoaded', () => {
  const monthlyLetters = [
    {
      month: '2026-06',
      title: 'June 2026',
      greeting: 'To the love of my life,',
      paragraphs: [
        'Being with you has been one of the greatest experiences of my life. Every new moment we share feels more meaningful, and from the moment you came into my life, everything finally made sense. [...]',
        'I am so grateful for every joke we laugh at, every connection we make, and every moment we spend together. You have a way of making my heart feel safe, comforted, and overjoyed all at the same time. [...]',
        "Thank you for being my one and only, my best friend, and my greatest blessing. I am so lucky to call you mine, and I can't wait to see our relationship blossom to new heights. There aren't enough words to describe how much you mean to me. [...]"
      ],
      closing: 'Always yours,',
      signature: 'James'
    },
    {
      month: '2026-07',
      title: 'July 2026',
      greeting: 'To the love of my life,',
      paragraphs: [
        'I want to start this letter by thanking you for your endless patience. The distance between us is something I think about every single day, and I know how much it hurts, because it hurt for me too. [...]',
        'There will always be a part of me wishing I could give you more, wishing I could hold your hand whenever you needed me, or be there in person to celebrate your good days and comfort you through the harder ones. [...]',
        'I know waiting for the day we can finally be together in person takes strength. I see that strength in you every single day, in the way you show up for me despite the distance, in the way you keep loving me even from far away. [...]'
      ],
      closing: 'Always yours, always waiting,',
      signature: 'James'
    },
    {
      month: '2026-08',
      title: 'August 2026',
      greeting: 'To the love of my life,',
      paragraphs: [
        'It\'s been about two weeks since I moved to Davao, and these past few weeks with you in Davao have been nothing short of magic. All the time we spent apart was worth it since I got to see you in person again. [...]',
        'Thank you for spending so much time with me. Thank you for every moment we share, from the quiet mornings to the late nights filled with laughter. I\'m so glad that the hardest part is over, and that we get to be close again. [...]',
        'My heart is so full of love for you, Kinno. Not just because of the distance we have overcome, but because of who you are, how you love, and the life we are building together. The hardest part may be behind us, but my love for you keeps growing every day. [...]'
      ],
      closing: 'Always yours,',
      signature: 'James'
    },
    {
      month: '2026-09',
      title: 'September 2026',
      greeting: 'To the love of my life,',
      paragraphs: [
        'When I first met you, I thought nothing much of it. At first glance, you were just some cute guy who swiped right on me and chatted first. But somehow, I had a feeling that you were different. [...]',
        'From the very first chats we had, I could tell that you were special. You were thoughtful, kind, sweet, and caring, everything I\'ve been looking for in a man, all in one beautiful and gorgeous soul. [...]',
        'You are the most beautiful man I have ever met. Your eyes shine a glow that could spark a flame in the darkest of nights. Your smile could cheer me up anytime, and you truly do have the lips I could never stop thinking about. [...]',
        'You\'ve truly made me the happiest I\'ve ever been, but that isn\'t to say it\'s been smooth sailing these past few months. If anything, it\'s been the opposite. But all the time and effort you\'ve given me, all the love you keep pouring into us, has made every hard moment worth it. [...]',
        'I also want you to know that I love the little things about us - the random chats in the middle of the day, the way you always give time to update me even when you\'re busy, and how even the smallest moments with you feel meaningful. [...]',
        'There\'s a quiet kind of sweetness I\'ve come to treasure in you, too. The way you give your 100% whenever may special day tayo, the way your voice softens when I\'ve had a hard day, the way you make me feel safe and cared for. [...]',
        'I promise to keep showing up for you, to listen when you need someone to talk to, and to be as patient with you as you\'ve been with me. I know I\'m not perfect, hon, and I still have a lot to learn, but I want to keep growing with you. [...]',
        'The man of my dreams, the love of my life, I really, really, really love you, with all my heart and all my soul. You take up a whole lot of space in my mind, my heart, and my soul, if not all of it. [...]',
        'You are everything to me, hon. You are the cosmos, the sun, my universe. You fill me with endless joy and happiness, and I will forever be overjoyed that I get to be yours.'
      ],
      closing: 'Always yours,',
      signature: 'James'
    },
    {
      month: '2026-10',
      title: 'October 2026',
      greeting: 'To the love of my life,',
      paragraphs: [
        "One thing I don’t think I’ll ever be able to thank you enough for is how you’ve stayed by my side through everything. When I first got with you, I knew you were sweet, caring, and thoughtful, but I don’t think I fully understood just how much love you were capable of giving me until I started going through some of the hardest moments of my life. Through sickness and health, through the days when I feel like I have everything together and the days when I can barely keep myself together, you have continued to love me, support me, and remind me that I don’t have to face everything alone. And hon, I hope you know just how much that means to me.",
        "These past few months haven’t exactly been the easiest for me. I’ve had my fair share of struggles, whether it be mentally, physically, or financially, and there have been times when everything just feels so overwhelming. But somehow, even in the middle of all that, you manage to make things feel a little less scary. You reassure me when my mind gets too loud, comfort me when I’m not feeling well, and remind me that I’m still worthy of love even when I’m not feeling my best. You never have to be perfect or have all the answers, hon. Sometimes, just knowing that you’re there, that I have you to talk to and lean on, is already more than enough. You have no idea how many times your love has made a difficult day feel bearable.",
        "I love you so much for the little things you do, too. The way you check up on me, the way you listen to my worries even when they might seem insignificant, the way you try to make me feel better when I’m having a rough day, and the way you continue to make me feel loved even when we can’t be together physically all the time. I notice these things, hon. I notice the effort you put into us, the patience you give me, and the love you show me in ways that you might not even realize. I hope I never make you feel like those things go unnoticed because I cherish every single one of them. Every little act of kindness, every comforting word, every moment you choose to be there for me means more than I could ever properly explain.",
        "And I want you to know that I don’t just love you when things are easy. I don’t just love you when we’re happy, when we’re laughing, or when everything in our lives seems to be going right. I love you when you’re tired, when you’re stressed, when you’re having a bad day, and when you don’t feel like the best version of yourself. I love you when you need reassurance, when you need someone to listen, and when you need a little extra patience and understanding. I want to be there for you in the same way you’ve been there for me. I want to be someone you can turn to without hesitation, someone you can be completely honest with, and someone who makes you feel safe enough to be yourself. You deserve to receive all the love you’ve so generously given me, and I want to spend my time making sure you feel it.",
        "I know that love isn’t always going to be easy. There will be days when we’re both exhausted, days when we misunderstand each other, and days when life gets in the way of everything we want to do together. But I hope that even on those days, we remember why we chose each other in the first place. I hope we continue to choose patience over pride, understanding over assumptions, and communication over silence. I know I still have so much to learn, and I know there will be times when I make mistakes, but I promise that I’ll keep trying, keep growing, and keep working on myself so that I can love you better. Not because you ask me to be perfect, but because you mean so much to me that I want to give our relationship the care and effort it deserves.",
        "If there’s one thing I wish I could give you, it’s the ability to see yourself through my eyes. Maybe then you’d understand why I love you as much as I do. You’d see the wonderful person who makes my heart feel so full, the man whose presence brings me comfort, and the person whose happiness matters so much to me. You’d see someone who doesn’t have to do anything extraordinary to make me happy because, honestly, just being you is already enough. I love your heart, your kindness, your patience, your little quirks, and all the things that make you the person I fell for. I love you as a whole, not just the parts of you that you think are easy to love. And if I could choose someone to experience all the beautiful, messy, unpredictable parts of life with, I’d choose you over and over again.",
        "I want to be there when you’re healthy and full of energy, but I also want to be there when you’re sick and need someone to take care of you. I want to celebrate every accomplishment you achieve, but I also want to sit beside you when things don’t go according to plan. I want to share your happiest moments, but I want to help you through your saddest ones, too. I want to know what makes you laugh until your stomach hurts, what keeps you awake at night, what you’re afraid of, and what dreams you hope to achieve someday. I want to keep discovering new things about you, even years from now, when we think we already know everything about each other. I want to grow alongside you, learn alongside you, and build a life where we can both look back and say that despite everything we’ve been through, we made it through together.",
        "Hon, I love you to death. I really, really, really do. Sometimes, I genuinely struggle to put into words just how much you mean to me because no amount of paragraphs, promises, or sweet words could ever fully capture what’s in my heart. You’re so much more than just my boyfriend. You’re my comfort, my happiness, my favorite person to talk to, and one of the greatest blessings that has come into my life. You make me excited about the future in ways I never thought possible, and I can’t help but smile at the thought of all the little memories we still have to make. The dates, the late-night conversations, the silly conversations we’ll eventually laugh about, the days when we’ll have nothing planned except spending time together, and all the ordinary moments that will become special simply because I’ll get to experience them with you.",
        "Thank you for loving me when I’m not at my best. Thank you for being patient with me, for caring about my well-being, and for making me feel like I don’t have to earn your love by being happy and healthy all the time. Thank you for reminding me that even when life gets difficult, there are still beautiful things worth looking forward to. I hope I can give you even a fraction of the happiness you’ve given me, and I hope that as time goes by, I can show you more and more reasons to feel loved, appreciated, and cherished. You deserve so much goodness in this world, hon, and I genuinely hope I get to be part of that goodness for a very, very long time.",
        "I don’t know exactly what the future has in store for us, but I know that I want you to be part of mine. I want to keep choosing you through sickness and health, through the good days and the bad ones, through every unexpected twist life throws our way. I want us to look back on these early months someday and remember how we started, how we supported each other, and how our love grew into something even more beautiful than we could have imagined. And if life allows us to spend decades together, I hope that even when we’re older, I’ll still look at you with the same excitement and affection I feel for you now. I hope I’ll still find myself falling in love with you in all the little ways, over and over again.",
        "You are my favorite person, hon. My safe place, my sunshine on gloomy days, and the person I feel so incredibly lucky to call mine. I love you when you’re near, I love you when you’re far away, and I’ll keep loving you through every season of our lives. If I could ask for one thing, it would be for us to keep finding our way back to each other, no matter how difficult life gets. I want to keep making you happy, taking care of you, supporting your dreams, and reminding you that you never have to carry everything on your own. Just as you’ve been there for me, I want you to know that you have me, too.",
        "I’m so grateful that I get to love you, hon, and even more grateful that I get to be loved by you. If the universe is kind enough to let me have you for a lifetime, I’ll spend that lifetime doing my best to make it worth it. And if I had the chance to start all over again, to go back to the very beginning and choose all over again, I’d still choose you. Every single time. In every lifetime, in every universe, and in every version of this life where our paths could possibly cross, I would hope to find you again. I love you more than words could ever explain, more than these paragraphs could ever show, and more than I think you’ll ever truly realize. You are so, so precious to me, hon, and I’ll never stop being thankful that I get to call you mine. Here’s to us, to growing together, to loving each other through sickness and health, and to all the beautiful years we still have ahead of us. I love you to death, my love, and I hope I get to keep loving you for the rest of my life. : )"
      ],
      closing: 'Always yours,',
      signature: 'James'
    },
    ...[
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
      deleteBtn.style.cssText = 'position: absolute; top: 5px; right: 5px; background: rgba(0,0,0,0.7); color: white; border: none; border-radius: 50%; width: 30px; height: 30px; cursor: pointer; font-size: 1rem;';
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
