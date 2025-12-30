// units.js को सामग्री यहाँ सारियो

// नेपालको संविधान र शासन सम्बन्धी संरचित डेटा
const bookData = {
    meta: {
        title: "संविधान र शासन: नेपालको विधि र व्यवस्था",
        subtitle: "संघीय लोकतान्त्रिक गणतन्त्र नेपालको संविधान, राजनीतिक संरचना, स्थानीय शासन र शुशासनको व्यापक विवरण",
        lastUpdated: "वि.सं. २०८१ साउन",
        totalChapters: 6
    },
    
    chapters: [
        // {
        //     id: "ch1",
        //     title: "परिचय: मदन भण्डारी राजमार्ग र संवैधानिक आधार",
        //     content: `
        //         <h3>मदन भण्डारी राजमार्ग: राष्ट्रिय जोड्ने धमनी</h3>
        //         <p>वि.सं. २०७५/७६ को बजेट वक्तव्यमा उल्लेखित यो रणनीतिक राजमार्गले तराई, चुरे, भित्री मधेश र पहाडी क्षेत्रका जिल्लाहरूलाई अन्तरसम्बद्ध गर्दछ। झापा जिल्लाको मेचीनगर (पाटापुर) देखि सुरु भई सुदूरपश्चिमको डडेल्धुरा जिल्लाको रुपाल सम्म पुग्ने लगभग १,२०० किलोमिटर लामो यो राजमार्ग नेपालको सबैभन्दा लामो पूर्व-पश्चिम राजमार्ग हो।</p>
                
        //         <h4>जोडिने जिल्लाहरू</h4>
        //         <p>यसले निम्न १६ वटा जिल्लाहरूलाई सीधै जोड्दछ: झापा, मोरङ, सुनसरी, उदयपुर, सिन्धुली, मकवानपुर, चितवन, नवलपरासी (पूर्व र पश्चिम), पाल्पा, गुल्मी, प्युठान, दाङ, सुर्खेत, दैलेख, डोटी र डडेल्धुरा। यसको निर्माणले आर्थिक विकास, पर्यटन र सामाजिक एकतालाई अभिवृद्धि गर्ने अपेक्षा गरिएको छ।</p>
                
        //         <div class="blockquote">
        //             <p>यो राजमार्ग नेपालको भौगोलिक विविधतालाई जोड्ने राष्ट्रिय एकताको प्रतीक हो। यसले देशको आर्थिक भूगोललाई नै परिवर्तन गर्ने सामर्थ्य राख्दछ।</p>
        //         </div>
        //     `
        // },
        {
            id: "ch2",
            title: "संविधान: राष्ट्रको मूल कानून",
            content: `
                <h3>संविधानको अवधारणा र महत्त्व</h3>
                <p>संविधान कुनै पनि राष्ट्रको <strong>मौलिक र सर्वोच्च कानूनी दस्तावेज</strong> हो। यसले राज्यको संरचना, सरकारको अंगहरूको शक्ति विभाजन, नागरिकको अधिकार र कर्तव्य, तथा राज्य चलाउने मौलिक सिद्धान्तहरू निर्धारण गर्दछ।</p>
                
                <h4>संविधानका मुख्य विशेषताहरू</h4>
                <ul>
                    <li><strong>सर्वोच्चता:</strong> संविधानसँग बाझिने अन्य कानुन स्वतः निष्प्रभावी हुन्छन्।</li>
                    <li><strong>आधारभूत स्रोत:</strong> राज्यका सम्पूर्ण कानुन, नीति, तथा कार्यविधिहरूको मूल स्रोत संविधान नै हो।</li>
                    <li><strong>शक्ति विभाजन:</strong> यसले कार्यपालिका, व्यवस्थापिका र न्यायपालिकाको सृष्टि, कार्यक्षेत्र, सीमा र सम्बन्ध निर्दिष्ट गर्दछ।</li>
                    <li><strong>संशोधन प्रक्रिया:</strong> संविधान संशोधनको प्रक्रिया सामान्य कानुन भन्दा जटिल र कठिन हुन्छ, जसले यसको स्थायित्व र गम्भीरतालाई सुनिश्चित गर्दछ।</li>
                </ul>
                
                <h3>नेपालको संवैधानिक इतिहास</h3>
                <p>नेपालको इतिहासमा हालसम्म ७ वटा संविधानहरू घोषणा भइसकेका छन्। तथापि, पहिलो संविधान (नेपाल सरकारको वैधानिक कानुन, २००४) कार्यान्वयनमा आउन सकेन।</p>
                
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>क्र.सं.</th>
                            <th>संविधानको नाम</th>
                            <th>वर्ष (वि.सं.)</th>
                            <th>मुख्य विशेषता</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>१.</td>
                            <td>नेपाल सरकारको वैधानिक कानुन</td>
                            <td>२००४</td>
                            <td>पहिलो लिखित संविधान (लागू भएन)</td>
                        </tr>
                        <tr>
                            <td>२.</td>
                            <td>नेपालको अन्तरिम शासन विधान</td>
                            <td>२००७</td>
                            <td>प्रजातन्त्रको स्थापना पछिको अन्तरिम संविधान</td>
                        </tr>
                        <tr>
                            <td>३.</td>
                            <td>नेपाल अधिराज्यको संविधान</td>
                            <td>२०१५</td>
                            <td>पञ्चायती व्यवस्थाको सुरुवात</td>
                        </tr>
                        <tr>
                            <td>४.</td>
                            <td>नेपालको संविधान</td>
                            <td>२०१९</td>
                            <td>संवैधानिक राजतन्त्र</td>
                        </tr>
                        <tr>
                            <td>५.</td>
                            <td>नेपाल अधिराज्यको संविधान</td>
                            <td>२०४७</td>
                            <td>बहुदलीय संसदीय प्रजातन्त्र</td>
                        </tr>
                        <tr>
                            <td>६.</td>
                            <td>नेपालको अन्तरिम संविधान</td>
                            <td>२०६३</td>
                            <td>गणतन्त्रको घोषणा, संघीयता तयारी</td>
                        </tr>
                        <tr>
                            <td>७.</td>
                            <td>नेपालको संविधान (वर्तमान)</td>
                            <td>२०७२</td>
                            <td>संघीय लोकतान्त्रिक गणतन्त्र</td>
                        </tr>
                    </tbody>
                </table>
                
                <h3>वर्तमान संविधान (२०७२)</h3>
                <p>नेपालको इतिहासमा <strong>पहिलो पटक संविधान सभाद्वारा निर्मित, राष्ट्रपतिद्वारा वि.सं. २०७२ असोज ३ गते घोषित</strong> यो संविधान नेपाली जनताको दीर्घकालीन संघर्षको परिणति हो। यसमा ३५ भाग, ३०८ धारा र ९ वटा अनुसूचीहरू समावेश छन्। वि.सं. २००७ देखि उठ्न सुरु गरेको संविधान सभाको माग यसै संविधान सँगै पूर्ण भएको हो।</p>
            `
        },
        {
            id: "ch3",
            title: "संविधानका मुख्य विशेषताहरू र व्यवस्थाहरू",
            content: `
                <h3>नेपालको संविधानका प्रमुख विशेषताहरू</h3>
                <p>वि.सं. २०७२ को संविधानले नेपाललाई एक <strong>संघीय लोकतान्त्रिक गणतन्त्र</strong>को रूपमा परिभाषित गरेको छ। यसका प्रमुख विशेषताहरू यसप्रकार छन्:</p>
                
                <h4>राज्यको स्वरूप र संरचना</h4>
                <ul>
                    <li><strong>संघीयता:</strong> एकात्मक राज्य व्यवस्थालाई अन्त्य गरी ७ प्रदेशमा आधारित संघीय संरचना स्वीकार गरिएको।</li>
                    <li><strong>तहगत शासन:</strong> संघ (केन्द्र), प्रदेश र स्थानीय सरकार गरी तीन तहको शासन प्रणाली।</li>
                    <li><strong>धर्म निरपेक्षता:</strong> नेपाललाई आधिकारिक रूपमा धर्मनिरपेक्ष राष्ट्र घोषित गरिएको।</li>
                    <li><strong>सार्वभौमिकता:</strong> राज्यको सार्वभौमसत्ता र राजकीय सत्ता नेपाली जनतामा निहित रहेको।</li>
                </ul>
                
                <h4>नागरिकता र भाषा</h4>
                <ul>
                    <li><strong>नागरिकता:</strong> आमा र बाबु दुवैको नामबाट नागरिकता प्राप्त गर्न सकिने व्यवस्था।</li>
                    <li><strong>भाषिक अधिकार:</strong> नेपालमा बोलिने सबै मातृभाषालाई राष्ट्रभाषाको दर्जा प्रदान गरिएको।</li>
                    <li><strong>कार्यकारी भाषा:</strong> देवनागरी लिपिमा लेखिने नेपाली भाषालाई सरकारी कामकाजको भाषा मानिएको।</li>
                </ul>
                
                <h4>शासन प्रणाली</h4>
                <ul>
                    <li><strong>राष्ट्राध्यक्ष:</strong> राष्ट्रपतिलाई नेपालको राष्ट्राध्यक्षको रूपमा मान्यता।</li>
                    <li><strong>कार्यकारी प्रमुख:</strong> संसदबाट निर्वाचित प्रधानमन्त्री कार्यकारी प्रमुख हुने।</li>
                    <li><strong>मन्त्रिपरिषद्:</strong> बढीमा २५ सदस्यीय संघीय मन्त्रिपरिषद्।</li>
                    <li><strong>सरकार स्थिरता:</strong> प्रधानमन्त्री नियुक्ति पछि दुई वर्षसम्म विश्वासमतको प्रस्ताव ल्याउन नपाइने।</li>
                </ul>
                
                <h3>संवैधानिक निकायहरू</h3>
                <p>संविधानले १३ वटा संवैधानिक निकायहरूको स्थापनाको व्यवस्था गरेको छ, जसले राज्यको विभिन्न महत्त्वपूर्ण क्षेत्रहरूमा स्वतन्त्र रूपले काम गर्छन्:</p>
                
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>क्र.सं.</th>
                            <th>संवैधानिक निकाय</th>
                            <th>मुख्य कार्यक्षेत्र</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>१</td><td>अख्तियार दुरुपयोग अनुसन्धान आयोग</td><td>भ्रष्टाचार अनुसन्धान</td></tr>
                        <tr><td>२</td><td>महालेखा परीक्षक</td><td>सार्वजनिक लेखा परीक्षण</td></tr>
                        <tr><td>३</td><td>लोक सेवा आयोग</td><td>सिविल सेवा भर्ना</td></tr>
                        <tr><td>४</td><td>निर्वाचन आयोग</td><td>निर्वाचन आयोजना</td></tr>
                        <tr><td>५</td><td>राष्ट्रिय मानव अधिकार आयोग</td><td>मानव अधिकार संरक्षण</td></tr>
                        <tr><td>६</td><td>राष्ट्रिय प्राकृतिक स्रोत तथा वित्त आयोग</td><td>स्रोत वितरण</td></tr>
                        <tr><td>७</td><td>राष्ट्रिय महिला आयोग</td><td>महिला अधिकार</td></tr>
                        <tr><td>८</td><td>राष्ट्रिय दलित आयोग</td><td>दलित उत्थान</td></tr>
                        <tr><td>९</td><td>राष्ट्रिय समावेशी आयोग</td><td>सामाजिक समावेशिता</td></tr>
                        <tr><td>१०</td><td>आदिवासी जनजाति आयोग</td><td>आदिवासी अधिकार</td></tr>
                        <tr><td>११</td><td>मधेशी आयोग</td><td>मधेशी समुदाय हित</td></tr>
                        <tr><td>१२</td><td>थारु आयोग</td><td>थारु समुदाय हित</td></tr>
                        <tr><td>१३</td><td>मुस्लिम आयोग</td><td>मुस्लिम समुदाय हित</td></tr>
                    </tbody>
                </table>
                
                <h3>मौलिक हक र कर्तव्य</h3>
                <p>संविधानले ३१ वटा मौलिक हकको व्यवस्था गरेको छ, जसमा जीवनको हक, समानताको हक, स्वतन्त्रताको हक, सम्पत्तिको हक, सञ्चारको हक, न्यायिक उपचारको हक, शिक्षाको हक, स्वास्थ्यको हक, रोजगारको हक, सामाजिक न्यायको हक, सामाजिक सुरक्षाको हक, बालबालिकाको हक, दलितको हक, आदिवासी जनजातिको हक, अल्पसंख्यकको हक, पिछडिएको क्षेत्रको हक, युवाको हक, गरिबको हक, खेतिहरको हक, मजदुरको हक, आवासको हक, महिलाको हक, अपाङ्गताको हक, उपभोक्ताको हक, दोषी सिद्ध नभएसम्म निर्दोष मानिने हक, विचार अभिव्यक्तिको हक, सँस्कृतिक हक, धार्मिक हक र भाषिक हक समावेश छन्।</p>
                
                <div class="blockquote">
                    <p>संविधानले नागरिकलाई अधिकार दिएकोमात्र होइन, राज्य र समाजप्रतिको कर्तव्य पनि निर्दिष्ट गरेको छ। हक र कर्तव्य दुवैको सन्तुलन नै सभ्य समाजको आधार हो।</p>
                </div>
            `
        },
        {
            id: "ch4",
            title: "राजनीतिक संरचना र शासन प्रणाली",
            content: `
                <h3>संघीय संसद: व्यवस्थापिका</h3>
                <p>नेपालको व्यवस्थापिका <strong>द्विसदनात्मक संघीय संसद</strong> हो, जसमा प्रतिनिधि सभा (तल्लो सदन) र राष्ट्रिय सभा (माथिल्लो सदन) समावेश छन्।</p>
                
                <h4>प्रतिनिधि सभा</h4>
                <ul>
                    <li><strong>सदस्य संख्या:</strong> २७५ जना (१६५ प्रत्यक्ष निर्वाचन + ११० समानुपातिक)</li>
                    <li><strong>कार्यकाल:</strong> ५ वर्ष (संकटकालमा १ वर्ष सम्म बढाउन सकिने)</li>
                    <li><strong>योग्यता:</strong> उम्मेदवार हुन २५ वर्ष, मतदाता हुन १८ वर्ष पूरा हुनुपर्छ</li>
                    <li><strong>निर्वाचन प्रणाली:</strong> मिश्रित निर्वाचन प्रणाली (FPTP + PR)</li>
                </ul>
                
                <h4>राष्ट्रिय सभा</h4>
                <ul>
                    <li><strong>सदस्य संख्या:</strong> ५९ जना (५६ निर्वाचित + ३ मनोनित)</li>
                    <li><strong>कार्यकाल:</strong> ६ वर्ष (प्रत्येक २ वर्षमा एक तिहाइ सदस्य अवकाश प्राप्त)</li>
                    <li><strong>निर्वाचक मण्डल:</strong> प्रदेश सभा सदस्य, स्थानीय निकाय प्रमुखहरू</li>
                    <li><strong>योग्यता:</strong> उम्मेदवार हुन ३५ वर्ष पूरा हुनुपर्छ</li>
                </ul>
                
                <h3>कार्यपालिका: सरकार</h3>
                <p>नेपालको शासन प्रणाली <strong>संसदीय प्रणाली</strong> हो, जसमा कार्यपालिका अधिकार मन्त्रिपरिषद्मा निहित हुन्छ।</p>
                
                <h4>राष्ट्रपति र उपराष्ट्रपति</h4>
                <ul>
                    <li><strong>राष्ट्रपति:</strong> नेपालको राष्ट्राध्यक्ष, सेनाको परमाधिपति</li>
                    <li><strong>पदावधि:</strong> ५ वर्ष, अधिकतम दुई पदावधि</li>
                    <li><strong>योग्यता:</strong> ४५ वर्ष पूरा, संसद सदस्य योग्य</li>
                    <li><strong>निर्वाचन:</strong> संघीय संसद र प्रदेश सभाको सदस्य मिलेर गठित निर्वाचक मण्डलद्वारा</li>
                    <li><strong>उपराष्ट्रपति:</strong> राष्ट्रपतिको अनुपस्थितिमा कार्यभार सम्हाल्ने</li>
                </ul>
                
                <h4>प्रधानमन्त्री र मन्त्रिपरिषद्</h4>
                <ul>
                    <li><strong>प्रधानमन्त्री:</strong> संसदीय दलको नेता, कार्यकारी प्रमुख</li>
                    <li><strong>नियुक्ति:</strong> राष्ट्रपतिद्वारा प्रतिनिधि सभाको बहुमत दलको नेतालाई</li>
                    <li><strong>मन्त्रिपरिषद्:</strong> अधिकतम २५ सदस्य, प्रधानमन्त्रीको अध्यक्षतामा</li>
                    <li><strong>उत्तरदायित्व:</strong> संसदप्रति सामूहिक र व्यक्तिगत रूपमा उत्तरदायी</li>
                </ul>
                
                <h3>न्यायपालिका: अदालत प्रणाली</h3>
                <p>नेपालको न्यायिक संरचना तीन तहकी छ:</p>
                
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>अदालत</th>
                            <th>संख्या</th>
                            <th>न्यायाधीश</th>
                            <th>कार्यक्षेत्र</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>सर्वोच्च अदालत</td>
                            <td>१</td>
                            <td>प्रधानन्यायाधीश सहित २१ जना</td>
                            <td>अन्तिम अपील, संवैधानिक व्याख्या</td>
                        </tr>
                        <tr>
                            <td>उच्च अदालत</td>
                            <td>७ (प्रदेश अनुसार)</td>
                            <td>प्रत्येकमा मुख्यन्यायाधीश सहित विविध</td>
                            <td>अपील, मूल अधिकार सम्बन्धी मुद्दा</td>
                        </tr>
                        <tr>
                            <td>जिल्ला अदालत</td>
                            <td>७७ (जिल्ला अनुसार)</td>
                            <td>जिल्ला न्यायाधीश</td>
                            <td>मूल मुद्दाहरूको सुनुवाई</td>
                        </tr>
                    </tbody>
                </table>
                
                <h4>सर्वोच्च अदालतका प्रमुख विशेषताहरू</h4>
                <ul>
                    <li><strong>संवैधानिक इजलास:</strong> ५ सदस्यीय विशेष खण्ड जसले संवैधानिक विवादहरू हेर्छ</li>
                    <li><strong>प्रधानन्यायाधीश:</strong> ६ वर्षको पदावधि, ६५ वर्ष उमेर सम्म</li>
                    <li><strong>न्यायाधीश नियुक्ति:</strong> संवैधानिक परिषद्को सिफारिसमा राष्ट्रपतिद्वारा</li>
                </ul>
            `
        },
        {
            id: "ch5",
            title: "स्थानीय सरकार: गाउँपालिका र नगरपालिका",
            content: `
                <h3>स्थानीय शासनको संरचना</h3>
                <p>संविधानले स्थानीय सरकारलाई संघीय संरचनाको <strong>तेस्रो तथा मूलभूत तह</strong>को रूपमा मान्यता दिएको छ। स्थानीय सरकार सञ्चालन ऐन, २०७४ अनुसार यसको संचालन हुन्छ।</p>
                
                <h4>स्थानीय तहका प्रकारहरू</h4>
                <ul>
                    <li><strong>गाउँपालिका:</strong> ग्रामीण क्षेत्रका लागि स्थानीय सरकार</li>
                    <li><strong>नगरपालिका:</strong> साना शहरी क्षेत्रका लागि</li>
                    <li><strong>उपमहानगरपालिका:</strong> मध्यम शहरी क्षेत्रका लागि</li>
                    <li><strong>महानगरपालिका:</strong> ठूला शहरी क्षेत्रका लागि</li>
                </ul>
                
                <h3>गाउँपालिकाको संरचना</h3>
                <p>गाउँपालिकामा निम्न संरचना हुन्छ:</p>
                
                <h4>गाउँ कार्यपालिका</h4>
                <ul>
                    <li><strong>अध्यक्ष:</strong> १ जना (प्रत्यक्ष निर्वाचन)</li>
                    <li><strong>उपाध्यक्ष:</strong> १ जना (प्रत्यक्ष निर्वाचन)</li>
                    <li><strong>वडाध्यक्ष:</strong> प्रत्येक वडाबाट १ जना (प्रत्यक्ष निर्वाचन)</li>
                    <li><strong>गाउँसभा सदस्य:</strong> ६ जना (५ महिला + १ दलित/अल्पसंख्यक)</li>
                    <li><strong>कुल सदस्य:</strong> अध्यक्ष + उपाध्यक्ष + वडाध्यक्षहरू + ६ = न्यूनतम १३ जना</li>
                </ul>
                
                <h4>गाउँसभा</h4>
                <ul>
                    <li><strong>सदस्य:</strong> गाउँ कार्यपालिकाका सम्पूर्ण सदस्य</li>
                    <li><strong>अधिवेशन:</strong> वर्षमा कम्तिमा २ पटक</li>
                    <li><strong>कार्य:</strong> नीति निर्धारण, बजेट स्वीकृति, कानुन निर्माण</li>
                </ul>
                
                <h3>नगरपालिकाको संरचना</h3>
                <p>नगरपालिकाको संरचना गाउँपालिका जस्तै तर केही भिन्नताहरू छन्:</p>
                
                <h4>नगर कार्यपालिका</h4>
                <ul>
                    <li><strong>मेयर (प्रमुख):</strong> १ जना (प्रत्यक्ष निर्वाचन)</li>
                    <li><strong>उपमेयर (उपप्रमुख):</strong> १ जना (प्रत्यक्ष निर्वाचन)</li>
                    <li><strong>वडाध्यक्ष:</strong> प्रत्येक वडाबाट १ जना</li>
                    <li><strong>नगरसभा सदस्य:</strong> ८ जना (५ महिला + ३ दलित/अल्पसंख्यक)</li>
                    <li><strong>कुल सदस्य:</strong> मेयर + उपमेयर + वडाध्यक्षहरू + ८ = न्यूनतम ११ जना</li>
                </ul>
                
                <h3>स्थानीय तहको वर्गीकरण मापदण्ड</h3>
                <p>स्थानीय सरकार सञ्चालन ऐन, २०७४ ले नगरपालिकाहरूलाई सेवा सुविधाको आधारमा तीन वर्गमा विभाजन गरेको छ:</p>
                
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>मापदण्ड</th>
                            <th>नगरपालिका</th>
                            <th>उपमहानगरपालिका</th>
                            <th>महानगरपालिका</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>जनसंख्या</strong></td>
                            <td>हिमाली: १०,०००+<br>पहाडी: ४०,०००+<br>तराई: ७५,०००+</td>
                            <td>२ लाख+</td>
                            <td>५ लाख+</td>
                        </tr>
                        <tr>
                            <td><strong>वार्षिक आय</strong></td>
                            <td>हिमाली: १ करोड+<br>अन्य: ३ करोड+</td>
                            <td>२५ करोड+</td>
                            <td>१ अर्ब+</td>
                        </tr>
                        <tr>
                            <td><strong>सुविधाहरू</strong></td>
                            <td>आधारभूत शहरी सुविधा</td>
                            <td>उन्नत शहरी सुविधा</td>
                            <td>विश्वस्तरीय सुविधा</td>
                        </tr>
                    </tbody>
                </table>
                
                <h3>नेपालमा स्थानीय तहको स्थिति (२०८१ सम्म)</h3>
                <ul>
                    <li><strong>कुल स्थानीय तह:</strong> ७५३</li>
                    <li><strong>महानगरपालिका:</strong> ६ वटा</li>
                    <li><strong>उपमहानगरपालिका:</strong> ११ वटा</li>
                    <li><strong>नगरपालिका:</strong> २७६ वटा</li>
                    <li><strong>गाउँपालिका:</strong> ४६० वटा</li>
                    <li><strong>कुल वडा संख्या:</strong> ६,७४३ वटा</li>
                </ul>
                
                <div class="blockquote">
                    <p>स्थानीय सरकार नै जनतासँग सीधै जोडिएको शासनको मूल इकाई हो। यसले विकेन्द्रीकरण, सहभागिता र स्थानीय स्वशासनलाई बलियो बनाउँछ।</p>
                </div>
            `
        },
        {
            id: "ch6",
            title: "शुशासन: असल शासनका सिद्धान्त",
            content: `
                <h3>शुशासनको अवधारणा र विकास</h3>
                <p>शुशासन (Good Governance) भन्नाले <strong>जनताको हितमा चुस्त, मितव्ययी, पारदर्शी, उत्तरदायी र सेवामुखी शासन प्रणाली</strong>लाई बुझाउँछ। विश्व बैंकले सन् १९८९ मा प्रकाशित प्रतिवेदनमा सुशासनको अभावलाई विकासको प्रमुख बाधकको रूपमा चिनाएपछि यसलाई विश्वव्यापी रूपमा महत्व दिइन थालिएको हो।</p>
                
                <h4>शुशासनका मुख्य आधार स्तम्भहरू</h4>
                <ul>
                    <li><strong>पारदर्शिता:</strong> निर्णय प्रक्रिया र सूचनामा खुलापन</li>
                    <li><strong>जवाफदेहिता:</strong> कार्य र निर्णयको लागि उत्तरदायी हुनु</li>
                    <li><strong>सहभागिता:</strong> नागरिकको सक्रिय सहभागिता</li>
                    <li><strong>समावेशिता:</strong> सबै वर्ग, लिंग, समुदायको प्रतिनिधित्व</li>
                    <li><strong>कानुनको शासन:</strong> विधि अनुसारको शासन, मनमानीको अभाव</li>
                    <li><strong>प्रभावकारिता र दक्षता:</strong> स्रोतको कुशल उपयोग, उत्तम परिणाम</li>
                    <li><strong>सहमति उन्मुखता:</strong> विविध हितधारक बीच सहमति निर्माण</li>
                </ul>
                
                <h3>नेपालमा शुशासनका लागि कानूनी ढाँचा</h3>
                <p>नेपालले शुशासन स्थापनाका लागि विभिन्न कानूनी व्यवस्थाहरू गरेको छ:</p>
                
                <h4>प्रमुख कानुनहरू</h4>
                <ul>
                    <li><strong>सुशासन (व्यवस्थापन तथा सञ्चालन) ऐन, २०६४:</strong> शुशासनको मुख्य कानूनी ढाँचा</li>
                    <li><strong>सूचना अधिकार ऐन, २०६४:</strong> पारदर्शिता र जवाफदेहिताको कानूनी आधार</li>
                    <li><strong>अख्तियार दुरुपयोग अनुसन्धान ऐन, २०५९:</strong> भ्रष्टाचार रोकथामको लागि</li>
                    <li><strong>लोकपर्दाफास ऐन, २०६४:</strong> सार्वजनिक खरिदमा पारदर्शिता</li>
                </ul>
                
                <h3>नागरिक वडापत्र (Citizen Charter)</h3>
                <p>नागरिक वडापत्र सरकारी सेवा प्रदायक संस्था र सेवाग्राही नागरिक बीचको सेवा स्तर सम्बन्धी लिखित सम्झौता हो। यसमा सेवाको प्रकृति, मापदण्ड, समय, शुल्क र शिकायत निवारण प्रक्रिया उल्लेख हुन्छ।</p>
                
                <h4>नेपालमा नागरिक वडापत्रको इतिहास</h4>
                <ul>
                    <li><strong>सुरुवात:</strong> वि.सं. २०५६ (सन् १९९९)</li>
                    <li><strong>उद्देश्य:</strong> सेवा गुणस्तर सुधार, पारदर्शिता, जवाफदेहिता</li>
                    <li><strong>वर्तमान स्थिति:</strong> धेरै सरकारी कार्यालयले तयार गरेका छन्</li>
                    <li><strong>लाभ:</strong> सेवामा ढिलासुस्ती कमी, नागरिक सशक्तिकरण</li>
                </ul>
                
                <h3>शुशासन स्थापनाका लागि चुनौतीहरू</h3>
                <p>नेपालमा शुशासन स्थापनामा निम्न चुनौतीहरू रहेका छन्:</p>
                
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>चुनौती</th>
                            <th>कारण</th>
                            <th>सम्भावित समाधान</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>भ्रष्टाचार</strong></td>
                            <td>कमजोर निगरानी, दण्ड प्रक्रियामा ढिला</td>
                            <td>पारदर्शिता, ई-गभर्नेन्स, कडा कानुन</td>
                        </tr>
                        <tr>
                            <td><strong>सूचनाको अभाव</strong></td>
                            <td>सूचना प्रविधि पहुँच सीमित</td>
                            <td>डिजिटल साक्षरता, ई-सेवा विस्तार</td>
                        </tr>
                        <tr>
                            <td><strong>संस्थागत कमजोरी</strong></td>
                            <td>कर्मचारी क्षमता, संसाधन अभाव</td>
                            <td>क्षमता निर्माण, प्रविधि समावेश</td>
                        </tr>
                        <tr>
                            <td><strong>राजनीतिक हस्तक्षेप</strong></td>
                            <td>नौकरशाहीमा अनावश्यक दखल</td>
                            <td>स्वायत्तता, पेशागत मापदण्ड</td>
                        </tr>
                    </tbody>
                </table>
                
                <div class="blockquote">
                    <p>शुशासन भनेको केवल सरकारी प्रक्रिया होइन, यो सम्पूर्ण समाजको संस्कृतिको परिवर्तन हो। यसले नागरिकलाई हकदार मात्र होइन, जिम्मेवार सहभागी पनि बनाउँछ।</p>
                </div>
                
                <h3>भविष्यको दिशा: डिजिटल शुशासन</h3>
                <p>नेपाल सरकारले डिजिटल नेपाल रूपान्तरणका लागि विभिन्न पहल गरेको छ, जसमा ई-गभर्नेन्स, ई-सेवा, डिजिटल भुक्तानी प्रणाली, र सूचना प्रविधिमा आधारित निर्णय प्रक्रिया समावेश छन्। यसले शुशासनलाई अझै प्रभावकारी र पहुँचयोग्य बनाउने अपेक्षा गरिएको छ।</p>
            `
        }
    ]
};

