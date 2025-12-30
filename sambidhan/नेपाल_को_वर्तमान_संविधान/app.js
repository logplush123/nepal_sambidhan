// ========== APP STATE & INITIALIZATION ==========
let currentState = {
    currentSection: 'overview',      // ID of the currently displayed section
    currentLanguage: 'en',           // 'en' or 'np'
    isSearchActive: false,           // Flag for search mode
    searchQuery: '',                 // Current search term
    searchResults: [],               // Array of sections containing search matches
    currentSearchIndex: 0,           // Index for navigating search results
    navOrder: ['overview', 'history', 'features', 'parts', 'fundamental', 'duties', 'amendments', 'milestones', 'structure', 'resources'] // Navigation order
};

// ========== DOM ELEMENT REFERENCES ==========
const dom = {
    navMenu: document.querySelector('.nav-menu'),
    contentHeading: document.getElementById('content-heading'),
    contentDisplay: document.getElementById('content-display'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    currentPageInfo: document.getElementById('current-page-info'),
    currentPageInfoNepali: document.getElementById('current-page-info-nepali'),
    langToggle: document.getElementById('langToggle'),
    themeToggle: document.getElementById('themeToggle'),
    searchInput: document.getElementById('searchInput'),
    searchInfo: null, // Will be created dynamically
    shareBtn: document.getElementById('shareBtn'),
    shareModal: document.getElementById('shareModal'),
    shareUrl: document.getElementById('shareUrl'),
    copyUrlBtn: document.getElementById('copyUrlBtn'),
    closeModal: document.querySelector('.close-modal')
};

// ========== INITIALIZATION FUNCTION ==========
function initApp() {
    renderNavigationMenu();
    loadSectionContent(currentState.currentSection);
    setupEventListeners();
    applyLanguage(currentState.currentLanguage);
    updateNavigationButtons();
    console.log('Nepal Constitution Portal initialized.');
}

// ========== NAVIGATION MENU RENDERING ==========
function renderNavigationMenu() {
    dom.navMenu.innerHTML = '';
    nepalData.navSections.forEach(section => {
        const li = document.createElement('li');
        li.className = 'nav-item';
        li.innerHTML = `
            <a href="#" data-section="${section.id}" class="${section.id === currentState.currentSection ? 'active' : ''}">
                <i class="${section.icon}"></i>
                <span class="lang-en">${section.label_en}</span>
                <span class="lang-np">${section.label_np}</span>
            </a>
        `;
        dom.navMenu.appendChild(li);
    });
}

// ========== CONTENT RENDERING ==========
function loadSectionContent(sectionId) {
    const section = nepalData.content[sectionId];
    if (!section) return;

    // Update state and UI
    currentState.currentSection = sectionId;
    updateActiveNavLink();

    // Set title
    dom.contentHeading.textContent = section[`title_${currentState.currentLanguage}`];

    // Set body content
    const bodyKey = `body_${currentState.currentLanguage}`;
    dom.contentDisplay.innerHTML = section[bodyKey];

    // Create and inject search info div if it doesn't exist
    if (!dom.searchInfo) {
        dom.searchInfo = document.createElement('div');
        dom.searchInfo.id = 'search-info';
        dom.contentDisplay.prepend(dom.searchInfo);
    }
    dom.searchInfo.classList.remove('show');

    // Update page info
    updatePageInfo();

    // Update navigation buttons
    updateNavigationButtons();
}

function updateActiveNavLink() {
    document.querySelectorAll('.nav-item a').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.section === currentState.currentSection) {
            link.classList.add('active');
        }
    });
}

function updatePageInfo() {
    if (currentState.isSearchActive) {
        const resultNum = currentState.currentSearchIndex + 1;
        const totalResults = currentState.searchResults.length;
        dom.currentPageInfo.textContent = `Search Result: ${resultNum} of ${totalResults}`;
        dom.currentPageInfoNepali.textContent = `खोज परिणाम: ${totalResults} मध्ये ${resultNum}`;
    } else {
        const currentIndex = currentState.navOrder.indexOf(currentState.currentSection) + 1;
        const totalSections = currentState.navOrder.length;
        dom.currentPageInfo.textContent = `Viewing: ${currentIndex} of ${totalSections}`;
        dom.currentPageInfoNepali.textContent = `हेर्दै: ${totalSections} मध्ये ${currentIndex}`;
    }
}

