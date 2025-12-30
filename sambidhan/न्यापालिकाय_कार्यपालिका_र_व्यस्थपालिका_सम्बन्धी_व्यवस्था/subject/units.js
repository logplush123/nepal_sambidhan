// Data and utility functions for the Constitution App

// Constitution data structure
const constitutionData = {
    metadata: {
        title: "नेपालको संविधान",
        subtitle: "कार्यपालिका, व्यवस्थापिका र न्यायपालिका",
        year: "२०७२",
        lastUpdated: "२०८१ चैत्र",
        articles: {
            executive: "धारा ७४-८५",
            legislature: "धारा ८६-१०३",
            judiciary: "धारा १२८-१५८"
        }
    },
    
    // Executive branch data
    executive: {
        title: "कार्यपालिका",
        sections: [
            {
                id: "executive-power",
                title: "कार्यकारिणी अधिकार",
                content: [
                    "नेपालको कार्यकारिणी अधिकार मन्त्रिपरिषद्‌मा निहित हुनेछ ।",
                    "संविधान र अन्य कानुनको अधीनमा रही नेपालको शासन व्यवस्थाको सामान्य निर्देशन, नियन्त्रण र सञ्चालन गर्ने अभिभारा मन्त्रिपरिषद्‌मा हुनेछ ।",
                    "नेपालको संघीय कार्यकारिणी सम्बन्धी सम्पूर्ण कार्य नेपाल सरकारको नाममा हुनेछ ।",
                    "नेपाल सरकारको नाममा हुने निर्णय वा आदेश र तत्सम्बन्धी अधिकारपत्रको प्रमाणीकरण कानुनद्वारा व्यवस्था भएबमोजिम हुनेछ ।"
                ]
            },
            {
                id: "cabinet-formation",
                title: "मन्त्रिपरिषद्‌को गठन",
                content: [
                    "राष्ट्रपतिले प्रतिनिधि सभामा बहुमत प्राप्त संसदीय दलको नेतालाई प्रधानमन्त्री नियुक्त गर्नेछ र निजको अध्यक्षतामा मन्त्रिपरिषदको गठन हुनेछ ।",
                    "प्रतिनिधि सभामा कुनै पनि दलको स्पष्ट बहुमत नरहेको अवस्थामा प्रतिनिधि सभामा प्रतिनिधित्व गर्ने दुई वा दुई भन्दा बढी दलहरूको समर्थनमा बहुमत प्राप्त गर्न सक्ने प्रतिनिधि सभाको सदस्यलाई राष्ट्रपतिले प्रधानमन्त्री नियुक्त गर्नेछ ।",
                    "प्रतिनिधि सभाको निर्वाचनको अन्तिम परिणाम घोषणा भएको मितिले तीस दिनभित्र प्रधानमन्त्री नियुक्ति हुन सक्ने अवस्था नभएमा वा त्यसरी नियुक्त प्रधानमन्त्रीले विश्वासको मत प्राप्त गर्न नसकेमा राष्ट्रपतिले प्रतिनिधि सभामा सबैभन्दा बढी सदस्यहरू भएको दलको संसदीय दलको नेतालाई प्रधानमन्त्री नियुक्त गर्नेछ ।"
                ]
            }
        ]
    },
    
    // Legislature data
    legislature: {
        title: "व्यवस्थापिका",
        houses: [
            {
                name: "प्रतिनिधि सभा",
                members: 275,
                term: "५ वर्ष",
                electionMethods: [
                    {
                        method: "प्रथम हुने निर्वाचन प्रणाली",
                        seats: 165,
                        description: "१६५ निर्वाचन क्षेत्रबाट प्रत्यक्ष निर्वाचन"
                    },
                    {
                        method: "समानुपातिक निर्वाचन प्रणाली",
                        seats: 110,
                        description: "देशलाई एक निर्वाचन क्षेत्र मानी समानुपातिक प्रतिनिधित्व"
                    }
                ]
            },
            {
                name: "राष्ट्रिय सभा",
                members: 59,
                term: "६ वर्ष (२ वर्षमा १/३ अवकाश)",
                composition: [
                    {
                        type: "निर्वाचित",
                        seats: 56,
                        description: "प्रदेश सभा, स्थानीय तह निर्वाचित प्रतिनिधिहरूद्वारा निर्वाचित"
                    },
                    {
                        type: "मनोनीत",
                        seats: 3,
                        description: "राष्ट्रपतिद्वारा मनोनीत (कम्तीमा १ जना महिला)"
                    }
                ]
            }
        ]
    },
    
    // Judiciary data
    judiciary: {
        title: "न्यायपालिका",
        supremeCourt: {
            judges: {
                chiefJustice: 1,
                otherJudges: "बढीमा २०",
                total: "बढीमा २१"
            },
            appointment: {
                chiefJustice: "संवैधानिक परिषद्‌को सिफारिसमा राष्ट्रपतिद्वारा",
                otherJudges: "न्याय परिषद्‌को सिफारिसमा राष्ट्रपतिद्वारा"
            }
        },
        writs: [
            {
                name: "बन्दी प्रत्यक्षीकरण",
                latin: "Habeas Corpus",
                purpose: "गैरकानुनी थुनामा राखिएको व्यक्तिलाई अदालत समक्ष उपस्थित गराउन",
                established: "सन् १२१५ (बेलायत)"
            },
            {
                name: "परमादेश",
                latin: "Mandamus",
                purpose: "सार्वजनिक कर्तव्य पालना गर्न आदेश दिन",
                meaning: "हामी आदेश दिन्छौं"
            },
            {
                name: "प्रतिषेध",
                latin: "Prohibition",
                purpose: "अधिकार क्षेत्रभन्दा बढी अधिकार प्रयोग रोक्न",
                note: "निर्णय हुनुअघि जारी गरिन्छ"
            },
            {
                name: "उत्प्रेषण",
                latin: "Certiorari",
                purpose: "गैरकानुनी निर्णयहरू खारेज गर्न",
                note: "निर्णय पछि जारी गरिन्छ"
            },
            {
                name: "अधिकार पृच्छा",
                latin: "Quo-warranto",
                purpose: "अनधिकृत पदाधिकारीको अधिकार प्रश्न गर्न",
                note: "सार्वजनिक पदको लागि मात्र"
            }
        ]
    },
    
    // Comparison data
    comparison: {
        pillars: [
            {
                name: "कार्यपालिका",
                icon: "landmark",
                color: "#2c3e50",
                functions: [
                    "कार्यकारी अधिकारको प्रयोग",
                    "कानूनको कार्यान्वयन",
                    "कानून र व्यवस्था कायम",
                    "सार्वजनिक सेवा प्रवाह",
                    "प्रशासन सञ्चालन"
                ],
                officials: [
                    "राष्ट्रपति (प्रमुख)",
                    "प्रधानमन्त्री (प्रमुख कार्यकारी)",
                    "मन्त्रीहरू"
                ],
                accountability: "संघीय संसदप्रति"
            },
            {
                name: "व्यवस्थापिका",
                icon: "balance-scale",
                color: "#3498db",
                functions: [
                    "कानुन निर्माण",
                    "जनताको प्रतिनिधित्व",
                    "राज्यकोष माथि नियन्त्रण",
                    "सरकारी कार्यको निगरानी",
                    "सरकारलाई उत्तरदायी बनाउनु"
                ],
                structure: [
                    "प्रतिनिधि सभा (२७५ सदस्य)",
                    "राष्ट्रिय सभा (५९ सदस्य)"
                ],
                accountability: "जनताप्रति"
            },
            {
                name: "न्यायपालिका",
                icon: "gavel",
                color: "#e74c3c",
                functions: [
                    "कानुनको व्याख्या",
                    "संविधानको जगेर्ना",
                    "विवादको निस्पक्ष निर्णय",
                    "नागरिक अधिकार संरक्षण",
                    "कानुनको शासन प्रवर्द्धन"
                ],
                structure: [
                    "सर्वोच्च अदालत",
                    "उच्च अदालतहरू",
                    "जिल्ला अदालतहरू"
                ],
                accountability: "कानुन र संविधानप्रति"
            }
        ]
    },
    
    // Glossary data
    glossary: [
        {
            term: "अध्यादेश (Ordinance)",
            definition: "संसदको अधिवेशन नचलेको बखतमा राष्ट्रपतिद्वारा जारी गरिने अस्थायी कानुन, जुन संसदको स्वीकृतिपछि मात्र स्थायी हुन्छ ।"
        },
        {
            term: "अभिलेख अदालत (Court of Record)",
            definition: "सर्वोच्च अदालतलाई दिइएको विशेष दर्जा, जसअनुसार यसले गरेका निर्णयहरू नजिरको रूपमा लिपिबद्ध राखिन्छ र ती सबै अदालतहरूका लागि बन्धनकारी हुन्छन् ।"
        },
        {
            term: "रिट (Writ)",
            definition: "सर्वोच्च अदालतले नागरिकका मौलिक अधिकारको संरक्षणका लागि जारी गर्ने आदेश वा आज्ञापत्र ।"
        },
        {
            term: "न्यायिक पुनरावलोकन (Judicial Review)",
            definition: "सर्वोच्च अदालतले संसद वा सरकारले बनाएको कानुन वा निर्णय संविधानसम्मत छ कि छैन भनी जाँच गर्ने अधिकार ।"
        },
        {
            term: "समावेशी सिद्धान्त (Inclusive Principle)",
            definition: "सबै जात, जाति, लिंग, क्षेत्र र समुदायलाई राज्यको प्रशासन र सेवामा समावेश गर्ने सिद्धान्त ।"
        }
    ]
};

