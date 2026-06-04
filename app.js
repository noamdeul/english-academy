// --- מאגר פריטי החנות ---
const shopItems = [
  { id: 'bg_unicorns', name: 'רקע חדי קרן 🦄', price: 30, icon: '🦄', layer: 'background', visual: 'canvas-unicorns', env: '✨' },
  { id: 'bg_space', name: 'רקע חלל קסום 🚀', price: 30, icon: '🚀', layer: 'background', visual: 'canvas-space', env: '⭐' },
  { id: 'bg_castle', name: 'טירת נסיכות 🏰', price: 30, icon: '🏰', layer: 'background', visual: 'canvas-castle', env: '✨' },
  { id: 'bg_stadium', name: 'מגרש כדורגל ⚽', price: 30, icon: '⚽', layer: 'background', visual: 'canvas-stadium', env: '🥅' },
  { id: 'bg_beach', name: 'חוף הים הזהוב 🏖️', price: 35, icon: '🏖️', layer: 'background', visual: 'canvas-beach', env: '☀️' },
  { id: 'bg_forest', name: 'יער הטבע הירוק 🌳', price: 35, icon: '🌳', layer: 'background', visual: 'canvas-forest', env: '🍃' },
  
  { id: 'hair_pony', name: 'תסרוקת פוני', price: 20, icon: '💇‍♀️', layer: 'hair', visual: '💇‍♀️' },
  { id: 'hair_braids', name: 'שתי צמות', price: 25, icon: '👧', layer: 'hair', visual: '👧' },
  { id: 'cloth_dress', name: 'שמלת נסיכות ורודה', price: 35, icon: '👗', layer: 'cloth', visual: '👗' },
  { id: 'cloth_pajama', name: 'פיג׳מה מפנקת', price: 30, icon: '🥋', layer: 'cloth', visual: '🥋' },
  { id: 'cloth_summer', name: 'שמלת קיץ קלילה', price: 25, icon: '👚', layer: 'cloth', visual: '👚' },
  { id: 'shoes_sneakers', name: 'נעלי ספורט מגניבות', price: 15, icon: '👟', layer: 'shoes', visual: '👟' },
  { id: 'acc_crown', name: 'כתר זהב נוצץ', price: 50, icon: '👑', layer: 'crown', visual: '👑' },
  { id: 'acc_glasses', name: 'משקפי שמש מגניבים', price: 15, icon: '🕶️', layer: 'glasses', visual: '🕶️' },
  { id: 'pet_dog', name: 'כלבלב שלם מתוק', price: 45, icon: '🐕', layer: 'pet', visual: '🐕' },
  { id: 'pet_cat', name: 'חתלתול חמוד', price: 40, icon: '🐱', layer: 'pet', visual: '🐱' },
  { id: 'pet_dragon', name: 'דרקון קסום', price: 80, icon: '🐉', layer: 'pet', visual: '🐉' },
  { id: 'friend_blonde', name: 'חברה בלונדינית', price: 50, icon: '👱‍♀️', layer: 'friend', visual: '👱‍♀️' },
  { id: 'friend_guy', name: 'חבר בן', price: 50, icon: '👦', layer: 'friend', visual: '👦' }
];

const defaultVocabulary = [
  { id: 101, english: "next to", hebrew: "ליד/על יד" },
  { id: 102, english: "under", hebrew: "מתחת" },
  { id: 103, english: "rain", hebrew: "גשם" },
  { id: 104, english: "kitchen", hebrew: "מטבח" },
  { id: 105, english: "bread", hebrew: "לחם" },
  { id: 106, english: "are you", hebrew: "האם אתה?" },
  { id: 107, english: "clothes", hebrew: "בגדים" },
  { id: 108, english: "cheese", hebrew: "גבינה" },
  { id: 109, english: "come in", hebrew: "להיכנס" },
  { id: 110, english: "angry", hebrew: "כועס" },
  { id: 111, english: "do you like", hebrew: "האם אתה אוהב?" }
];

const subjectsData = {
  vocabulary: defaultVocabulary,
  wh: [
    { id: 201, english: "who", hebrew: "מי" },
    { id: 202, english: "what", hebrew: "מה" },
    { id: 203, english: "when", hebrew: "מתי" },
    { id: 204, english: "where", hebrew: "איפה" },
    { id: 205, english: "why", hebrew: "למה" },
    { id: 206, english: "how", hebrew: "איך" },
    { id: 207, english: "which", hebrew: "איזה" }
  ],
  days: [
    { id: 301, english: "Sunday", hebrew: "יום ראשון" },
    { id: 302, english: "Monday", hebrew: "יום שני" },
    { id: 303, english: "Tuesday", hebrew: "יום שלישי" },
    { id: 304, english: "Wednesday", hebrew: "יום רביעי" },
    { id: 305, english: "Thursday", hebrew: "יום חמישי" },
    { id: 306, english: "Friday", hebrew: "יום שישי" },
    { id: 307, english: "Saturday", hebrew: "יום שבת" }
  ],
  verbs: [
    { id: 401, english: "eat", hebrew: "לאכול" },
    { id: 402, english: "drink", hebrew: "לשתות" },
    { id: 403, english: "run", hebrew: "לרוץ" },
    { id: 404, english: "sleep", hebrew: "לישון" },
    { id: 405, english: "walk", hebrew: "ללכת" },
    { id: 406, english: "jump", hebrew: "לקפוץ" },
    { id: 407, english: "play", hebrew: "לשחק" },
    { id: 408, english: "read", hebrew: "לקרוא" },
    { id: 409, english: "write", hebrew: "לכתוב" },
    { id: 410, english: "speak", hebrew: "לדבר" }
  ],
  numbers: [
    { id: 501, english: "one", hebrew: "1 (אחת)" },
    { id: 502, english: "five", hebrew: "5 (חמש)" },
    { id: 503, english: "ten", hebrew: "10 (עשר)" },
    { id: 504, english: "twelve", hebrew: "12 (שתים עשרה)" },
    { id: 505, english: "fifteen", hebrew: "15 (חמש עשרה)" },
    { id: 506, english: "twenty", hebrew: "20 (עשרים)" },
    { id: 507, english: "twenty-five", hebrew: "25 (עשרים וחמש)" },
    { id: 508, english: "thirty", hebrew: "30 (שלושים)" },
    { id: 509, english: "forty-two", hebrew: "42 (ארבעים ושתיים)" },
    { id: 510, english: "fifty", hebrew: "50 (חמישים)" },
    { id: 511, english: "seventy", hebrew: "70 (שבעים)" },
    { id: 512, english: "eighty-one", hebrew: "81 (שמונים ואחת)" },
    { id: 513, english: "ninety", hebrew: "90 (תשעים)" },
    { id: 514, english: "one hundred", hebrew: "100 (מאה)" }
  ]
};