// उपयोगिता प्रकार्यहरू
const utils = {
    // नेपाली अंकमा रूपान्तरण
    toNepaliNumber: (num) => {
        const nepaliDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
        return num.toString().split('').map(digit => nepaliDigits[digit] || digit).join('');
    },

    // अध्याय सिर्जना गर्ने
    createChapterElement: (chapter, index) => {
        const chapterElement = document.createElement('div');
        chapterElement.className = 'chapter';
        chapterElement.id = chapter.id;
        
        const titleElement = document.createElement('h2');
        titleElement.textContent = `${utils.toNepaliNumber(index + 1)}. ${chapter.title}`;
        
        const contentElement = document.createElement('div');
        contentElement.innerHTML = chapter.content;
        
        chapterElement.appendChild(titleElement);
        chapterElement.appendChild(contentElement);
        
        return chapterElement;
    },

    // विषयसूची आइटम सिर्जना गर्ने
    createTOCItem: (chapter, index) => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#${chapter.id}`;
        link.textContent = `${utils.toNepaliNumber(index + 1)}. ${chapter.title}`;
        link.dataset.chapterIndex = index;
        listItem.appendChild(link);
        return listItem;
    },

    // सक्रिय विषयसूची आइटम अपडेट गर्ने
    updateActiveTOCItem: (activeIndex) => {
        const tocLinks = document.querySelectorAll('.toc-list a');
        tocLinks.forEach(link => {
            link.classList.remove('active');
            if (parseInt(link.dataset.chapterIndex) === activeIndex) {
                link.classList.add('active');
            }
        });
    },

    // थिम टगल गर्ने
    toggleTheme: () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('app-theme', newTheme);
        
        const themeIcon = document.querySelector('#themeToggle i');
        themeIcon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        
        return newTheme;
    }
};