// Utility Functions

// Format date in Nepali style
function formatNepaliDate(date = new Date()) {
    const nepaliMonths = [
        'बैशाख', 'जेठ', 'असार', 'श्रावण', 'भदौ', 'असोज',
        'कार्तिक', 'मंसिर', 'पुष', 'माघ', 'फाल्गुन', 'चैत्र'
    ];
    
    const year = 2081; // Current Nepali year
    const month = nepaliMonths[3]; // Assuming Chaitra
    return `${year} ${month}`;
}

// Get section by ID
function getSectionById(sectionId) {
    const sections = {
        'executive': constitutionData.executive,
        'legislature': constitutionData.legislature,
        'judiciary': constitutionData.judiciary
    };
    
    return sections[sectionId] || null;
}

// Generate table row for legislature data
function generateLegislatureTable() {
    const houseOfReps = constitutionData.legislature.houses[0];
    let html = `
        <div class="data-table">
            <div class="table-header">
                <div class="table-cell">निर्वाचन प्रणाली</div>
                <div class="table-cell">सदस्य संख्या</div>
                <div class="table-cell">विवरण</div>
            </div>
    `;
    
    houseOfReps.electionMethods.forEach(method => {
        html += `
            <div class="table-row">
                <div class="table-cell">${method.method}</div>
                <div class="table-cell">${method.seats}</div>
                <div class="table-cell">${method.description}</div>
            </div>
        `;
    });
    
    html += `
            <div class="table-row highlight">
                <div class="table-cell"><strong>कुल सदस्य</strong></div>
                <div class="table-cell"><strong>${houseOfReps.members}</strong></div>
                <div class="table-cell"><strong>प्रतिनिधि सभाको कार्यकाल ${houseOfReps.term}</strong></div>
            </div>
        </div>
    `;
    
    return html;
}

