// // At the very top of your JavaScript, update appState
// const appState = {
//     lang: localStorage.getItem('nepal_law_lang') || 'nepali',
//     theme: localStorage.getItem('nepal_law_theme') || 'dark',
//     fontSize: parseInt(localStorage.getItem('nepal_law_font')) || 16,
//     disclaimerAccepted: localStorage.getItem('nepal_law_disclaimer_accepted') === 'true',
//     data: [],
//     currentView: 'home',
//     bookmarks: JSON.parse(localStorage.getItem('nepal_law_bookmarks') || '[]')
// };



// // Add at the top of your JavaScript, after appState declaration
// const showDisclaimer = () => {
//     const disclaimerAccepted = localStorage.getItem('nepal_law_disclaimer_accepted');
//     const disclaimerModal = document.getElementById('disclaimerModal');
//     const acceptBtn = document.getElementById('acceptDisclaimer');

//     if (disclaimerAccepted === 'true' && disclaimerModal) {
//         disclaimerModal.style.display = 'none';
//         return false;
//     }

//     if (acceptBtn) {
//         acceptBtn.onclick = () => {
//             localStorage.setItem('nepal_law_disclaimer_accepted', 'true');
//             if (disclaimerModal) {
//                 disclaimerModal.style.opacity = '0';
//                 setTimeout(() => {
//                     disclaimerModal.style.display = 'none';
//                     initializeApp(); // Start the main app
//                 }, 300);
//             }
//         };
//     }
//     return true;
// };

// // Create a new initialization function
// const initializeApp = () => {
//     initializeDOM();
//     setupEventListeners();
//     loadData();
// };

// // Update window.onload
// window.onload = () => {
//     // First show disclaimer
//     const shouldWait = showDisclaimer();

//     // If disclaimer was already accepted, initialize immediately
//     if (!shouldWait) {
//         initializeApp();
//     }
// };

// // Cached DOM elements
// let dom = {};

// const initializeDOM = () => {
//     dom = {
//         mainLawList: document.getElementById('mainLawList'),
//         homeScreen: document.getElementById('homeScreen'),
//         detailScreen: document.getElementById('detailScreen'),
//         searchScreen: document.getElementById('searchScreen'),
//         bookmarkScreen: document.getElementById('bookmarkScreen'),
//         detailContainer: document.getElementById('detailContainer'),
//         searchResults: document.getElementById('searchResults'),
//         bookmarkResults: document.getElementById('bookmarkResults'),
//         backBtn: document.getElementById('backBtn'),
//         mainTitle: document.getElementById('mainTitle'),
//         settingsOverlay: document.getElementById('settingsOverlay'),
//         searchInput: document.getElementById('searchInput'),
//         fontSlider: document.getElementById('fontSlider'),
//         fontVal: document.getElementById('fontVal'),
//         searchTrigger: document.getElementById('searchTrigger'),
//         bookmarkViewTrigger: document.getElementById('bookmarkViewTrigger'),
//         settingsTrigger: document.getElementById('settingsTrigger'),
//         closeSettings: document.getElementById('closeSettings')
//     };
// };