// קריאה בטוחה מ-localStorage (לא קורסת במצב פרטי / מכסה מלאה)
function readStore(key, fallback) {
    try {
        const raw = localStorage.getItem(key);
        return raw === null ? fallback : JSON.parse(raw);
    } catch (e) {
        return fallback;
    }
}

let currentSubject = localStorage.getItem('edu_sub_name') || 'vocabulary';
let diamonds = parseInt(localStorage.getItem('edu_diamonds')) || 20;
let customWords = readStore('edu_custom_words', []);
let inventory = readStore('edu_inventory', []);
let activeOutfit = readStore('edu_outfit', { hair: '', cloth: '', shoes: '', glasses: '', crown: '', pet: '', friend: '', background: 'canvas-default', env: '☁️', envLeft: '⭐' });
let scoreHistory = readStore('edu_scores', []);
let deletedDefaultIds = readStore('edu_deleted_ids', []);
let characterName = localStorage.getItem('edu_char_name') || '';
if (!activeOutfit.avatar) activeOutfit.avatar = '🧍‍♀️';

// דמויות בסיס לבחירה חופשית (ללא תשלום)
const baseAvatars = ['🧍‍♀️', '🧍‍♂️', '👧', '👦', '🧒', '👶', '🧚‍♀️', '🦸‍♀️', '🦸‍♂️', '🧑'];

// קטגוריות הארון (טאבים)
const wardrobeCategories = [
    { key: 'character',  label: '🙂 דמות' },
    { key: 'hair',       label: '💇 שיער' },
    { key: 'cloth',      label: '👗 בגדים' },
    { key: 'shoes',      label: '👟 נעליים' },
    { key: 'glasses',    label: '🕶️ משקפיים' },
    { key: 'crown',      label: '👑 כתרים' },
    { key: 'pet',        label: '🐾 חיות' },
    { key: 'friend',     label: '🧑‍🤝‍🧑 חברים' },
    { key: 'background', label: '🌈 רקעים' }
];
let activeWardrobeCat = 'character';

// משפטי שלום באנגלית (גם תרגול קטן!)
const CHARACTER_CHEERS = ['Hello!', 'Hi there!', 'You are great!', 'I am happy!', "Let's play!", 'I love you!', 'Good job!', 'Yay!'];
let cheerIndex = 0;

// הסרת מילים שנמחקו בעבר ע"י מבוגר (מתמיד גם אחרי רענון)
Object.keys(subjectsData).forEach(key => {
    subjectsData[key] = subjectsData[key].filter(w => !deletedDefaultIds.includes(w.id));
});

// רווח קבוע לכל משחק (תואם את התוויות בתפריט)
const GAME_REWARDS = { matching: 5, multipleChoice: 10, spelling: 15 };

// מחלקת בסיס לכרטיסי משחק ההתאמה (כדי לא לשכפל מחרוזות ארוכות)
const CARD_BASE_CLASS = "bg-white border-2 border-slate-200 rounded-xl py-3 px-1 font-bold text-slate-700 text-xs shadow-sm cursor-pointer transition-all flex items-center justify-center text-center h-16 break-words";

