// app.js
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menuToggle');
    const closeSidebar = document.getElementById('closeSidebar');
    const chapterList = document.getElementById('chapterList');
    const bookContent = document.getElementById('bookContent');
    const startReadingBtn = document.getElementById('startReadingBtn');
    const prevChapterBtn = document.getElementById('prevChapter');
    const nextChapterBtn = document.getElementById('nextChapter');
    const chapterIndicator = document.getElementById('chapterIndicator');
    
    // Current chapter state
    let currentChapterIndex = 0;
    
    // Initialize the application
    function initApp() {
        renderChaptersList();
        renderBookContent();
        setupEventListeners();
        updateNavigation();
        
        // Start with the cover page
        showChapter(-1);
    }
    
    // Render chapters list in sidebar
    function renderChaptersList() {
        chapterList.innerHTML = '';
        
        // Add cover page to list
        const coverItem = document.createElement('li');
        coverItem.className = 'chapter-item';
        coverItem.innerHTML = `
            <button class="chapter-btn" data-chapter="-1">
                <i class="fas fa-book chapter-icon"></i>
                <span>आवरण पृष्ठ</span>
            </button>
        `;
        chapterList.appendChild(coverItem);
        
        // Add all chapters from units.js
        constitutionalBodies.forEach((chapter, index) => {
            const listItem = document.createElement('li');
            listItem.className = 'chapter-item';
            listItem.innerHTML = `
                <button class="chapter-btn" data-chapter="${index}">
                    <i class="fas ${chapter.icon} chapter-icon"></i>
                    <span>${chapter.title}</span>
                </button>
            `;
            chapterList.appendChild(listItem);
        });
        
        // Add constitutional council
        const councilItem = document.createElement('li');
        councilItem.className = 'chapter-item';
        councilItem.innerHTML = `
            <button class="chapter-btn" data-chapter="${constitutionalBodies.length}">
                <i class="fas fa-landmark chapter-icon"></i>
                <span>${constitutionalCouncil.title}</span>
            </button>
        `;
        chapterList.appendChild(councilItem);
        
        // Add local level info
        const localItem = document.createElement('li');
        localItem.className = 'chapter-item';
        localItem.innerHTML = `
            <button class="chapter-btn" data-chapter="${constitutionalBodies.length + 1}">
                <i class="fas fa-city chapter-icon"></i>
                <span>${localLevelInfo.title}</span>
            </button>
        `;
        chapterList.appendChild(localItem);
    }
    
    // Render book content
    function renderBookContent() {
        bookContent.innerHTML = '';
        
        // Render cover page
        const coverPage = document.createElement('div');
        coverPage.className = 'book-cover';
        coverPage.id = 'chapter--1';
        coverPage.innerHTML = `
            <div class="cover-content">
                <h1>नेपालको संविधान</h1>
                <h2>संवैधानिक अङ्ग र निकायहरू</h2>
                <div class="divider"></div>
                <p class="cover-description">संवैधानिक व्यवस्था, अधिकार र कर्तव्यहरूको संकलन</p>
                <div class="start-reading">
                    <button id="startReadingBtn2"><i class="fas fa-play"></i> पढ्न सुरु गर्नुहोस्</button>
                </div>
                
            </div>
        `;
        bookContent.appendChild(coverPage);
        
        // Render all constitutional bodies
        constitutionalBodies.forEach((chapter, index) => {
            const chapterElement = document.createElement('div');
            chapterElement.className = 'chapter';
            chapterElement.id = `chapter${index}`;
            
            let detailsHTML = '';
            if (chapter.details) {
                detailsHTML = `
                    <div class="chapter-body">
                        <h3>विवरण</h3>
                        <p>${chapter.details}</p>
                    </div>
                `;
            }
            
            let compositionHTML = '';
            if (chapter.composition) {
                compositionHTML = `
                    <div class="chapter-body">
                        <h3>गठन र नियुक्ति</h3>
                        <p>${chapter.composition}</p>
                    </div>
                `;
            }
            
            let qualificationsHTML = '';
            if (chapter.qualifications) {
                qualificationsHTML = `
                    <div class="chapter-body">
                        <h3>योग्यताहरू</h3>
                        <p>${chapter.qualifications}</p>
                    </div>
                `;
            }
            
            let tableHTML = '';
            if (chapter.tableData) {
                tableHTML = `
                    <div class="table-container">
                        <table class="info-table">
                            <thead>
                                <tr>
                                    ${chapter.tableData.headers.map(header => `<th>${header}</th>`).join('')}
                                </tr>
                            </thead>
                            <tbody>
                                ${chapter.tableData.rows.map(row => `
                                    <tr>
                                        ${row.map(cell => `<td>${cell}</td>`).join('')}
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                `;
            }
            
            chapterElement.innerHTML = `
                <div class="chapter-header">
                    <h2><i class="fas ${chapter.icon}"></i> ${chapter.title}</h2>
                    
                </div>
                ${detailsHTML}
                ${compositionHTML}
                ${qualificationsHTML}
                ${tableHTML}
            `;
            
            bookContent.appendChild(chapterElement);
        });
        
        // Render constitutional council
        const councilElement = document.createElement('div');
        councilElement.className = 'chapter';
        councilElement.id = `chapter${constitutionalBodies.length}`;
        
        councilElement.innerHTML = `
            <div class="chapter-header">
                <h2><i class="fas fa-landmark"></i> ${constitutionalCouncil.title}</h2>
                
            </div>
            <div class="chapter-body">
                <h3>गठन</h3>
                <p>${constitutionalCouncil.composition}</p>
                
                <h3>कार्य र अधिकार</h3>
                <p>${constitutionalCouncil.functions}</p>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-lightbulb"></i> महत्वपूर्ण जानकारी</h4>
                    <p>संवैधानिक परिषद्को सचिव नेपाल सरकारको मुख्य सचिव हुन्छन्। प्रधान न्यायाधीशको नियुक्तिका लागि सिफारिस गर्दा कानून तथा न्याय मन्त्री पनि सदस्यका रूपमा रहन्छन्।</p>
                </div>
            </div>
        `;
        
        bookContent.appendChild(councilElement);
        
        // Render local level info
        const localElement = document.createElement('div');
        localElement.className = 'chapter';
        localElement.id = `chapter${constitutionalBodies.length + 1}`;
        
        localElement.innerHTML = `
            <div class="chapter-header">
                <h2><i class="fas fa-city"></i> ${localLevelInfo.title}</h2>
                
            </div>
            <div class="chapter-body">
                <h3>गाउँपालिकाको गठन</h3>
                <p>${localLevelInfo.villageMunicipality}</p>
                
                <h3>नगरपालिकाको गठन</h3>
                <p>${localLevelInfo.cityMunicipality}</p>
                
                <h3>न्यायिक समिति</h3>
                <p>${localLevelInfo.judicialCommittee}</p>
                
                <div class="highlight-box">
                    <h4><i class="fas fa-info-circle"></i> नोट</h4>
                    <p>स्थानीय तहको कार्यकारिणी अधिकार गाउँपालिका वा नगरपालिकामा निहित हुन्छ। निर्वाचन क्षेत्र निर्धारण आयोगले संघीय संसद र प्रदेश सभाको निर्वाचन क्षेत्र निर्धारण गर्दछ।</p>
                </div>
            </div>
        `;
        
        bookContent.appendChild(localElement);
        
        // Add event listener for the second start reading button
        document.getElementById('startReadingBtn2').addEventListener('click', () => {
            showChapter(0);
        });
    }
    
    // Setup event listeners
    function setupEventListeners() {
        // Menu toggle
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
        
        // Close sidebar
        closeSidebar.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
        
        // Start reading button
        startReadingBtn.addEventListener('click', () => {
            showChapter(0);
        });
        
        // Chapter navigation
        prevChapterBtn.addEventListener('click', () => {
            if (currentChapterIndex > -1) {
                showChapter(currentChapterIndex - 1);
            }
        });
        
        nextChapterBtn.addEventListener('click', () => {
            if (currentChapterIndex < constitutionalBodies.length + 1) {
                showChapter(currentChapterIndex + 1);
            }
        });
        
        // Chapter list items
        document.addEventListener('click', (e) => {
            if (e.target.closest('.chapter-btn')) {
                const chapterBtn = e.target.closest('.chapter-btn');
                const chapterIndex = parseInt(chapterBtn.dataset.chapter);
                showChapter(chapterIndex);
                sidebar.classList.remove('active');
            }
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                if (currentChapterIndex > -1) {
                    showChapter(currentChapterIndex - 1);
                }
            } else if (e.key === 'ArrowRight') {
                if (currentChapterIndex < constitutionalBodies.length + 1) {
                    showChapter(currentChapterIndex + 1);
                }
            }
        });
    }
    
    // Show specific chapter
    function showChapter(chapterIndex) {
        // Hide all chapters
        document.querySelectorAll('.chapter').forEach(chapter => {
            chapter.classList.remove('active');
        });
        
        // Hide cover if it's visible
        const coverPage = document.getElementById('chapter--1');
        if (coverPage) {
            coverPage.style.display = 'none';
        }
        
        // Show selected chapter or cover
        if (chapterIndex === -1) {
            // Show cover page
            coverPage.style.display = 'flex';
            currentChapterIndex = -1;
        } else {
            // Show selected chapter
            const selectedChapter = document.getElementById(`chapter${chapterIndex}`);
            if (selectedChapter) {
                selectedChapter.classList.add('active');
                selectedChapter.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            currentChapterIndex = chapterIndex;
        }
        
        // Update active state in sidebar
        document.querySelectorAll('.chapter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        const activeBtn = document.querySelector(`.chapter-btn[data-chapter="${chapterIndex}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }
        
        // Update navigation
        updateNavigation();
    }
    
    // Update navigation buttons and indicator
    function updateNavigation() {
        // Update chapter indicator
        let chapterName = "आवरण पृष्ठ";
        if (currentChapterIndex >= 0 && currentChapterIndex < constitutionalBodies.length) {
            chapterName = constitutionalBodies[currentChapterIndex].title;
        } else if (currentChapterIndex === constitutionalBodies.length) {
            chapterName = constitutionalCouncil.title;
        } else if (currentChapterIndex === constitutionalBodies.length + 1) {
            chapterName = localLevelInfo.title;
        }
        
        const totalChapters = constitutionalBodies.length + 2; // +2 for cover and local level
        const currentDisplayIndex = currentChapterIndex + 2; // +2 to account for cover as chapter 1
        
        chapterIndicator.textContent = `${chapterName} (${currentDisplayIndex}/${totalChapters})`;
        
        // Update button states
        prevChapterBtn.disabled = currentChapterIndex === -1;
        nextChapterBtn.disabled = currentChapterIndex === constitutionalBodies.length + 1;
    }
    
    // Initialize the app
    initApp();
});