// // Complete Navigation Structure
// const structuredList = [
//     { id: 0, nepali: "प्रस्तावना", english: "Preamble" },
//     { id: 1, nepali: "भाग–१: प्रारम्भिक", english: "Part-1: Preliminary" },
//     { id: 2, nepali: "भाग–२: नागरिकता", english: "Part-2: Citizenship" },
//     { id: 3, nepali: "भाग–३: मौलिक हक र कर्तव्य", english: "Part-3: Fundamental Rights and Duties" },
//     { id: 4, nepali: "भाग–४: राज्यका निर्देशक सिद्धान्त, नीति तथा दायित्व", english: "Part-4: Directive Principles, Policies and Obligations of the State" },
//     { id: 5, nepali: "भाग–५: राज्यको संरचना र राज्यशक्तिको बाँडफाँट", english: "Part-5: Structure of State and Distribution of State Power" },
//     { id: 6, nepali: "भाग–६: राष्ट्रपति र उपराष्ट्रपति", english: "Part-6: President and Vice-President" },
//     { id: 7, nepali: "भाग–७: सङ्घीय कार्यपालिका", english: "Part-7: Federal Executive" },
//     { id: 8, nepali: "भाग–८: सङ्घीय व्यवस्थापिका", english: "Part-8: Federal Legislature" },
//     { id: 9, nepali: "भाग–९: सङ्घीय व्यवस्थापिकीय कार्यविधि", english: "Part-9: Federal Legislative Procedures" },
//     { id: 10, nepali: "भाग–१०: सङ्घीय आर्थिक कार्य प्रणाली", english: "Part-10: Federal Financial Procedures" },
//     { id: 11, nepali: "भाग–११: न्यायपालिका", english: "Part-11: Judiciary" },
//     { id: 12, nepali: "भाग–१२: महान्यायाधिवक्ता", english: "Part-12: Attorney General" },
//     { id: 13, nepali: "भाग–१३: प्रदेश कार्यपालिका", english: "Part-13: State Executive" },
//     { id: 14, nepali: "भाग–१४: प्रदेश व्यवस्थापिका", english: "Part-14: State Legislature" },
//     { id: 15, nepali: "भाग–१५: प्रदेश व्यवस्थापिकीय कार्यविधि", english: "Part-15: State Legislative Procedures" },
//     { id: 16, nepali: "भाग–१६: प्रदेश आर्थिक कार्य प्रणाली", english: "Part-16: State Financial Procedures" },
//     { id: 17, nepali: "भाग–१७: स्थानीय कार्यपालिका", english: "Part-17: Local Executive" },
//     { id: 18, nepali: "भाग–१८: स्थानीय व्यवस्थापिका", english: "Part-18: Local Legislature" },
//     { id: 19, nepali: "भाग–१९: स्थानीय आर्थिक कार्य प्रणाली", english: "Part-19: Local Financial Procedures" },
//     { id: 20, nepali: "भाग–२०: सङ्घ, प्रदेश र स्थानीय तह बीच अन्तरसम्बन्ध", english: "Part-20: Interrelations" },
//     { id: 21, nepali: "भाग–२१: अख्तियार दुरुपयोग अनुसन्धान आयोग", english: "Part-21: CIAA" },
//     { id: 22, nepali: "भाग–२२: महालेखा परीक्षक", english: "Part-22: Auditor General" },
//     { id: 23, nepali: "भाग–२३: लोक सेवा आयोग", english: "Part-23: Public Service Commission" },
//     { id: 24, nepali: "भाग–२४: निर्वाचन आयोग", english: "Part-24: Election Commission" },
//     { id: 25, nepali: "भाग–२५: राष्ट्रिय मानव अधिकार आयोग", english: "Part-25: NHRC" },
//     { id: 26, nepali: "भाग–२६: राष्ट्रिय प्राकृतिक स्रोत तथा वित्तीय आयोग", english: "Part-26: NRFC" },
//     { id: 27, nepali: "भाग–२७: अन्य आयोगहरू", english: "Part-27: Other Commissions" },
//     { id: 28, nepali: "भाग–२८: राष्ट्रिय सुरक्षा सम्बन्धी व्यवस्था", english: "Part-28: National Security" },
//     { id: 29, nepali: "भाग–२९: राजनीतिक दल सम्बन्धी व्यवस्था", english: "Part-29: Political Parties" },
//     { id: 30, nepali: "भाग–३०: सङ्कटकालीन अधिकार", english: "Part-30: Emergency Powers" },
//     { id: 31, nepali: "भाग–३१: संविधान संशोधन", english: "Part-31: Amendment" },
//     { id: 32, nepali: "भाग–३२: विविध", english: "Part-32: Miscellaneous" },
//     { id: 33, nepali: "भाग–३३: सङ्क्रमणकालीन व्यवस्था", english: "Part-33: Transitional Provisions" },
//     { id: 34, nepali: "भाग–३४: परिभाषा र व्याख्या", english: "Part-34: Definitions" },
//     { id: 35, nepali: "भाग–३५: संक्षिप्त नाम, प्रारम्भ र खारेजी", english: "Part-35: Short Title" },
//     { id: 1001, nepali: "अनुसूची-१: राष्ट्रिय झण्डा", english: "Schedule-1: National Flag" },
//     { id: 1002, nepali: "अनुसूची-२: राष्ट्रिय गान", english: "Schedule-2: National Anthem" },
//     { id: 1003, nepali: "अनुसूची-३: निशान छाप", english: "Schedule-3: Coat of Arms" },
//     { id: 1004, nepali: "अनुसूची-४: प्रदेश र जिल्लाहरू", english: "Schedule-4: Provinces" },
//     { id: 1005, nepali: "अनुसूची-५: संघको अधिकार", english: "Schedule-5: Federal Power" },
//     { id: 1006, nepali: "अनुसूची-६: प्रदेशको अधिकार", english: "Schedule-6: Provincial Power" },
//     { id: 1007, nepali: "अनुसूची-७: साझा अधिकार (संघ र प्रदेश)", english: "Schedule-7: Concurrent Power" },
//     { id: 1008, nepali: "अनुसूची-८: स्थानीय तहको अधिकार", english: "Schedule-8: Local Power" },
//     { id: 1009, nepali: "अनुसूची-९: साझा अधिकार (संघ, प्रदेश र स्थानीय)", english: "Schedule-9: Joint Power" }
// ];

