// Translation Dictionary
const translations = {
    en: {
        // Brand / Sidebar
        "brand-name": "LifeBridge India",
        "nav-dashboard": "Dashboard",
        "nav-sos": "SOS Central",
        "nav-shelters": "Shelters",
        "nav-roads": "Safe Roads",
        "nav-family": "Family Safety",
        "nav-medical": "Medical Help",
        "nav-supplies": "Supply Requests",
        "nav-chatbot": "AI Assistant",
        "offline-mode": "Locally Cached Mode",

        // Alerts
        "alert-badge": "Alert",
        "alert-normal": "System Normal. Select a disaster simulation inside the dashboard to test responsiveness.",
        "alert-flood": "⚠️ RED ALERT: Severe Monsoon Flooding in Mumbai Metropolitan Area. Low-lying roads blocked!",
        "alert-quake": "🚨 CRITICAL: Magnitude 7.5 Himalayan Earthquake detected. Major infrastructure alerts active.",
        "alert-cyclone": "🌀 RED ALERT: Severe Cyclone warning for East Coast (West Bengal & Odisha). Evacuate coastal camps!",
        "alert-sos": "🆘 SOS DISTRESS SIGNAL ACTIVE: User location is being broadcast. Emergency services have been notified.",
        "stat-alerts-yes-sos": "SOS Distress Signal Active",

        // Dashboard Stats
        "stat-alerts-title": "Active Disaster Alerts",
        "stat-alerts-no": "No active threats",
        "stat-alerts-yes-flood": "Monsoon flood warnings",
        "stat-alerts-yes-quake": "Earthquake Alert",
        "stat-alerts-yes-cyclone": "Cyclone warning",
        "stat-shelters-title": "Available Shelters",
        "stat-shelters-desc": "All open & operating",
        "stat-roads-title": "Blocked Roads",
        "stat-roads-desc": "Flooding or debris hazards",
        "stat-roads-desc-none": "All routes safe",
        "stat-roads-desc-many": "unsafe hazard roads",
        "stat-checkins-title": "Family Check-ins",
        "stat-checkins-desc": "Members logged safe",

        // Dashboard Layout
        "dashboard-title": "Emergency Dashboard",
        "dashboard-subtitle": "Real-time situational intelligence and disaster coordination.",
        "map-title": "Interactive Regional Disaster Map",
        "legend-shelter": "Shelter",
        "legend-hospital": "Hospital",
        "legend-hazard": "Incident/Hazard",
        "legend-blocked": "Blocked Road",
        "legend-safe": "Safe Road",
        "sandbox-title": "Disaster Simulation Sandbox",
        "sandbox-desc": "Select a mock scenario to simulate how LifeBridge AI dynamically routes data, flags road conditions, and adjusts shelter capacities.",
        "sim-normal": "Normal Status",
        "sim-flood": "Mumbai Monsoon",
        "sim-quake": "Himalayan Quake",
        "sim-cyclone": "Odisha Cyclone",
        "live-broadcast-title": "Live Broadcast Updates",

        // SOS Central
        "sos-title": "SOS Distress Center",
        "sos-subtitle": "Attract attention, broadcast your coordinates, and contact dispatchers.",
        "sos-panel-title": "EMERGENCY SOS",
        "sos-panel-desc": "Press and hold the button for 3 seconds to trigger a mock emergency broadcast. This will fetch GPS, start alerts, and notify local services.",
        "sos-status-idle": "Status: Idle",
        "sos-status-hold": "Hold for {s}s...",
        "sos-status-active": "🚨 SOS BROADCASTING LOCATION",
        "btn-siren": "🔊 Sound Distress Siren",
        "btn-siren-stop": "🔇 Stop Distress Siren",
        "btn-strobe": "🔦 Strobe Flashlight",
        "btn-strobe-stop": "🔦 Stop Strobe Signal",
        "directory-title": "National Emergency Hotline Directory",
        "hotline-erss-title": "National Emergency Number (ERSS)",
        "hotline-erss-desc": "All-in-one emergency response service",
        "hotline-ndma-title": "Disaster Management (NDMA)",
        "hotline-ndma-desc": "National Disaster Management Authority",
        "hotline-ndrf-title": "NDRF Emergency Helpline",
        "hotline-ndrf-desc": "National Disaster Response Force",
        "hotline-med-title": "Ambulance & Medical Aid",
        "hotline-med-desc": "Medical triage and local transport",
        "hotline-police-title": "Police Control Room",
        "hotline-police-desc": "Local police and safety concerns",
        "hotline-women-title": "Women Helpline",
        "hotline-women-desc": "Safety and emergency services for women",
        "hotline-child-title": "Child Helpline",
        "hotline-child-desc": "Emergency support for children in distress",

        // Shelters
        "shelter-title": "Emergency Shelters",
        "shelter-subtitle": "Locate active relief camps, check food/supply availability, and review safety metrics.",
        "opt-all-shelters": "All Shelters",
        "opt-open-shelters": "Available (Open)",
        "opt-full-shelters": "Nearly Full",
        "opt-medical-shelters": "Has Medical Aid",
        "form-shelter-title": "Register / Update Shelter",
        "form-shelter-desc": "Are you managing a community center or school? Register it as a shelter or update its capacity.",
        "lbl-shelter-name": "Shelter Name",
        "lbl-shelter-capacity": "Total Capacity (People)",
        "lbl-facilities": "Facilities Available",
        "fac-medical": "Medical Station Available",
        "fac-food": "Food & Clean Water Provided",
        "fac-pets": "Pets Allowed",
        "btn-register-shelter": "Register Shelter",
        "no-shelters": "No matching shelters found.",
        "status-open": "Open",
        "status-closed": "Closed",
        "status-full": "Full",
        "status-near-limit": "Near Limit",

        // Roads
        "roads-title": "Road Safety & Routing",
        "roads-subtitle": "Real-time reports on road structural safety, flood levels, and landslide blockages.",
        "opt-all-roads": "All Conditions",
        "opt-safe-roads": "Safe Routes Only",
        "opt-hazard-roads": "Hazards/Blocked Only",
        "form-road-title": "Report a Road Hazard",
        "form-road-desc": "Help rescue teams and drivers by documenting active waterlogging, structure debris, or fallen lines.",
        "lbl-road-name": "Route / Road Name",
        "lbl-road-status": "Condition Status",
        "opt-status-safe": "Safe to Drive",
        "opt-status-flooded": "Flooded / Waterlogged",
        "opt-status-blocked": "Blocked / Debris",
        "opt-status-landslide": "Landslide / Sinkhole",
        "lbl-road-desc": "Additional Detail",
        "btn-submit-report": "Submit Report",
        "no-roads": "No matching routes found.",
        "status-safe": "Safe",
        "status-flooded": "Flooded",
        "status-blocked": "Blocked",
        "status-landslide": "Landslide",

        // Family Safety
        "family-title": "Family Safety Check-In",
        "family-subtitle": "Update your health status or search for registered family members in the safe zones.",
        "family-search-title": "Search Check-In Database",
        "form-family-title": "Report Your Safety Status",
        "form-family-desc": "Mark yourself safe to let family, friends, and rescue officials know you are okay.",
        "lbl-family-name": "Full Name",
        "lbl-family-phone": "Phone Number",
        "lbl-family-status": "Current Status",
        "opt-fam-safe": "Safe & Healthy",
        "opt-fam-shelter": "Relocated to Shelter",
        "opt-fam-injured": "Injured (Needs medical aid)",
        "opt-fam-stuck": "Stuck (Needs rescue evacuation)",
        "lbl-family-loc": "Current Location / Shelter",
        "btn-publish-checkin": "Publish Check-in",
        "no-family": "No registered records match your query.",

        // Medical
        "medical-title": "Medical Help Directory",
        "medical-subtitle": "Find hospitals, clinics, emergency triage facilities, and response teams.",
        "medical-list-title": "Active Medical Centers",
        "firstaid-title": "First Aid Fast-Cards",
        "firstaid-desc": "Immediate guides for trauma, bleeding, and shock. Click any to ask the chatbot assistant.",
        "card-bleeding": "🩸 Severe Bleeding Triage",
        "card-heat": "☀️ Heat stroke / Dehydration",
        "card-fracture": "🦴 Bone Fracture/Splinting",

        // Supplies
        "supplies-title": "Supply Coordination Hub",
        "supplies-subtitle": "Coordinate life-saving resources (water, dry food, baby supplies, clean sheets).",
        "supplies-list-title": "Resource Requests",
        "btn-download-offline": "📥 Save Offline Guide",
        "form-supply-title": "Request Supplies",
        "form-supply-desc": "Are you or your local center running low on critical food, baby formula, sanitation packs, or blankets? Post here.",
        "lbl-supply-item": "Supply Item Needed",
        "lbl-supply-qty": "Quantity",
        "lbl-supply-contact": "Contact Person",
        "lbl-supply-loc": "Delivery Location",
        "btn-submit-supply": "Submit Request",
        "no-supplies": "No active supply requests.",
        "btn-pledge": "Pledge Help",
        "status-pledged": "Pledged",

        // Chatbot
        "chatbot-title": "LifeBridge India AI Emergency Advisor",
        "chatbot-subtitle": "Ask questions about medical aid, flood evacuations, or disaster protocols.",
        "tag-cpr": "How to perform CPR?",
        "tag-quake": "Earthquake safety protocol",
        "tag-flood": "Flood water safety guidelines",
        "tag-supplies": "What items should be in an emergency kit?",
        "btn-chat-send": "Send",
        "chat-welcome": "Hello! I am your LifeBridge AI Assistant. I can guide you through disaster protocols, first-aid steps, and shelter coordination. How can I help you today?",

        // Placeholders
        "ph-shelter-search": "Search shelters by name, location or facilities...",
        "ph-shelter-name": "e.g., Dwarka Sector 8 NDRF Camp",
        "ph-shelter-capacity": "e.g., 250",
        "ph-road-search": "Search routes (e.g., National Highway 44)...",
        "ph-road-name": "e.g., Mumbai-Pune Expressway",
        "ph-road-desc": "e.g., High-level waterlogged road, passable only by trucks",
        "ph-family-search": "Search by full name, phone number, or current location...",
        "ph-family-name": "e.g., Aarav Sharma",
        "ph-family-phone": "e.g., 9876543210",
        "ph-family-loc": "e.g., Shivaji Park Relief Hub",
        "ph-supply-item": "e.g., 20L Clean Drinking Water",
        "ph-supply-qty": "e.g., 10 Crates or 5 Packs",
        "ph-supply-contact": "e.g., Priya Patel",
        "ph-supply-loc": "e.g., Kolkata Salt Lake Camp",
        "ph-chat-input": "Type a message or click a guide tag above...",

        // Dynamic labels
        "txt-facilities": "Facilities",
        "txt-occupancy": "Occupancy",
        "txt-phone": "Phone",
        "txt-last-seen": "Last seen",
        "txt-updated": "Updated",
        "txt-updated-now": "Just now",
        "txt-hotline": "Hotline",
        "txt-load": "Load",
        "txt-needed": "Needed",
        "txt-delivery": "Delivery",
        "txt-contact": "Contact"
    },
    hi: {
        // Brand / Sidebar
        "brand-name": "जीवनसेतु भारत",
        "nav-dashboard": "डैशबोर्ड",
        "nav-sos": "आपातकालीन SOS",
        "nav-shelters": "राहत शिविर",
        "nav-roads": "सुरक्षित मार्ग",
        "nav-family": "पारिवारिक सुरक्षा",
        "nav-medical": "चिकित्सा सहायता",
        "nav-supplies": "आपूर्ति अनुरोध",
        "nav-chatbot": "एआई सहायक",
        "offline-mode": "स्थानीय कैश्ड मोड",

        // Alerts
        "alert-badge": "चेतावनी",
        "alert-normal": "सिस्टम सामान्य है। प्रतिक्रिया का परीक्षण करने के लिए डैशबोर्ड के भीतर एक आपदा सिमुलेशन चुनें।",
        "alert-flood": "⚠️ रेड अलर्ट: मुंबई महानगरीय क्षेत्र में गंभीर मानसून बाढ़। निचले मार्ग अवरुद्ध!",
        "alert-quake": "🚨 गंभीर: 7.5 तीव्रता का हिमालयी भूकंप दर्ज किया गया। प्रमुख बुनियादी ढांचा अलर्ट सक्रिय।",
        "alert-cyclone": "🌀 रेड अलर्ट: पूर्वी तट (पश्चिम बंगाल और ओडिशा) के लिए गंभीर चक्रवात की चेतावनी। तटीय शिविरों को खाली करें!",
        "alert-sos": "🆘 SOS संकट संकेत सक्रिय: प्रयोक्ता का स्थान प्रसारित हो रहा है। आपातकालीन सेवाओं को सूचित किया गया है।",

        // Dashboard Stats
        "stat-alerts-title": "सक्रिय आपदा अलर्ट",
        "stat-alerts-no": "कोई सक्रिय खतरा नहीं",
        "stat-alerts-yes-flood": "मानसून बाढ़ की चेतावनी",
        "stat-alerts-yes-quake": "भूकंप अलर्ट",
        "stat-alerts-yes-cyclone": "चक्रवात की चेतावनी",
        "stat-alerts-yes-sos": "SOS संकट संकेत सक्रिय",
        "stat-shelters-title": "उपलब्ध राहत शिविर",
        "stat-shelters-desc": "सभी खुले और कार्यरत हैं",
        "stat-roads-title": "अवरुद्ध मार्ग",
        "stat-roads-desc": "बाढ़ या मलबे के खतरे",
        "stat-roads-desc-none": "सभी मार्ग सुरक्षित",
        "stat-roads-desc-many": "असुरक्षित खतरे वाले मार्ग",
        "stat-checkins-title": "पारिवारिक उपस्थिति",
        "stat-checkins-desc": "सदस्य सुरक्षित दर्ज हैं",

        // Dashboard Layout
        "dashboard-title": "आपातकालीन डैशबोर्ड",
        "dashboard-subtitle": "वास्तविक समय की स्थितिजन्य जानकारी और आपदा समन्वय।",
        "map-title": "इंटरैक्टिव क्षेत्रीय आपदा मानचित्र",
        "legend-shelter": "राहत शिविर",
        "legend-hospital": "अस्पताल",
        "legend-hazard": "घटना/खतरा",
        "legend-blocked": "अवरुद्ध मार्ग",
        "legend-safe": "सुरक्षित मार्ग",
        "sandbox-title": "आपदा सिमुलेशन सैंडबॉक्स",
        "sandbox-desc": "यह देखने के लिए एक मॉक परिदृश्य चुनें कि जीवनसेतु एआई कैसे डेटा को रूट करता है, सड़क की स्थिति को चिह्नित करता है, और शिविर क्षमताओं को समायोजित करता है।",
        "sim-normal": "सामान्य स्थिति",
        "sim-flood": "मुंबई मानसून",
        "sim-quake": "हिमालयी भूकंप",
        "sim-cyclone": "ओडिशा चक्रवात",
        "live-broadcast-title": "लाइव प्रसारण अपडेट",

        // SOS Central
        "sos-title": "SOS संकट केंद्र",
        "sos-subtitle": "ध्यान आकर्षित करें, अपने निर्देशांक प्रसारित करें, और प्रेषकों से संपर्क करें।",
        "sos-panel-title": "आपातकालीन SOS",
        "sos-panel-desc": "मॉक आपातकालीन प्रसारण शुरू करने के लिए बटन को 3 सेकंड के लिए दबाए रखें। यह जीपीएस प्राप्त करेगा, अलर्ट शुरू करेगा और स्थानीय सेवाओं को सूचित करेगा।",
        "sos-status-idle": "स्थिति: निष्क्रिय",
        "sos-status-hold": "{s}s के लिए दबाए रखें...",
        "sos-status-active": "🚨 SOS स्थान प्रसारित हो रहा है",
        "btn-siren": "🔊 संकट सायरन बजाएं",
        "btn-siren-stop": "🔇 सायरन बंद करें",
        "btn-strobe": "🔦 स्ट्रोब लाइट जलाएं",
        "btn-strobe-stop": "🔦 स्ट्रोब संकेत बंद करें",
        "directory-title": "राष्ट्रीय आपातकालीन हेल्पलाइन निर्देशिका",
        "hotline-erss-title": "राष्ट्रीय आपातकालीन नंबर (ERSS)",
        "hotline-erss-desc": "आल-इन-वन आपातकालीन प्रतिक्रिया सेवा",
        "hotline-ndma-title": "आपदा प्रबंधन (NDMA)",
        "hotline-ndma-desc": "राष्ट्रीय आपदा प्रबंधन प्राधिकरण",
        "hotline-ndrf-title": "NDRF आपातकालीन हेल्पलाइन",
        "hotline-ndrf-desc": "राष्ट्रीय आपदा अनुक्रिया बल",
        "hotline-med-title": "एम्बुलेंस और चिकित्सा सहायता",
        "hotline-med-desc": "चिकित्सा आपातकाल और स्थानीय परिवहन",
        "hotline-police-title": "पुलिस नियंत्रण कक्ष",
        "hotline-police-desc": "स्थानीय पुलिस और सुरक्षा चिंताएं",
        "hotline-women-title": "महिला हेल्पलाइन",
        "hotline-women-desc": "महिलाओं के लिए सुरक्षा और आपातकालीन सेवाएं",
        "hotline-child-title": "चाइल्ड हेल्पलाइन",
        "hotline-child-desc": "संकट में बच्चों के लिए आपातकालीन सहायता",

        // Shelters
        "shelter-title": "आपातकालीन राहत शिविर",
        "shelter-subtitle": "सक्रिय राहत शिविरों का पता लगाएं, भोजन/आपूर्ति की उपलब्धता की जांच करें, और सुरक्षा मानकों की समीक्षा करें।",
        "opt-all-shelters": "सभी राहत शिविर",
        "opt-open-shelters": "उपलब्ध (खुले)",
        "opt-full-shelters": "लगभग भरे हुए",
        "opt-medical-shelters": "चिकित्सा सहायता उपलब्ध",
        "form-shelter-title": "शिविर पंजीकृत / अपडेट करें",
        "form-shelter-desc": "क्या आप किसी सामुदायिक केंद्र या स्कूल का प्रबंधन कर रहे हैं? इसे शिविर के रूप में पंजीकृत करें या इसकी क्षमता अपडेट करें।",
        "lbl-shelter-name": "शिविर का नाम",
        "lbl-shelter-capacity": "कुल क्षमता (लोग)",
        "lbl-facilities": "उपलब्ध सुविधाएं",
        "fac-medical": "चिकित्सा स्टेशन उपलब्ध है",
        "fac-food": "भोजन और साफ पानी की व्यवस्था",
        "fac-pets": "पालतू जानवरों की अनुमति है",
        "btn-register-shelter": "शिविर पंजीकृत करें",
        "no-shelters": "कोई मेल खाने वाला शिविर नहीं मिला।",
        "status-open": "खुला है",
        "status-closed": "बंद है",
        "status-full": "पूर्ण",
        "status-near-limit": "सीमा के निकट",

        // Roads
        "roads-title": "सड़क सुरक्षा और रूटिंग",
        "roads-subtitle": "सड़क संरचनात्मक सुरक्षा, बाढ़ के स्तर और भूस्खलन अवरोधों पर वास्तविक समय की रिपोर्ट।",
        "opt-all-roads": "सभी स्थितियां",
        "opt-safe-roads": "केवल सुरक्षित मार्ग",
        "opt-hazard-roads": "केवल खतरे/अवरुद्ध",
        "form-road-title": "सड़क खतरे की रिपोर्ट करें",
        "form-road-desc": "सक्रिय जलभराव, मलबे या गिरे हुए बिजली के तारों की रिपोर्ट करके बचाव टीमों और ड्राइवरों की सहायता करें।",
        "lbl-road-name": "मार्ग / सड़क का नाम",
        "lbl-road-status": "स्थिति का स्तर",
        "opt-status-safe": "वाहन चलाने योग्य (सुरक्षित)",
        "opt-status-flooded": "जलभराव / बाढ़ग्रस्त",
        "opt-status-blocked": "अवरुद्ध / मलबा",
        "opt-status-landslide": "भूस्खलन / धंसाव",
        "lbl-road-desc": "अतिरिक्त विवरण",
        "btn-submit-report": "रिपोर्ट प्रस्तुत करें",
        "no-roads": "कोई मेल खाने वाला मार्ग नहीं मिला।",
        "status-safe": "सुरक्षित",
        "status-flooded": "जलभराव",
        "status-blocked": "अवरुद्ध",
        "status-landslide": "भूस्खलन",

        // Family Safety
        "family-title": "पारिवारिक सुरक्षा उपस्थिति",
        "family-subtitle": "अपनी सुरक्षा स्थिति अपडेट करें या सुरक्षित क्षेत्रों में पंजीकृत परिवार के सदस्यों की खोज करें।",
        "family-search-title": "उपस्थिति डेटाबेस में खोजें",
        "form-family-title": "अपनी सुरक्षा स्थिति की रिपोर्ट करें",
        "form-family-desc": "परिवार, दोस्तों और बचाव अधिकारियों को यह बताने के लिए कि आप ठीक हैं, खुद को सुरक्षित चिह्नित करें।",
        "lbl-family-name": "पूरा नाम",
        "lbl-family-phone": "फ़ोन नंबर",
        "lbl-family-status": "वर्तमान स्थिति",
        "opt-fam-safe": "सुरक्षित और स्वस्थ",
        "opt-fam-shelter": "राहत शिविर में स्थानांतरित",
        "opt-fam-injured": "घायल (चिकित्सा सहायता की आवश्यकता)",
        "opt-fam-stuck": "फंसे हुए (बचाव/निकासी की आवश्यकता)",
        "lbl-family-loc": "वर्तमान स्थान / राहत शिविर",
        "btn-publish-checkin": "विवरण प्रकाशित करें",
        "no-family": "आपकी खोज से मेल खाता कोई रिकॉर्ड नहीं मिला।",

        // Medical
        "medical-title": "चिकित्सा सहायता निर्देशिका",
        "medical-subtitle": "अस्पताल, क्लीनिक, आपातकालीन उपचार सुविधाएं और प्रतिक्रिया दल खोजें।",
        "medical-list-title": "सक्रिय चिकित्सा केंद्र",
        "firstaid-title": "प्राथमिक चिकित्सा रैपिड-कार्ड",
        "firstaid-desc": "चोट, रक्तस्राव और सदमे के लिए त्वरित मार्गदर्शिका। चैटबॉट सहायक से पूछने के लिए किसी पर भी क्लिक करें।",
        "card-bleeding": "🩸 गंभीर रक्तस्राव उपचार",
        "card-heat": "☀️ लू लगना / निर्जलीकरण",
        "card-fracture": "🦴 हड्डी टूटना / खपच्ची बांधना",

        // Supplies
        "supplies-title": "आपूर्ति समन्वय केंद्र",
        "supplies-subtitle": "जीवन रक्षक संसाधनों (पानी, सूखा भोजन, शिशु आपूर्ति, साफ चादरें) का समन्वय करें।",
        "supplies-list-title": "संसाधन अनुरोध",
        "btn-download-offline": "📥 ऑफ़लाइन गाइड सहेजें",
        "form-supply-title": "आपूर्ति का अनुरोध करें",
        "form-supply-desc": "क्या आपके स्थानीय केंद्र में भोजन, शिशु आहार, स्वच्छता पैक या कंबल की कमी हो रही है? यहाँ साझा करें।",
        "lbl-supply-item": "आवश्यक आपूर्ति मद",
        "lbl-supply-qty": "मात्रा",
        "lbl-supply-contact": "संपर्क व्यक्ति",
        "lbl-supply-loc": "वितरण का स्थान",
        "btn-submit-supply": "अनुरोध भेजें",
        "no-supplies": "कोई सक्रिय आपूर्ति अनुरोध नहीं है।",
        "btn-pledge": "मदद की प्रतिज्ञा करें",
        "status-pledged": "स्वीकृत",

        // Chatbot
        "chatbot-title": "जीवनसेतु एआई आपातकालीन सलाहकार",
        "chatbot-subtitle": "चिकित्सा सहायता, बाढ़ निकासी, या आपदा प्रोटोकॉल के बारे में प्रश्न पूछें।",
        "tag-cpr": "सीपीआर (CPR) कैसे करें?",
        "tag-quake": "भूकंप सुरक्षा प्रोटोकॉल",
        "tag-flood": "बाढ़ जल सुरक्षा दिशानिर्देश",
        "tag-supplies": "आपातकालीन किट में क्या होना चाहिए?",
        "btn-chat-send": "भेजें",
        "chat-welcome": "नमस्कार! मैं आपका जीवनसेतु एआई सहायक हूँ। मैं आपदा प्रोटोकॉल, प्राथमिक चिकित्सा कदम और शिविर समन्वय में आपका मार्गदर्शन कर सकता हूँ। आज मैं आपकी क्या सहायता करूँ?",

        // Placeholders
        "ph-shelter-search": "शिविर का नाम, स्थान या सुविधाओं द्वारा खोजें...",
        "ph-shelter-name": "जैसे, शिवाजी पार्क राहत केंद्र",
        "ph-shelter-capacity": "जैसे, 250",
        "ph-road-search": "मार्ग खोजें (जैसे, राष्ट्रीय राजमार्ग 44)...",
        "ph-road-name": "जैसे, मुंबई-पुणे एक्सप्रेसवे",
        "ph-road-desc": "जैसे, अत्यधिक जलभराव वाली सड़क, केवल ट्रकों के लिए अनुकूल",
        "ph-family-search": "पूरा नाम, फोन नंबर या वर्तमान स्थान से खोजें...",
        "ph-family-name": "जैसे, आरव शर्मा",
        "ph-family-phone": "जैसे, 9876543210",
        "ph-family-loc": "जैसे, द्वारका सेक्टर 8 एनडीआरएफ कैंप",
        "ph-supply-item": "जैसे, 20 लीटर साफ पीने का पानी",
        "ph-supply-qty": "जैसे, 10 पेटियां या 5 पैकेट",
        "ph-supply-contact": "जैसे, प्रिया पटेल",
        "ph-supply-loc": "जैसे, साल्ट लेक स्टेडियम राहत शिविर",
        "ph-chat-input": "कोई संदेश लिखें या ऊपर दिए गए गाइड टैग पर क्लिक करें...",

        // Dynamic labels
        "txt-facilities": "सुविधाएं",
        "txt-occupancy": "उपस्थिति",
        "txt-phone": "फ़ोन",
        "txt-last-seen": "अंतिम स्थान",
        "txt-updated": "अपडेट किया गया",
        "txt-updated-now": "अभी-अभी",
        "txt-hotline": "हेल्पलाइन",
        "txt-load": "भार",
        "txt-needed": "आवश्यक",
        "txt-delivery": "डिलिवरी",
        "txt-contact": "संपर्क"
    }
};