// DOM तत्वहरू
const DOM = {
    contentArea: document.getElementById('contentArea'),
    tableOfContents: document.getElementById('tableOfContents'),
    menuToggle: document.getElementById('menuToggle'),
    closeSidebar: document.getElementById('closeSidebar'),
    sidebarNav: document.getElementById('sidebarNav'),
    themeToggle: document.getElementById('themeToggle'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    pageIndicator: document.getElementById('pageIndicator')
};

// अनुप्रयोग अवस्था
const AppState = {
    currentChapterIndex: 0,
    totalChapters: bookData.chapters.length,
    isSidebarOpen: false,
    currentTheme: localStorage.getItem('app-theme') || 'light'
};

// अनुप्रयोग आरम्भ गर्ने
const initApp = () => {
    // थिम सेटअप
    document.documentElement.setAttribute('data-theme', AppState.currentTheme);
    const themeIcon = document.querySelector('#themeToggle i');
    themeIcon.className = AppState.currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    
    // सामग्री प्रदर्शन गर्ने
    renderContent();
    
    // विषयसूची प्रदर्शन गर्ने
    renderTableOfContents();
    
    // घटना श्रोताहरू जोड्ने
    setupEventListeners();
    
    // पृष्ठ संकेतक अपडेट गर्ने
    updatePageIndicator();
    
    // URL हशबाट अध्याय लोड गर्ने
    loadChapterFromURL();
};

// सामग्री प्रदर्शन गर्ने
const renderContent = () => {
    DOM.contentArea.innerHTML = '';
    
    bookData.chapters.forEach((chapter, index) => {
        const chapterElement = utils.createChapterElement(chapter, index);
        DOM.contentArea.appendChild(chapterElement);
    });
    
    // पहिलो अध्यायमा स्क्रोल गर्ने
    if (AppState.currentChapterIndex === 0) {
        document.querySelector('.chapter')?.scrollIntoView({ behavior: 'smooth' });
    }
    
    // सक्रिय विषयसूची आइटम अपडेट गर्ने
    utils.updateActiveTOCItem(AppState.currentChapterIndex);
};

// विषयसूची प्रदर्शन गर्ने
const renderTableOfContents = () => {
    DOM.tableOfContents.innerHTML = '';
    
    bookData.chapters.forEach((chapter, index) => {
        const tocItem = utils.createTOCItem(chapter, index);
        DOM.tableOfContents.appendChild(tocItem);
    });
};

// घटना श्रोताहरू जोड्ने
const setupEventListeners = () => {
    // मेनु टगल
    DOM.menuToggle.addEventListener('click', () => {
        DOM.sidebarNav.classList.add('active');
        AppState.isSidebarOpen = true;
    });
    
    // साइडबार बन्द गर्ने
    DOM.closeSidebar.addEventListener('click', () => {
        DOM.sidebarNav.classList.remove('active');
        AppState.isSidebarOpen = false;
    });
    
    // थिम टगल
    DOM.themeToggle.addEventListener('click', () => {
        utils.toggleTheme();
    });
    
    // नेविगेशन बटनहरू
    DOM.prevBtn.addEventListener('click', goToPreviousChapter);
    DOM.nextBtn.addEventListener('click', goToNextChapter);
    
    // विषयसूची लिंकहरू
    DOM.tableOfContents.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            const chapterIndex = parseInt(e.target.dataset.chapterIndex);
            goToChapter(chapterIndex);
            
            // मोबाइलमा साइडबार स्वतः बन्द गर्ने
            if (window.innerWidth < 769) {
                DOM.sidebarNav.classList.remove('active');
                AppState.isSidebarOpen = false;
            }
        }
    });
    
    // कीबोर्ड नेविगेशन
    document.addEventListener('keydown', (e) => {
        // साइडबार टगल (Ctrl+B)
        if (e.ctrlKey && e.key === 'b') {
            e.preventDefault();
            DOM.sidebarNav.classList.toggle('active');
            AppState.isSidebarOpen = !AppState.isSidebarOpen;
        }
        
        // थिम टगल (Ctrl+T)
        if (e.ctrlKey && e.key === 't') {
            e.preventDefault();
            utils.toggleTheme();
        }
        
        // अध्याय नेविगेशन (बायाँ/दायाँ एरो)
        if (e.key === 'ArrowLeft') {
            goToPreviousChapter();
        } else if (e.key === 'ArrowRight') {
            goToNextChapter();
        }
    });
    
    // विंडो रिसाइजमा साइडबार अपडेट
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 769) {
            DOM.sidebarNav.classList.remove('active');
            AppState.isSidebarOpen = false;
        }
    });
    
    // स्क्रोल गर्दा सक्रिय अध्याय अपडेट गर्ने
    window.addEventListener('scroll', debounce(updateActiveChapterOnScroll, 100));
};