// async function loadData() {
//     try {
//         const response = await fetch('backend/data/laws.json');
//         const json = await response.json();
//         appState.data = json.detailList;
//         applySettings();
//         renderMainList();
//     } catch (err) {
//         console.error("Data Load Error:", err);
//     }
// }

// function animateItems(containerSelector) {
//     const items = document.querySelectorAll(`${containerSelector} .law-item`);
//     items.forEach((item, index) => {
//         item.style.animationDelay = `${index * 0.05}s`;
//         item.classList.add('animate-in');
//     });
// }

// function renderMainList() {
//     if (!dom.mainLawList) return;
//     dom.mainLawList.innerHTML = '';
//     structuredList.forEach(item => {
//         const div = document.createElement('div');
//         div.className = 'law-item';
//         const title = appState.lang === 'nepali' ? item.nepali : item.english;
//         const displayId = item.id > 1000 ? (item.id - 1000) : item.id;
//         const prefix = appState.lang === 'nepali' ? (item.id > 1000 ? 'अ' : 'भ') : (item.id > 1000 ? 'S' : 'P');

//         div.innerHTML = `
//             <div class="item-icon">${item.id === 0 ? '<i class="fas fa-scroll"></i>' : prefix + displayId}</div>
//             <div class="item-info"><h3>${title}</h3></div>
//         `;
//         div.onclick = () => showDetail(item.id);
//         dom.mainLawList.appendChild(div);
//     });
//     animateItems('#mainLawList');
// }

// function showDetail(id) {
//     const section = appState.data.find(d => d.id === id);
//     if (!section) return;

//     changeView('detail');
//     const headerInfo = structuredList.find(s => s.id === id);
//     dom.mainTitle.innerText = appState.lang === 'nepali' ? headerInfo.nepali : headerInfo.english;

//     dom.detailContainer.innerHTML = '';
//     section.list.forEach((article, index) => {
//         const card = createLawCard(article, headerInfo, id, index);
//         dom.detailContainer.appendChild(card);
//     });
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// }

// function createLawCard(article, sectionInfo, sectionId, index) {
//     const card = document.createElement('div');
//     card.className = 'content-card';
//     card.style.animation = `fadeInUp 0.5s ease-out forwards`;
//     card.style.animationDelay = `${index * 0.1}s`;
//     card.style.opacity = 0;

//     const title = appState.lang === 'nepali' ? article.title : (article.englishTitle || article.title);
//     const desc = appState.lang === 'nepali' ? article.description : (article.englishDescription || article.description);

//     const bookmarkKey = `${sectionId}-${index}`;
//     const isBookmarked = appState.bookmarks.includes(bookmarkKey);

