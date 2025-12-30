// app.js - Fixed Version with English Comments
// App State
let currentUnitIndex = 0;
let totalUnits = 0;

// DOM Elements
let unitContent, progressDots, prevBtn, nextBtn, currentUnitSpan, totalUnitsSpan;

/**
 * Main initialization function
 */
function initialize() {
    console.log('Starting app initialization...');
    
    // Wait for DOM to load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', onDOMLoaded);
    } else {
        onDOMLoaded();
    }
}

/**
 * Handle DOM loaded event
 */
function onDOMLoaded() {
    console.log('DOM loaded, checking for unitsData...');
    
    // Check if unitsData is loaded
    if (typeof unitsData === 'undefined') {
        console.error('unitsData is not defined. Make sure units.js is loaded before app.js');
        displayErrorMessage('unitsData not loaded. Please check file order.');
        return;
    }
    
    if (!unitsData || !Array.isArray(unitsData) || unitsData.length === 0) {
        console.error('unitsData is empty or not an array');
        displayErrorMessage('No content data available.');
        return;
    }
    
    console.log('unitsData loaded successfully with', unitsData.length, 'units');
    
    // Initialize the application
    initApp();
}

/**
 * Initialize the application
 */
function initApp() {
    console.log('Initializing app...');
    
    // Initialize DOM elements
    if (!initDOMElements()) {
        console.error('Failed to initialize DOM elements');
        displayErrorMessage('Required page elements not found.');
        return;
    }
    
    // Set total units
    totalUnits = unitsData.length;
    
    // Update total units display (fix: using the correct ID from HTML)
    if (totalUnitsSpan) {
        totalUnitsSpan.textContent = totalUnits;
    }
    
    console.log('Total units:', totalUnits);
    
    // Initial content load
    updateContent();
    createProgressDots();
    updateNavigationButtons();
    updateCurrentUnitIndicator();
    
    // Set up event listeners
    setupEventListeners();
    
    console.log('App initialized successfully');
}

/**
 * Initialize DOM elements
 */
function initDOMElements() {
    // Get all required DOM elements
    unitContent = document.getElementById('unitContent');
    progressDots = document.getElementById('progressDots');
    prevBtn = document.getElementById('prevBtn');
    nextBtn = document.getElementById('nextBtn');
    
    // FIX: The HTML has IDs with hyphens, not camelCase
    // Original IDs in HTML: current-unit, total-units
    currentUnitSpan = document.getElementById('current-unit');  // ID in HTML
    totalUnitsSpan = document.getElementById('total-units');    // ID in HTML
    
    console.log('DOM Elements check:');
    console.log('- unitContent:', unitContent ? 'Found' : 'Not found');
    console.log('- progressDots:', progressDots ? 'Found' : 'Not found');
    console.log('- prevBtn:', prevBtn ? 'Found' : 'Not found');
    console.log('- nextBtn:', nextBtn ? 'Found' : 'Not found');
    console.log('- currentUnitSpan (current-unit):', currentUnitSpan ? 'Found' : 'Not found');
    console.log('- totalUnitsSpan (total-units):', totalUnitsSpan ? 'Found' : 'Not found');
    
    // Check for all essential elements
    const essentialElementsFound = unitContent && progressDots && prevBtn && nextBtn;
    
    if (!essentialElementsFound) {
        console.error('Essential DOM elements not found');
        
        // Log all available IDs for debugging
        const allIds = Array.from(document.querySelectorAll('[id]')).map(el => el.id);
        console.log('Available IDs in document:', allIds);
        
        return false;
    }
    
    return true;
}

/**
 * Update content based on current unit index
 */
function updateContent() {
    if (!unitContent) return;
    
    if (currentUnitIndex >= 0 && currentUnitIndex < totalUnits) {
        const unit = unitsData[currentUnitIndex];
        console.log('Loading unit:', currentUnitIndex, '-', unit.title);
        
        unitContent.innerHTML = `
            <h2>${unit.title}</h2>
            <div class="unit-details">
                ${unit.content}
            </div>
        `;
        
        // Update page title
        document.title = `नेपालको संविधान - ${unit.title}`;
    } else {
        console.error('Invalid unit index:', currentUnitIndex);
        unitContent.innerHTML = `
            <div class="error-message">
                <h3>Error</h3>
                <p>Unable to load unit content. Please reload the page.</p>
            </div>
        `;
    }
}