// ========== NAVIGATION LOGIC ==========
function navigateToNext() {
    if (currentState.isSearchActive) {
        // Navigate to next search result
        if (currentState.currentSearchIndex < currentState.searchResults.length - 1) {
            currentState.currentSearchIndex++;
            const result = currentState.searchResults[currentState.currentSearchIndex];
            currentState.currentSection = result.sectionId;
            loadSectionContent(result.sectionId);
            highlightSearchTerms(result.matches);
        }
    } else {
        // Navigate to next section in order
        const currentIndex = currentState.navOrder.indexOf(currentState.currentSection);
        if (currentIndex < currentState.navOrder.length - 1) {
            const nextSection = currentState.navOrder[currentIndex + 1];
            loadSectionContent(nextSection);
        }
    }
    updateNavigationButtons();
}

function navigateToPrev() {
    if (currentState.isSearchActive) {
        // Navigate to previous search result
        if (currentState.currentSearchIndex > 0) {
            currentState.currentSearchIndex--;
            const result = currentState.searchResults[currentState.currentSearchIndex];
            currentState.currentSection = result.sectionId;
            loadSectionContent(result.sectionId);
            highlightSearchTerms(result.matches);
        }
    } else {
        // Navigate to previous section in order
        const currentIndex = currentState.navOrder.indexOf(currentState.currentSection);
        if (currentIndex > 0) {
            const prevSection = currentState.navOrder[currentIndex - 1];
            loadSectionContent(prevSection);
        }
    }
    updateNavigationButtons();
}

function updateNavigationButtons() {
    if (currentState.isSearchActive) {
        // Update for search mode
        dom.prevBtn.disabled = currentState.currentSearchIndex === 0;
        const atLastResult = currentState.currentSearchIndex === currentState.searchResults.length - 1;
        dom.nextBtn.disabled = atLastResult;
        dom.nextBtn.innerHTML = atLastResult ?
            `<span class="lang-en">Back to Browse</span><span class="lang-np">ब्राउज गर्न फर्कनुहोस्</span> <i class="fas fa-list"></i>` :
            `<span class="lang-en">Next Result</span><span class="lang-np">अर्को परिणाम</span> <i class="fas fa-chevron-right"></i>`;
    } else {
        // Update for normal mode
        const currentIndex = currentState.navOrder.indexOf(currentState.currentSection);
        dom.prevBtn.disabled = currentIndex === 0;
        dom.nextBtn.disabled = currentIndex === currentState.navOrder.length - 1;
        // Reset next button text
        dom.nextBtn.innerHTML = `<span class="lang-en">Next</span><span class="lang-np">अर्को</span> <i class="fas fa-chevron-right"></i>`;
    }
}

// ========== LANGUAGE SWITCHING ==========
function switchLanguage() {
    const newLang = currentState.currentLanguage === 'en' ? 'np' : 'en';
    applyLanguage(newLang);
    currentState.currentLanguage = newLang;

    // Update UI elements that depend on language
    document.documentElement.setAttribute('data-lang', newLang);
    dom.langToggle.querySelector('.lang-en').style.display = newLang === 'en' ? 'inline' : 'none';
    dom.langToggle.querySelector('.lang-np').style.display = newLang === 'np' ? 'inline' : 'none';

    // Reload current section content in new language
    loadSectionContent(currentState.currentSection);

    // If in search mode, re-highlight terms in the new language content
    if (currentState.isSearchActive && currentState.searchQuery) {
        performSearch(currentState.searchQuery);
    }
}

function applyLanguage(lang) {
    // Toggle visibility of all language-specific elements
    document.querySelectorAll('.lang-en, .lang-np').forEach(el => {
        if (el.classList.contains(`lang-${lang}`)) {
            el.style.display = '';
        } else {
            el.style.display = 'none';
        }
    });
}