// Generate writ cards HTML
function generateWritCards() {
    let html = '<div class="writs-container">';
    
    constitutionData.judiciary.writs.forEach(writ => {
        html += `
            <div class="writ-card">
                <div class="writ-header">
                    <h4>${writ.name}<br><small>(${writ.latin})</small></h4>
                </div>
                <div class="writ-body">
                    <p>${writ.purpose}</p>
                    ${writ.established ? `
                        <div class="writ-history">
                            <i class="fas fa-history"></i>
                            <span>${writ.established} देखि प्रचलनमा</span>
                        </div>
                    ` : ''}
                    ${writ.meaning ? `
                        <div class="writ-note">
                            <i class="fas fa-language"></i>
                            <span>${writ.meaning}</span>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    return html;
}

// Generate comparison cards
function generateComparisonCards() {
    let html = '<div class="comparison-container">';
    
    constitutionData.comparison.pillars.forEach(pillar => {
        html += `
            <div class="comparison-card">
                <div class="comparison-header" style="background-color: ${pillar.color}">
                    <i class="fas fa-${pillar.icon}"></i>
                    <h4>${pillar.name}</h4>
                </div>
                <div class="comparison-body">
                    <div class="comparison-item">
                        <h5>मुख्य काम</h5>
                        <ul>
                            ${pillar.functions.map(func => `<li>${func}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="comparison-item">
                        <h5>${pillar.structure ? 'संरचना' : 'प्रमुख पदाधिकारी'}</h5>
                        <ul>
                            ${(pillar.structure || pillar.officials).map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="comparison-item">
                        <h5>उत्तरदायित्व</h5>
                        <p>${pillar.accountability}</p>
                    </div>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    return html;
}

// Generate glossary items
function generateGlossaryItems() {
    let html = '<div class="glossary-container">';
    
    constitutionData.glossary.forEach(item => {
        html += `
            <div class="glossary-item">
                <h4 class="glossary-term">${item.term}</h4>
                <p class="glossary-definition">${item.definition}</p>
            </div>
        `;
    });
    
    html += '</div>';
    return html;
}

// Export utility functions
export {
    constitutionData,
    formatNepaliDate,
    getSectionById,
    generateLegislatureTable,
    generateWritCards,
    generateComparisonCards,
    generateGlossaryItems
};