/**
 * Create progress dots for unit navigation
 */
function createProgressDots() {
    if (!progressDots) return;
    
    progressDots.innerHTML = '';
    
    for (let i = 0; i < totalUnits; i++) {
        const dot = document.createElement('button');
        dot.className = 'dot';
        dot.id = `dot-${i}`;
        dot.setAttribute('type', 'button');
        dot.setAttribute('aria-label', `Go to unit ${i + 1}: ${unitsData[i].title}`);
        dot.setAttribute('title', `${unitsData[i].title}`);
        
        // Set active state
        if (i === currentUnitIndex) {
            dot.classList.add('active');
        } else if (i < currentUnitIndex) {
            dot.classList.add('completed');
        }
        
        // Add click event
        dot.addEventListener('click', () => {
            if (i !== currentUnitIndex) {
                currentUnitIndex = i;
                updateContent();
                updateProgressDots();
                updateNavigationButtons();
                updateCurrentUnitIndicator();
                smoothScrollToTop();
            }
        });
        
        progressDots.appendChild(dot);
    }
}

/**
 * Update progress dots state
 */
function updateProgressDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.remove('active', 'completed');
        if (index === currentUnitIndex) {
            dot.classList.add('active');
        } else if (index < currentUnitIndex) {
            dot.classList.add('completed');
        }
    });
}

/**
 * Update navigation buttons state
 */
function updateNavigationButtons() {
    if (!prevBtn || !nextBtn) return;
    
    prevBtn.disabled = currentUnitIndex === 0;
    nextBtn.disabled = currentUnitIndex === totalUnits - 1;
    
    // Update ARIA labels
    if (currentUnitIndex > 0) {
        prevBtn.setAttribute('aria-label', `Previous lesson: ${unitsData[currentUnitIndex - 1].title}`);
    } else {
        prevBtn.setAttribute('aria-label', 'Previous lesson not available');
    }
    
    if (currentUnitIndex < totalUnits - 1) {
        nextBtn.setAttribute('aria-label', `Next lesson: ${unitsData[currentUnitIndex + 1].title}`);
    } else {
        nextBtn.setAttribute('aria-label', 'Next lesson not available');
    }
}

/**
 * Update current unit indicator
 */
function updateCurrentUnitIndicator() {
    if (currentUnitSpan) {
        currentUnitSpan.textContent = currentUnitIndex + 1;
    }
}

/**
 * Navigate to previous unit
 */
function goToPreviousUnit() {
    if (currentUnitIndex > 0) {
        currentUnitIndex--;
        updateContent();
        updateProgressDots();
        updateNavigationButtons();
        updateCurrentUnitIndicator();
        smoothScrollToTop();
    }
}

/**
 * Navigate to next unit
 */
function goToNextUnit() {
    if (currentUnitIndex < totalUnits - 1) {
        currentUnitIndex++;
        updateContent();
        updateProgressDots();
        updateNavigationButtons();
        updateCurrentUnitIndicator();
        smoothScrollToTop();
    }
}

/**
 * Smooth scroll to top
 */
function smoothScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * Handle keyboard navigation
 */
function handleKeyboardNavigation(e) {
    // Ignore keyboard events in form elements
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
        return;
    }
    
    switch(e.key) {
        case 'ArrowLeft':
        case 'Left':
            goToPreviousUnit();
            e.preventDefault();
            break;
        case 'ArrowRight':
        case 'Right':
            goToNextUnit();
            e.preventDefault();
            break;
        case 'Home':
            if (currentUnitIndex !== 0) {
                currentUnitIndex = 0;
                updateContent();
                updateProgressDots();
                updateNavigationButtons();
                updateCurrentUnitIndicator();
                smoothScrollToTop();
            }
            e.preventDefault();
            break;
        case 'End':
            if (currentUnitIndex !== totalUnits - 1) {
                currentUnitIndex = totalUnits - 1;
                updateContent();
                updateProgressDots();
                updateNavigationButtons();
                updateCurrentUnitIndicator();
                smoothScrollToTop();
            }
            e.preventDefault();
            break;
        case 'PageUp':
            if (currentUnitIndex > 0) {
                currentUnitIndex = Math.max(0, currentUnitIndex - 1);
                updateContent();
                updateProgressDots();
                updateNavigationButtons();
                updateCurrentUnitIndicator();
                smoothScrollToTop();
            }
            e.preventDefault();
            break;
        case 'PageDown':
            if (currentUnitIndex < totalUnits - 1) {
                currentUnitIndex = Math.min(totalUnits - 1, currentUnitIndex + 1);
                updateContent();
                updateProgressDots();
                updateNavigationButtons();
                updateCurrentUnitIndicator();
                smoothScrollToTop();
            }
            e.preventDefault();
            break;
        default:
            // Number key navigation (1-9)
            if (e.key >= '1' && e.key <= '9') {
                const unitNumber = parseInt(e.key) - 1;
                if (unitNumber < totalUnits && unitNumber !== currentUnitIndex) {
                    currentUnitIndex = unitNumber;
                    updateContent();
                    updateProgressDots();
                    updateNavigationButtons();
                    updateCurrentUnitIndicator();
                    smoothScrollToTop();
                }
            }
    }
}