// Mock Database State with Geographically Aligned Relative Coordinates for India
let state = {
    lang: 'en',
    scenario: 'none', // none, flood, quake, cyclone
    alerts: 0,
    shelters: [
        { id: 's1', name: 'NDRF Camp - Dwarka Sector 8', capacity: 200, current: 85, facilities: ['food', 'medical', 'pets'], lat: 25, lng: 48, status: 'open' },
        { id: 's2', name: 'Shivaji Park Relief Hub', capacity: 450, current: 180, facilities: ['food', 'medical'], lat: 60, lng: 25, status: 'open' },
        { id: 's3', name: 'Salt Lake Stadium Camp', capacity: 300, current: 50, facilities: ['food', 'pets'], lat: 55, lng: 78, status: 'open' },
        { id: 's4', name: 'Dehradun Disaster Shelter', capacity: 150, current: 30, facilities: ['food', 'medical'], lat: 15, lng: 52, status: 'open' },
        { id: 's5', name: 'Gachibowli Stadium Camp', capacity: 250, current: 120, facilities: ['food', 'pets'], lat: 68, lng: 50, status: 'open' },
        { id: 's6', name: 'Gireeshnagar Relief Camp', capacity: 500, current: 280, facilities: ['food', 'medical', 'pets'], lat: 78, lng: 45, status: 'open' }
    ],
    roads: [
        { id: 'r1', name: 'NH 44 (Delhi-Bengaluru Highway)', status: 'safe', descriptionEn: 'Regular traffic flow. Clear conditions.', descriptionHi: 'सामान्य यातायात प्रवाह। साफ मौसम स्थिति।', fromLat: 25, fromLng: 48, toLat: 78, toLng: 45 },
        { id: 'r2', name: 'Western Express Highway (Mumbai)', status: 'safe', descriptionEn: 'All lanes safe and operating.', descriptionHi: 'सभी लेन सुरक्षित और कार्यरत हैं।', fromLat: 60, fromLng: 25, toLat: 68, toLng: 50 },
        { id: 'r3', name: 'Yamuna Expressway (Delhi-Agra)', status: 'safe', descriptionEn: 'High-speed corridor clear.', descriptionHi: 'हाई-स्पीड कॉरिडोर साफ और चालू है।', fromLat: 25, fromLng: 48, toLat: 40, toLng: 60 },
        { id: 'r4', name: 'NH 16 (Bengaluru-Kolkata Highway)', status: 'safe', descriptionEn: 'Passable. Safe to proceed.', descriptionHi: 'मार्ग चालू है। आगे बढ़ना सुरक्षित है।', fromLat: 78, fromLng: 45, toLat: 55, toLng: 78 },
        { id: 'r5', name: 'NH 58 (Delhi-Dehradun Highway)', status: 'safe', descriptionEn: 'Dry and clear.', descriptionHi: 'मार्ग सूखा और साफ है।', fromLat: 25, fromLng: 48, toLat: 15, toLng: 52 }
    ],
    familyCheckins: [
        { name: 'Aarav Sharma', phone: '98765 43210', status: 'Safe', location: 'Shivaji Park Relief Hub', time: '10 mins ago' },
        { name: 'Priya Patel', phone: '91234 56789', status: 'In Shelter', location: 'Salt Lake Stadium Camp', time: '1 hour ago' },
        { name: 'Amit Kumar', phone: '88888 88888', status: 'Safe', location: 'Home (Safe Zone)', time: '2 hours ago' }
    ],
    medicalCenters: [
        { name: 'AIIMS Delhi', phone: '011-26588500', status: 'Open', triageEn: 'Emergency triage active. High load.', triageHi: 'आपातकालीन ट्राइएज सक्रिय। अत्यधिक भार।', capacity: '90%' },
        { name: 'Sion Hospital Mumbai', phone: '022-24076381', status: 'Open', triageEn: 'Emergency services fully operating.', triageHi: 'आपातकालीन सेवाएं सुचारू रूप से चालू हैं।', capacity: '65%' },
        { name: 'NDRF Mobile Clinic Alpha', phone: '9711077372', status: 'Open', triageEn: 'Mobile unit deployed for first-aid.', triageHi: 'प्राथमिक चिकित्सा के लिए मोबाइल यूनिट तैनात।', capacity: '30%' }
    ],
    supplyRequests: [
        { id: 'sr1', itemEn: 'Dry Rations & Milk Powder', itemHi: 'सूखा राशन और दूध पाउडर', qtyEn: '50 Packs', qtyHi: '50 पैकेट', contact: 'Rajesh Patel', location: 'NDRF Camp - Dwarka Sector 8', status: 'pending' },
        { id: 'sr2', itemEn: 'Clean Drinking Water Tankers', itemHi: 'पीने के पानी के टैंकर', qtyEn: '1000 Liters', qtyHi: '1000 लीटर', contact: 'Anjali Singh', location: 'Shivaji Park Relief Hub', status: 'pledged' },
        { id: 'sr3', itemEn: 'Emergency Medical Kits', itemHi: 'आपातकालीन चिकित्सा किट', qtyEn: '100 Units', qtyHi: '100 सेट', contact: 'Inspector Vikram Rathore', location: 'Dehradun Disaster Shelter', status: 'pending' }
    ],
    incidentLogs: [
        { time: '21:05', messageEn: 'LifeBridge India AI Emergency Portal initialized.', messageHi: 'जीवनसेतु भारत एआई आपातकालीन पोर्टल प्रारंभ किया गया।', status: 'info' },
        { time: '21:06', messageEn: 'Offline caching active. All local database systems ready.', messageHi: 'ऑफ़लाइन कैशिंग सक्रिय। सभी स्थानीय डेटाबेस प्रणालियाँ तैयार हैं।', status: 'success' }
    ]
};

