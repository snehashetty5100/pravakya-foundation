/**
 * PRAVAKYA FOUNDATION - CORE APPLICATION SCRIPT
 * Multi-page navigation, scroll header, news filtering, rich article modal reader,
 * session photo lightbox, donation tiers, form validation, animated counters.
 */

document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------------------------------
     1. ARTICLES DATABASE
     Divisions: Education, Art, Service
     -------------------------------------------------------------------------- */
  const newsDatabase = {
    "1": {
      category: "Education",
      divisionBadge: "Education Division",
      flagshipBadge: "First Conducted Programme",
      codeBadge: "SS0326",
      title: "Fun with Financials — Making Finance Practical & Meaningful",
      leadSubtitle: "An interactive financial literacy workshop connecting commerce students to real-world business economics, stock market fundamentals, and career opportunities in finance.",
      date: "Conducted Programme 01",
      readTime: "Education Pillar",
      institution: "Rotary Pre-University College, Moodubidire (SS0326)",
      targetAudience: "Pre-University Commerce Students",
      speaker: "Shrikantta Rao (Finance & Markets)",
      image: "assets/fun_with_financials_1.webp",
      content: `
        <div class="modal-intro-card">
          <h3 class="modal-subheading">About the Programme</h3>
          <p>
            At Pravakya Foundation, our Education pillar is rooted in the belief that <em>learning should not stop with textbooks, examinations, or certificates</em>. We believe education becomes genuinely empowering when students connect foundational principles with lived experience and practical reality.
          </p>
          <p>
            <strong>Fun with Financials</strong> was conceptualised and delivered as a high-energy, interactive workshop for commerce students at <strong>Rotary Pre-University College, Moodubidire</strong> (College Code: SS0326). Instead of dry theoretical accounting lectures, the session transformed financial concepts into tangible challenges, puzzles, unit economics calculations, and open auditorium discussions.
          </p>
        </div>

        <blockquote class="article-blockquote">
          "Education becomes meaningful when young minds discover that finance is not a scary ledger of rules, but a practical language for making smart choices in life and business."
          <span class="quote-author">— Pravakya Foundation Education Initiative</span>
        </blockquote>

        <h3 class="modal-subheading" style="margin-top: 32px;">Core Programme Modules &amp; Highlights</h3>
        
        <div class="modal-highlight-cards">
          <div class="highlight-feature-card">
            <div class="highlight-card-header">
              <span class="highlight-icon">📊</span>
              <h4>Income Statements &amp; Grassroots Business Math</h4>
            </div>
            <p>
              Students broke down real-world income statements using intuitive examples like local tea shop and small enterprise economics — exploring revenue streams, fixed vs variable costs, overheads, margins, gross profit, and net profit.
            </p>
          </div>

          <div class="highlight-feature-card">
            <div class="highlight-card-header">
              <span class="highlight-icon">📈</span>
              <h4>Stock Markets &amp; Career Possibilities in Finance</h4>
            </div>
            <p>
              Special speaker session led by <strong>Shrikantta Rao</strong>, demystifying the fundamentals of Indian equity markets, how companies raise capital, and charting practical career roadmaps across banking, corporate advisory, and entrepreneurship.
            </p>
          </div>

          <div class="highlight-feature-card">
            <div class="highlight-card-header">
              <span class="highlight-icon">🧩</span>
              <h4>Interactive Fun-Time Activities &amp; Team Puzzles</h4>
            </div>
            <p>
              Full auditorium participation with interactive group puzzles, financial quizzes, competitive team exercises, and rapid problem-solving — proving that commerce learning can be exhilarating and collaborative.
            </p>
          </div>

          <div class="highlight-feature-card">
            <div class="highlight-card-header">
              <span class="highlight-icon">🤝</span>
              <h4>Institutional Partnership &amp; Felicitation</h4>
            </div>
            <p>
              Conducted in close collaboration with the leadership and faculty of Rotary Pre-University College, who welcomed the Pravakya team with a floral presentation and token of appreciation for bringing practical learning to their campus.
            </p>
          </div>
        </div>

        <div class="modal-gallery-section" style="margin-top: 40px;">
          <div class="modal-gallery-header">
            <div>
              <h3 class="modal-subheading" style="margin-bottom: 4px;">Session Photo Gallery — Rotary PU College, Moodubidire</h3>
              <p class="gallery-subtext">Click on any photo below to view full-screen in high resolution</p>
            </div>
            <span class="gallery-count-pill">5 High-Res Photos</span>
          </div>

          <div class="modal-gallery-grid">
            <div class="modal-gallery-card" onclick="openImageLightbox('assets/fun_with_financials_1.webp', 'Income Statement Presentation — Practical Economics at Rotary PU College')">
              <div class="modal-gallery-thumb-wrap">
                <img src="assets/fun_with_financials_1.webp" alt="Income Statement presentation" class="modal-gallery-img">
                <span class="modal-zoom-hint">🔍 Expand</span>
              </div>
              <div class="modal-gallery-caption">
                <strong>1. Income Statement Breakdown</strong>
                <p>Explaining financial statements with tea-stall unit economics and real numbers.</p>
              </div>
            </div>

            <div class="modal-gallery-card" onclick="openImageLightbox('assets/fun_with_financials_2.webp', 'Interactive Fun Time Session — Full Auditorium Activity at Rotary PU College')">
              <div class="modal-gallery-thumb-wrap">
                <img src="assets/fun_with_financials_2.webp" alt="Auditorium Activity Session" class="modal-gallery-img">
                <span class="modal-zoom-hint">🔍 Expand</span>
              </div>
              <div class="modal-gallery-caption">
                <strong>2. Auditorium Activity &amp; Team Fun Time</strong>
                <p>High student participation in interactive financial exercises and team challenges.</p>
              </div>
            </div>

            <div class="modal-gallery-card" onclick="openImageLightbox('assets/fun_with_financials_3.webp', 'Live Classroom View — Interactive Slides and Engaged Commerce Students')">
              <div class="modal-gallery-thumb-wrap">
                <img src="assets/fun_with_financials_3.webp" alt="Live Classroom Interaction" class="modal-gallery-img">
                <span class="modal-zoom-hint">🔍 Expand</span>
              </div>
              <div class="modal-gallery-caption">
                <strong>3. Live Classroom Interaction</strong>
                <p>Engaging commerce students with slide discussions and participatory dialogue.</p>
              </div>
            </div>

            <div class="modal-gallery-card" onclick="openImageLightbox('assets/fun_with_financials_4.webp', 'Stock Market &amp; Career in Finance Session by Shrikantta Rao')">
              <div class="modal-gallery-thumb-wrap">
                <img src="assets/fun_with_financials_4.webp" alt="Basics of Stock &amp; Career in Finance" class="modal-gallery-img">
                <span class="modal-zoom-hint">🔍 Expand</span>
              </div>
              <div class="modal-gallery-caption">
                <strong>4. Basics of Stock &amp; Career in Finance</strong>
                <p>Shrikantta Rao explaining equity markets, investments, and corporate finance paths.</p>
              </div>
            </div>

            <div class="modal-gallery-card" onclick="openImageLightbox('assets/fun_with_financials_5.webp', 'Floral Welcome &amp; Institutional Felicitation by Rotary PU College Faculty')">
              <div class="modal-gallery-thumb-wrap">
                <img src="assets/fun_with_financials_5.webp" alt="Institutional Felicitation" class="modal-gallery-img">
                <span class="modal-zoom-hint">🔍 Expand</span>
              </div>
              <div class="modal-gallery-caption">
                <strong>5. Institutional Welcome &amp; Felicitation</strong>
                <p>Floral welcome and token of appreciation presented by Rotary PU College faculty.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-cta-box" style="margin-top: 40px;">
          <div class="modal-cta-content">
            <h4>Bring "Fun with Financials" to Your College or School</h4>
            <p>Pravakya Foundation partners with educational institutions to conduct interactive workshops in practical finance, career readiness, and legal awareness.</p>
          </div>
          <button class="btn btn-primary open-donate-trigger" type="button">
            <span>Collaborate With Us</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      `
    },
    "2": {
      category: "Education",
      divisionBadge: "Education Division",
      flagshipBadge: "Interactive Legal Program",
      title: "Objection My Lord — Understanding Law Through Experience",
      leadSubtitle: "An introduction to basic legal concepts through learning, discussion, real-life examples, and mock-court experiences.",
      date: "Program 02",
      readTime: "Education Pillar",
      institution: "Schools & Pre-University Colleges",
      targetAudience: "Students & Youth",
      speaker: "Legal Practitioners & Educators",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1000&q=80",
      content: `
        <div class="modal-intro-card">
          <h3 class="modal-subheading">Understanding Law Beyond Textbooks</h3>
          <p>
            Law governs everyday life, yet most students only experience it as distant jargon or frightening statutes. <strong>Objection My Lord</strong> introduces students to the foundational structure of rights, civil duties, consumer law, and the judicial process in an approachable, engaging manner.
          </p>
        </div>
        <blockquote class="article-blockquote">"Connecting knowledge with real-world situations and practical understanding." — Pravakya Foundation</blockquote>
        
        <h4 class="modal-section-heading">Key Highlights of the Program:</h4>
        <ul class="modal-bullet-list">
          <li><strong>Everyday Legal Literacy:</strong> Consumer rights, digital privacy, cyber laws, and constitutional fundamentals.</li>
          <li><strong>Mock-Court Simulations:</strong> Hands-on roleplay where students act as judges, advocates, and witnesses to solve simulated cases.</li>
          <li><strong>Critical Reasoning & Debate:</strong> Fostering analytical argumentation, evidence-based reasoning, and public speaking.</li>
        </ul>
      `
    },
    "3": {
      category: "Education",
      divisionBadge: "Education Division",
      flagshipBadge: "Career Direction Workshop",
      title: "Win-Win Career Compass — Helping Students Think About Their Future",
      leadSubtitle: "A career-awareness and orientation program that helps students explore academic pathways, industry expectations, and emerging opportunities.",
      date: "Program 03",
      readTime: "Education Pillar",
      institution: "Higher Secondary & Pre-University Colleges",
      targetAudience: "Class 10, 11 & 12 Students",
      speaker: "Career Mentors & Industry Leaders",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80",
      content: `
        <div class="modal-intro-card">
          <h3 class="modal-subheading">Navigating Choices With Clarity</h3>
          <p>
            With rapidly evolving career landscapes, students frequently face decision paralysis or rely solely on conventional paths. <strong>Win-Win Career Compass</strong> guides students through structured self-reflection, aptitude alignment, and real-world industry roadmaps.
          </p>
        </div>
        <blockquote class="article-blockquote">"Helping people connect knowledge with real-world opportunities." — Pravakya Foundation</blockquote>
        
        <h4 class="modal-section-heading">Key Highlights of the Program:</h4>
        <ul class="modal-bullet-list">
          <li><strong>Aptitude & Passion Mapping:</strong> Discovering natural strengths and translating them into sustainable career tracks.</li>
          <li><strong>Beyond Traditional Streams:</strong> Insights into emerging professions in tech, creative arts, sustainable business, and social enterprise.</li>
          <li><strong>Mentorship & Goal Roadmapping:</strong> Actionable milestones for higher education, competitive exams, and skill development.</li>
        </ul>
      `
    },
    "4": {
      category: "Education",
      divisionBadge: "Education Division",
      flagshipBadge: "Career Readiness Programme",
      title: "PRO — Professional Readiness Orientation",
      leadSubtitle: "A career-readiness programme by Pravakya Foundation designed to prepare college students for the transition from campus to the professional world.",
      date: "Program 02",
      readTime: "Education Pillar",
      institution: "Colleges & Higher Education Institutions",
      targetAudience: "College Students & Graduating Batches",
      speaker: "Pravakya Career Mentors & Industry Evaluators",
      image: "assets/pro_readiness_3.webp",
      content: `
        <div class="modal-intro-card">
          <h3 class="modal-subheading">About the Programme</h3>
          <p>
            <strong>PRO (Professional Readiness Orientation)</strong> is a career-readiness programme by <strong>Pravakya Foundation</strong> designed to prepare college students for the transition from campus to the professional world. The programme focuses on practical skills that help students become confident, employable, and workplace-ready.
          </p>
          <p>
            It includes resume building, interview preparation, mock interviews, communication skills, professional etiquette, presentation skills, group discussions, and workplace expectations. Through interactive sessions and practical activities, PRO gives students an opportunity to understand what employers look for and how to present themselves effectively.
          </p>
        </div>

        <blockquote class="article-blockquote">
          "PRO helps students move from <strong>“I am a graduate”</strong> to <strong>“I am ready for the workplace.”</strong>"
          <span class="quote-author">— Pravakya Foundation</span>
        </blockquote>

        <h3 class="modal-subheading" style="margin-top: 32px;">Core Focus Areas &amp; Practical Modules</h3>
        
        <div class="modal-highlight-cards">
          <div class="highlight-feature-card">
            <div class="highlight-card-header">
              <span class="highlight-icon">📄</span>
              <h4>Resume Building &amp; Profiling</h4>
            </div>
            <p>
              Crafting clear, professional, impact-driven resumes that showcase academic projects, skills, and strengths while eliminating common formatting errors.
            </p>
          </div>

          <div class="highlight-feature-card">
            <div class="highlight-card-header">
              <span class="highlight-icon">🎯</span>
              <h4>Interview Preparation &amp; Mock Interviews</h4>
            </div>
            <p>
              Simulated 1-on-1 mock interviews putting students face-to-face with mentors, testing situational responses, and providing personalized constructive feedback.
            </p>
          </div>

          <div class="highlight-feature-card">
            <div class="highlight-card-header">
              <span class="highlight-icon">👔</span>
              <h4>Communication &amp; Professional Etiquette</h4>
            </div>
            <p>
              Cultivating poise, body language, active listening, grooming, interview decorum, and understanding real-world corporate expectations.
            </p>
          </div>

          <div class="highlight-feature-card">
            <div class="highlight-card-header">
              <span class="highlight-icon">🗣️</span>
              <h4>Presentation Skills &amp; Group Discussions</h4>
            </div>
            <p>
              Practicing structured speech, articulating viewpoints effectively in group discussion rounds, and handling counter-arguments with confidence.
            </p>
          </div>
        </div>

        <div class="modal-gallery-section" style="margin-top: 40px;">
          <div class="modal-gallery-header">
            <div>
              <h3 class="modal-subheading" style="margin-bottom: 4px;">Session Photo Gallery — PRO in Action</h3>
              <p class="gallery-subtext">Click on any photo below to view in full resolution</p>
            </div>
            <span class="gallery-count-pill">4 Session Photos</span>
          </div>

          <div class="modal-gallery-grid">
            <div class="modal-gallery-card" onclick="openImageLightbox('assets/pro_readiness_3.png', '1-on-1 Mock Interview Session & Resume Review')">
              <div class="modal-gallery-thumb-wrap">
                <img src="assets/pro_readiness_3.png" alt="1-on-1 Mock Interview Session" class="modal-gallery-img">
                <span class="modal-zoom-hint">🔍 Expand</span>
              </div>
              <div class="modal-gallery-caption">
                <strong>1. 1-on-1 Mock Interview Evaluation</strong>
                <p>Simulating real job interview rounds with practical questioning and direct resume feedback.</p>
              </div>
            </div>

            <div class="modal-gallery-card" onclick="openImageLightbox('assets/pro_readiness_4.png', 'Classroom Mock Interview & Communication Coaching')">
              <div class="modal-gallery-thumb-wrap">
                <img src="assets/pro_readiness_4.png" alt="Mock Interview Communication Coaching" class="modal-gallery-img">
                <span class="modal-zoom-hint">🔍 Expand</span>
              </div>
              <div class="modal-gallery-caption">
                <strong>2. Individual Assessment & Confidence</strong>
                <p>Helping students practice composure, eye contact, and articulate communication.</p>
              </div>
            </div>

            <div class="modal-gallery-card" onclick="openImageLightbox('assets/pro_readiness_1.webp', 'Faculty Collaboration & Department Consultation')">
              <div class="modal-gallery-thumb-wrap">
                <img src="assets/pro_readiness_1.webp" alt="Faculty and Mentor Consultation" class="modal-gallery-img">
                <span class="modal-zoom-hint">🔍 Expand</span>
              </div>
              <div class="modal-gallery-caption">
                <strong>3. Academic & Department Consultation</strong>
                <p>Partnering with college faculty to tailor career orientation to students academic streams.</p>
              </div>
            </div>

            <div class="modal-gallery-card" onclick="openImageLightbox('assets/pro_readiness_2.webp', 'Institutional Leadership & Team Discussion')">
              <div class="modal-gallery-thumb-wrap">
                <img src="assets/pro_readiness_2.webp" alt="Institutional Leadership Meeting" class="modal-gallery-img">
                <span class="modal-zoom-hint">🔍 Expand</span>
              </div>
              <div class="modal-gallery-caption">
                <strong>4. Institutional Alignment & Partnership</strong>
                <p>Meeting with college management to establish sustained campus employability initiatives.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-cta-box" style="margin-top: 40px;">
          <div class="modal-cta-content">
            <h4>Bring PRO (Professional Readiness Orientation) to Your College</h4>
            <p>Help your students make the transition from “I am a graduate” to “I am ready for the workplace.” Partner with Pravakya Foundation for campus career readiness.</p>
          </div>
          <button class="btn btn-primary open-donate-trigger" type="button">
            <span>Host PRO on Campus</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      `
    },
    "5": {
      category: "Education",
      divisionBadge: "Education Division",
      flagshipBadge: "Public Speaking & Communication",
      title: "PPT Master — Present With Confidence",
      leadSubtitle: "A presentation-skills program focusing on narrative structure, body language, gestures, voice modulation, audience engagement, content delivery, and live feedback.",
      date: "Program 05",
      readTime: "Education Pillar",
      institution: "Schools, Colleges & Training Centers",
      targetAudience: "Students & Young Professionals",
      speaker: "Public Speaking Coaches & Theatre Artists",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1000&q=80",
      content: `
        <div class="modal-intro-card">
          <h3 class="modal-subheading">Unlocking Personal Presence</h3>
          <p>
            Whether pitching an idea, defending a college project, or speaking before a crowd, effective presentation is a superpower. <strong>PPT Master</strong> combines theatre techniques, storytelling frameworks, and visual design to make every participant an articulate presenter.
          </p>
        </div>
        <blockquote class="article-blockquote">"Building self-discovery, communication, and confidence." — Pravakya Foundation</blockquote>
        
        <h4 class="modal-section-heading">Key Highlights of the Program:</h4>
        <ul class="modal-bullet-list">
          <li><strong>Storytelling Architecture:</strong> Structuring presentations with clear hooks, narrative arcs, and memorable conclusions.</li>
          <li><strong>Voice, Body & Stage Presence:</strong> Breathing exercises, posture alignment, eye contact, and stage freedom.</li>
          <li><strong>Live Simulated Deliveries:</strong> Rapid 3-minute presentations with constructive, encouraging real-time feedback.</li>
        </ul>
      `
    },
    "6": {
      category: "Art",
      divisionBadge: "Art Division",
      flagshipBadge: "Creative Dialogues & Culture",
      title: "Pravakya Voices — Ideas. Experiences. Conversations.",
      leadSubtitle: "A platform for meaningful conversations bringing together speakers, artists, professionals, educators, and individuals to share stories, knowledge, perspectives, and ideas.",
      date: "Program 06",
      readTime: "Art Pillar",
      institution: "Community Hubs & Auditoriums",
      targetAudience: "Creative Thinkers, Artists & Public",
      speaker: "Writers, Theatre Artists & Thought Leaders",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80",
      content: `
        <div class="modal-intro-card">
          <h3 class="modal-subheading">Where Perspectives Converge</h3>
          <p>
            Through our work in <strong>Art</strong>, we promote creativity, theatre, culture, self-discovery, and communication while creating awareness of the role of art in understanding our roots and shaping human empathy.
          </p>
        </div>
        <blockquote class="article-blockquote">"A space where artists, educators, students, professionals, and institutions come together." — Pravakya Foundation</blockquote>
        
        <h4 class="modal-section-heading">Key Highlights of the Program:</h4>
        <ul class="modal-bullet-list">
          <li><strong>Experiential Speaker Talks:</strong> Diverse perspectives on arts, local heritage, literature, and social philosophy.</li>
          <li><strong>Theatre & Cultural Dialogues:</strong> Exploring traditional and modern storytelling mediums that preserve cultural heritage.</li>
          <li><strong>Open Community Salons:</strong> Intimate roundtables encouraging reflective civic discussion and artistic expression.</li>
        </ul>
      `
    },
    "7": {
      category: "Service",
      divisionBadge: "Service Division",
      flagshipBadge: "In Active Development",
      title: "Service & Civic Initiatives — Betterment of Society",
      leadSubtitle: "Our Service division encourages individuals and youth to use their skills, knowledge, and time for environmental care, civic responsibility, and community empowerment.",
      date: "Division 03",
      readTime: "Service Pillar",
      institution: "Communities & Youth Groups",
      targetAudience: "Youth Volunteers & Citizens",
      speaker: "Community Leaders & Volunteers",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1000&q=80",
      content: `
        <div class="modal-intro-card">
          <h3 class="modal-subheading">Service Initiatives In Development</h3>
          <p>
            Service is the third core pillar of Pravakya Foundation. We believe that knowledge and skills become most meaningful when they are shared for the benefit of others and the wider community.
          </p>
          <p>
            Our dedicated <strong>Service initiatives are currently in active development</strong>. We are in dialogue with local colleges, environmental groups, and youth volunteers to launch our inaugural civic engagement drives soon.
          </p>
        </div>
        <blockquote class="article-blockquote">"Service is about understanding that our knowledge, time, skills, and abilities can also be used for the benefit of others and society." — Pravakya Foundation</blockquote>
        
        <h4 class="modal-section-heading">Planned Focus Areas:</h4>
        <ul class="modal-bullet-list">
          <li><strong>Youth Civic Engagement:</strong> Empowering students to actively solve local community challenges.</li>
          <li><strong>Environmental Awareness:</strong> Local ecosystem stewardship, tree planting drives, and sustainability workshops.</li>
          <li><strong>Mentorship for Underprivileged Learners:</strong> Connecting skilled youth with school students needing academic support.</li>
        </ul>

        <div class="modal-cta-box" style="margin-top: 32px;">
          <div class="modal-cta-content">
            <h4>Have an Idea for a Community Service Initiative?</h4>
            <p>We welcome institutions, volunteers, and NGOs who want to collaborate on meaningful service projects.</p>
          </div>
          <button class="btn btn-primary open-donate-trigger" type="button">
            <span>Collaborate With Us</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      `
    }
  };

  /* --------------------------------------------------------------------------
     2. DOM ELEMENTS CACHE (Safe Top-Level Initialization)
     -------------------------------------------------------------------------- */
  const pages = document.querySelectorAll('.page-section');
  const navLinks = document.querySelectorAll('.nav-link');
  const mainNav = document.getElementById('main-nav');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navIndicator = document.getElementById('nav-indicator');
  const header = document.getElementById('site-header');
  const heroTreeContainer = document.getElementById('hero-tree-container');
  const heroSection = document.querySelector('.hero-section');
  const catPills = document.querySelectorAll('.cat-pill');
  const searchInput = document.getElementById('news-search-input');
  const newsCards = document.querySelectorAll('#news-cards-container .news-card');
  const newsModal = document.getElementById('news-modal');
  const closeNewsModal = document.getElementById('close-news-modal');
  const articleReaderBody = document.getElementById('article-reader-body');
  const donateModal = document.getElementById('donate-modal');
  const closeDonateModal = document.getElementById('close-donate-modal');
  const tierCards = document.querySelectorAll('.tier-card');
  const customAmtInput = document.getElementById('custom-amt-input');
  const freqTabs = document.querySelectorAll('.freq-tab');
  const donateForm = document.getElementById('donate-form');
  const contactForm = document.getElementById('contact-form');
  const newsletterForm = document.getElementById('newsletter-form');
  const branchStepper = document.getElementById('branch-stepper');

  /* --------------------------------------------------------------------------
     3. NAVIGATION INDICATOR SPOTLIGHT
     -------------------------------------------------------------------------- */
  function updateNavIndicator() {
    if (!navIndicator) return;
    const activeLink = document.querySelector('.nav-link.active');
    if (activeLink && window.innerWidth > 768) {
      const rect = activeLink.getBoundingClientRect();
      const parentList = activeLink.closest('.nav-list') || activeLink.parentElement.parentElement;
      const parentRect = parentList ? parentList.getBoundingClientRect() : { left: 0 };
      navIndicator.style.width = `${rect.width}px`;
      navIndicator.style.left = `${rect.left - parentRect.left}px`;
      navIndicator.classList.add('active');
    } else {
      navIndicator.classList.remove('active');
    }
  }

  window.addEventListener('resize', updateNavIndicator);

  /* --------------------------------------------------------------------------
     4. MULTI-PAGE HASH ROUTING & IN-PAGE JUMP SYSTEM
     -------------------------------------------------------------------------- */
  function switchPage(pageId, shouldScrollTop = true) {
    if (!pageId) pageId = 'home';
    pageId = pageId.replace('#', '');
    const targetPage = document.getElementById(`page-${pageId}`) || document.getElementById(pageId);

    if (!targetPage) return;

    // Toggle active page
    pages.forEach(page => page.classList.remove('active'));
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
      if (mobileToggle) mobileToggle.classList.remove('active');
    }

    // Smooth scroll to top of page only when requested
    if (shouldScrollTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Re-trigger counter animations if home page
    if (pageId === 'home') {
      initCounterAnimation();
    }
  }

  function jumpToSection(targetId, targetPageId = 'home') {
    switchPage(targetPageId, false);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      setTimeout(() => {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        targetEl.setAttribute('tabindex', '-1');
        targetEl.focus({ preventScroll: true });
      }, 60);
    }
  }

  function handleHashChange() {
    const rawHash = window.location.hash.substring(1) || 'home';
    if (rawHash === 'mayadveepa-showcase' || rawHash === 'fun-with-financials-showcase' || rawHash === 'art-showcase') {
      jumpToSection(rawHash, 'home');
      return;
    }
    switchPage(rawHash, true);
  }

  window.addEventListener('hashchange', handleHashChange);

  // Bind in-page jump buttons (replaces popup modal with smooth scroll to showcase)
  document.addEventListener('click', (e) => {
    const jumpBtn = e.target.closest('.inpage-jump-btn, [data-jump]');
    if (jumpBtn) {
      e.preventDefault();
      const jumpTarget = jumpBtn.getAttribute('data-jump') || (jumpBtn.getAttribute('href') || '').replace('#', '');
      const targetPage = jumpBtn.getAttribute('data-target-page') || 'home';
      if (jumpTarget) {
        jumpToSection(jumpTarget, targetPage);
      }
    }
  });

  // Bind all data-page buttons
  document.querySelectorAll('[data-page]:not(.inpage-jump-btn)').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const pageTarget = btn.getAttribute('data-page');
      if (pageTarget) {
        window.location.hash = pageTarget;
      }
    });
  });

  /* --------------------------------------------------------------------------
     5. DYNAMIC HEADER HEIGHT MEASUREMENT & SHRINKING STICKY HEADER
     -------------------------------------------------------------------------- */
  function updateHeaderHeight() {
    if (header) {
      const h = header.offsetHeight;
      if (h > 0) {
        document.documentElement.style.setProperty('--header-h', `${h}px`);
      }
    }
  }

  // Initial measurement
  updateHeaderHeight();

  // ResizeObserver to automatically track responsive / font / shrink changes
  if (header && window.ResizeObserver) {
    const headerObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        const height = Math.round(entry.borderBoxSize ? entry.borderBoxSize[0].blockSize : header.offsetHeight);
        if (height > 0) {
          document.documentElement.style.setProperty('--header-h', `${height}px`);
        }
      }
    });
    headerObserver.observe(header);
  }

  window.addEventListener('resize', updateHeaderHeight);

  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('shrunk');
      } else {
        header.classList.remove('shrunk');
      }
      updateHeaderHeight();
    });
  }

  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      mainNav.classList.toggle('active');
    });
  }

  /* --------------------------------------------------------------------------
     6. HERO TREE PARALLAX / MOUSE TILT
     -------------------------------------------------------------------------- */
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
     7. ANIMATED IMPACT COUNTERS
     -------------------------------------------------------------------------- */
  let countersAnimated = false;

  function initCounterAnimation() {
    const counterElements = document.querySelectorAll('.counter-val');
    if (!counterElements.length) return;

    // Fallback: If IntersectionObserver is unavailable, ensure data-target values are displayed immediately
    if (!('IntersectionObserver' in window)) {
      counterElements.forEach(counter => {
        const target = counter.getAttribute('data-target');
        if (target) counter.textContent = parseInt(target, 10).toLocaleString();
      });
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersAnimated) {
          countersAnimated = true;
          counterElements.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'), 10);
            if (isNaN(target)) return;
            let current = 0;
            const duration = 1600;
            const stepTime = 25;
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
    }, { threshold: 0.15, rootMargin: '0px 0px 60px 0px' });

    const counterSection = document.querySelector('.impact-counter-section');
    if (counterSection) observer.observe(counterSection);
  }

  initCounterAnimation();

  /* --------------------------------------------------------------------------
     8. THREE DIVISIONS FILTERING: Education, Art, Service
     -------------------------------------------------------------------------- */
  function filterNews() {
    const activeCat = document.querySelector('.cat-pill.active')?.getAttribute('data-category') || 'all';
    const searchQuery = searchInput ? searchInput.value.toLowerCase().trim() : '';
    let visibleCount = 0;

    newsCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      const titleText = card.querySelector('.news-title')?.textContent.toLowerCase() || '';
      const excerptText = card.querySelector('.news-excerpt')?.textContent.toLowerCase() || '';

      const matchesCat = (activeCat === 'all' || cardCategory === activeCat);
      const matchesSearch = (!searchQuery || titleText.includes(searchQuery) || excerptText.includes(searchQuery));

      if (matchesCat && matchesSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // Check if empty state needed
    let emptyStateMsg = document.getElementById('programs-empty-state');
    if (visibleCount === 0) {
      if (!emptyStateMsg) {
        emptyStateMsg = document.createElement('div');
        emptyStateMsg.id = 'programs-empty-state';
        emptyStateMsg.className = 'programs-empty-state';
        emptyStateMsg.innerHTML = `
          <div class="empty-state-card">
            <span class="empty-state-icon">🔍</span>
            <h3>No matching programmes found</h3>
            <p>Try clearing your search or selecting another division (Education, Art, Service).</p>
          </div>
        `;
        const container = document.getElementById('news-cards-container');
        if (container) container.appendChild(emptyStateMsg);
      }
      emptyStateMsg.style.display = 'block';
    } else if (emptyStateMsg) {
      emptyStateMsg.style.display = 'none';
    }
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
     9. ARTICLE READER MODAL (Clean, Nice, and Comprehensive)
     -------------------------------------------------------------------------- */
  function openArticleModal(articleId) {
    const article = newsDatabase[articleId];
    if (!article || !articleReaderBody || !newsModal) return;

    // Helper for category badge styling
    let catTagClass = 'tag-edu';
    if (article.category === 'Art') catTagClass = 'tag-art';
    if (article.category === 'Service') catTagClass = 'tag-service';

    articleReaderBody.innerHTML = `
      <div class="article-header">
        <div class="modal-badge-row">
          <span class="modal-cat-tag ${catTagClass}">${article.divisionBadge || (article.category + ' Division')}</span>
          ${article.flagshipBadge ? `<span class="modal-status-badge">${article.flagshipBadge}</span>` : ''}
          ${article.codeBadge ? `<span class="modal-code-badge">${article.codeBadge}</span>` : ''}
        </div>

        <h1 id="news-modal-title" class="article-title-heading">${article.title}</h1>
        ${article.leadSubtitle ? `<p class="modal-subtitle-lead">${article.leadSubtitle}</p>` : ''}

        <div class="modal-meta-bar">
          ${article.institution ? `
            <div class="modal-meta-item">
              <span class="modal-meta-icon">🏛️</span>
              <div>
                <span class="meta-label">Institution / Venue</span>
                <strong class="meta-val">${article.institution}</strong>
              </div>
            </div>` : ''}

          ${article.targetAudience ? `
            <div class="modal-meta-item">
              <span class="modal-meta-icon">👥</span>
              <div>
                <span class="meta-label">Target Audience</span>
                <strong class="meta-val">${article.targetAudience}</strong>
              </div>
            </div>` : ''}

          ${article.speaker ? `
            <div class="modal-meta-item">
              <span class="modal-meta-icon">🎙️</span>
              <div>
                <span class="meta-label">Speaker / Lead</span>
                <strong class="meta-val">${article.speaker}</strong>
              </div>
            </div>` : ''}

          <div class="modal-meta-item">
            <span class="modal-meta-icon">🎯</span>
            <div>
              <span class="meta-label">Core Division</span>
              <strong class="meta-val">${article.category} Pillar</strong>
            </div>
          </div>
        </div>
      </div>

      ${article.image ? `
        <div class="modal-featured-hero">
          <img src="${article.image}" alt="${article.title}" class="article-cover-img">
          <div class="hero-img-badge">
            <span>${article.category === 'Education' ? 'Session Spotlight — Rotary PU College' : 'Pravakya Foundation Initiative'}</span>
          </div>
        </div>` : ''}

      <div class="article-body-text">
        ${article.content}
      </div>
    `;

    // Re-bind any open-donate-trigger inside modal
    articleReaderBody.querySelectorAll('.open-donate-trigger').forEach(btn => {
      btn.addEventListener('click', () => {
        closeArticleModal();
        openDonateModal();
      });
    });

    newsModal.classList.add('active');
    newsModal.removeAttribute('inert');
    newsModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus on close button for accessibility
    if (closeNewsModal && typeof closeNewsModal.focus === 'function') closeNewsModal.focus();
  }

  function closeArticleModal() {
    if (newsModal) {
      newsModal.classList.remove('active');
      newsModal.setAttribute('inert', '');
      newsModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  window.openArticleModal = openArticleModal;
  window.closeArticleModal = closeArticleModal;

  // Global click delegate for .read-article-btn
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.read-article-btn');
    if (btn) {
      e.preventDefault();
      const articleId = btn.getAttribute('data-id');
      if (articleId) {
        openArticleModal(articleId);
      }
    }
  });

  // Global keyboard delegate for Enter / Space on .read-article-btn
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const btn = e.target.closest('.read-article-btn');
      if (btn && (btn.getAttribute('role') === 'button' || btn.tagName === 'BUTTON')) {
        e.preventDefault();
        const articleId = btn.getAttribute('data-id');
        if (articleId) {
          openArticleModal(articleId);
        }
      }
    }
  });

  if (closeNewsModal) {
    closeNewsModal.addEventListener('click', closeArticleModal);
  }

  if (newsModal) {
    newsModal.addEventListener('click', (e) => {
      if (e.target === newsModal) {
        closeArticleModal();
      }
    });
  }

  /* --------------------------------------------------------------------------
     10. DONATE / COLLABORATE MODAL & TIERS
     -------------------------------------------------------------------------- */
  function openDonateModal() {
    if (donateModal) {
      closeArticleModal();
      donateModal.classList.add('active');
      donateModal.removeAttribute('inert');
      donateModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      if (closeDonateModal && typeof closeDonateModal.focus === 'function') closeDonateModal.focus();
    }
  }

  function closeDonateModalFn() {
    if (donateModal) {
      donateModal.classList.remove('active');
      donateModal.setAttribute('inert', '');
      donateModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  window.openDonateModal = openDonateModal;
  window.closeDonateModal = closeDonateModalFn;

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.open-donate-trigger, #open-donate-modal');
    if (trigger) {
      e.preventDefault();
      openDonateModal();
    }
  });

  if (closeDonateModal) {
    closeDonateModal.addEventListener('click', closeDonateModalFn);
  }

  if (donateModal) {
    donateModal.addEventListener('click', (e) => {
      if (e.target === donateModal) {
        closeDonateModalFn();
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
      const nameInput = document.getElementById('donor-name');
      const name = nameInput ? nameInput.value.trim() : 'Friend';

      closeDonateModalFn();
      showToast(`Thank you, ${name}! Your collaboration request has been received. Our leadership team will connect with you.`);
      donateForm.reset();
    });
  }

  /* --------------------------------------------------------------------------
     11. ESCAPE KEY TO CLOSE ANY OPEN MODAL / LIGHTBOX
     -------------------------------------------------------------------------- */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const lightbox = document.getElementById('image-lightbox');
      if (lightbox && lightbox.classList.contains('active')) {
        closeImageLightbox();
      } else if (newsModal && newsModal.classList.contains('active')) {
        closeArticleModal();
      } else if (donateModal && donateModal.classList.contains('active')) {
        closeDonateModalFn();
      }
    }
  });

  /* --------------------------------------------------------------------------
     12. CONTACT FORM & NEWSLETTER VALIDATION & TOAST
     -------------------------------------------------------------------------- */
  if (contactForm) {
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const subjectInput = document.getElementById('contact-subject');
    const msgInput = document.getElementById('contact-msg');

    const errName = document.getElementById('err-name');
    const errEmail = document.getElementById('err-email');
    const errSubject = document.getElementById('err-subject');
    const errMsg = document.getElementById('err-msg');

    function setFieldError(input, errorSpan, isError) {
      if (!input) return;
      if (isError) {
        input.classList.add('is-invalid');
        input.setAttribute('aria-invalid', 'true');
        if (errorSpan) errorSpan.classList.add('visible');
      } else {
        input.classList.remove('is-invalid');
        input.setAttribute('aria-invalid', 'false');
        if (errorSpan) errorSpan.classList.remove('visible');
      }
    }

    // Live validation listeners
    if (nameInput) nameInput.addEventListener('input', () => setFieldError(nameInput, errName, !nameInput.value.trim()));
    if (emailInput) {
      emailInput.addEventListener('input', () => {
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim());
        setFieldError(emailInput, errEmail, !emailValid);
      });
    }
    if (subjectInput) subjectInput.addEventListener('change', () => setFieldError(subjectInput, errSubject, !subjectInput.value));
    if (msgInput) msgInput.addEventListener('input', () => setFieldError(msgInput, errMsg, !msgInput.value.trim()));

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameVal = nameInput ? nameInput.value.trim() : '';
      const emailVal = emailInput ? emailInput.value.trim() : '';
      const subjectVal = subjectInput ? subjectInput.value : '';
      const msgVal = msgInput ? msgInput.value.trim() : '';

      const isNameValid = nameVal.length >= 2;
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal);
      const isSubjectValid = Boolean(subjectVal);
      const isMsgValid = msgVal.length >= 5;

      setFieldError(nameInput, errName, !isNameValid);
      setFieldError(emailInput, errEmail, !isEmailValid);
      setFieldError(subjectInput, errSubject, !isSubjectValid);
      setFieldError(msgInput, errMsg, !isMsgValid);

      if (isNameValid && isEmailValid && isSubjectValid && isMsgValid) {
        showToast(`Thank you, ${nameVal}! Your message has been sent to our leadership team. We will respond within 24 hours.`);
        contactForm.reset();
        [nameInput, emailInput, subjectInput, msgInput].forEach(inp => {
          if (inp) {
            inp.classList.remove('is-invalid');
            inp.removeAttribute('aria-invalid');
          }
        });
      } else {
        // Focus first invalid input for accessibility
        if (!isNameValid && nameInput) nameInput.focus();
        else if (!isEmailValid && emailInput) emailInput.focus();
        else if (!isSubjectValid && subjectInput) subjectInput.focus();
        else if (!isMsgValid && msgInput) msgInput.focus();
      }
    });
  }

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('newsletter-email');
      const email = emailInput ? emailInput.value : '';
      showToast(`Subscribed! ${email} has been added to our quarterly field update journal.`);
      newsletterForm.reset();
    });
  }

  /* --------------------------------------------------------------------------
     13. BRANCH STEPPER SCROLL OBSERVER
     -------------------------------------------------------------------------- */
  if (branchStepper) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          branchStepper.classList.add('animated');
        }
      });
    }, { threshold: 0.2 });

    observer.observe(branchStepper);
  }

  /* --------------------------------------------------------------------------
     14. TOAST NOTIFICATION UTILITY
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

  window.showToast = showToast;

  /* --------------------------------------------------------------------------
     15. INITIALIZE HASH ROUTING & INDICATOR (At End of DOMContentLoaded)
     -------------------------------------------------------------------------- */
  handleHashChange();
  setTimeout(updateNavIndicator, 200);

});