// ערבוב הוגן (Fisher–Yates) במקום sort אקראי מוטה
function shuffleInPlace(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// מזהה ייחודי למילה חדשה (זמן + אקראי, ללא התנגשויות מעשיות)
function generateWordId() {
    return Date.now() * 1000 + Math.floor(Math.random() * 1000);
}

// מסיחים אמיתיים מתוך מילים אחרות באותו נושא
function buildDistractors(word, count = 3) {
    const pool = (subjectsData[currentSubject] || []).concat(customWords);
    const candidates = [...new Set(
        pool.map(w => w.english).filter(eng => eng && eng.toLowerCase() !== word.english.toLowerCase())
    )];
    shuffleInPlace(candidates);
    const picks = candidates.slice(0, count);
    // גיבוי אם אין מספיק מילים אמיתיות בנושא
    let pad = 1;
    while (picks.length < count) {
        picks.push(word.english + "s".repeat(pad++));
    }
    return picks;
}

let lastGamePlayedIds = [];
let roundVocabulary = [];
let currentWordIndex = 0;
let selectedEngCard = null;
let selectedHebCard = null;
let totalPairsInRound = 0;
let currentGameState = null;
let currentPlayerName = "";
let gameStartTime = null;
let gameTimerInterval = null;
let currentRoundWrongAttempts = 0;
let currentRoundTotalAttempts = 0;
let wordIdPendingDelete = null;

function prepareRoundVocabulary() {
    let baseList = subjectsData[currentSubject] || subjectsData['vocabulary'];
    let fullSubjectList = [];
    
    if (currentSubject === 'vocabulary') {
        let newlyAddedWords = shuffleInPlace([...customWords]);
        let standardWords = shuffleInPlace([...baseList]);
        let freshStandard = standardWords.filter(w => !lastGamePlayedIds.includes(w.id));
        if (freshStandard.length < 4) { freshStandard = standardWords; }

        fullSubjectList = [...newlyAddedWords, ...freshStandard];
    } else {
        let freshList = baseList.filter(w => !lastGamePlayedIds.includes(w.id));
        if (freshList.length < 4) { freshList = baseList; }
        fullSubjectList = shuffleInPlace([...freshList]);
    }
    
    let maxQuestions = Math.min(fullSubjectList.length, 14);
    roundVocabulary = fullSubjectList.slice(0, maxQuestions);
    
    if (currentSubject === 'vocabulary' && roundVocabulary.length < 14) {
        let currentIds = roundVocabulary.map(w => w.id);
        for (let item of baseList) {
            if (roundVocabulary.length >= 14) break;
            if (!currentIds.includes(item.id)) {
                roundVocabulary.push(item); currentIds.push(item.id);
            }
        }
    }
    lastGamePlayedIds = roundVocabulary.map(w => w.id);
}

function speakCurrentWord() {
    if (roundVocabulary.length === 0 || !roundVocabulary[currentWordIndex]) return;
    if (!('speechSynthesis' in window)) {
        showModal("הדפדפן שלך לא תומך בהשמעת קול 🔇 אפשר עדיין לכתוב את המילה לפי העברית.", 0, '🔇');
        return;
    }
    const wordObj = roundVocabulary[currentWordIndex];
    window.speechSynthesis.cancel();

    const hebUtterance = new SpeechSynthesisUtterance(wordObj.hebrew);
    hebUtterance.lang = 'he-IL';
    hebUtterance.rate = 0.9;

    hebUtterance.onend = () => {
        const engUtterance = new SpeechSynthesisUtterance(wordObj.english);
        engUtterance.lang = 'en-US';
        engUtterance.rate = 0.8;
        window.speechSynthesis.speak(engUtterance);
    };
    window.speechSynthesis.speak(hebUtterance);
}

function updateHeaderStats() {
    try {
        localStorage.setItem('edu_diamonds', diamonds);
        localStorage.setItem('edu_sub_name', currentSubject);
        localStorage.setItem('edu_custom_words', JSON.stringify(customWords));
        localStorage.setItem('edu_inventory', JSON.stringify(inventory));
        localStorage.setItem('edu_outfit', JSON.stringify(activeOutfit));
        localStorage.setItem('edu_scores', JSON.stringify(scoreHistory));
        localStorage.setItem('edu_deleted_ids', JSON.stringify(deletedDefaultIds));
        localStorage.setItem('edu_char_name', characterName);
    } catch (e) {
        console.warn('שמירת המצב נכשלה (ייתכן מצב גלישה פרטית או אחסון מלא):', e);
    }

    const dCount = document.getElementById('diamond-count'); if(dCount) dCount.innerText = diamonds;
    const subBadge = document.getElementById('current-subject-badge'); if(subBadge) subBadge.innerText = currentSubject.toUpperCase();

    renderAvatarVisuals();
    renderWardrobe();
    renderShop();
    renderAdminLibrary();
}

function selectSubject(subjectKey) {
    currentSubject = subjectKey; lastGamePlayedIds = []; updateHeaderStats();
    showModal(`הנושא שונה בהצלחה ל-${subjectKey.toUpperCase()}! 🎯`); switchScreen('gameModes');
}

function setSlot(id, content, alwaysShow) {
    const el = document.getElementById(id); if(!el) return;
    el.textContent = content || '';
    el.style.display = (content || alwaysShow) ? 'flex' : 'none';
}

function renderAvatarVisuals() {
    setSlot('slot-avatar', activeOutfit.avatar || '🧍‍♀️', true);
    setSlot('slot-hair', activeOutfit.hair);
    setSlot('slot-glasses', activeOutfit.glasses);
    setSlot('slot-crown', activeOutfit.crown);
    setSlot('slot-cloth', activeOutfit.cloth);
    setSlot('slot-shoes', activeOutfit.shoes ? activeOutfit.shoes + activeOutfit.shoes : '');
    setSlot('slot-pet', activeOutfit.pet);
    setSlot('slot-friend', activeOutfit.friend);

    const stage = document.getElementById('room-stage');
    if(stage) stage.className = `room-stage w-full shadow-md mb-3 ${activeOutfit.background || 'canvas-default'}`;

    const ambDec = document.getElementById('ambient-decor'); if(ambDec) ambDec.textContent = activeOutfit.env || '☁️';
    const ambDecL = document.getElementById('ambient-decor-left'); if(ambDecL) ambDecL.textContent = activeOutfit.envLeft || '⭐';

    const nameInput = document.getElementById('char-name-input');
    if(nameInput && document.activeElement !== nameInput) nameInput.value = characterName;
}

// --- אפקטים משעשעים ---
function burstSparkles() {
    const stage = document.getElementById('room-stage'); if(!stage) return;
    for (let i = 0; i < 6; i++) {
        const s = document.createElement('span');
        s.className = 'sparkle'; s.textContent = '✨';
        s.style.left = (32 + Math.random() * 36) + '%';
        s.style.bottom = (60 + Math.random() * 90) + 'px';
        s.style.animationDelay = (Math.random() * 0.2) + 's';
        stage.appendChild(s);
        setTimeout(() => s.remove(), 950);
    }
}

let speechTimer = null;
function showSpeechBubble(text) {
    const b = document.getElementById('speech-bubble'); if(!b) return;
    b.textContent = text;
    b.classList.remove('hidden-screen');
    b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop');
    clearTimeout(speechTimer);
    speechTimer = setTimeout(() => b.classList.add('hidden-screen'), 2200);
}

let cheerTimer = null;
function playCheerAnimation() {
    const ch = document.getElementById('character');
    if(!ch) return;
    ch.classList.remove('cheer'); void ch.offsetWidth; ch.classList.add('cheer');
    clearTimeout(cheerTimer);
    cheerTimer = setTimeout(() => ch.classList.remove('cheer'), 700); // לחזור לאנימציית ה-idle
}

// הקשה על הדמות - קופצת, אומרת שלום באנגלית ומשמיעה קול
function characterCheer() {
    playCheerAnimation();
    burstSparkles();
    const phrase = CHARACTER_CHEERS[cheerIndex % CHARACTER_CHEERS.length];
    cheerIndex++;
    showSpeechBubble(phrase);
    if ('speechSynthesis' in window) {
        try {
            window.speechSynthesis.cancel();
            const u = new SpeechSynthesisUtterance(phrase.replace(/[^a-zA-Z' ]/g, ''));
            u.lang = 'en-US'; u.rate = 0.95;
            window.speechSynthesis.speak(u);
        } catch (e) { /* ignore */ }
    }
}

// מופעל אחרי כל שינוי הלבשה: שמירה + רינדור + אפקט
function afterOutfitChange(playFx) {
    updateHeaderStats();
    if (playFx) { burstSparkles(); playCheerAnimation(); }
}

function switchScreen(screenId) {
    ['menu', 'subjects', 'gameModes', 'matching', 'multipleChoice', 'spelling', 'shop', 'createWord', 'scoreboard', 'nameInput'].forEach(id => {
        const el = document.getElementById(`screen-${id}`); if(el) el.classList.add('hidden-screen');
    });
    const targetScreen = document.getElementById(`screen-${screenId}`); if(targetScreen) targetScreen.classList.remove('hidden-screen');
    
    ['games', 'room', 'scores', 'shop'].forEach(id => {
        const navBtn = document.getElementById(`nav-${id}`); if(navBtn) navBtn.className = "flex-1 py-3 text-center font-bold rounded-xl text-slate-500 cursor-pointer";
    });
    
    if(['subjects','gameModes','matching','multipleChoice','spelling','nameInput'].includes(screenId)) {
        const nGames = document.getElementById('nav-games'); if(nGames) nGames.className = "flex-1 py-3 text-center font-bold rounded-xl text-white bg-indigo-600 cursor-pointer";
    } else if(screenId === 'menu') {
        const nRoom = document.getElementById('nav-room'); if(nRoom) nRoom.className = "flex-1 py-3 text-center font-bold rounded-xl text-white bg-indigo-600 cursor-pointer";
    } else if(screenId === 'createWord') {
        const nScores = document.getElementById('nav-scores'); if(nScores) nScores.className = "flex-1 py-3 text-center font-bold rounded-xl text-white bg-indigo-600 cursor-pointer";
    } else if(screenId === 'shop') {
        const nShop = document.getElementById('nav-shop'); if(nShop) nShop.className = "flex-1 py-3 text-center font-bold rounded-xl text-white bg-indigo-600 cursor-pointer";
    }
}

// --- ארון הלבשה עם קטגוריות (תאם את renderCloset הישן) ---
function isItemEquipped(item) {
    return item.layer === 'background'
        ? (activeOutfit.background === item.visual)
        : (activeOutfit[item.layer] === item.visual);
}

function renderWardrobe() {
    renderWardrobeTabs();
    renderWardrobeItems();
}

function renderWardrobeTabs() {
    const tabs = document.getElementById('wardrobe-tabs'); if(!tabs) return;
    tabs.innerHTML = '';
    wardrobeCategories.forEach(cat => {
        const active = cat.key === activeWardrobeCat;
        const b = document.createElement('button');
        b.className = `flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${active ? 'bg-indigo-600 text-white shadow' : 'bg-white text-slate-500 border border-slate-200'}`;
        b.textContent = cat.label;
        b.onclick = () => { activeWardrobeCat = cat.key; renderWardrobe(); };
        tabs.appendChild(b);
    });
}

function makeWardrobeCard({ icon, owned, equipped, price, onPick }) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = `relative aspect-square rounded-2xl border-2 flex items-center justify-center cursor-pointer transition-transform active:scale-90 ${equipped ? 'border-indigo-600 bg-indigo-50' : 'border-slate-200 bg-white hover:border-indigo-300'}`;
    let badge = '';
    if (equipped) {
        badge = `<span class="absolute -top-1.5 -right-1.5 bg-indigo-600 text-white text-[11px] w-5 h-5 rounded-full flex items-center justify-center shadow">✓</span>`;
    } else if (!owned) {
        badge = `<span class="absolute -top-1.5 -right-1.5 bg-amber-400 text-white text-[9px] font-bold px-1.5 h-5 rounded-full flex items-center justify-center shadow">${price}💎</span>`
              + `<span class="absolute bottom-1 right-1.5 text-[10px]">🔒</span>`;
    }
    b.innerHTML = `<span class="text-3xl ${owned ? '' : 'opacity-40 grayscale'}">${icon}</span>${badge}`;
    b.onclick = onPick;
    return b;
}

function renderWardrobeItems() {
    const grid = document.getElementById('wardrobe-items'); if(!grid) return;
    grid.innerHTML = '';

    // קטגוריית "דמות" - בחירת דמות בסיס חופשית
    if (activeWardrobeCat === 'character') {
        baseAvatars.forEach(em => {
            grid.appendChild(makeWardrobeCard({
                icon: em, owned: true, equipped: (activeOutfit.avatar || '🧍‍♀️') === em,
                onPick: () => { activeOutfit.avatar = em; showSpeechBubble('Hi! 👋'); afterOutfitChange(true); }
            }));
        });
        return;
    }

    const items = shopItems.filter(i => i.layer === activeWardrobeCat);
    if (!items.length) {
        grid.innerHTML = `<p class="col-span-4 text-center text-xs text-slate-400 py-3">אין פריטים בקטגוריה זו.</p>`;
        return;
    }
    items.forEach(item => {
        const owned = inventory.includes(item.id);
        grid.appendChild(makeWardrobeCard({
            icon: item.icon, owned, equipped: isItemEquipped(item), price: item.price,
            onPick: () => owned ? toggleEquip(item) : tryBuyItem(item)
        }));
    });
}

function toggleEquip(item) {
    const equipped = isItemEquipped(item);
    if (item.layer === 'background') {
        activeOutfit.background = equipped ? 'canvas-default' : item.visual;
        activeOutfit.env = equipped ? '☁️' : item.env;
        activeOutfit.envLeft = equipped ? '⭐' : '🌟';
    } else {
        activeOutfit[item.layer] = equipped ? '' : item.visual;
    }
    afterOutfitChange(!equipped); // אפקט רק כשלובשים, לא כשמסירים
}

function tryBuyItem(item) {
    if (diamonds < item.price) {
        showModal("עוד קצת! אין מספיק יהלומים 💎 שחקו במשחקים כדי להרוויח עוד.", 0, '💎');
        return;
    }
    diamonds -= item.price;
    inventory.push(item.id);
    if (item.layer === 'background') {
        activeOutfit.background = item.visual; activeOutfit.env = item.env; activeOutfit.envLeft = '🌟';
    } else {
        activeOutfit[item.layer] = item.visual;
    }
    afterOutfitChange(true);
    showModal(`מזל טוב! קיבלת "${item.name}" והוא כבר עליך! 🥳`, 0, '🎁');
}

function randomizeOutfit() {
    activeOutfit.avatar = baseAvatars[Math.floor(Math.random() * baseAvatars.length)];
    ['hair', 'cloth', 'shoes', 'glasses', 'crown', 'pet', 'friend', 'background'].forEach(layer => {
        const owned = shopItems.filter(i => i.layer === layer && inventory.includes(i.id));
        if (!owned.length) return;
        if (layer === 'background') {
            const pick = owned[Math.floor(Math.random() * owned.length)];
            activeOutfit.background = pick.visual; activeOutfit.env = pick.env; activeOutfit.envLeft = '🌟';
        } else if (Math.random() < 0.75) {
            activeOutfit[layer] = owned[Math.floor(Math.random() * owned.length)].visual;
        } else {
            activeOutfit[layer] = '';
        }
    });
    showSpeechBubble('Ta-da! ✨');
    afterOutfitChange(true);
}

function resetOutfit() {
    activeOutfit.hair = activeOutfit.cloth = activeOutfit.shoes = '';
    activeOutfit.glasses = activeOutfit.crown = activeOutfit.pet = activeOutfit.friend = '';
    activeOutfit.background = 'canvas-default'; activeOutfit.env = '☁️'; activeOutfit.envLeft = '⭐';
    activeOutfit.avatar = '🧍‍♀️';
    showSpeechBubble('All clean! 🧼');
    afterOutfitChange(false);
}

function renderShop() {
    const container = document.getElementById('shop-items-container'); if(!container) return;
    container.innerHTML = '';
    shopItems.forEach(item => {
        const isOwned = inventory.includes(item.id);
        const card = document.createElement('div');
        card.className = `bg-white border-2 rounded-2xl p-3 flex flex-col items-center cursor-pointer shadow-sm transition-all hover:scale-102 ${isOwned ? 'border-emerald-500 bg-emerald-50/40' : 'border-slate-200'}`;
        card.onclick = () => {
            if(isOwned) {
                showModal("הפריט כבר ברשותכם! כנסו לטאב 'החדר שלי' כדי להשתמש בו 🌟"); return;
            }
            if (diamonds >= item.price) {
                diamonds -= item.price; inventory.push(item.id);
                if(item.layer === 'background') { activeOutfit.background = item.visual; activeOutfit.env = item.env; activeOutfit.envLeft = '🌟'; }
                else { activeOutfit[item.layer] = item.visual; }
                updateHeaderStats();
                showModal(`מזל טוב! קניתם את "${item.name}" והוא בארון! 🥳`);
            } else {
                showModal("אין לכם מספיק יהלומים! שחקו במשימות באנגלית כדי להרוויח עוד 💎");
            }
        };
        card.innerHTML = `
            <span class="text-4xl mb-2">${item.icon}</span>
            <span class="font-bold text-[11px] text-slate-700 mb-1 text-center h-8 flex items-center">${item.name}</span>
            <span class="${isOwned ? 'text-emerald-600 font-bold text-xs' : 'text-indigo-600 font-bold text-xs'}">
                ${isOwned ? 'בבעלותך ✨' : `${item.price} 💎`}
            </span>
        `;
        container.appendChild(card);
    });
}

const SUBJECT_LABELS = {
    vocabulary: 'אוצר מילים', verbs: 'פועל', wh: 'WH', days: 'ימים', numbers: 'מספרים'
};

function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, c => (
        { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
    ));
}

function renderAdminLibrary() {
    const listContainer = document.getElementById('admin-vocab-list'); if(!listContainer) return;
    listContainer.innerHTML = '';

    // כל הנושאים + המילים שנוספו ידנית
    let rows = [];
    Object.keys(subjectsData).forEach(key => {
        subjectsData[key].forEach(w => rows.push({ ...w, _subject: key, _custom: false }));
    });
    customWords.forEach(w => rows.push({ ...w, _subject: 'vocabulary', _custom: true }));
    rows.sort((a, b) => a.english.localeCompare(b.english));

    rows.forEach(w => {
        const itemRow = document.createElement('div');
        itemRow.className = "flex justify-between items-center bg-white border border-slate-200/60 p-2 rounded-xl text-xs shadow-sm";
        const subjectBadge = `<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[9px] font-bold">${SUBJECT_LABELS[w._subject] || w._subject}</span>`;

        itemRow.innerHTML = `
            <div class="flex gap-3 items-center flex-wrap">
                <span class="font-bold text-slate-700" dir="ltr">${escapeHtml(w.english)}</span>
                <span class="text-slate-400">|</span>
                <span class="font-medium text-slate-600">${escapeHtml(w.hebrew)}</span>
                ${w._custom ? '<span class="bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded text-[9px] font-bold">חדש</span>' : subjectBadge}
            </div>
            <button onclick="askDeletePermission(${w.id})" class="text-rose-500 hover:bg-rose-50 p-1.5 rounded-lg font-bold cursor-pointer transition-colors">🗑️</button>
        `;
        listContainer.appendChild(itemRow);
    });
}

function askDeletePermission(wordId) {
    wordIdPendingDelete = wordId;
    const field = document.getElementById('admin-password-field');
    field.value = '';
    document.getElementById('admin-auth-modal').classList.remove('hidden-screen');
    setTimeout(() => field.focus(), 50);
}

function cancelDeleteAuth() {
    wordIdPendingDelete = null; document.getElementById('admin-auth-modal').classList.add('hidden-screen');
}

function deleteWordById(id) {
    const customIdx = customWords.findIndex(w => w.id === id);
    if (customIdx !== -1) { customWords.splice(customIdx, 1); return true; }
    // מילת ברירת מחדל: מוחקים מהמערך וזוכרים את המזהה כדי שלא יחזור אחרי רענון
    for (const key of Object.keys(subjectsData)) {
        const idx = subjectsData[key].findIndex(w => w.id === id);
        if (idx !== -1) {
            subjectsData[key].splice(idx, 1);
            if (!deletedDefaultIds.includes(id)) deletedDefaultIds.push(id);
            return true;
        }
    }
    return false;
}

function confirmDeleteAuth() {
    const enteredPass = document.getElementById('admin-password-field').value;
    if (enteredPass === '0589') {
        deleteWordById(wordIdPendingDelete);
        document.getElementById('admin-auth-modal').classList.add('hidden-screen');
        wordIdPendingDelete = null; updateHeaderStats();
        showModal("המילה נמחקה בהצלחה מהמאגר! 🗑️", 0, '🗑️');
    } else {
        document.getElementById('admin-password-field').value = '';
        showModal("סיסמה שגויה! נסו שוב 🔒", 0, '🔒');
    }
}

function saveNewWord() {
    const engInput = document.getElementById('input-eng').value.trim();
    const hebInput = document.getElementById('input-heb').value.trim();
    if (!engInput || !hebInput) return;
    
    const newWord = { id: generateWordId(), english: engInput, hebrew: hebInput };
    customWords.push(newWord);
    document.getElementById('input-eng').value = '';
    document.getElementById('input-heb').value = '';
    
    currentSubject = 'vocabulary'; updateHeaderStats();
    showModal(`המילה "${newWord.english}" נוספה ותופיע ראשונה בכל תרגול! 🎉`);
}

function requireNameBeforeGame(gameMode) {
    currentGameState = gameMode;
    const field = document.getElementById('player-name-field');
    field.value = currentPlayerName;
    switchScreen('nameInput');
    setTimeout(() => field.focus(), 50);
}

function confirmNameAndStart() {
    const nameInput = document.getElementById('player-name-field').value.trim();
    if (!nameInput) { showModal("בבקשה רשמו את שמכם לפני תחילת המשימה! ✍️", 0, '✋'); return; }
    currentPlayerName = nameInput;
    currentRoundWrongAttempts = 0; currentRoundTotalAttempts = 0; gameStartTime = new Date();
    
    prepareRoundVocabulary();

    clearInterval(gameTimerInterval);
    gameTimerInterval = setInterval(() => {
        const diff = Math.floor((new Date() - gameStartTime) / 1000);
        const mins = String(Math.floor(diff / 60)).padStart(2, '0');
        const secs = String(diff % 60).padStart(2, '0');
        const str = `⏱️ זמן: ${mins}:${secs}`;
        if (currentGameState === 'matching') {
            const mtd = document.getElementById('match-timer-display'); if(mtd) mtd.innerText = str;
        } else if (currentGameState === 'multipleChoice') {
            const mcd = document.getElementById('mc-timer-display'); if(mcd) mcd.innerText = str;
        } else if (currentGameState === 'spelling') {
            const std = document.getElementById('sp-timer-display'); if(std) std.innerText = str;
        }
    }, 1000);

    if (currentGameState === 'matching') startMatchingGame();
    else if (currentGameState === 'multipleChoice') startMultipleChoiceGame();
    else if (currentGameState === 'spelling') startSpellingGame();
}

function stopTimerAndGetDuration() {
    clearInterval(gameTimerInterval);
    const diff = Math.floor((new Date() - gameStartTime) / 1000);
    const mins = String(Math.floor(diff / 60)).padStart(2, '0');
    const secs = String(diff % 60).padStart(2, '0');
    return `${mins}:${secs}`;
}

function exitCurrentGame() {
    clearInterval(gameTimerInterval); window.speechSynthesis.cancel(); switchScreen('gameModes');
}

function saveRecordToScoreboard(gameType) {
    const duration = stopTimerAndGetDuration();
    const options = { timeZone: 'Asia/Jerusalem', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
    const dateStr = new Intl.DateTimeFormat('he-IL', options).format(new Date());
    const successCount = currentRoundTotalAttempts - currentRoundWrongAttempts;

    const newRecord = {
        name: currentPlayerName,
        game: `${gameType} (${currentSubject})`,
        score: `${successCount}/${currentRoundTotalAttempts}`,
        time: duration, date: dateStr
    };
    scoreHistory.unshift(newRecord);
    if (scoreHistory.length > 50) scoreHistory = scoreHistory.slice(0, 50); // מניעת ניפוח אחסון
    updateHeaderStats();
}

// סיום משחק: שמירת תוצאה, מתן הרווח הקבוע פעם אחת, וחזרה לתפריט
function finishGame(gameMode, gameLabel) {
    const reward = GAME_REWARDS[gameMode] || 0;
    saveRecordToScoreboard(gameLabel);
    showModal(`כל הכבוד! סיימתם את המשחק 🎉 קיבלתם ${reward} יהלומים 💎`, reward);
    switchScreen('gameModes');
}

function showScoreboardScreen() {
    switchScreen('scoreboard');
    const container = document.getElementById('scoreboard-entries'); if(!container) return;
    container.innerHTML = '';
    if (scoreHistory.length === 0) {
        container.innerHTML = `<p class="text-center text-slate-400 py-6 text-sm">אין תוצאות רשומות כרגע. בואו נשחק!</p>`; return;
    }
    scoreHistory.forEach(rec => {
        const div = document.createElement('div'); div.className = "bg-slate-50 border border-slate-100 rounded-xl p-3 shadow-sm flex flex-col gap-1";
        div.innerHTML = `
            <div class="flex justify-between items-center border-b border-slate-200/60 pb-1">
                <span class="font-black text-indigo-600 text-base">${rec.name}</span>
                <span class="bg-indigo-100 text-indigo-700 text-[10px] px-2 py-0.5 rounded-md font-bold">${rec.game}</span>
            </div>
            <div class="grid grid-cols-3 text-xs font-medium text-slate-500 mt-1 text-center">
                <div>🎯 הישג: <span class="font-bold text-slate-700">${rec.score}</span></div>
                <div>⏱️ זמן: <span class="font-bold text-slate-700">${rec.time}</span></div>
                <div class="text-left text-[10px] text-slate-400 self-center">${rec.date}</div>
            </div>
        `;
        container.appendChild(div);
    });
}

function clearScoreboard() {
    showConfirm("האם למחוק את כל היסטוריית לוח התוצאות?", () => {
        scoreHistory = []; updateHeaderStats(); showScoreboardScreen();
    });
}

function startMatchingGame() {
    switchScreen('matching');
    const msd = document.getElementById('match-score-display'); if(msd) msd.innerText = `🎯 שגיאות: 0`;
    
    totalPairsInRound = roundVocabulary.length;
    let engCards = shuffleInPlace(roundVocabulary.map(w => ({ id: w.id, text: w.english, type: 'eng' })));
    let hebCards = shuffleInPlace(roundVocabulary.map(w => ({ id: w.id, text: w.hebrew, type: 'heb' })));
    let allCards = [...engCards, ...hebCards];

    const grid = document.getElementById('matching-grid'); if(!grid) return;
    grid.innerHTML = '';

    selectedEngCard = null; selectedHebCard = null;

    allCards.forEach((card, idx) => {
        const btn = document.createElement('button'); btn.innerText = card.text; btn.id = `card-${card.type}-${card.id}-${idx}`;
        btn.className = CARD_BASE_CLASS;
        btn.onclick = () => {
            if(card.type === 'eng') {
                if(selectedEngCard) { const old = document.getElementById(selectedEngCard.elementId); if(old) old.classList.remove('match-selected'); }
                selectedEngCard = { ...card, elementId: btn.id }; btn.classList.add('match-selected');
            } else {
                if(selectedHebCard) { const old = document.getElementById(selectedHebCard.elementId); if(old) old.classList.remove('match-selected'); }
                selectedHebCard = { ...card, elementId: btn.id }; btn.classList.add('match-selected');
            }
            if(selectedEngCard && selectedHebCard) {
                currentRoundTotalAttempts++;
                if(selectedEngCard.id === selectedHebCard.id) {
                    const e1 = document.getElementById(selectedEngCard.elementId); const e2 = document.getElementById(selectedHebCard.elementId);
                    setTimeout(() => {
                        if(e1) e1.style.visibility = 'hidden'; if(e2) e2.style.visibility = 'hidden';
                        selectedEngCard = null; selectedHebCard = null; totalPairsInRound--;
                        if(totalPairsInRound === 0) { finishGame('matching', 'התאמה'); }
                    }, 400);
                } else {
                    currentRoundWrongAttempts++;
                    const msd2 = document.getElementById('match-score-display'); if(msd2) msd2.innerText = `🎯 שגיאות: ${currentRoundWrongAttempts}`;
                    const e1 = document.getElementById(selectedEngCard.elementId); const e2 = document.getElementById(selectedHebCard.elementId);
                    if(e1) e1.style.borderColor = '#ef4444'; if(e2) e2.style.borderColor = '#ef4444';
                    setTimeout(() => {
                        if(e1) e1.className = CARD_BASE_CLASS;
                        if(e2) e2.className = CARD_BASE_CLASS;
                        selectedEngCard = null; selectedHebCard = null;
                    }, 600);
                }
            }
        };
        grid.appendChild(btn);
    });
}

function startMultipleChoiceGame() {
    currentWordIndex = 0; renderMultipleChoiceRound(); switchScreen('multipleChoice');
}

function renderMultipleChoiceRound() {
    const mcs = document.getElementById('mc-score-display'); if(mcs) mcs.innerText = `📝 שאלה: ${currentWordIndex + 1}/${roundVocabulary.length} | שגיאות: ${currentRoundWrongAttempts}`;
    const word = roundVocabulary[currentWordIndex];
    const mhw = document.getElementById('mc-hebrew-word'); if(mhw) mhw.innerText = word.hebrew;
    
    const options = shuffleInPlace([word.english, ...buildDistractors(word)]);
    
    const container = document.getElementById('mc-options-container'); if(!container) return;
    container.innerHTML = '';
    options.forEach(opt => {
        const btn = document.createElement('button'); btn.innerText = opt;
        btn.className = "w-full py-4 bg-white border-2 border-slate-200 rounded-xl font-bold text-slate-700 text-lg shadow-sm cursor-pointer transition-all";
        btn.onclick = () => {
            const allButtons = container.querySelectorAll('button'); allButtons.forEach(b => b.disabled = true);
            currentRoundTotalAttempts++;
            if (opt === word.english) {
                btn.className = "w-full py-4 bg-emerald-500 text-white border-2 border-emerald-500 rounded-xl font-bold text-lg shadow-sm";
                setTimeout(() => {
                    if (currentWordIndex < roundVocabulary.length - 1) { currentWordIndex++; renderMultipleChoiceRound(); }
                    else { finishGame('multipleChoice', 'אמריקאי'); }
                }, 900);
            } else {
                currentRoundWrongAttempts++;
                btn.className = "w-full py-4 bg-rose-500 text-white border-2 border-rose-500 rounded-xl font-bold text-lg shadow-sm";
                allButtons.forEach(b => { if(b.innerText === word.english) b.className = "w-full py-4 bg-emerald-500 text-white border-2 border-emerald-500 rounded-xl font-bold text-lg shadow-sm"; });
                setTimeout(() => {
                    if (currentWordIndex < roundVocabulary.length - 1) { currentWordIndex++; renderMultipleChoiceRound(); }
                    else { finishGame('multipleChoice', 'אמריקאי'); }
                }, 1500);
            }
        };
        container.appendChild(btn);
    });
}

function startSpellingGame() {
    currentWordIndex = 0; renderSpellingRound(); switchScreen('spelling');
}

function renderSpellingRound() {
    const spi = document.getElementById('spelling-input'); if(spi) spi.value = '';
    if(spi) spi.className = "w-full p-4 text-2xl text-center border-2 border-slate-300 rounded-xl outline-none focus:border-indigo-500 font-bold mb-4";
    const ssd = document.getElementById('sp-score-display'); if(ssd) ssd.innerText = `📝 שאלה: ${currentWordIndex + 1}/${roundVocabulary.length} | שגיאות: ${currentRoundWrongAttempts}`;
    const shw = document.getElementById('sp-hebrew-word'); if(shw) shw.innerText = roundVocabulary[currentWordIndex].hebrew;
    if(spi) setTimeout(() => spi.focus(), 50);
    setTimeout(speakCurrentWord, 300);
}

function checkSpellingAnswer() {
    const inputElement = document.getElementById('spelling-input'); if(!inputElement) return;
    const answer = inputElement.value.trim().toLowerCase();
    const correctAnswer = roundVocabulary[currentWordIndex].english.toLowerCase();
    currentRoundTotalAttempts++;
    
    if (answer === correctAnswer) {
        inputElement.className = "w-full p-4 text-2xl text-center border-2 border-emerald-500 bg-emerald-50 rounded-xl font-bold mb-4 text-emerald-700";
        setTimeout(() => {
            if (currentWordIndex < roundVocabulary.length - 1) { currentWordIndex++; renderSpellingRound(); }
            else { finishGame('spelling', 'הכתבה'); }
        }, 900);
    } else {
        currentRoundWrongAttempts++;
        const ssd2 = document.getElementById('sp-score-display'); if(ssd2) ssd2.innerText = `📝 שאלה: ${currentWordIndex + 1}/${roundVocabulary.length} | שגיאות: ${currentRoundWrongAttempts}`;
        inputElement.className = "w-full p-4 text-2xl text-center border-2 border-rose-500 bg-rose-50 rounded-xl font-bold mb-4 text-rose-700";
        setTimeout(() => { inputElement.className = "w-full p-4 text-2xl text-center border-2 border-slate-300 rounded-xl outline-none focus:border-indigo-500 font-bold mb-4"; }, 1200);
    }
}

function showModal(text, reward = 0, emoji = '🎉') {
    if(reward > 0) { diamonds += reward; }
    const mtc = document.getElementById('modal-text-content'); if(mtc) mtc.innerText = text;
    const me = document.getElementById('modal-emoji'); if(me) me.innerText = emoji;
    const sm = document.getElementById('success-modal'); if(sm) sm.classList.remove('hidden-screen');
    updateHeaderStats();
}

function closeModal() {
    const sm = document.getElementById('success-modal'); if(sm) sm.classList.add('hidden-screen');
}

// --- מודאל אישור פעולה (במקום confirm של הדפדפן) ---
let confirmCallback = null;
function showConfirm(text, onConfirm) {
    confirmCallback = onConfirm;
    const ctc = document.getElementById('confirm-text-content'); if(ctc) ctc.innerText = text;
    const cm = document.getElementById('confirm-modal'); if(cm) cm.classList.remove('hidden-screen');
}
function resolveConfirm(ok) {
    const cm = document.getElementById('confirm-modal'); if(cm) cm.classList.add('hidden-screen');
    const cb = confirmCallback; confirmCallback = null;
    if (ok && typeof cb === 'function') cb();
}

window.addEventListener('DOMContentLoaded', () => {
    updateHeaderStats(); switchScreen('gameModes');

    // שם הדמות - שמירה תוך כדי הקלדה
    const charName = document.getElementById('char-name-input');
    if (charName) {
        charName.value = characterName;
        charName.addEventListener('input', () => {
            characterName = charName.value;
            try { localStorage.setItem('edu_char_name', characterName); } catch (e) { /* ignore */ }
        });
    }

    // Enter לשליחה בשדות הקלט
    const onEnter = (el, fn) => { if(el) el.addEventListener('keydown', e => { if(e.key === 'Enter') { e.preventDefault(); fn(); } }); };
    onEnter(document.getElementById('player-name-field'), confirmNameAndStart);
    onEnter(document.getElementById('spelling-input'), checkSpellingAnswer);
    onEnter(document.getElementById('admin-password-field'), confirmDeleteAuth);
    onEnter(document.getElementById('input-eng'), () => document.getElementById('input-heb').focus());
    onEnter(document.getElementById('input-heb'), saveNewWord);

    // Esc לסגירת מודאלים פתוחים
    document.addEventListener('keydown', e => {
        if (e.key !== 'Escape') return;
        const success = document.getElementById('success-modal');
        const auth = document.getElementById('admin-auth-modal');
        const confirmM = document.getElementById('confirm-modal');
        if (confirmM && !confirmM.classList.contains('hidden-screen')) resolveConfirm(false);
        else if (auth && !auth.classList.contains('hidden-screen')) cancelDeleteAuth();
        else if (success && !success.classList.contains('hidden-screen')) closeModal();
    });
});