// अध्याय परिवर्तन गर्ने
const goToChapter = (index) => {
    if (index >= 0 && index < AppState.totalChapters) {
        AppState.currentChapterIndex = index;
        
        // URL अपडेट गर्ने
        history.replaceState(null, null, `#${bookData.chapters[index].id}`);
        
        // लक्षित अध्यायमा स्क्रोल गर्ने
        const targetChapter = document.getElementById(bookData.chapters[index].id);
        if (targetChapter) {
            targetChapter.scrollIntoView({ behavior: 'smooth' });
        }
        
        // नेविगेशन बटन अवस्था अपडेट गर्ने
        updateNavigationButtons();
        
        // पृष्ठ संकेतक अपडेट गर्ने
        updatePageIndicator();
        
        // सक्रिय विषयसूची आइटम अपडेट गर्ने
        utils.updateActiveTOCItem(index);
    }
};

// अघिल्लो अध्यायमा जाने
const goToPreviousChapter = () => {
    if (AppState.currentChapterIndex > 0) {
        goToChapter(AppState.currentChapterIndex - 1);
    }
};

// अर्को अध्यायमा जाने
const goToNextChapter = () => {
    if (AppState.currentChapterIndex < AppState.totalChapters - 1) {
        goToChapter(AppState.currentChapterIndex + 1);
    }
};

