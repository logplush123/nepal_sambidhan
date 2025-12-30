// Main Application JavaScript

// DOM Elements
const menuToggle = document.getElementById('menuToggle');
const closeNav = document.getElementById('closeNav');
const sideNav = document.getElementById('sideNav');
const themeToggle = document.getElementById('themeToggle');
const backToTop = document.getElementById('backToTop');
const navLinks = document.querySelectorAll('.nav-link');
const chapterButtons = document.querySelectorAll('.chapter-btn');

// Current Theme
let currentTheme = localStorage.getItem('theme') || 'light';

// Initialize the application
function initApp() {
    // Set initial theme
    setTheme(currentTheme);
    
    // Set up event listeners
    setupEventListeners();
    
    // Set up intersection observer for section highlighting
    setupSectionObserver();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize chapter navigation
    initChapterNavigation();
}

// Set up all event listeners
function setupEventListeners() {
    // Menu toggle
    menuToggle.addEventListener('click', () => {
        sideNav.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    // Close navigation
    closeNav.addEventListener('click', () => {
        sideNav.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Close nav when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && 
            !sideNav.contains(e.target) && 
            !menuToggle.contains(e.target) &&
            sideNav.classList.contains('active')) {
            sideNav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Back to top button
    backToTop.addEventListener('click', scrollToTop);
    
    // Window scroll event for back to top button
    window.addEventListener('scroll', handleScroll);
    
    // Nav link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Close mobile nav if open
                if (window.innerWidth <= 768) {
                    sideNav.classList.remove('active');
                    document.body.style.overflow = '';
                }
                
                // Scroll to section
                targetSection.scrollIntoView({ behavior: 'smooth' });
                
                // Update active nav link
                updateActiveNavLink(targetId);
            }
        });
    });
    
    // Close nav on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sideNav.classList.contains('active')) {
            sideNav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Theme functionality
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update theme toggle icon
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    
    // Update theme label for screen readers
    themeToggle.setAttribute('aria-label', 
        theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(currentTheme);
}

// Scroll functionality
function handleScroll() {
    // Show/hide back to top button
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
    
    // Update active nav link based on scroll position
    updateActiveNavOnScroll();
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Section observer for highlighting active section
function setupSectionObserver() {
    const sections = document.querySelectorAll('.content-section');
    const options = {
        root: null,
        rootMargin: '-100px 0px -50% 0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                updateActiveNavLink(`#${id}`);
                
                // Also update chapter button if this is a main section
                if (['executive', 'legislature', 'judiciary'].includes(id)) {
                    updateActiveChapterButton(id);
                }
            }
        });
    }, options);
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Update active navigation link
function updateActiveNavLink(targetId) {
    navLinks.forEach(link => {
        if (link.getAttribute('href') === targetId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Update active navigation link on scroll
function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('.content-section');
    const scrollPosition = window.scrollY + 150;
    
    let currentSectionId = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSectionId = `#${section.getAttribute('id')}`;
        }
    });
    
    if (currentSectionId) {
        updateActiveNavLink(currentSectionId);
    }
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        if (anchor.getAttribute('href') !== '#') {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        }
    });
}

// Chapter navigation functionality
function initChapterNavigation() {
    chapterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const chapter = button.getAttribute('data-chapter');
            const targetSection = document.getElementById(chapter);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                updateActiveChapterButton(chapter);
                updateActiveNavLink(`#${chapter}`);
            }
        });
    });
}

function updateActiveChapterButton(chapterId) {
    chapterButtons.forEach(button => {
        if (button.getAttribute('data-chapter') === chapterId) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Table of contents generation (optional enhancement)
function generateTableOfContents() {
    const tocContainer = document.querySelector('.nav-links');
    const sections = document.querySelectorAll('.content-section');
    
    // Clear existing TOC items except the fixed ones
    const fixedItems = Array.from(tocContainer.children).slice(0, 5);
    tocContainer.innerHTML = '';
    fixedItems.forEach(item => tocContainer.appendChild(item));
    
    // Add section items to TOC
    sections.forEach(section => {
        const sectionId = section.getAttribute('id');
        const sectionTitle = section.querySelector('.section-title').textContent;
        
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <a href="#${sectionId}" class="nav-link">
                <i class="fas fa-bookmark"></i>
                ${sectionTitle}
            </a>
        `;
        
        tocContainer.appendChild(listItem);
    });
    
    // Reattach event listeners to new nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                if (window.innerWidth <= 768) {
                    sideNav.classList.remove('active');
                    document.body.style.overflow = '';
                }
                
                targetSection.scrollIntoView({ behavior: 'smooth' });
                updateActiveNavLink(targetId);
            }
        });
    });
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);

// Optional: Generate table of contents dynamically
// Uncomment the following line if you want dynamic TOC generation
// document.addEventListener('DOMContentLoaded', generateTableOfContents);