// ========== SEARCH FUNCTIONALITY ==========
function performSearch(query) {
    const trimmedQuery = query.trim().toLowerCase();
    if (!trimmedQuery) {
        exitSearchMode();
        return;
    }

    currentState.searchQuery = trimmedQuery;
    currentState.searchResults = [];
    currentState.currentSearchIndex = 0;

    // Search through all content sections
    Object.keys(nepalData.content).forEach(sectionId => {
        const section = nepalData.content[sectionId];
        const searchText = (section.body_en + ' ' + section.title_en + ' ' + section.body_np + ' ' + section.title_np).toLowerCase();

        if (searchText.includes(trimmedQuery)) {
            // Count matches in this section
            const matches = (searchText.match(new RegExp(trimmedQuery, 'g')) || []).length;
            currentState.searchResults.push({
                sectionId: sectionId,
                matches: matches,
                title: section[`title_${currentState.currentLanguage}`]
            });
        }
    });

    if (currentState.searchResults.length > 0) {
        // Enter search mode
        currentState.isSearchActive = true;
        const firstResult = currentState.searchResults[0];
        currentState.currentSection = firstResult.sectionId;
        loadSectionContent(firstResult.sectionId);
        highlightSearchTerms(firstResult.matches);

        // Show search info
        const totalMatches = currentState.searchResults.reduce((sum, result) => sum + result.matches, 0);
        const infoTextEn = `Found "${query}" in ${currentState.searchResults.length} section(s), ${totalMatches} total match(es).`;
        const infoTextNp = `"${query}" ${currentState.searchResults.length} खण्ड(हरू) मा फेला पर्यो, कुल ${totalMatches} मिलान(हरू)।`;
        dom.searchInfo.innerHTML = `<p class="lang-en"><i class="fas fa-search"></i> ${infoTextEn}</p><p class="lang-np"><i class="fas fa-search"></i> ${infoTextNp}</p>`;
        dom.searchInfo.classList.add('show');

        // Update button to show we're in search mode
        dom.prevBtn.innerHTML = `<i class="fas fa-chevron-left"></i> <span class="lang-en">Prev Result</span><span class="lang-np">अघिल्लो परिणाम</span>`;
    } else {
        // No results found
        currentState.isSearchActive = false;
        dom.contentDisplay.innerHTML = `
            <div class="article-item">
                <h4><span class="lang-en">No Search Results</span><span class="lang-np">कुनै खोज परिणाम फेला परेन</span></h4>
                <p class="lang-en">No content found for "<strong>${query}</strong>". Try a different keyword.</p>
                <p class="lang-np">"<strong>${query}</strong>" को लागि कुनै सामग्री फेला परेन। अर्को खोजशब्द प्रयोग गर्नुहोस्।</p>
            </div>
        `;
        dom.contentHeading.textContent = currentState.currentLanguage === 'en' ? 'Search Results' : 'खोज परिणाम';
        updatePageInfo();
    }

    updateNavigationButtons();
}

function highlightSearchTerms(matchCount) {
    if (!currentState.searchQuery || !dom.searchInfo.classList.contains('show')) return;

    const query = currentState.searchQuery;
    const walker = document.createTreeWalker(
        dom.contentDisplay,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );

    const nodes = [];
    let node;
    while (node = walker.nextNode()) {
        if (node.textContent.toLowerCase().includes(query)) {
            nodes.push(node);
        }
    }

    nodes.forEach(textNode => {
        const span = document.createElement('span');
        span.className = 'highlight';
        const text = textNode.textContent;
        const regex = new RegExp(`(${query})`, 'gi');
        span.innerHTML = text.replace(regex, '<mark>$1</mark>');
        textNode.parentNode.replaceChild(span, textNode);
    });
}

function exitSearchMode() {
    currentState.isSearchActive = false;
    currentState.searchQuery = '';
    dom.searchInput.value = '';
    if (dom.searchInfo) {
        dom.searchInfo.classList.remove('show');
    }
    // Reload the current section normally (without highlights)
    loadSectionContent(currentState.currentSection);
}

// Handle special "Back to Browse" action when on last search result
function handleNextButtonSpecialAction() {
    if (currentState.isSearchActive &&
        currentState.currentSearchIndex === currentState.searchResults.length - 1) {
        exitSearchMode();
    } else {
        navigateToNext();
    }
}

// ========== THEME TOGGLE ==========
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    dom.themeToggle.innerHTML = newTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    localStorage.setItem('nepalConstitutionTheme', newTheme);
}