// Translation Helper
function t(key, defaultText) {
    const lang = state.lang || 'en';
    return (translations[lang] && translations[lang][key]) || defaultText;
}

// Web Audio API Sound Generator
let audioCtx = null;
let sirenInterval = null;
let strobeActive = false;

// Initialize Elements
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initSimulation();
    initSOS();
    initShelters();
    initRoads();
    initFamily();
    initSupplies();
    initChatbot();
    initMap();

    // Set English as default initial language
    setLanguage('en');
});

// Switch Language Engine
function setLanguage(lang) {
    state.lang = lang;

    // Update active class on buttons
    const langEnBtn = document.getElementById('langEn');
    const langHiBtn = document.getElementById('langHi');
    if (langEnBtn && langHiBtn) {
        if (lang === 'en') {
            langEnBtn.classList.add('active');
            langHiBtn.classList.remove('active');
        } else {
            langHiBtn.classList.add('active');
            langEnBtn.classList.remove('active');
        }
    }

    // Translate static elements with data-translate
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Translate placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
        const key = el.getAttribute('data-translate-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Translate welcome bubble
    const welcomeBubble = document.getElementById('chatFirstBubble');
    if (welcomeBubble) {
        welcomeBubble.innerHTML = translations[lang]["chat-welcome"];
    }

    // Refresh display
    renderAll();
}
window.setLanguage = setLanguage;

// Navigation Handling
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.view-section');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const view = item.getAttribute('data-view');

            navItems.forEach(n => n.classList.remove('active'));
            item.classList.add('active');

            sections.forEach(sec => {
                sec.classList.remove('active');
                if (sec.id === view) {
                    sec.classList.add('active');
                }
            });
        });
    });
}

// Disaster Simulation Sandbox Engine
function initSimulation() {
    const buttons = document.querySelectorAll('.sandbox-btn');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const scenario = btn.getAttribute('data-scenario');
            triggerScenario(scenario);
        });
    });
}