// नेविगेशन बटनहरू अपडेट गर्ने
const updateNavigationButtons = () => {
    DOM.prevBtn.disabled = AppState.currentChapterIndex === 0;
    DOM.nextBtn.disabled = AppState.currentChapterIndex === AppState.totalChapters - 1;
};

// पृष्ठ संकेतक अपडेट गर्ने
const updatePageIndicator = () => {
    DOM.pageIndicator.textContent = 
        `${utils.toNepaliNumber(AppState.currentChapterIndex + 1)}/${utils.toNepaliNumber(AppState.totalChapters)}`;
};

// स्क्रोल गर्दा सक्रिय अध्याय अपडेट गर्ने
const updateActiveChapterOnScroll = () => {
    const chapters = document.querySelectorAll('.chapter');
    let currentActiveIndex = 0;
    
    chapters.forEach((chapter, index) => {
        const rect = chapter.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
            currentActiveIndex = index;
        }
    });
    
    if (currentActiveIndex !== AppState.currentChapterIndex) {
        AppState.currentChapterIndex = currentActiveIndex;
        utils.updateActiveTOCItem(currentActiveIndex);
        updateNavigationButtons();
        updatePageIndicator();
        history.replaceState(null, null, `#${bookData.chapters[currentActiveIndex].id}`);
    }
};

// URL हशबाट अध्याय लोड गर्ने
const loadChapterFromURL = () => {
    const hash = window.location.hash.substring(1);
    if (hash) {
        const chapterIndex = bookData.chapters.findIndex(chapter => chapter.id === hash);
        if (chapterIndex !== -1) {
            goToChapter(chapterIndex);
        }
    }
};

// उपयोगिता: डिबाउन्स प्रकार्य
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// अनुप्रयोग आरम्भ गर्ने
document.addEventListener('DOMContentLoaded', initApp);