/**
 * Setup touch/swipe navigation for mobile
 */
function setupTouchNavigation() {
    if (!unitContent) return;
    
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    unitContent.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].clientX;
        touchStartY = e.changedTouches[0].clientY;
    });

    unitContent.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].clientX;
        touchEndY = e.changedTouches[0].clientY;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diffX = touchEndX - touchStartX;
        const diffY = Math.abs(touchEndY - touchStartY);
        
        // Ignore vertical swipes (scrolling)
        if (diffY > 30) return;
        
        if (Math.abs(diffX) > swipeThreshold) {
            if (diffX > 0 && currentUnitIndex > 0) {
                // Swipe right - go to previous unit
                goToPreviousUnit();
            } else if (diffX < 0 && currentUnitIndex < totalUnits - 1) {
                // Swipe left - go to next unit
                goToNextUnit();
            }
        }
    }
}

/**
 * Setup all event listeners
 */
function setupEventListeners() {
    // Navigation buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', goToPreviousUnit);
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', goToNextUnit);
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // Touch navigation for mobile
    setupTouchNavigation();
}

/**
 * Display error message
 */
function displayErrorMessage(message = '') {
    if (unitContent) {
        const errorMsg = message || 'Error loading content. Please reload the page.';
        unitContent.innerHTML = `
            <div class="error-message">
                <h3><i class="fas fa-exclamation-triangle"></i> Error</h3>
                <p>${errorMsg}</p>
                <button onclick="window.location.reload()" class="reload-btn">
                    <i class="fas fa-redo"></i> Reload Page
                </button>
            </div>
        `;
    }
    
    // Log detailed error to console
    console.error('Application error:', message);
}

/**
 * Add CSS styles for error display
 */
function addErrorStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .error-message {
            text-align: center;
            padding: 3rem 2rem;
            color: #d32f2f;
        }
        .error-message h3 {
            margin-bottom: 1rem;
            font-size: 1.5rem;
        }
        .error-message p {
            margin-bottom: 2rem;
            font-size: 1.1rem;
            color: #555;
        }
        .reload-btn {
            background-color: var(--primary-color);
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: var(--border-radius);
            font-size: 1rem;
            cursor: pointer;
            transition: var(--transition);
        }
        .reload-btn:hover {
            background-color: var(--primary-dark);
        }
    `;
    document.head.appendChild(style);
}

/**
 * Add additional utility functions for better debugging
 */
function debugAppState() {
    console.log('=== APP DEBUG INFO ===');
    console.log('Current unit index:', currentUnitIndex);
    console.log('Total units:', totalUnits);
    console.log('unitsData length:', unitsData ? unitsData.length : 'undefined');
    console.log('Current unit title:', unitsData && unitsData[currentUnitIndex] ? unitsData[currentUnitIndex].title : 'N/A');
    console.log('======================');
}

/**
 * Export functions for debugging (optional)
 */
window.appDebug = {
    getCurrentUnit: () => currentUnitIndex,
    getTotalUnits: () => totalUnits,
    goToUnit: (index) => {
        if (index >= 0 && index < totalUnits) {
            currentUnitIndex = index;
            updateContent();
            updateProgressDots();
            updateNavigationButtons();
            updateCurrentUnitIndicator();
            smoothScrollToTop();
        }
    },
    debug: debugAppState
};

// Add error styles
addErrorStyles();

// Initialize the application
initialize();

// Make initialization function available globally for manual re-initialization
window.reinitializeApp = function() {
    console.log('Manual reinitialization requested...');
    initialize();
};