function triggerScenario(scenario) {
    state.scenario = scenario;

    if (scenario === 'none') {
        state.alerts = 0;
        state.shelters.forEach(s => {
            s.status = 'open';
            s.current = Math.floor(s.capacity * 0.4); // moderate occupancy
        });
        state.roads = [
            { id: 'r1', name: 'NH 44 (Delhi-Bengaluru Highway)', status: 'safe', descriptionEn: 'Regular traffic flow. Clear conditions.', descriptionHi: 'सामान्य यातायात प्रवाह। साफ मौसम स्थिति।', fromLat: 25, fromLng: 48, toLat: 78, toLng: 45 },
            { id: 'r2', name: 'Western Express Highway (Mumbai)', status: 'safe', descriptionEn: 'All lanes safe and operating.', descriptionHi: 'सभी लेन सुरक्षित और कार्यरत हैं।', fromLat: 60, fromLng: 25, toLat: 68, toLng: 50 },
            { id: 'r3', name: 'Yamuna Expressway (Delhi-Agra)', status: 'safe', descriptionEn: 'High-speed corridor clear.', descriptionHi: 'हाई-स्पीड कॉरिडोर साफ और चालू है।', fromLat: 25, fromLng: 48, toLat: 40, toLng: 60 },
            { id: 'r4', name: 'NH 16 (Bengaluru-Kolkata Highway)', status: 'safe', descriptionEn: 'Passable. Safe to proceed.', descriptionHi: 'मार्ग चालू है। आगे बढ़ना सुरक्षित है।', fromLat: 78, fromLng: 45, toLat: 55, toLng: 78 },
            { id: 'r5', name: 'NH 58 (Delhi-Dehradun Highway)', status: 'safe', descriptionEn: 'Dry and clear.', descriptionHi: 'मार्ग सूखा और साफ है।', fromLat: 25, fromLng: 48, toLat: 15, toLng: 52 }
        ];

        state.incidentLogs.unshift({
            time: getCurrTime(),
            messageEn: 'Disaster simulation terminated. Regional status restored to Normal.',
            messageHi: 'आपदा सिमुलेशन समाप्त। क्षेत्रीय स्थिति पुनः सामान्य की गई।',
            status: 'info'
        });
    }
    else if (scenario === 'flood') {
        state.alerts = 2;

        // Flood impacts: Fill Mumbai shelters, flood Kolkata shelters
        state.shelters.forEach(s => {
            if (s.id === 's3' || s.id === 's4') {
                s.status = 'closed';
                s.current = 0;
            } else if (s.id === 's2') {
                s.status = 'open';
                s.current = Math.floor(s.capacity * 0.98); // Shivaji Park full
            } else {
                s.status = 'open';
                s.current = Math.floor(s.capacity * 0.8);
            }
        });

        // Flood blockades
        state.roads.forEach(r => {
            if (r.id === 'r2' || r.id === 'r5') {
                r.status = 'flooded';
                r.descriptionEn = '⚠️ FLASH FLOOD WARNING: Waterlogged. Impassable for low vehicles.';
                r.descriptionHi = '⚠️ बाढ़ चेतावनी: जलभराव। छोटे वाहनों के लिए अनुपयुक्त।';
            } else {
                r.status = 'safe';
                r.descriptionEn = 'Evacuation route open.';
                r.descriptionHi = 'निकासी मार्ग खुला है।';
            }
        });

        state.incidentLogs.unshift({
            time: getCurrTime(),
            messageEn: '⚠️ RED ALERT: Severe Monsoon Flooding in Mumbai area. Main highways submerged.',
            messageHi: '⚠️ रेड अलर्ट: मुंबई क्षेत्र में गंभीर मानसून बाढ़। प्रमुख राजमार्ग जलमग्न।',
            status: 'danger'
        });
        state.incidentLogs.unshift({
            time: getCurrTime(),
            messageEn: 'Salt Lake Stadium Camp (Shelter s3) evacuated due to heavy flash storms.',
            messageHi: 'भारी आंधी-तूफान के कारण साल्ट लेक स्टेडियम शिविर (s3) खाली कराया गया।',
            status: 'warning'
        });
    }
    else if (scenario === 'quake') {
        state.alerts = 3;

        // Earthquake impacts
        state.shelters.forEach(s => {
            if (s.id === 's4') { // Dehradun shelter damaged
                s.status = 'closed';
                s.current = 0;
            } else {
                s.status = 'open';
                s.current = Math.min(s.capacity, Math.floor(s.capacity * 0.9));
            }
        });

        // Block highways
        state.roads.forEach(r => {
            if (r.id === 'r5') {
                r.status = 'blocked';
                r.descriptionEn = '❌ BLOCKED: Landslide debris blocking both lanes of NH 58.';
                r.descriptionHi = '❌ अवरुद्ध: भूस्खलन के मलबे से NH 58 की दोनों लेन बंद।';
            } else if (r.id === 'r3') {
                r.status = 'blocked';
                r.descriptionEn = '❌ BLOCKED: Overpass structural cracking detected.';
                r.descriptionHi = '❌ अवरुद्ध: ओवरपास में संरचनात्मक दरारें पाई गईं।';
            } else {
                r.status = 'safe';
                r.descriptionEn = 'Clear for relief traffic.';
                r.descriptionHi = 'राहत यातायात के लिए मार्ग खुला है।';
            }
        });

        state.incidentLogs.unshift({
            time: getCurrTime(),
            messageEn: '🚨 CRITICAL: Magnitude 7.5 Earthquake detected in Himalayan region. Dehradun shelter closed.',
            messageHi: '🚨 गंभीर: हिमालय क्षेत्र में 7.5 तीव्रता का भूकंप। देहरादून राहत शिविर बंद।',
            status: 'danger'
        });
        state.incidentLogs.unshift({
            time: getCurrTime(),
            messageEn: 'NH 58 blocked by massive landslide in hill section. Emergency clearing dispatched.',
            messageHi: 'पहाड़ी खंड में भारी भूस्खलन से NH 58 अवरुद्ध। आपातकालीन मलबा सफाई बल रवाना।',
            status: 'danger'
        });
    }
    else if (scenario === 'cyclone') {
        state.alerts = 2;

        // Cyclone impacts: coastal shelters evacuated
        state.shelters.forEach(s => {
            if (s.id === 's3' || s.id === 's1') {
                s.status = 'open';
                s.current = Math.floor(s.capacity * 0.95); // Pack safe inland shelters
            } else if (s.id === 's6') {
                s.status = 'closed';
                s.current = 0;
            } else {
                s.status = 'open';
                s.current = Math.floor(s.capacity * 0.5);
            }
        });

        // Block coastal highways
        state.roads.forEach(r => {
            if (r.id === 'r4') {
                r.status = 'blocked';
                r.descriptionEn = '❌ BLOCKED: Severe storm winds and fallen electric poles on NH 16.';
                r.descriptionHi = '❌ अवरुद्ध: तीव्र आंधी और NH 16 पर गिरे बिजली के खंभे।';
            } else {
                r.status = 'safe';
                r.descriptionEn = 'Safe evacuation corridor.';
                r.descriptionHi = 'सुरक्षित निकासी कॉरिडोर।';
            }
        });

        state.incidentLogs.unshift({
            time: getCurrTime(),
            messageEn: '🌀 RED ALERT: Cyclone landfall approaching West Bengal & Odisha coasts. High wind danger.',
            messageHi: '🌀 रेड अलर्ट: पश्चिम बंगाल और ओडिशा तटों की ओर चक्रवात का लैंडफॉल। तीव्र आंधी का खतरा।',
            status: 'danger'
        });
        state.incidentLogs.unshift({
            time: getCurrTime(),
            messageEn: 'Gireeshnagar Relief Camp closed. Coastal refugees relocated to inland camps.',
            messageHi: 'गिरीशनगर राहत शिविर बंद। तटीय प्रवासियों को अंतर्देशीय शिविरों में भेजा गया।',
            status: 'warning'
        });
    }

    renderAll();
}

// SOS Trigger Sequence & Web Audio Siren
function initSOS() {
    const sosBtn = document.getElementById('sosBtn');
    const sosStatus = document.getElementById('sosStatus');
    const sosGPS = document.getElementById('sosGPS');
    const sirenBtn = document.getElementById('sirenBtn');
    const strobeBtn = document.getElementById('strobeBtn');
    const strobeOverlay = document.getElementById('strobeOverlay');

    let pressTimer = null;
    let secondsLeft = 3;

    sosBtn.addEventListener('mousedown', startSOSCountdown);
    sosBtn.addEventListener('touchstart', startSOSCountdown);

    window.addEventListener('mouseup', cancelSOSCountdown);
    window.addEventListener('touchend', cancelSOSCountdown);

    function startSOSCountdown(e) {
        e.preventDefault();
        secondsLeft = 3;
        sosBtn.classList.add('counting');
        sosStatus.innerText = t('sos-status-hold', `Hold for ${secondsLeft}s...`).replace('{s}', secondsLeft);

        pressTimer = setInterval(() => {
            secondsLeft--;
            if (secondsLeft <= 0) {
                clearInterval(pressTimer);
                triggerSOSActive();
            } else {
                sosStatus.innerText = t('sos-status-hold', `Hold for ${secondsLeft}s...`).replace('{s}', secondsLeft);
            }
        }, 1000);
    }

    function cancelSOSCountdown() {
        if (pressTimer) {
            clearInterval(pressTimer);
            pressTimer = null;
            if (!sosBtn.classList.contains('triggered')) {
                sosBtn.classList.remove('counting');
                sosStatus.innerText = t('sos-status-idle', 'Status: Idle');
            }
        }
    }

    function triggerSOSActive() {
        sosBtn.classList.remove('counting');
        sosBtn.classList.add('triggered');
        sosBtn.innerText = 'ACTIVE';
        sosStatus.innerText = t('sos-status-active', '🚨 SOS BROADCASTING LOCATION');

        // Mock Indian coordinates generator (centered near New Delhi)
        const mockLat = (28.6139 + (Math.random() - 0.5) * 0.05).toFixed(6);
        const mockLng = (77.2090 + (Math.random() - 0.5) * 0.05).toFixed(6);

        sosGPS.style.display = 'block';
        sosGPS.innerText = `Latitude: ${mockLat} | Longitude: ${mockLng}`;

        // Escalate state to SOS — triggers global alert banner
        state.scenario = 'sos';
        state.alerts = state.alerts + 1;

        state.incidentLogs.unshift({
            time: getCurrTime(),
            messageEn: `🚨 DISTRESS SIGNAL SENT: User location broadcast active at Lat: ${mockLat}, Lng: ${mockLng}`,
            messageHi: `🚨 संकट संदेश प्रेषित: प्रयोक्ता स्थान प्रसारण सक्रिय - अक्षांश: ${mockLat}, देशांतर: ${mockLng}`,
            status: 'danger'
        });

        toggleSiren(true);
        renderAll();
    }

    sirenBtn.addEventListener('click', () => {
        if (sirenInterval) {
            toggleSiren(false);
        } else {
            toggleSiren(true);
        }
    });

    function toggleSiren(enable) {
        if (!enable) {
            if (sirenInterval) clearInterval(sirenInterval);
            sirenInterval = null;
            sirenBtn.classList.remove('active-siren');
            sirenBtn.innerText = t('btn-siren', '🔊 Sound Distress Siren');
            return;
        }

        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }

        sirenBtn.classList.add('active-siren');
        sirenBtn.innerText = t('btn-siren-stop', '🔇 Stop Distress Siren');

        let toggle = true;

        sirenInterval = setInterval(() => {
            if (!audioCtx) return;
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();

            osc.connect(gain);
            gain.connect(audioCtx.destination);

            osc.type = 'sine';
            osc.frequency.setValueAtTime(toggle ? 960 : 770, audioCtx.currentTime);
            gain.gain.setValueAtTime(0.2, audioCtx.currentTime);

            osc.start();
            osc.stop(audioCtx.currentTime + 0.5);

            toggle = !toggle;
        }, 500);
    }

    strobeBtn.addEventListener('click', () => {
        strobeActive = !strobeActive;
        if (strobeActive) {
            strobeBtn.classList.add('active');
            strobeBtn.innerText = t('btn-strobe-stop', '🔦 Stop Strobe Signal');
            strobeOverlay.classList.add('strobing');
        } else {
            strobeBtn.classList.remove('active');
            strobeBtn.innerText = t('btn-strobe', '🔦 Strobe Flashlight');
            strobeOverlay.classList.remove('strobing');
        }
    });
}