//     card.innerHTML = `
//         <div class="card-header">
//             <h3 style="color: var(--primary); margin:0; font-size: 1.1rem;">${title}</h3>
//             <i class="${isBookmarked ? 'fas' : 'far'} fa-bookmark bookmark-icon" data-key="${bookmarkKey}"></i>
//         </div>
//         <p style="margin: 10px 0 0 0;">${desc.replace(/\n/g, '<br>')}</p>
//     `;

//     card.querySelector('.bookmark-icon').onclick = (e) => {
//         toggleBookmark(bookmarkKey, e.target);
//     };

//     return card;
// }

// function toggleBookmark(key, element) {
//     const idx = appState.bookmarks.indexOf(key);
//     if (idx > -1) {
//         appState.bookmarks.splice(idx, 1);
//         element.classList.replace('fas', 'far');
//     } else {
//         appState.bookmarks.push(key);
//         element.classList.replace('far', 'fas');
//     }
//     localStorage.setItem('nepal_law_bookmarks', JSON.stringify(appState.bookmarks));
// }

// function setupSearch() {
//     if (!dom.searchInput) return;
//     dom.searchInput.oninput = (e) => {
//         const query = e.target.value.toLowerCase().trim();
//         dom.searchResults.innerHTML = '';
//         if (!query) return;

//         let count = 0;
//         appState.data.forEach(section => {
//             const sectionMeta = structuredList.find(s => s.id === section.id);
//             section.list.forEach((article, index) => {
//                 if (count > 40) return;
//                 const text = (article.title + article.description + (article.englishTitle || '') + (article.englishDescription || '')).toLowerCase();

//                 if (text.includes(query)) {
//                     count++;
//                     const div = document.createElement('div');
//                     div.className = 'law-item animate-in';
//                     const metaText = appState.lang === 'nepali' ? sectionMeta.nepali : sectionMeta.english;
//                     div.innerHTML = `
//                         <div class="item-info">
//                             <div style="font-size: 0.75rem; color: var(--primary); font-weight:bold;">${metaText}</div>
//                             <h3>${appState.lang === 'nepali' ? article.title : (article.englishTitle || article.title)}</h3>
//                         </div>
//                     `;
//                     div.onclick = () => showDetail(section.id);
//                     dom.searchResults.appendChild(div);
//                 }
//             });
//         });
//     };
// }

// function renderBookmarks() {
//     if (!dom.bookmarkResults) return;
//     dom.bookmarkResults.innerHTML = '';
//     if (appState.bookmarks.length === 0) {
//         dom.bookmarkResults.innerHTML = `<div style="text-align:center; padding:100px 20px; opacity:0.5;">
//             <i class="far fa-bookmark" style="font-size: 3rem; margin-bottom: 15px;"></i><br>कुनै बुकमार्क भेटिएन।
//         </div>`;
//         return;
//     }

//     appState.bookmarks.forEach(key => {
//         const [sId, aIdx] = key.split('-').map(Number);
//         const section = appState.data.find(d => d.id === sId);
//         const sectionMeta = structuredList.find(s => s.id === sId);
//         if (section && section.list[aIdx]) {
//             const article = section.list[aIdx];
//             const div = document.createElement('div');
//             div.className = 'law-item animate-in';
//             div.innerHTML = `
//                 <div class="item-info">
//                     <div style="font-size: 0.75rem; color: var(--primary); font-weight:bold;">${appState.lang === 'nepali' ? sectionMeta.nepali : sectionMeta.english}</div>
//                     <h3>${appState.lang === 'nepali' ? article.title : (article.englishTitle || article.title)}</h3>
//                 </div>
//             `;
//             div.onclick = () => showDetail(sId);
//             dom.bookmarkResults.appendChild(div);
//         }
//     });
// }

// function changeView(view) {
//     appState.currentView = view;
//     const screens = [dom.homeScreen, dom.detailScreen, dom.searchScreen, dom.bookmarkScreen];
//     screens.forEach(s => { if (s) s.classList.remove('active'); });

