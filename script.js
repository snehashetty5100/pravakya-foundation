/**
 * PRAVAKYA FOUNDATION - INTERACTIVE SCRIPT
 * Multi-page navigation, scroll shrink header, news filtering, reader modal,
 * donation tiers, form validation, animated counters, and parallax.
 */

document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------------------------------
     1. ARTICLES DATABASE (For News Reader Modal)
     -------------------------------------------------------------------------- */
  const newsDatabase = {
    "1": {
      category: "Education",
      title: "Fun with Financials — Our First Conducted Programme",
      date: "2026",
      readTime: "Programme Overview",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1000&q=80",
      content: `
        <p>Fun with Financials is Pravakya Foundation's first conducted programme — and an early expression of what the Education pillar is designed to do: make learning practical, relevant and genuinely engaging.</p>
        <p>The programme is built for commerce students and designed around a simple idea: that finance doesn't have to feel distant or abstract. When students can see how concepts connect to real careers, real decisions and real markets, the classroom comes alive.</p>
        <blockquote class="article-blockquote">"We don't choose a student's path — we help them discover it." — Fun with Financials Programme Philosophy</blockquote>
        <p>What the programme covers:</p>
        <ul>
          <li><strong>Practical finance concepts</strong> and real-world applications drawn from corporate and market contexts.</li>
          <li><strong>Interactive team-based activities</strong> and structured problem-solving exercises that encourage participation.</li>
          <li><strong>Exposure to shares, stock market basics</strong> and the range of career pathways available in finance.</li>
          <li><strong>A learning environment</strong> designed to encourage curiosity rather than passive note-taking.</li>
        </ul>
        <p>The programme was conducted at Rotary Pre-University College, Moodbidire — an institutional setting with a strong focus on practical learning and student interaction. It was received with genuine enthusiasm and marked the beginning of Pravakya's work in the field.</p>
      `
    },
    "2": {
      category: "Foundation",
      title: "Pravakya Foundation — A Purpose-Driven Platform Explained",
      date: "2026",
      readTime: "Who We Are",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80",
      content: `
        <p>Pravakya Foundation is a purpose-driven initiative working at the intersection of <strong>Art, Education and Service</strong>. The name and the structure are both intentional — three distinct areas of work, held together by a single belief.</p>
        <p>That belief is this: <em>knowledge becomes meaningful when it can be applied, shared and transformed into action.</em></p>
        <p>Our three pillars:</p>
        <ul>
          <li><strong>Art & Culture</strong> — Understanding, experiencing and growing through theatre, performing arts, cultural experiences, creative development and platforms for artists and creators.</li>
          <li><strong>Education</strong> — Learning, applying and advancing through career awareness, financial literacy, professional readiness, communication skills and experiential learning.</li>
          <li><strong>Service</strong> — Caring, participating and contributing through community engagement, environmental awareness, civic responsibility, youth development and educational support.</li>
        </ul>
        <blockquote class="article-blockquote">"Education should go beyond classrooms, art should go beyond stages, and service should go beyond intention." — Pravakya Foundation</blockquote>
        <p>Pravakya is designed to be flexible. It can take the form of a workshop, a cultural event, a community initiative, a corporate programme or an institutional collaboration. The three pillars guide the work while leaving room for new initiatives as the foundation grows.</p>
        <p>This profile is intentionally transparent about where Pravakya is in its journey. Impact numbers, programme counts and reach will be added as they are genuinely achieved.</p>
      `
    },
    "3": {
      category: "Community",
      title: "In Practice — Fun with Financials at Rotary Pre-University College, Moodbidire",
      date: "2026",
      readTime: "Field Report",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1000&q=80",
      content: `
        <p>The first time Pravakya took its work into an institutional setting, it chose to do so at Rotary Pre-University College in Moodbidire — a college with a strong commerce faculty and students genuinely curious about where their education could take them.</p>
        <p>The session was structured around participation. Students weren't asked to sit and listen — they were asked to engage, question and work through problems together. Presentations, team-based activities and open discussions gave the room a pace that felt different from a standard lecture.</p>
        <blockquote class="article-blockquote">"The engagement we saw in that room told us everything we needed to know about why this kind of programme matters." — Pravakya Team</blockquote>
        <p>The collaboration was built on a strong focus on practical learning. The institutional setting provided the structure; Pravakya provided the content and the facilitation. Together, they created something that worked — and that left students with more than notes on a page.</p>
        <p>This was Pravakya's first conducted programme and an early proof that the model works. The foundation looks forward to building on it.</p>
      `
    },
    "4": {
      category: "Field Stories",
      title: "Youth Empowerment — Confidence, Leadership and Opportunity",
      date: "2026",
      readTime: "Programme Overview",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80",
      content: `
        <p>One of Pravakya's core commitments is to young people — not just as students, but as individuals who are in the process of discovering what they are capable of and what they want to contribute.</p>
        <p>Youth empowerment at Pravakya is not a vague ambition. It takes specific, practical forms:</p>
        <ul>
          <li><strong>Confidence building</strong> — through structured activities, public speaking opportunities and environments where participation is encouraged over performance.</li>
          <li><strong>Leadership development</strong> — through facilitated group work, problem-solving exercises and initiatives that put young people in decision-making roles.</li>
          <li><strong>Personality development</strong> — through communication skill-building, self-awareness activities and mentored experiences.</li>
        </ul>
        <blockquote class="article-blockquote">"The work is about helping young people find their voice — and then giving them a reason to use it." — Josith Shetty, Founder</blockquote>
        <p>Pravakya believes that opportunity matters as much as ability. We aim to create both — giving young people the skills to grow and the platforms to demonstrate that growth.</p>
      `
    },
    "5": {
      category: "Education",
      title: "Upcoming Education Programmes — PPT Master PRO, Career Compass & More",
      date: "2026",
      readTime: "Coming Soon",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80",
      content: `
        <p>Fun with Financials is just the beginning. Pravakya's Education pillar has a broader set of programmes in development, each built around the same core philosophy: learning that is practical, participatory and connected to the real world.</p>
        <p>Here is a preview of what's coming:</p>
        <ul>
          <li><strong>PPT Master PRO</strong> — A programme focused on professional presentation skills, designed for students and early-career professionals who want to communicate with clarity and confidence.</li>
          <li><strong>Professional Readiness Orientation</strong> — A structured introduction to workplace culture, professional communication and career readiness for students approaching the transition into work.</li>
          <li><strong>Win-Win Career Compass</strong> — A career awareness programme that helps students explore options, understand industries and make more informed decisions about their paths forward.</li>
          <li><strong>Objection My Lord!</strong> — A debate and argumentation programme built around critical thinking, structured reasoning and the ability to articulate a position clearly under pressure.</li>
        </ul>
        <blockquote class="article-blockquote">"Every programme we build starts with a question: what does this person actually need to know, and how do we make sure they leave with it?" — Shrikantta Rao, Co-Founder</blockquote>
        <p>These programmes are designed for educational institutions, corporate settings and community platforms. If you are interested in hosting one or exploring a collaboration, reach out through the Contact page.</p>
      `
    },
    "6": {
      category: "Annual Reports",
      title: "Partner With Pravakya — Host, Collaborate, Volunteer or Support",
      date: "2026",
      readTime: "Partnership Guide",
      image: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=1000&q=80",
      content: `
        <p>Pravakya Foundation is built for collaboration. This isn't just a statement about values — it's built into the way the foundation works. Every programme we design is better when it happens in partnership with people and institutions who bring their own context, expertise and community.</p>
        <p>Here are the main ways to get involved:</p>
        <ul>
          <li><strong>Host a programme</strong> — Invite Pravakya to conduct a programme at your college, school or organisation. We'll work with you on format, content and logistics to make sure it fits your context.</li>
          <li><strong>Collaborate on an initiative</strong> — If you have an idea for an educational, cultural or community project and want a partner to help design and deliver it, let's talk.</li>
          <li><strong>Become a speaker</strong> — Share your professional knowledge and experience through a Pravakya platform. We bring the audience; you bring the insight.</li>
          <li><strong>Volunteer</strong> — Support a programme, assist with an event or contribute your skills to a social initiative. There are many ways to be useful.</li>
          <li><strong>Institutional or CSR partnerships</strong> — For organisations looking for meaningful social impact projects, Pravakya can work within your CSR framework to design and deliver relevant programmes.</li>
        </ul>
        <blockquote class="article-blockquote">"Art. Education. Service. — Learn. Express. Contribute." — Pravakya Foundation</blockquote>
        <p>If any of these sound right for you, reach out through the Contact page. We'll respond and take it from there.</p>
      `
    }
  };

  /* --------------------------------------------------------------------------
     2. MULTI-PAGE HASH ROUTING SYSTEM
     -------------------------------------------------------------------------- */
  const pages = document.querySelectorAll('.page-section');
  const navLinks = document.querySelectorAll('.nav-link');
  const pageNavBtns = document.querySelectorAll('.page-nav-btn');
  const mainNav = document.getElementById('main-nav');
  const mobileToggle = document.getElementById('mobile-toggle');

  function switchPage(pageId) {
    if (!pageId) pageId = 'home';
    
    // Normalize pageId
    pageId = pageId.replace('#', '');
    const targetPage = document.getElementById(`page-${pageId}`);

    if (!targetPage) return;

    // Toggle active page
    pages.forEach(page => {
      page.classList.remove('active');
    });
    targetPage.classList.add('active');

    // Update nav links active state
    navLinks.forEach(link => {
      if (link.getAttribute('data-page') === pageId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Update indicator spotlight position
    updateNavIndicator();

    // Close mobile drawer if open
    if (mainNav && mainNav.classList.contains('active')) {
      mainNav.classList.remove('active');
      mobileToggle.classList.remove('active');
    }

    // Smooth scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Re-trigger counter animations if home page
    if (pageId === 'home') {
      initCounterAnimation();
    }
  }

  // Handle URL Hash Changes
  function handleHashChange() {
    const hash = window.location.hash.substring(1) || 'home';
    switchPage(hash);
  }

  window.addEventListener('hashchange', handleHashChange);
  
  // Page nav buttons click event
  document.querySelectorAll('[data-page]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const pageTarget = btn.getAttribute('data-page');
      if (pageTarget) {
        window.location.hash = pageTarget;
      }
    });
  });

  // Initial load check
  handleHashChange();

  /* --------------------------------------------------------------------------
     3. NAVIGATION INDICATOR SPOTLIGHT
     -------------------------------------------------------------------------- */
  const navIndicator = document.getElementById('nav-indicator');

  function updateNavIndicator() {
    if (!navIndicator) return;
    const activeLink = document.querySelector('.nav-link.active');
    if (activeLink && window.innerWidth > 768) {
      const rect = activeLink.getBoundingClientRect();
      const parentRect = activeLink.parentElement.parentElement.getBoundingClientRect();
      navIndicator.style.width = `${rect.width}px`;
      navIndicator.style.left = `${rect.left - parentRect.left}px`;
      navIndicator.classList.add('active');
    } else {
      navIndicator.classList.remove('active');
    }
  }

  window.addEventListener('resize', updateNavIndicator);
  setTimeout(updateNavIndicator, 200);

  /* --------------------------------------------------------------------------
     4. SHRINKING STICKY HEADER
     -------------------------------------------------------------------------- */
  const header = document.getElementById('site-header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('shrunk');
    } else {
      header.classList.remove('shrunk');
    }
  });

  // Mobile Menu Toggle
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      mainNav.classList.toggle('active');
    });
  }

  /* --------------------------------------------------------------------------
     5. HERO TREE PARALLAX / MOUSE TILT
     -------------------------------------------------------------------------- */
  const heroTreeContainer = document.getElementById('hero-tree-container');
  const heroSection = document.querySelector('.hero-section');

  if (heroSection && heroTreeContainer) {
    heroSection.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroSection.getBoundingClientRect();
      const xVal = (clientX - left - width / 2) / 35;
      const yVal = (clientY - top - height / 2) / 35;

      heroTreeContainer.style.transform = `translate3d(${xVal}px, ${yVal}px, 0) rotate(${xVal * 0.1}deg)`;
    });

    heroSection.addEventListener('mouseleave', () => {
      heroTreeContainer.style.transform = 'translate3d(0, 0, 0) rotate(0deg)';
    });
  }

  /* --------------------------------------------------------------------------
     6. ANIMATED IMPACT COUNTERS
     -------------------------------------------------------------------------- */
  let countersAnimated = false;

  function initCounterAnimation() {
    const counterElements = document.querySelectorAll('.counter-val');
    if (!counterElements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersAnimated) {
          countersAnimated = true;
          counterElements.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'), 10);
            let current = 0;
            const duration = 2000;
            const stepTime = 30;
            const increment = Math.ceil(target / (duration / stepTime));

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                counter.textContent = target.toLocaleString();
                clearInterval(timer);
              } else {
                counter.textContent = current.toLocaleString();
              }
            }, stepTime);
          });
        }
      });
    }, { threshold: 0.3 });

    const counterSection = document.querySelector('.impact-counter-section');
    if (counterSection) observer.observe(counterSection);
  }

  initCounterAnimation();

  /* --------------------------------------------------------------------------
     7. NEWS CATEGORY FILTERING & SEARCH
     -------------------------------------------------------------------------- */
  const catPills = document.querySelectorAll('.cat-pill');
  const searchInput = document.getElementById('news-search-input');
  const newsCards = document.querySelectorAll('#news-cards-container .news-card');

  function filterNews() {
    const activeCat = document.querySelector('.cat-pill.active')?.getAttribute('data-category') || 'all';
    const searchQuery = searchInput ? searchInput.value.toLowerCase().trim() : '';

    newsCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      const titleText = card.querySelector('.news-title').textContent.toLowerCase();
      const excerptText = card.querySelector('.news-excerpt').textContent.toLowerCase();

      const matchesCat = (activeCat === 'all' || cardCategory === activeCat);
      const matchesSearch = (!searchQuery || titleText.includes(searchQuery) || excerptText.includes(searchQuery));

      if (matchesCat && matchesSearch) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  catPills.forEach(pill => {
    pill.addEventListener('click', () => {
      catPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      filterNews();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', filterNews);
  }

  /* --------------------------------------------------------------------------
     8. NEWS READER MODAL
     -------------------------------------------------------------------------- */
  const newsModal = document.getElementById('news-modal');
  const closeNewsModal = document.getElementById('close-news-modal');
  const articleReaderBody = document.getElementById('article-reader-body');

  function openArticleModal(articleId) {
    const article = newsDatabase[articleId];
    if (!article || !articleReaderBody) return;

    articleReaderBody.innerHTML = `
      <div class="article-header">
        <span class="article-cat">${article.category}</span>
        <h1 id="news-modal-title" class="article-title-heading">${article.title}</h1>
        <div class="article-meta-row">
          <span>📅 ${article.date}</span>
          <span>•</span>
          <span>⏱️ ${article.readTime}</span>
          <span>•</span>
          <span>By Pravakya Editorial Team</span>
        </div>
      </div>

      <img src="${article.image}" alt="${article.title}" class="article-cover-img">

      <div class="article-body-text">
        ${article.content}
      </div>
    `;

    newsModal.classList.add('active');
    newsModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.read-article-btn');
    if (btn) {
      const articleId = btn.getAttribute('data-id');
      openArticleModal(articleId);
    }
  });

  if (closeNewsModal) {
    closeNewsModal.addEventListener('click', () => {
      newsModal.classList.remove('active');
      newsModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  }

  if (newsModal) {
    newsModal.addEventListener('click', (e) => {
      if (e.target === newsModal) {
        newsModal.classList.remove('active');
        newsModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    });
  }

  /* --------------------------------------------------------------------------
     9. DONATE / GET INVOLVED MODAL & TIERS
     -------------------------------------------------------------------------- */
  const donateModal = document.getElementById('donate-modal');
  const openDonateBtns = document.querySelectorAll('.open-donate-trigger, #open-donate-modal');
  const closeDonateModal = document.getElementById('close-donate-modal');
  const tierCards = document.querySelectorAll('.tier-card');
  const customAmtInput = document.getElementById('custom-amt-input');
  const freqTabs = document.querySelectorAll('.freq-tab');
  const donateForm = document.getElementById('donate-form');

  openDonateBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      donateModal.classList.add('active');
      donateModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  if (closeDonateModal) {
    closeDonateModal.addEventListener('click', () => {
      donateModal.classList.remove('active');
      donateModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  }

  if (donateModal) {
    donateModal.addEventListener('click', (e) => {
      if (e.target === donateModal) {
        donateModal.classList.remove('active');
        donateModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    });
  }

  // Tier Card Selection
  tierCards.forEach(card => {
    card.addEventListener('click', () => {
      tierCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      if (customAmtInput) customAmtInput.value = '';
    });
  });

  if (customAmtInput) {
    customAmtInput.addEventListener('input', () => {
      if (customAmtInput.value.length > 0) {
        tierCards.forEach(c => c.classList.remove('active'));
      }
    });
  }

  // Frequency tabs
  freqTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      freqTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // Handle Donation Submit
  if (donateForm) {
    donateForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const activeTier = document.querySelector('.tier-card.active');
      const amount = customAmtInput && customAmtInput.value ? customAmtInput.value : (activeTier ? activeTier.getAttribute('data-amount') : '1500');
      const name = document.getElementById('donor-name').value;

      donateModal.classList.remove('active');
      document.body.style.overflow = '';

      showToast(`Thank you, ${name}! Your interest has been noted. The Pravakya team will be in touch with you soon.`);
      donateForm.reset();
    });
  }

  /* --------------------------------------------------------------------------
     10. CONTACT FORM VALIDATION & TOAST
     -------------------------------------------------------------------------- */
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const subjectInput = document.getElementById('contact-subject');
      const msgInput = document.getElementById('contact-msg');

      let isValid = true;

      // Reset errors
      document.querySelectorAll('.form-group').forEach(g => g.classList.remove('has-error'));

      if (!nameInput.value.trim()) {
        nameInput.parentElement.classList.add('has-error');
        isValid = false;
      }

      if (!emailInput.value.trim() || !emailInput.value.includes('@')) {
        emailInput.parentElement.classList.add('has-error');
        isValid = false;
      }

      if (!subjectInput.value) {
        subjectInput.parentElement.classList.add('has-error');
        isValid = false;
      }

      if (!msgInput.value.trim()) {
        msgInput.parentElement.classList.add('has-error');
        isValid = false;
      }

      if (isValid) {
        const senderName = nameInput.value.trim();
        showToast(`Thank you ${senderName}! Your message has been sent to our leadership team. We will respond within 24 hours.`);
        contactForm.reset();
      }
    });
  }

  // Newsletter Submit
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('newsletter-email').value;
      showToast(`Subscribed! ${email} has been added to our quarterly field update journal.`);
      newsletterForm.reset();
    });
  }

  /* --------------------------------------------------------------------------
     11. TOAST NOTIFICATION UTILITY
     -------------------------------------------------------------------------- */
  function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <div class="toast-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      </div>
      <div class="toast-message">${message}</div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.4s ease';
      setTimeout(() => toast.remove(), 400);
    }, 4500);
  }

});