// Shelters View Setup
function initShelters() {
    const form = document.getElementById('shelterForm');
    const search = document.getElementById('shelterSearch');
    const filter = document.getElementById('shelterFilter');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('formShelterName').value;
        const cap = parseInt(document.getElementById('formShelterCapacity').value);
        const facilities = [];
        if (document.getElementById('facilityMedical').checked) facilities.push('medical');
        if (document.getElementById('facilityFood').checked) facilities.push('food');
        if (document.getElementById('facilityPets').checked) facilities.push('pets');

        const newShelter = {
            id: 's' + (state.shelters.length + 1),
            name: name,
            capacity: cap,
            current: 0,
            facilities: facilities,
            lat: Math.floor(Math.random() * 60) + 20,
            lng: Math.floor(Math.random() * 60) + 30,
            status: 'open'
        };

        state.shelters.push(newShelter);

        state.incidentLogs.unshift({
            time: getCurrTime(),
            messageEn: `🏠 NEW SHELTER REGISTERED: ${name} (Cap: ${cap})`,
            messageHi: `🏠 नया राहत शिविर पंजीकृत: ${name} (क्षमता: ${cap})`,
            status: 'success'
        });

        form.reset();
        renderAll();
    });

    search.addEventListener('input', renderShelters);
    filter.addEventListener('change', renderShelters);
}

// Roads Hub Setup
function initRoads() {
    const form = document.getElementById('roadForm');
    const search = document.getElementById('roadSearch');
    const filter = document.getElementById('roadFilter');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('formRoadName').value;
        const status = document.getElementById('formRoadStatus').value;
        const desc = document.getElementById('formRoadDesc').value;

        const newRoad = {
            id: 'r' + (state.roads.length + 1),
            name: name,
            status: status,
            descriptionEn: desc,
            descriptionHi: desc,
            fromLat: Math.floor(Math.random() * 60) + 20,
            fromLng: Math.floor(Math.random() * 60) + 30,
            toLat: Math.floor(Math.random() * 60) + 20,
            toLng: Math.floor(Math.random() * 60) + 30
        };

        state.roads.push(newRoad);

        state.incidentLogs.unshift({
            time: getCurrTime(),
            messageEn: `🚧 ROAD HAZARD REPORTED: ${name} marked as ${status.toUpperCase()}`,
            messageHi: `🚧 मार्ग खतरा रिपोर्ट: ${name} को ${status.toUpperCase()} चिह्नित किया गया`,
            status: status === 'safe' ? 'success' : 'warning'
        });

        form.reset();
        renderAll();
    });

    search.addEventListener('input', renderRoads);
    filter.addEventListener('change', renderRoads);
}

// Family Registry
function initFamily() {
    const form = document.getElementById('familyForm');
    const search = document.getElementById('familySearch');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('formFamilyName').value;
        const phone = document.getElementById('formFamilyPhone').value;
        const status = document.getElementById('formFamilyStatus').value;
        const loc = document.getElementById('formFamilyLoc').value;

        state.familyCheckins.unshift({
            name: name,
            phone: phone,
            status: status,
            location: loc,
            time: 'Just now'
        });

        state.incidentLogs.unshift({
            time: getCurrTime(),
            messageEn: `👥 FAMILY STATUS UPDATE: ${name} marked as ${status} at ${loc}`,
            messageHi: `👥 पारिवारिक स्थिति अपडेट: ${name} को ${loc} पर ${status} चिह्नित किया गया`,
            status: 'info'
        });

        form.reset();
        renderAll();
    });

    search.addEventListener('input', renderFamily);
}

// Supplies Coordination
function initSupplies() {
    const form = document.getElementById('supplyForm');
    const offlineBtn = document.getElementById('downloadOfflineBtn');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const item = document.getElementById('formSupplyItem').value;
        const qty = document.getElementById('formSupplyQty').value;
        const contact = document.getElementById('formSupplyContact').value;
        const loc = document.getElementById('formSupplyLoc').value;

        state.supplyRequests.unshift({
            id: 'sr' + (state.supplyRequests.length + 1),
            itemEn: item,
            itemHi: item,
            qtyEn: qty,
            qtyHi: qty,
            contact: contact,
            location: loc,
            status: 'pending'
        });

        state.incidentLogs.unshift({
            time: getCurrTime(),
            messageEn: `📦 RESOURCE REQUEST: ${qty} of ${item} requested for ${loc}`,
            messageHi: `📦 संसाधन अनुरोध: ${loc} के लिए ${item} की ${qty} का अनुरोध किया गया`,
            status: 'info'
        });

        form.reset();
        renderAll();
    });

    offlineBtn.addEventListener('click', downloadOfflineGuide);
}

