/**
 * PALMS OPEN PODCAST — INTERACTIVE ENGINE
 * Features:
 *  - Full 15-Episode + Trailer Catalog with Search & Real-time Pillar Filtering
 *  - Interactive Sticky Audio Teaser Player with Web Audio API Synthesized Chimes
 *  - Mobile Navigation Drawer & Backdrop Control
 *  - Downloadable Solo Mom Budget Worksheet Modal
 *  - Community Story Form Submission Handler
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. EPISODE DATABASE (Season 1 Catalog)
  // ==========================================================================
  const EPISODES = [
    {
      id: 0,
      ep: "Trailer",
      title: "Palms Open: Why We Opened Our Hands",
      pillar: 4,
      pillarName: "Mental Health & Resilience",
      duration: "2:14",
      date: "Nov 2026",
      tag: "Trailer",
      hook: "Ninety seconds on what the show is, who it is for, and why opening your palms means you finally stop gripping the pain.",
      guest: "Solo Introduction with Melissa Muench",
      audioTitle: "Trailer: Why I Opened My Palms"
    },
    {
      id: 1,
      ep: "Ep 01",
      title: "Shedding Mom Guilt: The 2 A.M. Spiral",
      pillar: 4,
      pillarName: "Mental Health & Resilience",
      duration: "42 Min",
      date: "Dec 15, 2026",
      tag: "Dec 15 Premiere",
      hook: "Guilt versus real regret, the 'good enough parent' research, and why working long hours is modeling resilience, not absence.",
      guest: "Solo Episode + Guided 5-Minute Reflection",
      audioTitle: "Ep 01: Shedding Mom Guilt"
    },
    {
      id: 2,
      ep: "Ep 02",
      title: "Budgeting on One Income: Real Numbers, No Shame",
      pillar: 2,
      pillarName: "Money & Stability",
      duration: "48 Min",
      date: "Dec 15, 2026",
      tag: "Dec 15 Premiere",
      hook: "Sinking funds for predictable surprises, where hidden savings hide, and building your first $500 starter emergency fund.",
      guest: "Nonprofit Credit Counselor (+ Free Budget Sheet)",
      audioTitle: "Ep 02: Budgeting on One Income"
    },
    {
      id: 3,
      ep: "Ep 03",
      title: "Fighting Loneliness in Solo Decisions",
      pillar: 4,
      pillarName: "Mental Health & Resilience",
      duration: "45 Min",
      date: "Dec 15, 2026",
      tag: "Dec 15 Premiere",
      hook: "Surrounded by your kids and still completely alone. Practical connection micro-habits and building a trusted village from scratch.",
      guest: "Licensed Clinical Therapist + Mom of Three",
      audioTitle: "Ep 03: Fighting Loneliness"
    },
    {
      id: 4,
      ep: "Ep 04",
      title: "Redefining Family: Beyond the White Picket Fence",
      pillar: 1,
      pillarName: "Identity & Self-Worth",
      duration: "41 Min",
      date: "Dec 22, 2026",
      tag: "Tuesday Release",
      hook: "Your family isn’t broken—it just isn’t what television sold you. How children define home, and answering intrusive questions with calm.",
      guest: "Family Systems Therapist + Listener Stories",
      audioTitle: "Ep 04: Redefining Family"
    },
    {
      id: 5,
      ep: "Ep 05",
      title: "Self-Care Without the Burnout: The 10-Minute Lock",
      pillar: 1,
      pillarName: "Identity & Self-Worth",
      duration: "39 Min",
      date: "Dec 29, 2026",
      tag: "Tuesday Release",
      hook: "Why luxury spa self-care fails solo moms. Realistic micro-resets, early burnout detection, and treating asking for help as a vital skill.",
      guest: "Segment: “Five-Minute Fixes” Rapid Fire",
      audioTitle: "Ep 05: Self-Care Without Burnout"
    },
    {
      id: 6,
      ep: "Ep 06",
      title: "Child Support & Legal Hurdles: Keeping a Paper Trail",
      pillar: 2,
      pillarName: "Money & Stability",
      duration: "52 Min",
      date: "Jan 05, 2027",
      tag: "Tuesday Release",
      hook: "The hardest part isn’t the forms; it’s the person on the other side. Custody terms decoded, court self-help centers, and low-cost mediation.",
      guest: "Family Law Attorney & Legal Aid Advocate",
      audioTitle: "Ep 06: Child Support & Legal Hurdles"
    },
    {
      id: 7,
      ep: "Ep 07",
      title: "Investing in Yourself: Career Pivots on a Clock",
      pillar: 2,
      pillarName: "Money & Stability",
      duration: "44 Min",
      date: "Jan 12, 2027",
      tag: "Tuesday Release",
      hook: "You are your family’s biggest financial asset. Evaluating certifications, realistic side-hustle audits, and salary negotiation scripts.",
      guest: "Executive Career Coach + Mom Career Pivot",
      audioTitle: "Ep 07: Investing in Yourself"
    },
    {
      id: 8,
      ep: "Ep 08",
      title: "Quality Over Quantity: Ten Undivided Minutes",
      pillar: 3,
      pillarName: "Parenting with Intention",
      duration: "40 Min",
      date: "Jan 19, 2027",
      tag: "Tuesday Release",
      hook: "Ten undistracted minutes beat two hours of phone-distracted guilt. Easy daily rituals, attachment science, and listening before fixing.",
      guest: "Child Development Specialist",
      audioTitle: "Ep 08: Quality Over Quantity"
    },
    {
      id: 9,
      ep: "Ep 09",
      title: "Handling Big Emotions: Keeping Them Company",
      pillar: 3,
      pillarName: "Parenting with Intention",
      duration: "47 Min",
      date: "Jan 26, 2027",
      tag: "Tuesday Release",
      hook: "You can’t take away their heartbreak, but you can sit with them in it. Age-appropriate language for separation and navigating regression.",
      guest: "Pediatric Therapist & Elementary Counselor",
      audioTitle: "Ep 09: Handling Big Emotions"
    },
    {
      id: 10,
      ep: "Ep 10",
      title: "Creating Family Traditions: This Is Who We Are",
      pillar: 3,
      pillarName: "Parenting with Intention",
      duration: "43 Min",
      date: "Feb 02, 2027",
      tag: "Tuesday Release",
      hook: "Traditions are the emotional anchors that make children feel secure. Low-cost rituals, reimagining holidays, and handling custody handoffs.",
      guest: "Community “Tradition of the Month” Showcase",
      audioTitle: "Ep 10: Creating Family Traditions"
    },
    {
      id: 11,
      ep: "Ep 11",
      title: "Setting Boundaries: Saying “No” That Sticks",
      pillar: 4,
      pillarName: "Mental Health & Resilience",
      duration: "50 Min",
      date: "Feb 09, 2027",
      tag: "Tuesday Release",
      hook: "Boundaries versus ultimatums. Exact scripts for unsolicited advice, last-minute cancellations, and parallel parenting with high-conflict exes.",
      guest: "Family Mediator + Boundaries Coach",
      audioTitle: "Ep 11: Setting Boundaries"
    },
    {
      id: 12,
      ep: "Ep 12",
      title: "Celebrating Small Wins: You Survived Tuesday",
      pillar: 4,
      pillarName: "Mental Health & Resilience",
      duration: "38 Min",
      date: "Feb 16, 2027",
      tag: "Tuesday Release",
      hook: "Why your brain remembers setbacks and ignores progress. Nightly wins practices, gratitude without toxic positivity, and community shoutouts.",
      guest: "Listener Voicemails & Community Wins",
      audioTitle: "Ep 12: Celebrating Small Wins"
    },
    {
      id: 13,
      ep: "Ep 13",
      title: "Re-entering the Dating World: Kids Come First",
      pillar: 5,
      pillarName: "Dating & Village",
      duration: "49 Min",
      date: "Feb 23, 2027",
      tag: "Tuesday Release",
      hook: "You’re allowed to want romantic companionship while holding protective boundaries. Screening red flags, safety rules, and when to introduce kids.",
      guest: "Relationship Therapist + Candid Solo Mom Story",
      audioTitle: "Ep 13: Re-entering Dating"
    },
    {
      id: 14,
      ep: "Ep 14",
      title: "Cultivating Your Village: Friendship When Exhausted",
      pillar: 5,
      pillarName: "Dating & Village",
      duration: "43 Min",
      date: "Mar 02, 2027",
      tag: "Tuesday Release",
      hook: "Adult friendship requires intentionality. Moving from acquaintance to true ally, childcare co-ops, and nurturing connections in 10-minute bursts.",
      guest: "Social Researcher + Host-Led Village Audit",
      audioTitle: "Ep 14: Cultivating Your Village"
    },
    {
      id: 15,
      ep: "Ep 15",
      title: "The Power of Shared Stories: We Did It",
      pillar: 5,
      pillarName: "Dating & Village",
      duration: "54 Min",
      date: "Mar 09, 2027",
      tag: "Season Finale",
      hook: "Somebody out there survived what you are currently walking through. The turning points, the breakthrough habits, and letter to your younger self.",
      guest: "Season 1 Wrapup + Survivor Circle",
      audioTitle: "Ep 15: The Power of Shared Stories"
    }
  ];

  // ==========================================================================
  // 2. STATE MANAGEMENT
  // ==========================================================================
  let currentTrackIndex = 0;
  let isPlaying = false;
  let playbackSeconds = 47;
  let totalTrackSeconds = 134; // 2:14
  let playInterval = null;
  let activePillarFilter = "all";
  let activeSearchQuery = "";
  let audioContext = null;

  // DOM Elements
  const episodesGrid = document.getElementById("episodes-grid");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("episode-search-input");
  
  // Audio Bar Elements
  const globalAudioBar = document.getElementById("global-audio-bar");
  const audioPlayPauseBtn = document.getElementById("audio-play-pause-btn");
  const audioPrevBtn = document.getElementById("audio-prev-btn");
  const audioNextBtn = document.getElementById("audio-next-btn");
  const audioPlayerTitle = document.getElementById("audio-player-title");
  const audioPlayerArtist = document.getElementById("audio-player-artist");
  const audioProgressFill = document.getElementById("audio-progress-fill");
  const audioProgressTrack = document.getElementById("audio-progress-track");
  const audioTimeDisplay = document.getElementById("audio-time-display");
  const audioCloseBarBtn = document.getElementById("audio-close-bar-btn");

  // Mobile Drawer Elements
  const mobileToggleBtn = document.getElementById("mobile-toggle-btn");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const drawerBackdrop = document.getElementById("drawer-backdrop");
  const drawerCloseBtn = document.getElementById("drawer-close-btn");
  const drawerLinks = document.querySelectorAll(".drawer-link");
  const drawerPlayBtn = document.getElementById("drawer-play-btn");

  // Budget Modal Elements
  const budgetModal = document.getElementById("budget-modal");
  const openBudgetBtn = document.getElementById("open-budget-modal-btn");
  const heroBudgetBtn = document.getElementById("hero-cta-budget");
  const closeBudgetBtn = document.getElementById("close-budget-modal-btn");

  // External Triggers
  const headerPlayTrailerBtn = document.getElementById("header-play-trailer-btn");
  const playTeaserHeroBtn = document.getElementById("play-teaser-hero-btn");
  const floatingTeaserCard = document.getElementById("floating-teaser-card");

  // Community Story Form
  const storyForm = document.getElementById("story-form");
  const formStatusMsg = document.getElementById("form-status-msg");

  // ==========================================================================
  // 3. SYNTHETIC AUDIO CHIME (Web Audio API)
  // ==========================================================================
  function playWarmChime() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioContext) {
        audioContext = new AudioCtx();
      }
      if (audioContext.state === "suspended") {
        audioContext.resume();
      }

      // Gentle warm triad: F3 (174.61Hz), A3 (220Hz), C4 (261.63Hz)
      const freqs = [220, 261.63, 329.63, 440];
      const now = audioContext.currentTime;

      freqs.forEach((freq, idx) => {
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0, now + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.06, now + idx * 0.08 + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 0.9);

        osc.connect(gain);
        gain.connect(audioContext.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.95);
      });
    } catch (e) {
      console.warn("AudioContext playback prevented by browser:", e);
    }
  }

  // ==========================================================================
  // 4. AUDIO PLAYER ENGINE
  // ==========================================================================
  function formatSeconds(sec) {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }

  function updateAudioBarUI() {
    const track = EPISODES[currentTrackIndex];
    if (!track) return;

    audioPlayerTitle.textContent = track.audioTitle || track.title;
    audioPlayerArtist.textContent = `${track.guest} • Palms Open`;
    
    // Duration calculation for current track
    if (track.id === 0) {
      totalTrackSeconds = 134; // 2:14
    } else {
      const parsedMin = parseInt(track.duration, 10) || 45;
      totalTrackSeconds = parsedMin * 60;
    }

    const pct = Math.min(100, Math.max(0, (playbackSeconds / totalTrackSeconds) * 100));
    audioProgressFill.style.width = `${pct}%`;
    audioTimeDisplay.textContent = `${formatSeconds(playbackSeconds)} / ${formatSeconds(totalTrackSeconds)}`;

    audioPlayPauseBtn.innerHTML = isPlaying 
      ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>'
      : '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
  }

  function startPlaybackTimer() {
    clearInterval(playInterval);
    playInterval = setInterval(() => {
      playbackSeconds++;
      if (playbackSeconds >= totalTrackSeconds) {
        playbackSeconds = 0;
        nextTrack();
      }
      updateAudioBarUI();
    }, 1000);
  }

  function pausePlaybackTimer() {
    clearInterval(playInterval);
  }

  function playTrack(index) {
    if (typeof index === 'number' && index >= 0 && index < EPISODES.length) {
      if (currentTrackIndex !== index) {
        currentTrackIndex = index;
        playbackSeconds = 0;
      }
    }

    isPlaying = true;
    globalAudioBar.classList.add("visible");
    playWarmChime();
    startPlaybackTimer();
    updateAudioBarUI();
  }

  function togglePlayPause() {
    if (isPlaying) {
      isPlaying = false;
      pausePlaybackTimer();
      updateAudioBarUI();
    } else {
      playTrack(currentTrackIndex);
    }
  }

  function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % EPISODES.length;
    playbackSeconds = 0;
    playTrack(currentTrackIndex);
  }

  function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + EPISODES.length) % EPISODES.length;
    playbackSeconds = 0;
    playTrack(currentTrackIndex);
  }

  // ==========================================================================
  // 5. EPISODE FILTERING & SEARCH
  // ==========================================================================
  function applyEpisodeFilters() {
    const cards = document.querySelectorAll(".episode-card");
    const query = activeSearchQuery.toLowerCase().trim();
    let visibleCount = 0;

    cards.forEach(card => {
      const epId = parseInt(card.getAttribute("data-ep-id"), 10);
      const pillar = card.getAttribute("data-pillar");
      const epData = EPISODES.find(e => e.id === epId);

      const matchesPillar = activePillarFilter === "all" || pillar === activePillarFilter;
      
      let matchesSearch = true;
      if (query && epData) {
        const fullContent = `${epData.title} ${epData.hook} ${epData.guest} ${epData.pillarName}`.toLowerCase();
        matchesSearch = fullContent.includes(query);
      }

      if (matchesPillar && matchesSearch) {
        card.style.display = "flex";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    // Handle empty search results state
    let emptyState = document.getElementById("episodes-empty-state");
    if (visibleCount === 0) {
      if (!emptyState) {
        emptyState = document.createElement("div");
        emptyState.id = "episodes-empty-state";
        emptyState.style.cssText = "grid-column: 1 / -1; text-align: center; padding: 4rem 1.5rem; background: var(--color-palm-surface); border-radius: 20px; border: 1px dashed var(--color-palm-border);";
        emptyState.innerHTML = `
          <h3 style="font-family: var(--font-heading); font-size: 1.5rem; color: var(--color-cream); margin-bottom: 0.5rem;">No Episodes Found</h3>
          <p style="color: var(--color-cream-muted); margin-bottom: 1.5rem;">No matches for "${activeSearchQuery}". Try clearing your search or browsing another pillar.</p>
          <button class="btn-primary" id="reset-filter-btn">Reset All Filters</button>
        `;
        episodesGrid.appendChild(emptyState);
        document.getElementById("reset-filter-btn").addEventListener("click", resetFilters);
      }
      emptyState.style.display = "block";
    } else if (emptyState) {
      emptyState.style.display = "none";
    }
  }

  function resetFilters() {
    activePillarFilter = "all";
    activeSearchQuery = "";
    if (searchInput) searchInput.value = "";
    
    filterButtons.forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-filter") === "all");
    });

    applyEpisodeFilters();
  }

  function setPillarFilter(pillarId) {
    activePillarFilter = String(pillarId);
    filterButtons.forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-filter") === activePillarFilter);
    });
    applyEpisodeFilters();

    // Smooth scroll down to episodes
    const epSection = document.getElementById("episodes");
    if (epSection) {
      epSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  // ==========================================================================
  // 6. DRAWER & MODAL CONTROLLERS
  // ==========================================================================
  function openMobileDrawer() {
    mobileDrawer.classList.add("active");
    drawerBackdrop.classList.add("active");
    mobileDrawer.setAttribute("aria-hidden", "false");
    mobileToggleBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeMobileDrawer() {
    mobileDrawer.classList.remove("active");
    drawerBackdrop.classList.remove("active");
    mobileDrawer.setAttribute("aria-hidden", "true");
    mobileToggleBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  function openBudgetModal() {
    budgetModal.classList.add("active");
    budgetModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeBudgetModal() {
    budgetModal.classList.remove("active");
    budgetModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  // ==========================================================================
  // 7. EVENT LISTENERS
  // ==========================================================================
  function bindEventListeners() {
    // Filter Pills
    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        activePillarFilter = btn.getAttribute("data-filter");
        applyEpisodeFilters();
      });
    });

    // Pillar Cards (Click to filter)
    document.querySelectorAll(".pillar-card").forEach(card => {
      card.addEventListener("click", () => {
        const pillar = card.getAttribute("data-pillar-filter");
        if (pillar) setPillarFilter(pillar);
      });
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          const pillar = card.getAttribute("data-pillar-filter");
          if (pillar) setPillarFilter(pillar);
        }
      });
    });

    // Footer Pillar Links
    document.querySelectorAll("[data-footer-filter]").forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const pillar = link.getAttribute("data-footer-filter");
        if (pillar) setPillarFilter(pillar);
      });
    });

    // Search Input
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        activeSearchQuery = e.target.value;
        applyEpisodeFilters();
      });
    }

    // Play Buttons inside Episode Cards
    document.querySelectorAll(".play-track-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const trackId = parseInt(btn.getAttribute("data-track"), 10);
        playTrack(trackId);
      });
    });

    // Audio Bar Controls
    if (audioPlayPauseBtn) audioPlayPauseBtn.addEventListener("click", togglePlayPause);
    if (audioNextBtn) audioNextBtn.addEventListener("click", nextTrack);
    if (audioPrevBtn) audioPrevBtn.addEventListener("click", prevTrack);
    if (audioCloseBarBtn) {
      audioCloseBarBtn.addEventListener("click", () => {
        globalAudioBar.classList.remove("visible");
        isPlaying = false;
        pausePlaybackTimer();
      });
    }

    // Progress Bar Click Seek Simulation
    if (audioProgressTrack) {
      audioProgressTrack.addEventListener("click", (e) => {
        const rect = audioProgressTrack.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        const pct = Math.max(0, Math.min(1, clickX / width));
        playbackSeconds = Math.floor(pct * totalTrackSeconds);
        updateAudioBarUI();
      });
    }

    // Hero & Header Trailer Triggers
    if (headerPlayTrailerBtn) {
      headerPlayTrailerBtn.addEventListener("click", () => playTrack(0));
    }
    if (playTeaserHeroBtn) {
      playTeaserHeroBtn.addEventListener("click", () => playTrack(0));
    }
    if (floatingTeaserCard) {
      floatingTeaserCard.addEventListener("click", () => playTrack(0));
    }
    if (drawerPlayBtn) {
      drawerPlayBtn.addEventListener("click", () => {
        closeMobileDrawer();
        playTrack(0);
      });
    }

    // Mobile Drawer Triggers
    if (mobileToggleBtn) mobileToggleBtn.addEventListener("click", openMobileDrawer);
    if (drawerCloseBtn) drawerCloseBtn.addEventListener("click", closeMobileDrawer);
    if (drawerBackdrop) drawerBackdrop.addEventListener("click", closeMobileDrawer);
    drawerLinks.forEach(link => link.addEventListener("click", closeMobileDrawer));

    // Budget Modal Triggers
    if (openBudgetBtn) openBudgetBtn.addEventListener("click", openBudgetModal);
    if (heroBudgetBtn) {
      heroBudgetBtn.addEventListener("click", (e) => {
        e.preventDefault();
        openBudgetModal();
      });
    }
    if (closeBudgetBtn) closeBudgetBtn.addEventListener("click", closeBudgetModal);
    if (budgetModal) {
      budgetModal.addEventListener("click", (e) => {
        if (e.target === budgetModal) closeBudgetModal();
      });
    }

    // Keyboard ESC to close overlays
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeMobileDrawer();
        closeBudgetModal();
      }
    });

    // Story Form Submission
    if (storyForm) {
      storyForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const nameVal = document.getElementById("form-name").value.trim() || "Friend";
        const emailVal = document.getElementById("form-email").value.trim();
        const messageVal = document.getElementById("form-message").value.trim();

        if (!emailVal || !messageVal) {
          formStatusMsg.textContent = "Please provide your email and story message.";
          formStatusMsg.style.color = "#FFA07A";
          return;
        }

        formStatusMsg.textContent = `Thank you, ${nameVal}! Melissa has received your message with care.`;
        formStatusMsg.style.color = "#86EFAC";
        storyForm.reset();

        setTimeout(() => {
          formStatusMsg.textContent = "";
        }, 8000);
      });
    }

    // Ambient Mouse Glow (Ethereal Ghost Cursor Follower - Lovera style)
    const mouseGlow = document.getElementById("mouse-glow");
    if (mouseGlow) {
      let targetX = -1000, targetY = -1000;
      let currentX = -1000, currentY = -1000;
      let isTracking = false;

      window.addEventListener("mousemove", (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
        if (!isTracking) {
          currentX = targetX;
          currentY = targetY;
          isTracking = true;
          mouseGlow.classList.add("active");
        }
      });

      document.addEventListener("mouseleave", () => {
        mouseGlow.classList.remove("active");
        isTracking = false;
      });

      function animateGlow() {
        if (isTracking) {
          // Smooth fluid trailing physics (ghost follower)
          currentX += (targetX - currentX) * 0.14;
          currentY += (targetY - currentY) * 0.14;
          mouseGlow.style.left = `${currentX.toFixed(1)}px`;
          mouseGlow.style.top = `${currentY.toFixed(1)}px`;
        }
        requestAnimationFrame(animateGlow);
      }
      requestAnimationFrame(animateGlow);
    }

    // Theme Toggle (Deep Palm Green vs Obsidian Black)
    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    const themeToggleIcon = document.getElementById("theme-toggle-icon");
    const themeToggleText = document.getElementById("theme-toggle-text");

    const drawerThemeToggleBtn = document.getElementById("drawer-theme-toggle-btn");
    const drawerThemeToggleIcon = document.getElementById("drawer-theme-toggle-icon");
    const drawerThemeToggleText = document.getElementById("drawer-theme-toggle-text");

    function applyTheme(theme) {
      if (theme === "obsidian") {
        document.body.classList.add("theme-obsidian");
        document.documentElement.setAttribute("data-theme", "obsidian");
        if (themeToggleIcon) themeToggleIcon.textContent = "🌿";
        if (themeToggleText) themeToggleText.textContent = "Green Theme";
        if (drawerThemeToggleIcon) drawerThemeToggleIcon.textContent = "🌿";
        if (drawerThemeToggleText) drawerThemeToggleText.textContent = "Switch to Green Theme";
        try { localStorage.setItem("palms_theme", "obsidian"); } catch(e){}
      } else {
        document.body.classList.remove("theme-obsidian");
        document.documentElement.removeAttribute("data-theme");
        if (themeToggleIcon) themeToggleIcon.textContent = "🌙";
        if (themeToggleText) themeToggleText.textContent = "Black Theme";
        if (drawerThemeToggleIcon) drawerThemeToggleIcon.textContent = "🌙";
        if (drawerThemeToggleText) drawerThemeToggleText.textContent = "Switch to Black Theme";
        try { localStorage.setItem("palms_theme", "palm"); } catch(e){}
      }
    }

    // Restore saved theme preference
    try {
      const savedTheme = localStorage.getItem("palms_theme");
      if (savedTheme === "obsidian") {
        applyTheme("obsidian");
      }
    } catch(e){}

    function handleThemeToggle() {
      const isCurrentlyObsidian = document.body.classList.contains("theme-obsidian");
      applyTheme(isCurrentlyObsidian ? "palm" : "obsidian");
    }

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener("click", handleThemeToggle);
    }
    if (drawerThemeToggleBtn) {
      drawerThemeToggleBtn.addEventListener("click", () => {
        handleThemeToggle();
        closeMobileDrawer();
      });
    }
  }

  // ==========================================================================
  // 8. INITIALIZATION
  // ==========================================================================
  document.addEventListener("DOMContentLoaded", () => {
    bindEventListeners();
    updateAudioBarUI();
    console.log("🎙️ Palms Open Podcast interactive engine initialized successfully.");
  });

})();