// ========== SHARE FUNCTIONALITY ==========
function setupShareModal() {
    dom.shareUrl.value = nepalData.meta.shareUrl;

    dom.copyUrlBtn.addEventListener('click', () => {
        dom.shareUrl.select();
        document.execCommand('copy');
        const originalText = dom.copyUrlBtn.innerHTML;
        dom.copyUrlBtn.innerHTML = '<i class="fas fa-check"></i> <span class="lang-en">Copied!</span><span class="lang-np">कापी भयो!</span>';
        setTimeout(() => {
            dom.copyUrlBtn.innerHTML = originalText;
        }, 2000);
    });

    dom.closeModal.addEventListener('click', () => {
        dom.shareModal.classList.remove('show');
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === dom.shareModal) {
            dom.shareModal.classList.remove('show');
        }
    });
}

// ========== EVENT LISTENER SETUP ==========
function setupEventListeners() {
    // Navigation menu clicks
    dom.navMenu.addEventListener('click', (e) => {
        const navLink = e.target.closest('a[data-section]');
        if (navLink) {
            e.preventDefault();
            exitSearchMode(); // Exit search mode when manually navigating
            loadSectionContent(navLink.dataset.section);
        }
    });

    // Previous/Next buttons
    dom.prevBtn.addEventListener('click', navigateToPrev);
    dom.nextBtn.addEventListener('click', () => {
        if (currentState.isSearchActive &&
            currentState.currentSearchIndex === currentState.searchResults.length - 1) {
            handleNextButtonSpecialAction();
        } else {
            navigateToNext();
        }
    });

    // Language toggle
    dom.langToggle.addEventListener('click', switchLanguage);

    // Theme toggle
    const savedTheme = localStorage.getItem('nepalConstitutionTheme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    dom.themeToggle.innerHTML = savedTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    dom.themeToggle.addEventListener('click', toggleTheme);

    // Search functionality
    let searchTimeout;
    dom.searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            performSearch(e.target.value);
        }, 300); // Debounce search for 300ms
    });

    // Share button
    dom.shareBtn.addEventListener('click', () => {
        dom.shareModal.classList.add('show');
    });

    // Setup share modal
    setupShareModal();

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Ctrl+F or Cmd+F for search focus
        if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
            e.preventDefault();
            dom.searchInput.focus();
        }
        // Escape to exit search
        if (e.key === 'Escape' && currentState.isSearchActive) {
            exitSearchMode();
        }
        // Left/Right arrow for navigation (if not typing in search)
        if (e.target !== dom.searchInput) {
            if (e.key === 'ArrowLeft') navigateToPrev();
            if (e.key === 'ArrowRight') navigateToNext();
        }
    });
}
// ========== MOBILE MENU FUNCTIONALITY ==========
function setupMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        sidebar.classList.toggle('collapsed');
        content.classList.toggle('sidebar-open');
        
        // Prevent scrolling when menu is open on mobile
        if (window.innerWidth <= 1024) {
            document.body.style.overflow = sidebar.classList.contains('collapsed') ? 'auto' : 'hidden';
        }
    });
    
    // Close menu when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 1024 && 
            !sidebar.contains(e.target) && 
            !mobileMenuToggle.contains(e.target) &&
            !sidebar.classList.contains('collapsed')) {
            mobileMenuToggle.classList.remove('active');
            sidebar.classList.add('collapsed');
            content.classList.remove('sidebar-open');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close menu when clicking a nav link on mobile
    document.querySelectorAll('.nav-item a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 1024) {
                mobileMenuToggle.classList.remove('active');
                sidebar.classList.add('collapsed');
                content.classList.remove('sidebar-open');
                document.body.style.overflow = 'auto';
            }
        });
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            mobileMenuToggle.classList.remove('active');
            sidebar.classList.remove('collapsed');
            content.classList.remove('sidebar-open');
            document.body.style.overflow = 'auto';
        }
    });
}

// Call this in your initApp() function
function initApp() {
    renderNavigationMenu();
    loadSectionContent(currentState.currentSection);
    setupEventListeners();
    setupMobileMenu(); // Add this line
    applyLanguage(currentState.currentLanguage);
    updateNavigationButtons();
    console.log('Nepal Constitution Portal initialized.');
}

// ========== START THE APPLICATION ==========
document.addEventListener('DOMContentLoaded', initApp);