// Offline Guide Compiler / Downloader
function downloadOfflineGuide() {
    let guide = "";
    if (state.lang === 'hi') {
        guide += `=========================================================\n`;
        guide += `   जीवनसेतु भारत - आपातकालीन ऑफ़लाइन प्रोटोकॉल गाइड\n`;
        guide += `   उत्पन्न होने का समय: ${new Date().toLocaleString('hi-IN')}\n`;
        guide += `=========================================================\n\n`;

        guide += `--- सक्रिय चेतावनी स्थिति और लॉग ---\n`;
        guide += `सक्रिय अलर्ट संख्या: ${state.alerts}\n`;
        state.incidentLogs.slice(0, 10).forEach(log => {
            const msg = log.messageHi || log.messageEn || log.message;
            guide += `[${log.time}] [${log.status.toUpperCase()}] ${msg}\n`;
        });
        guide += `\n`;

        guide += `--- सुरक्षित राहत शिविर / शेल्टर ---\n`;
        state.shelters.forEach(s => {
            const statusStr = s.status === 'open' ? 'खुला है' : 'बंद है';
            const facs = s.facilities.map(f => {
                if (f === 'food') return 'भोजन/पानी';
                if (f === 'medical') return 'चिकित्सा';
                if (f === 'pets') return 'पालतू पशु';
                return f;
            }).join(', ');
            guide += `- शिविर का नाम: ${s.name}\n  स्थिति: ${statusStr}\n  उपस्थिति: ${s.current}/${s.capacity} लोग\n  सुविधाएं: ${facs}\n\n`;
        });

        guide += `--- मार्ग की स्थिति और अवरोध ---\n`;
        state.roads.forEach(r => {
            const statusStr = r.status === 'safe' ? 'सुरक्षित' : 'अवरुद्ध/बाढ़ग्रस्त';
            const desc = r.descriptionHi || r.descriptionEn || r.description;
            guide += `- मार्ग: ${r.name}\n  स्थिति: ${statusStr}\n  विवरण: ${desc}\n\n`;
        });

        guide += `--- पारिवारिक सुरक्षा उपस्थिति ---\n`;
        state.familyCheckins.forEach(f => {
            guide += `- नाम: ${f.name} (${f.phone})\n  स्थिति: ${f.status}\n  स्थान: ${f.location} (${f.time})\n\n`;
        });

        guide += `--- आपातकालीन हेल्पलाइन निर्देशिका ---\n`;
        guide += `- राष्ट्रीय आपातकालीन नंबर (ERSS): 112\n`;
        guide += `- राष्ट्रीय आपदा प्रबंधन (NDMA): 1078\n`;
        guide += `- NDRF आपातकालीन हेल्पलाइन: 9711077372\n`;
        guide += `- एम्बुलेंस और चिकित्सा सहायता: 108 / 102\n`;
        guide += `- पुलिस नियंत्रण कक्ष: 100\n`;
        guide += `- महिला हेल्पलाइन: 1091\n`;
        guide += `- चाइल्ड हेल्पलाइन: 1098\n`;
    } else {
        guide += `=========================================================\n`;
        guide += ` LIFEBRIDGE INDIA - EMERGENCY OFFLINE PROTOCOL GUIDE\n`;
        guide += ` Generated on: ${new Date().toLocaleString()}\n`;
        guide += `=========================================================\n\n`;

        guide += `--- ACTIVE ALERTS & BROADCAST LOGS ---\n`;
        guide += `Active Alert Count: ${state.alerts}\n`;
        state.incidentLogs.slice(0, 10).forEach(log => {
            const msg = log.messageEn || log.message;
            guide += `[${log.time}] [${log.status.toUpperCase()}] ${msg}\n`;
        });
        guide += `\n`;

        guide += `--- SAFE RELIEF CAMP / SHELTERS ---\n`;
        state.shelters.forEach(s => {
            guide += `- Name: ${s.name}\n  Status: ${s.status.toUpperCase()}\n  Occupancy: ${s.current}/${s.capacity} people\n  Facilities: ${s.facilities.join(', ')}\n\n`;
        });

        guide += `--- ROAD BLOCKS & CONDITIONS ---\n`;
        state.roads.forEach(r => {
            const desc = r.descriptionEn || r.description;
            guide += `- Route: ${r.name}\n  Status: ${r.status.toUpperCase()}\n  Details: ${desc}\n\n`;
        });

        guide += `--- FAMILY CHECK-INS ---\n`;
        state.familyCheckins.forEach(f => {
            guide += `- Name: ${f.name} (${f.phone})\n  Status: ${f.status}\n  Location: ${f.location} (${f.time})\n\n`;
        });

        guide += `--- EMERGENCY ADVICE HOTLINES ---\n`;
        guide += `- National Emergency Number (ERSS): 112\n`;
        guide += `- Disaster Management (NDMA): 1078\n`;
        guide += `- NDRF Emergency Helpline: 9711077372\n`;
        guide += `- Ambulance & Medical Aid: 108 / 102\n`;
        guide += `- Police Control Room: 100\n`;
        guide += `- Women Helpline: 1091\n`;
        guide += `- Child Helpline: 1098\n`;
    }

    const blob = new Blob([guide], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = state.lang === 'hi' ? 'जीवनसेतु_आपातकालीन_मार्गदर्शिका.txt' : 'LifeBridge_Emergency_Guide.txt';
    link.click();
    URL.revokeObjectURL(url);
}

// Medical Fast cards clicking triggers AI query
document.querySelectorAll('.triage-card').forEach(card => {
    card.addEventListener('click', () => {
        const topic = card.getAttribute('data-topic');

        // Route to AI Assistant View
        const chatNav = document.querySelector('[data-view="chatbot"]');
        chatNav.click();

        // Autofill and trigger search
        const chatInput = document.getElementById('chatInput');
        chatInput.value = state.lang === 'hi' ? `प्राथमिक चिकित्सा: ${topic}` : `Explain first aid for: ${topic}`;
        document.getElementById('chatForm').dispatchEvent(new Event('submit'));
    });
});

// AI Chatbot Logic
const botReplies = {
    cpr: {
        en: `**CARDIO-PULMONARY RESUSCITATION (CPR) PROTOCOL**\n\n` +
            `1. **Verify Safety & Consciousness**: Tap the shoulders. Loudly ask: "Are you okay?"\n` +
            `2. **Call 108 / 102**: Immediately notify ambulance services.\n` +
            `3. **Chest Compressions**: Place the heel of one hand in the center of the chest. Place the other hand on top. Press hard and fast at **100 to 120 compressions per minute**.\n` +
            `4. **Breaths**: Deliver 2 rescue breaths after every 30 compressions if trained.`,
        hi: `**सीपीआर (CPR) आपातकालीन प्रक्रिया**\n\n` +
            `1. **सुरक्षा और चेतना की जांच करें**: पीड़ित के कंधे थपथपाएं और पूछें: "क्या आप ठीक हैं?"\n` +
            `2. **108 या 102 पर कॉल करें**: तुरंत चिकित्सा सहायता के लिए संपर्क करें।\n` +
            `3. **छाती को दबाना (Compressions)**: हाथों को छाती के बीच में रखें और **100 से 120 प्रति मिनट** की दर से तेजी से दबाएं।\n` +
            `4. **कृत्रिम सांस**: यदि आप प्रशिक्षित हैं, तो प्रत्येक 30 कंप्रेशन के बाद 2 बार कृत्रिम सांस दें।`
    },
    earthquake: {
        en: `**EARTHQUAKE PROTOCOL: DROP, COVER, HOLD ON**\n\n` +
            `* **Drop**: Get down on your hands and knees. This protects you from falling.\n` +
            `* **Cover**: Take shelter under a sturdy table or desk. Cover your head and neck.\n` +
            `* **Hold On**: Hold onto your shelter until the shaking stops.\n\n` +
            `*Avoid glass windows, outer walls, elevators, and damaged flyovers.*`,
        hi: `**भूकंप प्रोटोकॉल: झुकें, ढकें, पकड़ें**\n\n` +
            `* **झुकें (Drop)**: अपने हाथों और घुटनों के बल नीचे बैठें।\n` +
            `* **ढकें (Cover)**: किसी मजबूत टेबल या डेस्क के नीचे शरण लें। सिर और गर्दन को ढकें।\n` +
            `* **पकड़ें (Hold On)**: कंपन रुकने तक टेबल को पकड़ कर रखें।\n\n` +
            `*कांच की खिड़कियों, बाहरी दीवारों, लिफ्ट और क्षतिग्रस्त पुलों से दूर रहें।*`
    },
    flood: {
        en: `**FLOOD & MONSOON SAFETY PROTOCOL**\n\n` +
            `* **Move to High Ground**: Evacuate low-lying structures immediately.\n` +
            `* **Turn Around, Don't Drown**: Avoid walking or driving through moving water. Even 6 inches can sweep you off your feet.\n` +
            `* **Electrical Hazard**: Turn off the main electrical breaker if water enters. Do not touch switches with wet hands.\n` +
            `* **SACHET Mobile App**: Keep track of official NDMA updates and alerts.`,
        hi: `**बाढ़ और मानसून सुरक्षा प्रोटोकॉल**\n\n` +
            `* **ऊंचे स्थानों पर जाएं**: निचले इलाकों को तुरंत खाली करें।\n` +
            `* **पानी से दूर रहें**: बहते हुए बाढ़ के पानी में चलने या गाड़ी चलाने से बचें। केवल 6 इंच पानी आपको गिरा सकता है।\n` +
            `* **बिजली के खतरे**: यदि घर में पानी घुस रहा है तो मुख्य बिजली बंद कर दें। गीले हाथों से बिजली के उपकरणों को न छुएं।\n` +
            `* **सचेत (SACHET) ऐप**: आधिकारिक मौसम अलर्ट के लिए NDMA के 'सचेत' मोबाइल ऐप का उपयोग करें।`
    },
    supplies: {
        en: `**ESSENTIAL DISASTER EMERGENCY KIT CHECKLIST**\n\n` +
            `* Drinking water (3-day supply, 4 liters per person per day)\n` +
            `* Non-perishable dry food items (roasted chana, sattu, energy bars, biscuits)\n` +
            `* First Aid Kit + prescriptions + antiseptic wipes\n` +
            `* Flashlight + spare batteries + phone power bank\n` +
            `* Photocopied Aadhaar Card, ID proofs, and critical insurance papers in a zip-lock bag.`,
        hi: `**आपातकालीन किट (Emergency Kit) की सूची**\n\n` +
            `* साफ पीने का पानी (3 दिन के लिए, प्रति व्यक्ति 4 लीटर प्रतिदिन)\n` +
            `* सूखा भोजन (चना, सत्तू, बिस्कुट, ओआरएस, एनर्जी बार)\n` +
            `* आवश्यक दवाएं और प्राथमिक चिकित्सा किट (First Aid Kit)\n` +
            `* अतिरिक्त बैटरी वाली टॉर्च या सोलर लाइट\n` +
            `* मोबाइल संचार के लिए पूरी तरह चार्ज पावर बैंक\n` +
            `* आधार कार्ड, पहचान पत्र और बीमा दस्तावेजों की प्रतियां वाटरप्रूफ बैग में रखें।`
    },
    bleeding: {
        en: `**SEVERE BLEEDING TRIAGE PROTOCOL**\n\n` +
            `1. **Direct Pressure**: Apply firm, continuous pressure directly to the wound using a clean cloth.\n` +
            `2. **Elevation**: Raise the wounded limb above the level of the heart if possible.\n` +
            `3. **Pressure Bandage**: Bind the dressing tightly. If bleeding doesn't stop, apply a tourniquet above the wound (never on joints).`,
        hi: `**गंभीर रक्तस्राव प्राथमिक चिकित्सा**\n\n` +
            `1. **सीधा दबाव**: साफ कपड़े या पट्टी का उपयोग करके घाव पर सीधे और लगातार दबाव डालें।\n` +
            `2. **ऊंचाई**: यदि संभव हो तो घायल हिस्से को हृदय के स्तर से ऊपर उठाएं।\n` +
            `3. **दबाव पट्टी**: पट्टी को कसकर बांधें। यदि रक्तस्राव नहीं रुकता है, तो घाव से ऊपर एक तंग पट्टी (टूर्निकेट) बांधें (जोड़ों पर कभी नहीं)।`
    },
    heat: {
        en: `**LOO & HEATWAVE EMERGENCY MANAGEMENT**\n\n` +
            `* **Stay Hydrated**: Drink plenty of water, ORS (Jeevan Rakshak Ghol), Lassi, Lemon water, or Aam Panna.\n` +
            `* **Avoid Sun**: Stay indoors between 12:00 PM and 4:00 PM.\n` +
            `* **Cooling Triage**: Move a heat-stroke victim to a shady cool area. Apply wet towels to their forehead, armpits, and groin.\n` +
            `* **Medical Assistance**: Call 108 if the person is unconscious or has a high body temperature.`,
        hi: `**लू और ग्रीष्म लहर (Heatwave) प्रबंधन**\n\n` +
            `* **हाइड्रेटेड रहें**: खूब पानी, ओआरएस (ORS) घोल, लस्सी, नींबू पानी या आम पन्ना पिएं।\n` +
            `* **धूप से बचें**: दोपहर 12:00 बजे से शाम 4:00 बजे के बीच घर के अंदर रहें।\n` +
            `* **ठंडा करें**: पीड़ित को तुरंत ठंडी छायादार जगह पर ले जाएं। माथे, बगल और कमर पर गीला तौलिया लगाएं।\n` +
            `* **चिकित्सा सहायता**: यदि व्यक्ति बेहोश है या शरीर का तापमान अत्यधिक है तो तुरंत 108 पर कॉल करें।`
    },
    fracture: {
        en: `**BONE FRACTURE & SPLINTING GUIDE**\n\n` +
            `1. **Do Not Move**: Keep the injured limb as still as possible. Do not try to realign the bone.\n` +
            `2. **Splinting**: Apply a rigid splint (using rolled newspaper, cardboard, or wooden stick) alongside the broken bone. Secure it with bandages, but not too tight.\n` +
            `3. **Check Circulation**: Ensure the bandage doesn't block blood flow (check if fingers/toes are turning cold or blue).`,
        hi: `**हड्डी टूटना (Fracture) और खपच्ची बांधना**\n\n` +
            `1. **हिलाएं नहीं**: घायल हिस्से को जितना हो सके स्थिर रखें। हड्डी को सीधा करने का प्रयास न करें।\n` +
            `2. **खपच्ची (Splint) लगाना**: टूटी हुई हड्डी के साथ एक मजबूत खपच्ची (जैसे मुड़ा हुआ अखबार, कार्डबोर्ड या लकड़ी की पट्टी) रखें और पट्टी से बांधें।\n` +
            `3. **रक्त संचार की जांच करें**: सुनिश्चित करें कि पट्टी बहुत कसकर न बंधी हो जिससे खून का प्रवाह रुके (उंगलियां ठंडी या नीली तो नहीं पड़ रही हैं)।`
    },
    cyclone: {
        en: `**CYCLONE EVACUATION & SAFETY PROTOCOL**\n\n` +
            `* **Secure Your Home**: Close all windows and doors. Move loose objects indoors.\n` +
            `* **Evacuation Order**: If officials order evacuation, move to designated cyclone shelters immediately.\n` +
            `* **During the Storm**: Stay indoors. Avoid seeking shelter under trees, electricity poles, or tin roofs.\n` +
            `* **App SACHET**: Keep tracking cyclone paths using official meteorology updates.`,
        hi: `**चक्रवात (Cyclone) सुरक्षा और निकासी प्रोटोकॉल**\n\n` +
            `* **घर को सुरक्षित करें**: सभी खिड़कियां और दरवाजे बंद करें। बाहर रखी ढीली वस्तुओं को अंदर रखें।\n` +
            `* **निकासी आदेश**: यदि अधिकारी निर्देश दें, तो तुरंत निर्दिष्ट चक्रवात राहत शिविरों में चले जाएं।\n` +
            `* **तूफान के दौरान**: घर के अंदर रहें। पेड़ों, बिजली के खंभों या टिन की छतों के नीचे शरण न लें।\n` +
            `* **सचेत (SACHET) ऐप**: चक्रवात की स्थिति और मौसम की चेतावनियों पर नज़र रखें।`
    },
    dengue: {
        en: `**MONSOON DISEASE & MOSQUITO PREVENTION**\n\n` +
            `* **Prevent Water Stagnation**: Clear water from coolers, flower pots, and tires weekly to prevent Dengue/Malaria breeding.\n` +
            `* **Personal Protection**: Use mosquito nets, mosquito repellents, and wear full-sleeve clothes.\n` +
            `* **Fever Protocol**: Drink fluids and take Paracetamol if you suspect Dengue. Avoid taking Ibuprofen/Aspirin without consulting a doctor.`,
        hi: `**मानसून जनित रोग और मच्छर सुरक्षा**\n\n` +
            `* **जलभराव रोकें**: डेंगू/मलेरिया मच्छरों को पनपने से रोकने के लिए कूलरों, गमलों और टायरों में पानी जमा न होने दें।\n` +
            `* **व्यक्तिगत सुरक्षा**: मच्छरदानी, मॉस्किटो रिपेलेंट का उपयोग करें और पूरी आस्तीन के कपड़े पहनें।\n` +
            `* **बुखार प्रोटोकॉल**: यदि डेंगू का संदेह हो तो खूब तरल पदार्थ लें और केवल पैरासिटामोल लें। डॉक्टर की सलाह के बिना इबुप्रोफेन या एस्पिरिन न लें।`
    }
};

function initChatbot() {
    const form = document.getElementById('chatForm');
    const input = document.getElementById('chatInput');
    const tags = document.querySelectorAll('.quick-guide-tag');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = input.value.trim();
        if (!text) return;

        appendChatMessage(text, 'user');
        input.value = '';

        setTimeout(() => {
            const reply = generateBotReply(text);
            appendChatMessage(reply, 'bot');
        }, 600);
    });

    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            const text = tag.textContent;
            appendChatMessage(text, 'user');
            setTimeout(() => {
                const reply = generateBotReply(tag.getAttribute('data-query'));
                appendChatMessage(reply, 'bot');
            }, 600);
        });
    });
}