//     if (dom.backBtn) dom.backBtn.style.visibility = view === 'home' ? 'hidden' : 'visible';

//     if (view === 'home' && dom.homeScreen) {
//         dom.homeScreen.classList.add('active');
//         dom.mainTitle.innerText = appState.lang === 'nepali' ? 'नेपाल कानून' : 'Nepal Law';
//         renderMainList();
//     } else if (view === 'detail' && dom.detailScreen) {
//         dom.detailScreen.classList.add('active');
//     } else if (view === 'search' && dom.searchScreen) {
//         dom.searchScreen.classList.add('active');
//         dom.mainTitle.innerText = appState.lang === 'nepali' ? 'खोज्नुहोस्' : 'Search';
//         dom.searchInput.focus();
//     } else if (view === 'bookmark' && dom.bookmarkScreen) {
//         dom.bookmarkScreen.classList.add('active');
//         dom.mainTitle.innerText = appState.lang === 'nepali' ? 'बुकमार्कहरू' : 'Bookmarks';
//         renderBookmarks();
//     }
//     window.scrollTo(0, 0);
// }

// function applySettings() {
//     document.body.setAttribute('data-theme', appState.theme);
//     document.documentElement.style.setProperty('--font-size', appState.fontSize + 'px');
//     if (dom.fontVal) dom.fontVal.innerText = appState.fontSize;
//     if (dom.fontSlider) dom.fontSlider.value = appState.fontSize;

//     document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === appState.lang));
//     document.querySelectorAll('.theme-btn').forEach(b => b.classList.toggle('active', b.dataset.theme === appState.theme));

//     const hero = document.getElementById('heroTitle');
//     if (hero) hero.innerText = appState.lang === 'nepali' ? 'नेपालको संविधान २०७२' : 'Constitution of Nepal 2015';
//     if (dom.searchInput) dom.searchInput.placeholder = appState.lang === 'nepali' ? 'खोज्नुहोस् (धारा वा शीर्षक)...' : 'Search (Article or Title)...';
// }

// const setupEventListeners = () => {
//     if (dom.backBtn) dom.backBtn.onclick = () => changeView('home');
//     if (dom.searchTrigger) dom.searchTrigger.onclick = () => changeView('search');
//     if (dom.bookmarkViewTrigger) dom.bookmarkViewTrigger.onclick = () => changeView('bookmark');

//     if (dom.settingsTrigger) {
//         dom.settingsTrigger.onclick = () => {
//             dom.settingsOverlay.style.display = 'flex';
//             setTimeout(() => dom.settingsOverlay.classList.add('open'), 10);
//         };
//     }

//     const closeSettings = () => {
//         dom.settingsOverlay.classList.remove('open');
//         setTimeout(() => dom.settingsOverlay.style.display = 'none', 300);
//     };

//     if (dom.closeSettings) dom.closeSettings.onclick = closeSettings;
//     if (dom.settingsOverlay) {
//         dom.settingsOverlay.onclick = (e) => { if (e.target === dom.settingsOverlay) closeSettings(); };
//     }

//     document.querySelectorAll('.lang-btn').forEach(btn => {
//         btn.onclick = () => {
//             appState.lang = btn.dataset.lang;
//             localStorage.setItem('nepal_law_lang', appState.lang);
//             applySettings();
//             if (appState.currentView === 'home') renderMainList();
//             else changeView(appState.currentView);
//         };
//     });

//     document.querySelectorAll('.theme-btn').forEach(btn => {
//         btn.onclick = () => {
//             appState.theme = btn.dataset.theme;
//             localStorage.setItem('nepal_law_theme', appState.theme);
//             applySettings();
//         };
//     });

//     if (dom.fontSlider) {
//         dom.fontSlider.oninput = (e) => {
//             appState.fontSize = e.target.value;
//             localStorage.setItem('nepal_law_font', appState.fontSize);
//             applySettings();
//         };
//     }

//     setupSearch();
// };

// window.onload = () => {
//     initializeDOM();
//     setupEventListeners();
//     loadData();
// };