/* --------------------------------------------------------------------------
   16. LIGHTBOX MODAL FOR SESSION GALLERY
   -------------------------------------------------------------------------- */
window.openImageLightbox = function(imageSrc, captionText) {
  let lightbox = document.getElementById('image-lightbox');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'image-lightbox';
    lightbox.className = 'image-lightbox';
    lightbox.innerHTML = `
      <div class="lightbox-overlay" onclick="closeImageLightbox()"></div>
      <div class="lightbox-content">
        <button class="lightbox-close" onclick="closeImageLightbox()" aria-label="Close Lightbox">&times;</button>
        <img id="lightbox-img" src="" alt="Session Image">
        <div id="lightbox-caption" class="lightbox-caption"></div>
      </div>
    `;
    document.body.appendChild(lightbox);
  }

  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');

  if (lightboxImg) lightboxImg.src = imageSrc;
  if (lightboxCaption) lightboxCaption.innerText = captionText || 'Fun with Financials Session';
  
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeImageLightbox = function() {
  const lightbox = document.getElementById('image-lightbox');
  const newsModal = document.getElementById('news-modal');
  const donateModal = document.getElementById('donate-modal');

  if (lightbox) {
    lightbox.classList.remove('active');
  }

  // If another modal is still active, maintain background overflow lock
  const hasActiveModal = (newsModal && newsModal.classList.contains('active')) ||
                         (donateModal && donateModal.classList.contains('active'));
  if (!hasActiveModal) {
    document.body.style.overflow = '';
  }
};