function appendChatMessage(text, sender) {
    const history = document.getElementById('chatHistory');
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${sender}`;
    bubble.innerHTML = text.replace(/\n/g, '<br>');
    history.appendChild(bubble);
    history.scrollTop = history.scrollHeight;
}

function generateBotReply(query) {
    const q = query.toLowerCase();
    const lang = state.lang || 'en';

    // Route matching for EN & HI
    if (q.includes('cpr') || q.includes('सीपीआर')) {
        return botReplies.cpr[lang];
    }
    if (q.includes('quake') || q.includes('earthquake') || q.includes('भूकंप') || q.includes('भूचाल')) {
        return botReplies.earthquake[lang];
    }
    if (q.includes('flood') || q.includes('water') || q.includes('बाढ़') || q.includes('पानी') || q.includes('जलभराव')) {
        return botReplies.flood[lang];
    }
    if (q.includes('supplies') || q.includes('kit') || q.includes('किट') || q.includes('सामग्री')) {
        return botReplies.supplies[lang];
    }
    if (q.includes('bleed') || q.includes('bleeding') || q.includes('खून') || q.includes('रक्त')) {
        return botReplies.bleeding[lang];
    }
    if (q.includes('heat') || q.includes('stroke') || q.includes('dehydration') || q.includes('लू') || q.includes('गर्मी')) {
        return botReplies.heat[lang];
    }
    if (q.includes('fracture') || q.includes('splint') || q.includes('हड्डी')) {
        return botReplies.fracture[lang];
    }
    if (q.includes('cyclone') || q.includes('storm') || q.includes('चक्रवात') || q.includes('तूफान')) {
        return botReplies.cyclone[lang];
    }
    if (q.includes('dengue') || q.includes('malaria') || q.includes('mosquito') || q.includes('डेंगू') || q.includes('मलेरिया') || q.includes('मच्छर')) {
        return botReplies.dengue[lang];
    }

    if (lang === 'hi') {
        return `मुझे आपका संदेश मिला। प्राथमिक उपचार मार्गदर्शन प्राप्त करने के लिए कृपया "सीपीआर", "भूकंप", "बाढ़", "डेंगू", "लू लगना" या "आपातकालीन किट" के बारे में पूछें।`;
    }
    return `I received your query. Please ask me about "cpr", "earthquake", "flood", "cyclone", "dengue prevention", "heat stroke", or "emergency kit" to get step-by-step guidance.`;
}

// Dynamic Map Drawing Engine (SVG based rendering)
function initMap() {
    const map = document.getElementById('mapContainer');
    map.addEventListener('click', (e) => {
        if (e.target.classList.contains('map-node')) {
            const nodeId = e.target.getAttribute('data-id');
            const type = e.target.getAttribute('data-type');
            handleMapNodeClick(type, nodeId);
        }
    });
}

function renderMap() {
    const map = document.getElementById('mapContainer');
    const overlay = map.querySelector('.map-grid-overlay');
    map.innerHTML = '';
    map.appendChild(overlay);

    // Draw Roads (as lines)
    state.roads.forEach(r => {
        const line = document.createElement('div');
        line.className = 'map-road-line';

        const dx = r.toLng - r.fromLng;
        const dy = r.toLat - r.fromLat;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx) * 180 / Math.PI;

        line.style.width = `${dist}%`;
        line.style.left = `${r.fromLng}%`;
        line.style.top = `${r.fromLat}%`;
        line.style.transform = `rotate(${angle}deg)`;

        if (r.status === 'safe') {
            line.style.backgroundColor = 'var(--color-success)';
        } else if (r.status === 'flooded') {
            line.style.backgroundColor = 'var(--color-warning)';
            line.style.height = '4px';
        } else {
            line.style.backgroundColor = 'var(--color-danger)';
            line.style.height = '4px';
        }

        map.appendChild(line);
    });

    // Draw Shelter Nodes
    state.shelters.forEach(s => {
        const node = document.createElement('div');
        node.className = 'map-node map-shelter';
        node.setAttribute('data-id', s.id);
        node.setAttribute('data-type', 'shelter');
        node.style.left = `${s.lng}%`;
        node.style.top = `${s.lat}%`;

        if (s.status === 'closed') {
            node.style.backgroundColor = 'var(--text-muted)';
        } else if (s.current / s.capacity > 0.85) {
            node.style.backgroundColor = 'var(--color-warning)';
        } else {
            node.style.backgroundColor = 'var(--color-success)';
        }

        node.title = `${s.name} (${s.current}/${s.capacity})`;
        map.appendChild(node);
    });

    // Draw Hospital Nodes
    state.medicalCenters.forEach((m, idx) => {
        const node = document.createElement('div');
        node.className = 'map-node map-hospital';
        node.setAttribute('data-id', 'm' + idx);
        node.setAttribute('data-type', 'hospital');

        // Geographically adjusted coordinates for hospitals near major cities
        const coords = [
            { lat: 26, lng: 50 }, // Near Delhi (AIIMS Delhi)
            { lat: 62, lng: 27 }, // Near Mumbai (Sion Hospital Mumbai)
            { lat: 17, lng: 54 }  // Near Dehradun (NDRF Mobile Clinic Alpha)
        ];
        const coord = coords[idx] || { lat: 50, lng: 50 };

        node.style.left = `${coord.lng}%`;
        node.style.top = `${coord.lat}%`;
        node.title = `${m.name} (${m.capacity})`;
        map.appendChild(node);
    });
}

function handleMapNodeClick(type, id) {
    if (type === 'shelter') {
        const shelter = state.shelters.find(s => s.id === id);
        if (shelter) {
            const statusText = shelter.status === 'open' ? t('status-open', 'Open') : t('status-closed', 'Closed');
            const facilitiesText = shelter.facilities.map(f => t('fac-' + f, f)).join(', ');
            alert(`${t('shelter-title', 'Emergency Shelters')} Information:\n\n` +
                `Name: ${shelter.name}\n` +
                `Status: ${statusText}\n` +
                `Capacity: ${shelter.current} / ${shelter.capacity}\n` +
                `Facilities: ${facilitiesText}`);
        }
    } else if (type === 'hospital') {
        const idx = parseInt(id.replace('m', ''));
        const hospital = state.medicalCenters[idx];
        if (hospital) {
            const triageText = state.lang === 'hi' ? hospital.triageHi : hospital.triageEn;
            alert(`${t('medical-title', 'Medical Help')} Information:\n\n` +
                `Name: ${hospital.name}\n` +
                `Occupancy Load: ${hospital.capacity}\n` +
                `Hotline: ${hospital.phone}\n` +
                `Triage Status: ${triageText}`);
        }
    }
}

// Global Render Sync
function renderAll() {
    // 1. Sync global alert message
    const alertBanner = document.getElementById('globalAlert');
    const alertMsg = document.getElementById('globalAlertMessage');
    const statAlerts = document.getElementById('statAlerts');
    const statAlertsLabel = document.getElementById('statAlertsLabel');
    const statRoadblocks = document.getElementById('statRoadblocks');
    const statRoadblocksLabel = document.getElementById('statRoadblocksLabel');
    const statShelters = document.getElementById('statShelters');
    const statCheckins = document.getElementById('statCheckins');

    statAlerts.innerText = state.alerts;
    if (state.scenario === 'none') {
        alertMsg.innerText = t('alert-normal', 'System Normal. Select a disaster simulation inside the dashboard to test responsiveness.');
        alertBanner.style.border = '1px solid rgba(255,255,255,0.08)';
        alertBanner.style.background = 'rgba(18, 24, 41, 0.7)';
        statAlertsLabel.innerText = t('stat-alerts-no', 'No active threats');
        statAlertsLabel.style.color = 'var(--text-secondary)';
    } else if (state.scenario === 'flood') {
        alertMsg.innerText = t('alert-flood', '⚠️ RED ALERT: Severe Monsoon Flooding in Mumbai Metropolitan Area. Low-lying roads blocked!');
        alertBanner.style.border = '1px solid var(--color-danger)';
        alertBanner.style.background = 'linear-gradient(to right, rgba(239, 68, 68, 0.2), rgba(0,0,0,0.2))';
        statAlertsLabel.innerText = t('stat-alerts-yes-flood', 'Monsoon flood warnings');
        statAlertsLabel.style.color = 'var(--color-danger)';
    } else if (state.scenario === 'quake') {
        alertMsg.innerText = t('alert-quake', '🚨 CRITICAL: Magnitude 7.5 Himalayan Earthquake detected. Major infrastructure alerts active.');
        alertBanner.style.border = '1px solid var(--color-danger)';
        alertBanner.style.background = 'linear-gradient(to right, rgba(239, 68, 68, 0.25), rgba(0,0,0,0.2))';
        statAlertsLabel.innerText = t('stat-alerts-yes-quake', 'Earthquake Alert');
        statAlertsLabel.style.color = 'var(--color-danger)';
    } else if (state.scenario === 'cyclone') {
        alertMsg.innerText = t('alert-cyclone', '🌀 RED ALERT: Severe Cyclone warning for East Coast (West Bengal & Odisha). Evacuate coastal camps!');
        alertBanner.style.border = '1px solid var(--color-danger)';
        alertBanner.style.background = 'linear-gradient(to right, rgba(239, 68, 68, 0.25), rgba(0,0,0,0.2))';
        statAlertsLabel.innerText = t('stat-alerts-yes-cyclone', 'Cyclone warning');
        statAlertsLabel.style.color = 'var(--color-danger)';
    } else if (state.scenario === 'sos') {
        alertMsg.innerText = t('alert-sos', '🆘 SOS DISTRESS SIGNAL ACTIVE: User location is being broadcast. Emergency services have been notified.');
        alertBanner.style.border = '1px solid var(--color-danger)';
        alertBanner.style.background = 'linear-gradient(135deg, rgba(239, 68, 68, 0.35), rgba(139, 0, 0, 0.3))';
        statAlertsLabel.innerText = t('stat-alerts-yes-sos', 'SOS Distress Signal Active');
        statAlertsLabel.style.color = 'var(--color-danger)';
    }

    // 2. Count roadblocks
    const blockedCount = state.roads.filter(r => r.status !== 'safe').length;
    statRoadblocks.innerText = blockedCount;
    if (blockedCount > 0) {
        statRoadblocksLabel.innerText = `${blockedCount} ` + t('stat-roads-desc-many', 'unsafe hazard roads');
    } else {
        statRoadblocksLabel.innerText = t('stat-roads-desc-none', 'All routes safe');
    }

    // 3. Open shelters
    const openSheltersCount = state.shelters.filter(s => s.status === 'open').length;
    statShelters.innerText = `${openSheltersCount} / ${state.shelters.length}`;

    // 4. Checkins
    statCheckins.innerText = state.familyCheckins.length;

    // 5. Render Lists
    renderIncidentLogs();
    renderShelters();
    renderRoads();
    renderFamily();
    renderMedical();
    renderSupplies();
    renderMap();
}

function renderIncidentLogs() {
    const container = document.getElementById('dashboardLogs');
    if (!container) return;
    container.innerHTML = '';
    state.incidentLogs.forEach(log => {
        const item = document.createElement('div');
        item.className = 'list-item';
        item.style.padding = '10px 14px';

        let badgeClass = 'badge-info';
        if (log.status === 'danger') badgeClass = 'badge-danger';
        if (log.status === 'warning') badgeClass = 'badge-warning';
        if (log.status === 'success') badgeClass = 'badge-success';

        const msg = state.lang === 'hi' ? (log.messageHi || log.messageEn || log.message) : (log.messageEn || log.message);

        item.innerHTML = `
            <div style="font-size: 13px;">
                <span class="item-badge ${badgeClass}" style="padding: 2px 6px; font-size: 10px; margin-right: 8px;">${log.time}</span>
                <span>${msg}</span>
            </div>
        `;
        container.appendChild(item);
    });
}

function renderShelters() {
    const list = document.getElementById('sheltersList');
    if (!list) return;

    const searchInput = document.getElementById('shelterSearch');
    const query = searchInput ? searchInput.value.toLowerCase() : '';
    const filterSelect = document.getElementById('shelterFilter');
    const filter = filterSelect ? filterSelect.value : 'all';

    list.innerHTML = '';

    const filtered = state.shelters.filter(s => {
        const nameMatch = s.name.toLowerCase().includes(query);
        const facilitiesMatch = s.facilities.some(f => t('fac-' + f, f).toLowerCase().includes(query));
        const matchQuery = nameMatch || facilitiesMatch;

        let matchFilter = true;
        if (filter === 'open') matchFilter = s.status === 'open' && (s.current < s.capacity);
        if (filter === 'full') matchFilter = s.status === 'open' && (s.current / s.capacity >= 0.85);
        if (filter === 'medical') matchFilter = s.facilities.includes('medical');

        return matchQuery && matchFilter;
    });

    if (filtered.length === 0) {
        list.innerHTML = `<p style="color: var(--text-muted); font-size: 14px; text-align: center; padding: 20px;">${t('no-shelters', 'No matching shelters found.')}</p>`;
        return;
    }

    filtered.forEach(s => {
        const item = document.createElement('div');
        item.className = 'list-item';

        const isClosed = s.status === 'closed';
        const isFull = s.current >= s.capacity;
        const isNearFull = s.current / s.capacity >= 0.85;

        let badgeText = t('status-open', 'Open');
        let badgeClass = 'badge-success';
        if (isClosed) {
            badgeText = t('status-closed', 'Closed');
            badgeClass = 'badge-danger';
        } else if (isFull) {
            badgeText = t('status-full', 'Full');
            badgeClass = 'badge-danger';
        } else if (isNearFull) {
            badgeText = t('status-near-limit', 'Near Limit');
            badgeClass = 'badge-warning';
        }

        const badge = `<span class="item-badge ${badgeClass}">${badgeText}</span>`;

        const facTags = s.facilities.map(f => {
            if (f === 'food') return '🍞 ' + t('fac-food', 'Food');
            if (f === 'medical') return '🩺 ' + t('fac-medical', 'Medical');
            if (f === 'pets') return '🐾 ' + t('fac-pets', 'Pets allowed');
            return f;
        }).join('  |  ');

        item.innerHTML = `
            <div>
                <h4 style="font-weight:600; margin-bottom:4px;">${s.name}</h4>
                <p style="font-size:12px; color:var(--text-secondary); margin-bottom: 6px;">${t('txt-facilities', 'Facilities')}: ${facTags || 'None'}</p>
                <div style="font-size: 13px; font-weight: 500;">
                    ${t('txt-occupancy', 'Occupancy')}: <span style="color: ${isFull ? 'var(--color-danger)' : 'var(--text-primary)'}">${s.current}</span> / ${s.capacity}
                </div>
            </div>
            ${badge}
        `;
        list.appendChild(item);
    });
}

function renderRoads() {
    const list = document.getElementById('roadsList');
    if (!list) return;

    const searchInput = document.getElementById('roadSearch');
    const query = searchInput ? searchInput.value.toLowerCase() : '';
    const filterSelect = document.getElementById('roadFilter');
    const filter = filterSelect ? filterSelect.value : 'all';

    list.innerHTML = '';

    const filtered = state.roads.filter(r => {
        const desc = state.lang === 'hi' ? (r.descriptionHi || r.descriptionEn || r.description) : (r.descriptionEn || r.description);
        const matchQuery = r.name.toLowerCase().includes(query) || (desc && desc.toLowerCase().includes(query));

        let matchFilter = true;
        if (filter === 'safe') matchFilter = r.status === 'safe';
        if (filter === 'hazard') matchFilter = r.status !== 'safe';

        return matchQuery && matchFilter;
    });

    if (filtered.length === 0) {
        list.innerHTML = `<p style="color: var(--text-muted); font-size: 14px; text-align: center; padding: 20px;">${t('no-roads', 'No matching routes found.')}</p>`;
        return;
    }

    filtered.forEach(r => {
        const item = document.createElement('div');
        item.className = 'list-item';

        let badgeText = t('status-safe', 'Safe');
        let badgeClass = 'badge-success';
        if (r.status === 'flooded') {
            badgeText = t('status-flooded', 'Flooded');
            badgeClass = 'badge-warning';
        } else if (r.status === 'blocked') {
            badgeText = t('status-blocked', 'Blocked');
            badgeClass = 'badge-danger';
        } else if (r.status === 'landslide') {
            badgeText = t('status-landslide', 'Landslide');
            badgeClass = 'badge-danger';
        }

        const badge = `<span class="item-badge ${badgeClass}">${badgeText}</span>`;
        const desc = state.lang === 'hi' ? (r.descriptionHi || r.descriptionEn || r.description) : (r.descriptionEn || r.description);

        item.innerHTML = `
            <div style="max-width: 80%;">
                <h4 style="font-weight:600; margin-bottom:4px;">${r.name}</h4>
                <p style="font-size: 12px; color: var(--text-secondary);">${desc}</p>
            </div>
            ${badge}
        `;
        list.appendChild(item);
    });
}

function renderFamily() {
    const list = document.getElementById('familyList');
    if (!list) return;

    const searchInput = document.getElementById('familySearch');
    const query = searchInput ? searchInput.value.toLowerCase() : '';
    list.innerHTML = '';

    const filtered = state.familyCheckins.filter(f => {
        return f.name.toLowerCase().includes(query) ||
            f.phone.includes(query) ||
            f.location.toLowerCase().includes(query);
    });

    if (filtered.length === 0) {
        list.innerHTML = `<p style="color: var(--text-muted); font-size: 14px; text-align: center; padding: 20px;">${t('no-family', 'No registered records match your query.')}</p>`;
        return;
    }

    filtered.forEach(f => {
        const item = document.createElement('div');
        item.className = 'list-item';

        let badgeClass = 'badge-success';
        let statusText = f.status;
        if (f.status === 'Injured') {
            badgeClass = 'badge-warning';
            statusText = t('opt-fam-injured', 'Injured');
        } else if (f.status === 'Stuck') {
            badgeClass = 'badge-danger';
            statusText = t('opt-fam-stuck', 'Stuck');
        } else if (f.status === 'In Shelter') {
            badgeClass = 'badge-info';
            statusText = t('opt-fam-shelter', 'In Shelter');
        } else if (f.status === 'Safe') {
            badgeClass = 'badge-success';
            statusText = t('opt-fam-safe', 'Safe');
        }

        const updatedText = f.time === 'Just now' ? t('txt-updated-now', 'Just now') : f.time;

        item.innerHTML = `
            <div>
                <h4 style="font-weight:600; margin-bottom: 2px;">${f.name}</h4>
                <p style="font-size: 12px; color: var(--text-secondary);">${t('txt-phone', 'Phone')}: ${f.phone} | ${t('txt-last-seen', 'Last seen')}: ${f.location}</p>
                <p style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">${t('txt-updated', 'Updated')}: ${updatedText}</p>
            </div>
            <span class="item-badge ${badgeClass}">${statusText}</span>
        `;
        list.appendChild(item);
    });
}

function renderMedical() {
    const list = document.getElementById('medicalList');
    if (!list) return;
    list.innerHTML = '';

    state.medicalCenters.forEach(m => {
        const item = document.createElement('div');
        item.className = 'list-item';

        const triageText = state.lang === 'hi' ? (m.triageHi || m.triage) : (m.triageEn || m.triage);
        const statusText = m.status === 'Open' ? t('status-open', 'Open') : t('status-closed', 'Closed');

        item.innerHTML = `
            <div style="max-width: 75%;">
                <h4 style="font-weight:600; margin-bottom:4px;">${m.name}</h4>
                <p style="font-size: 12px; color: var(--text-secondary); margin-bottom: 6px;">${t('txt-hotline', 'Hotline')}: <b>${m.phone}</b></p>
                <p style="font-size: 12px; color: var(--color-warning);">${triageText}</p>
            </div>
            <div>
                <span class="item-badge badge-info" style="display:block; text-align:center; margin-bottom:6px;">${m.capacity} ${t('txt-load', 'Load')}</span>
                <span class="item-badge badge-success" style="display:block; text-align:center;">${statusText}</span>
            </div>
        `;
        list.appendChild(item);
    });
}

function renderSupplies() {
    const list = document.getElementById('suppliesList');
    if (!list) return;
    list.innerHTML = '';

    if (state.supplyRequests.length === 0) {
        list.innerHTML = `<p style="color: var(--text-muted); font-size: 14px; text-align: center; padding: 20px;">${t('no-supplies', 'No active supply requests.')}</p>`;
        return;
    }

    state.supplyRequests.forEach(sr => {
        const item = document.createElement('div');
        item.className = 'list-item';

        let actionHtml = '';
        if (sr.status === 'pending') {
            actionHtml = `<button class="btn-primary" onclick="pledgeSupply('${sr.id}')" style="padding: 6px 12px; font-size: 12px;">${t('btn-pledge', 'Pledge Help')}</button>`;
        } else {
            actionHtml = `<span class="item-badge badge-success">${t('status-pledged', 'Pledged')}</span>`;
        }

        const itemText = state.lang === 'hi' ? (sr.itemHi || sr.itemEn || sr.item) : (sr.itemEn || sr.item);
        const qtyText = state.lang === 'hi' ? (sr.qtyHi || sr.qtyEn || sr.qty) : (sr.qtyEn || sr.qty);

        item.innerHTML = `
            <div>
                <h4 style="font-weight: 600; color: var(--color-warning); margin-bottom: 2px;">${itemText}</h4>
                <p style="font-size: 12px; color: var(--text-secondary);">${t('txt-needed', 'Needed')}: ${qtyText} | ${t('txt-delivery', 'Delivery')}: ${sr.location}</p>
                <p style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">${t('txt-contact', 'Contact')}: ${sr.contact}</p>
            </div>
            <div>
                ${actionHtml}
            </div>
        `;
        list.appendChild(item);
    });
}

// Fulfill Supply Request Action
window.pledgeSupply = function (id) {
    const req = state.supplyRequests.find(sr => sr.id === id);
    if (req) {
        req.status = 'pledged';

        state.incidentLogs.unshift({
            time: getCurrTime(),
            messageEn: `🤝 VOLUNTEER PLEDGE: Delivery of "${req.itemEn}" accepted for ${req.location}.`,
            messageHi: `🤝 स्वयंसेवक प्रतिज्ञा: ${req.location} के लिए "${req.itemHi || req.itemEn}" का वितरण स्वीकार किया गया।`,
            status: 'success'
        });

        renderAll();
    }
};

// Auxiliary Helper
function getCurrTime() {
    const now = new Date();
    const hrs = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    return `${hrs}:${mins}`;
}
const sosBtn = document.getElementById("sosBtn");
const sosStatus = document.getElementById("sosStatus");

let holdTimer;

sosBtn.addEventListener("mousedown", () => {
    sosStatus.innerText = "⏳ Hold for 3 seconds...";

    holdTimer = setTimeout(() => {
        sosStatus.innerText = "🚨 SOS Triggered!";
        alert("🚨 Emergency SOS Activated!");
    }, 3000);
});

sosBtn.addEventListener("mouseup", () => {
    clearTimeout(holdTimer);
    sosStatus.innerText = "Status: Idle";
});

sosBtn.addEventListener("mouseleave", () => {
    clearTimeout(holdTimer);
    sosStatus.innerText = "Status: Idle";
});
