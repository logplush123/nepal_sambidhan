// app.js
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const closeSidebar = document.getElementById('closeSidebar');
    const sidebarLinks = document.querySelectorAll('.sidebar-menu a');
    const contentBody = document.getElementById('contentBody');
    const unitTitle = document.getElementById('unitTitle');
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const bookmarkBtn = document.getElementById('bookmarkBtn');
    const printBtn = document.getElementById('printBtn');
    const searchToggle = document.getElementById('searchToggle');
    const searchModal = document.getElementById('searchModal');
    const closeSearch = document.getElementById('closeSearch');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchResults = document.getElementById('searchResults');
    const backToTop = document.getElementById('backToTop');
    
    // Current unit tracking
    let currentUnit = 'unit1';
    let unitOrder = ['unit1', 'unit2', 'unit3', 'unit4', 'unit5', 'unit6', 'unit7', 'unit8'];
    let bookmarkedUnits = JSON.parse(localStorage.getItem('bookmarkedUnits')) || [];
    
    // Initialize the app
    initApp();
    
    function initApp() {
        // Load the first unit
        loadUnit(currentUnit);
        
        // Set up event listeners
        setupEventListeners();
        
        // Check for bookmarks
        updateBookmarkButton();
    }
    
    function setupEventListeners() {
        // Sidebar toggle
        menuToggle.addEventListener('click', () => {
            sidebar.classList.add('active');
        });
        
        closeSidebar.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
        
        // Sidebar navigation
        sidebarLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const unitId = link.getAttribute('data-unit');
                
                // Update active link
                sidebarLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                // Load the unit
                loadUnit(unitId);
                
                // Close sidebar on mobile
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('active');
                }
            });
        });
        
        // Previous/Next buttons
        prevBtn.addEventListener('click', goToPreviousUnit);
        nextBtn.addEventListener('click', goToNextUnit);
        
        // Bookmark button
        bookmarkBtn.addEventListener('click', toggleBookmark);
        
        // Print button
        printBtn.addEventListener('click', () => {
            window.print();
        });
        
        // Search functionality
        searchToggle.addEventListener('click', () => {
            searchModal.classList.add('active');
            searchInput.focus();
        });
        
        closeSearch.addEventListener('click', () => {
            searchModal.classList.remove('active');
            searchInput.value = '';
            searchResults.innerHTML = '';
        });
        
        searchButton.addEventListener('click', performSearch);
        searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        
        // Back to top button
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        
        // Close search modal when clicking outside
        searchModal.addEventListener('click', (e) => {
            if (e.target === searchModal) {
                searchModal.classList.remove('active');
                searchInput.value = '';
                searchResults.innerHTML = '';
            }
        });
        
        // Scroll event for back to top button
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.style.display = 'flex';
            } else {
                backToTop.style.display = 'none';
            }
        });
    }
    
    function loadUnit(unitId) {
        // Update current unit
        currentUnit = unitId;
        
        // Get unit data
        const unitData = unitsData[unitId];
        
        if (!unitData) {
            contentBody.innerHTML = '<div class="content-section"><p>इकाई डाटा उपलब्ध छैन।</p></div>';
            return;
        }
        
        // Update UI
        unitTitle.textContent = unitData.title;
        
        // Update progress
        const unitIndex = unitOrder.indexOf(unitId) + 1;
        const progressPercentage = (unitIndex / unitOrder.length) * 100;
        progressBar.style.width = `${progressPercentage}%`;
        progressText.textContent = `इकाई ${unitIndex}/${unitOrder.length}`;
        
        // Update navigation buttons
        prevBtn.disabled = unitIndex === 1;
        nextBtn.disabled = unitIndex === unitOrder.length;
        
        // Build content HTML
        let contentHTML = '';
        
        unitData.sections.forEach(section => {
            contentHTML += `<div class="content-section">`;
            
            if (section.type === 'heading') {
                contentHTML += `<h3>${section.content}</h3>`;
            } 
            else if (section.type === 'subheading') {
                contentHTML += `<h4>${section.content}</h4>`;
            } 
            else if (section.type === 'paragraph') {
                contentHTML += `<p>${section.content}</p>`;
            } 
            else if (section.type === 'bullet') {
                contentHTML += `<ul>`;
                section.items.forEach(item => {
                    contentHTML += `<li>${item}</li>`;
                });
                contentHTML += `</ul>`;
            } 
            else if (section.type === 'numbered') {
                contentHTML += `<ol>`;
                section.items.forEach(item => {
                    contentHTML += `<li>${item}</li>`;
                });
                contentHTML += `</ol>`;
            } 
            else if (section.type === 'table') {
                contentHTML += `<table>`;
                if (section.headers) {
                    contentHTML += `<thead><tr>`;
                    section.headers.forEach(header => {
                        contentHTML += `<th>${header}</th>`;
                    });
                    contentHTML += `</tr></thead>`;
                }
                contentHTML += `<tbody>`;
                section.rows.forEach(row => {
                    contentHTML += `<tr>`;
                    row.forEach(cell => {
                        contentHTML += `<td>${cell}</td>`;
                    });
                    contentHTML += `</tr>`;
                });
                contentHTML += `</tbody></table>`;
            } 
            else if (section.type === 'highlight') {
                contentHTML += `<div class="highlight-box">${section.content}</div>`;
            } 
            else if (section.type === 'note') {
                contentHTML += `<div class="important-note">${section.content}</div>`;
            }
            
            contentHTML += `</div>`;
        });
        
        // Update content
        contentBody.innerHTML = contentHTML;
        
        // Update bookmark button
        updateBookmarkButton();
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    function goToPreviousUnit() {
        const currentIndex = unitOrder.indexOf(currentUnit);
        if (currentIndex > 0) {
            const prevUnit = unitOrder[currentIndex - 1];
            
            // Update active sidebar link
            sidebarLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-unit') === prevUnit) {
                    link.classList.add('active');
                }
            });
            
            loadUnit(prevUnit);
        }
    }
    
    function goToNextUnit() {
        const currentIndex = unitOrder.indexOf(currentUnit);
        if (currentIndex < unitOrder.length - 1) {
            const nextUnit = unitOrder[currentIndex + 1];
            
            // Update active sidebar link
            sidebarLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-unit') === nextUnit) {
                    link.classList.add('active');
                }
            });
            
            loadUnit(nextUnit);
        }
    }
    
    function toggleBookmark() {
        const unitIndex = bookmarkedUnits.indexOf(currentUnit);
        
        if (unitIndex === -1) {
            // Add bookmark
            bookmarkedUnits.push(currentUnit);
            localStorage.setItem('bookmarkedUnits', JSON.stringify(bookmarkedUnits));
            bookmarkBtn.innerHTML = '<i class="fas fa-bookmark"></i> बुकमार्क हटाउनुहोस्';
            showNotification('इकाई बुकमार्क गरियो!');
        } else {
            // Remove bookmark
            bookmarkedUnits.splice(unitIndex, 1);
            localStorage.setItem('bookmarkedUnits', JSON.stringify(bookmarkedUnits));
            bookmarkBtn.innerHTML = '<i class="far fa-bookmark"></i> बुकमार्क';
            showNotification('इकाई बुकमार्क हटाइयो!');
        }
    }
    
    function updateBookmarkButton() {
        if (bookmarkedUnits.includes(currentUnit)) {
            bookmarkBtn.innerHTML = '<i class="fas fa-bookmark"></i> बुकमार्क हटाउनुहोस्';
        } else {
            bookmarkBtn.innerHTML = '<i class="far fa-bookmark"></i> बुकमार्क';
        }
    }
    
    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        
        if (query === '') {
            searchResults.innerHTML = '<div class="search-result-item"><p>कृपया खोजि शब्द टाइप गर्नुहोस्।</p></div>';
            return;
        }
        
        // Clear previous results
        searchResults.innerHTML = '';
        
        // Search through all units
        let resultsFound = 0;
        
        for (const [unitId, unitData] of Object.entries(unitsData)) {
            let unitMatches = [];
            
            // Search in unit title
            if (unitData.title.toLowerCase().includes(query)) {
                unitMatches.push({
                    type: 'title',
                    content: unitData.title
                });
            }
            
            // Search in unit sections
            unitData.sections.forEach((section, sectionIndex) => {
                let sectionContent = '';
                
                if (section.type === 'heading' || section.type === 'subheading' || section.type === 'paragraph') {
                    sectionContent = section.content;
                } else if (section.type === 'bullet' || section.type === 'numbered') {
                    sectionContent = section.items.join(' ');
                } else if (section.type === 'table') {
                    sectionContent = section.rows.flat().join(' ');
                } else if (section.type === 'highlight' || section.type === 'note') {
                    sectionContent = section.content;
                }
                
                if (sectionContent.toLowerCase().includes(query)) {
                    // Extract a snippet with highlighted text
                    const contentLower = sectionContent.toLowerCase();
                    const queryIndex = contentLower.indexOf(query);
                    const start = Math.max(0, queryIndex - 50);
                    const end = Math.min(sectionContent.length, queryIndex + query.length + 100);
                    let snippet = sectionContent.substring(start, end);
                    
                    if (start > 0) snippet = '...' + snippet;
                    if (end < sectionContent.length) snippet = snippet + '...';
                    
                    // Highlight the query in the snippet
                    const regex = new RegExp(`(${query})`, 'gi');
                    snippet = snippet.replace(regex, '<span class="search-highlight">$1</span>');
                    
                    unitMatches.push({
                        type: 'content',
                        sectionIndex,
                        content: snippet
                    });
                }
            });
            
            // Add results for this unit
            if (unitMatches.length > 0) {
                resultsFound++;
                
                const resultItem = document.createElement('div');
                resultItem.className = 'search-result-item';
                resultItem.innerHTML = `
                    <h4>${unitData.title}</h4>
                    <p>${unitMatches.length} मिलान(हरू) फेला पर्यो</p>
                `;
                
                // Add click event to load this unit
                resultItem.addEventListener('click', () => {
                    // Update active sidebar link
                    sidebarLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('data-unit') === unitId) {
                            link.classList.add('active');
                        }
                    });
                    
                    // Load the unit
                    loadUnit(unitId);
                    
                    // Close search modal
                    searchModal.classList.remove('active');
                    searchInput.value = '';
                    searchResults.innerHTML = '';
                });
                
                searchResults.appendChild(resultItem);
            }
        }
        
        if (resultsFound === 0) {
            searchResults.innerHTML = '<div class="search-result-item"><p>कुनै मिलान फेला परेन। फेरि प्रयास गर्नुहोस्।</p></div>';
        }
    }
    
    function showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background-color: var(--secondary-color);
            color: white;
            padding: 12px 20px;
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            z-index: 1001;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                if (notification.parentNode) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
});