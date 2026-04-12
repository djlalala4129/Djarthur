/* ============================================================
   DJ ARTHUR — Script principal
   ============================================================
   Sections :
   1.  Données karaoké (chansons & paroles)
   2.  Références DOM
   3.  Navigation mobile
   4.  Affichage des sections (showSection)
   5.  Waveform animée
   6.  Karaoké (chargement, lecture, progression)
   7.  Setup DJ — zones interactives (DDJ-FLX10 face avant)
   8.  Setup DJ — face arrière (connectique)
   9.  Réseaux sociaux — spotlight & tilt
   10. Section Live — Twitch embed & chat
   11. Waveform — détection hover centre vinyle
   12. Filtres grille démo
   13. Carrousels (Chartrettes & Shorts)
   14. Animation navigation (GSAP)
   ============================================================ */

// ─── 1. DONNÉES KARAOKÉ ──────────────────────────────────────
const karaokeSongs = [
    {
        "titre": "Sapés comme jamais",
        "artiste": "GIMS",
        "bpm": 96,
        "offset": 0,
        "audio": "audio/sapes-comme-jamais.mp3",
        "paroles": "Sapés comme jamais\nSapés comme jamais\nOn va briller ce soir\nToute la night"
    },
    {
        "titre": "Parisienne",
        "artiste": "GIMS",
        "bpm": 123,
        "offset": 1,
        "audio": "parisienne.mp3",
        "paroles": "L.A M.A.N.O, rien à tter-gra, bande de haineux\n(Maximum Beats)\nAh-ah, t'inquiète (t'inquiète)\nOuais, t'inquiète (mmh-mmh, mmh)\nT'es la plus belle, ouais (la plus belle)\nLa plus belle de mon tél', uh-uh\nArtificielle (artificielle)\nMais qui tire les ficelles? (Ficelles)\nJ'suis comme en laisse\nJe sens que\nParfois, comme l'oseille, tu t'en vas\nCe soir là, tu m'as laissée sans voix\nMoi, j'veux une parisienne (parisienne) parisienne qui traverse au feu vert, qui s'en fout d'la Tour Eiffel\nUne parisienne (parisienne) parisienne qui traverse au feu vert, qui s'en fout d'la Tour Eiffel\nC'est la, c'est la Warano, R.A.T touch\nTu fais pas partie d'la chora'\nElle aime les mecs en ce-pla (gang, gang)\nAvec de l'aura, tu l'auras (gang, gang)\nChamps-Élysées, balade vers les Champs-Élysées (baw)\nBébé, les porcs m'ont localisé (baw)\nPrends le volant, j'suis alcoolisé (baw)\nElle active les lumières tami'\nElle a-, elle active les lumières tamisées\nA-avec moi quand c'était la misère (gang, gang)\nElle veut du sérieux, pas s'amuser (baw)\nMa parisienne, elle veut et moi aussi\nElle est tombée du ciel\nElle est canon comme pas possible\nMoi, j'veux une parisienne (parisienne) parisienne\nQui traverse au feu vert, qui s'en fout d'la Tour Eiffel\nUne parisienne (parisienne) parisienne\nQui traverse au feu vert, qui s'en fout d'la Tour Eiffel\nAvenue Montaigne (Avenue Montaigne)\nRien d'personnel mais\nTrop d'professionnels\nÇa m'lâche pas d'une semelle\nÇa va couper, j'ai l'excuse du tunnel (du tunnel)\nNumero uno, encore cette semaine\nEt parfois, comme l'oseille, tu t'en vas (oh)\nCe soir là, tu m'as laissé sans voix (oh)\nMoi, j'veux une parisienne (parisienne) parisienne\nQui traverse au feu vert, qui s'en fout d'la Tour Eiffel\nUne parisienne (parisienne) parisienne\nQui traverse au feu vert, qui s'en fout d'la Tour Eiffel"
    },
    {
        "titre": "Pour que tu m'aimes encore",
        "artiste": "CELINE DION",
        "bpm": 80,
        "offset": 1,
        "audio": "audio/pour-que-tu-maimes-encore.mp3",
        "paroles": "J´ai compris tous les mots, j´ai bien compris, merci\nRaisonnable et nouveau, c´est ainsi par ici\nQue les choses ont changé, que les fleurs ont fané\nQue le temps d´avant, c´était le temps d´avant\nQue si tout zappe et lasse, les amours aussi passent\n\nIl faut que tu saches\n\nJ´irai chercher ton cœur si tu l´emportes ailleurs\nMême si dans tes danses d´autres dansent tes heures\nJ´irai chercher ton âme dans les froids dans les flammes\nJe te jetterai des sorts pour que tu m´aimes encore\nPour que tu m'aimes encore\n\nFallait pas commencer\n\nM´attirer me toucher\nFallait pas tant donné\nMoi je sais pas jouer\nOn me dit qu´aujourd´hui\nOn me dit que les autres font ainsi\nJe ne suis pas les autres\nAvant que l´on s´attache\nAvant que l´on se gâche\n\nJe veux que tu saches\n\nJ´irai chercher ton cœur si tu l´emportes ailleurs\nMême si dans tes danses d´autres dansent tes heures\nJ´irai chercher ton âme dans les froids dans les flammes\nJe te jetterai des sorts pour que tu m´aimes encore\n\nJe trouverai des langages pour chanter tes louanges\nJe ferai nos bagages pour d´infinies vendanges\nLes formules magiques des marabouts d´Afrique\nJ´les dirai sans remords pour que tu m´aimes encore\n\nJe m´inventerai reine pour que tu me retiennes\nJe me ferai nouvelle pour que le feu reprenne\nJe deviendrai ces autres qui te donnent du plaisir\nVos jeux seront les nôtres, si tel est ton désir\n\nPlus brillante plus belle pour une autre étincelle\nJe me changerai en or pour que tu m´aimes encore.\nPour que tu m'aimes encore\nPour que tu m'aimes encore\nPour que tu m'aimes encore\nPour que tu m'aimes encore"
    },
    {
        "titre": "Reine",
        "artiste": "DADJU",
        "bpm": 92,
        "audio": "audio/reine-dadju.mp3",
        "paroles": "Aujourd'hui, je suis fatigué\nJe t'ai regardé dormir\nEt si ma voix peut t'apaiser\nJe chanterai pour toi toute la nuit\nJe t'entends dire à tes copines\n\"Dadju, j'peux plus me passer de lui\"\nHey, tout va glisser sur ta peau\nC'est comme si je te passais de l'huile\nEt s'ils ne sont pas nous, c'est tant pis pour eux\nEt s'ils sont jaloux, c'est tant pis pour eux\nFais-le moi savoir quand c'est douloureux\nJe suis là s'il faut encaisser pour nous deux\nEt je le sais, je te fais confiance\nQuand tu me souris, tu fais pas semblant\nJ'ai pas besoin d'attendre plus longtemps\nJe sais qu'il est temps de partager mon sang\nEt t'élever au rang de reine\nAu rang de reine, au rang de reine\nJ'vais t'élever au rang de reine\nAu rang de reine, au rang de reine, oh, oh\nJe sais que l'amour c'est compliqué, mais avec toi, c'est plus facile\nContinue de rester toi-même et je ne regrette pas de t'avoir choisi\nJe l'ai promis à ton papa, je vais prendre soin de sa fille\nTu fais partie de ma famille et Dieu sait combien j'aime ma famille\nEt s'ils te demandent, c'est qu'ils sont curieux\nS'ils te redemandent, c'est qu'ils sont envieux\nFermes la porte à ceux qui font de leur mieux\nPour nous empêcher d'être deux quand on sera vieux\nEt je le sais, je te fais confiance\nQuand tu me souris, tu fais pas semblant\nJ'ai pas besoin d'attendre plus longtemps\nJe sais qu'il est temps de partager mon sang\nEt t'élever au rang de reine\nAu rang de reine, au rang de reine\nJ'vais t'élever au rang de reine\nAu rang de reine, au rang de reine\nAssez parlé, au bout d'un moment y a plus les mots\nÇa y est, j'ai délaissé mon cœur dans ta paume\nJ'te laisserai pas t'en aller, c'est mort\nJ'ai mis du temps à te trouver, mi amor\nCelui qui dit qu'on s'est trompé a tort\nOn se battra même contre les coups du sort\nAssez parlé, au bout d'un moment y a plus les mots\nÇa y est, j'ai délaissé mon cœur dans ta paume\nJ'te laisserai pas t'en aller, c'est mort\nJ'ai mis du temps à te trouver, mi amor\nCelui qui dit qu'on s'est trompé a tort\nOn se battra même contre les coups du sort\nEt je le sais, je te fais confiance\nQuand tu me souris, tu fais pas semblant\nJ'ai pas besoin d'attendre plus longtemps\nJe sais qu'il est temps de partager mon sang\nEt t'élever au rang de reine\nAu rang de reine, au rang de reine\nJ'vais t'élever au rang de reine\nAu rang de reine, au rang de reine\nAu rang de-, au rang de-\nJe vais t'élever au rang de reine\nAu rang de-, au rang de-\nLaisse-moi t'élever au rang de reine"
    },
    {
        "titre": "Bella",
        "artiste": "Maître Gims",
        "bpm": 95,
        "audio": "audio/bella-gims.mp3",
        "paroles": "Bella, bella, bella\nBella, bella, bella\nJe veux te voir encore\nBella, bella, bella\nTu es ma seule\nMon amour, mon trésor\nJe t\'ai cherchée longtemps\nDans ma vie tu es entrée\nMaintenant c\'est évident\nJe suis fou de toi, ma beauté\nBella, bella, bella\nBella, bella, bella\nJe veux te voir encore\nBella, bella, bella\nQuand je te vois le soir\nMon cœur s\'emballe\nTu fais partie de moi\nMa belle, ma belle\nBella, bella, bella\nBella, bella, bella"
    },
    {
        "titre": "Alors on danse",
        "artiste": "Stromae",
        "bpm": 128,
        "audio": "audio/alors-on-danse.mp3",
        "paroles": "Qui dit étude dit travail\nQui dit taf te dit les thunes\nQui dit argent dit dépenses\nQui dit crédit dit créance\nQui dit dette te dit huissier\nQui dit assis dans la merde\nQui dit amour dit les gosses\nDit toujours et dit divorce\nQui dit proches te dit deuils\nCar les problèmes ne viennent pas seuls\nQui dit crise te dit monde\nQui dit famine dit tiers-monde\nAlors on sort pour oublier tous ces problèmes\nAlors on danse, alors on danse\nAlors on danse, alors on danse\nEt tout disparaît, et tout disparaît\nAlors on danse, alors on danse\nAlors on danse, alors on danse\nEt tout disparaît, et tout disparaît\nAlors on chante, alors on chante\nAlors on chante, lalala\nEt tout disparaît, et tout disparaît"
    },
    {
        "titre": "Formidable",
        "artiste": "Stromae",
        "bpm": 110,
        "audio": "audio/formidable.mp3",
        "paroles": "T\'étais formidable\nJ\'étais fort minable\nNous étions formidables\nT\'étais formidable\nJ\'étais fort minable\nNous étions formidables\nSois moi une heure\nJuste le temps d\'une peur\nQui dure toujours\nT\'étais formidable\nJ\'étais fort minable\nNous étions formidables\nEt merde, t\'as pas le droit de partir comme ça\nEt merde, t\'as pas le droit de partir comme ça\nEt merde, t\'as pas le droit de partir comme ça\nT\'étais formidable\nJ\'étais fort minable\nNous étions formidables"
    
    },
    {
        "titre": "C\'est la vie",
        "artiste": "Khaled",
        "bpm": 110,
        "audio": "audio/cest-la-vie.mp3",
        "paroles": "C\'est la vie, c\'est la vie\nC\'est la vie, c\'est la vie\nC\'est la vie, ya rayah\nC\'est la vie\nJe t\'aime, je t\'adore\nComme l\'air que je respire\nJe t\'aime, je t\'adore\nTu me fais sourire\nC\'est la vie, c\'est la vie\nC\'est la vie, c\'est la vie\nOn est ensemble maintenant\nC\'est pour toujours\nC\'est la vie, c\'est la vie\nMa belle, mon amour\nC\'est la vie, c\'est la vie"
    }
];

// ─── 2. RÉFÉRENCES DOM ──────────────────────────────────────
const select = document.getElementById("songSelect");
const screen = document.getElementById("karaokeScreen");
const searchInput = document.getElementById("search");
const karaokeBtn = document.getElementById("karaokeBtn");
const resetBtn = document.getElementById("resetBtn");
const contactForm = document.getElementById("contactForm");
const nowPlayingDiv = document.getElementById("nowPlaying");
const nowPlayingTitle = document.getElementById("nowPlayingTitle");
const nowPlayingArtist = document.getElementById("nowPlayingArtist");
const progressContainer = document.getElementById("progressContainer");
const progressBar = document.getElementById("progressBar");
const progressCurrent = document.getElementById("progressCurrent");
const progressTotal = document.getElementById("progressTotal");
const bgAudio = document.getElementById("bgAudio");
const volumeSlider = document.getElementById("volumeSlider");

// Karaoke variables
let isPlaying = false;
let isPaused = false;
let timer;
let currentIndex = 0;
let lines = [];

// ─── 3. NAVIGATION MOBILE ───────────────────────────────────────
function closeMobileMenuFunc() {
    document.getElementById('mobileMenu').classList.remove('active');
    document.getElementById('mobileMenuBtn').querySelector('i').className = 'fas fa-bars';
}

document.getElementById('mobileMenuBtn').addEventListener('click', () => {
    const menu = document.getElementById('mobileMenu');
    const btn  = document.getElementById('mobileMenuBtn');
    const isOpen = menu.classList.contains('active');
    if (isOpen) {
        menu.classList.remove('active');
        btn.querySelector('i').className = 'fas fa-bars';
    } else {
        menu.classList.add('active');
        btn.querySelector('i').className = 'fas fa-times';
    }
});

document.getElementById('closeMobileMenu').addEventListener('click', closeMobileMenuFunc);

// Fermer le menu si clic à l'extérieur
document.addEventListener('click', function(e) {
    const menu = document.getElementById('mobileMenu');
    const btn  = document.getElementById('mobileMenuBtn');
    if (menu.classList.contains('active')
        && !menu.contains(e.target)
        && !btn.contains(e.target)) {
        closeMobileMenuFunc();
    }
});

// ─── 4. AFFICHAGE DES SECTIONS ──────────────────────────────
function showSection(id, event) {
    if (event) event.preventDefault();

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        const underline = link.querySelector('span');
        if (underline) underline.style.width = '0';
    });

    if (event && event.target.classList.contains('nav-link')) {
        event.target.classList.add('active');
        const underline = event.target.querySelector('span');
        if (underline) underline.style.width = '100%';
    }

    document.querySelectorAll('section').forEach(sec => {
        sec.classList.remove('active');
        sec.classList.add('hidden');
    });

    const targetSection = document.getElementById(id);
    if (targetSection) {
        targetSection.classList.remove('hidden');
        targetSection.classList.add('active');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─── 5. WAVEFORM ANIMÉE ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
    const activeLink = document.querySelector('.nav-link.active span');
    if (activeLink) activeLink.style.width = '100%';
    
    // ══════════════════════════════════════════
    //  WAVEFORM  — 2 rings, clean & sublime
    // ══════════════════════════════════════════
    const container = document.getElementById('waveformContainer');
    const ringInner = document.getElementById('wfRingInner');
    const centerEl  = document.getElementById('waveformCenter');

    const isMob = () => window.innerWidth <= 768;

    // Hue progressif le long du cercle
    function hue(angle, offset) { return (offset + angle * 0.75) % 360; }

    // Profil organique : mélange de 3 harmoniques
    function barH(i, n, base, amp) {
        const t = (i / n) * Math.PI * 2;
        const v = .5  * Math.abs(Math.sin(t * 3))
                + .3  * Math.abs(Math.sin(t * 7  + 1.1))
                + .2  * Math.abs(Math.sin(t * 13 + 2.3));
        return base + amp * v;
    }

    // ── Rayon dynamique : lit la taille réelle du vinyle dans le DOM ──
    function getVinylRadius() {
        if (centerEl && centerEl.offsetWidth > 0) return centerEl.offsetWidth / 2;
        const wfSize = parseFloat(getComputedStyle(container).getPropertyValue('--wf-size'));
        return ((wfSize > 0 ? wfSize : 400) * 0.645) / 2;
    }

    // ── Anneau intérieur : 64 barres ─────────────────────────
    const N_IN = 64;
    const barsIn = [];
    for (let i = 0; i < N_IN; i++) {
        const mob    = isMob();
        const radius = getVinylRadius();
        const base   = mob ? 8   : 16;
        const amp    = mob ? 16  : 38;
        const angle  = (i / N_IN) * 360;
        const h      = barH(i, N_IN, base, amp);
        const h1 = hue(angle, 210), h2 = hue(angle, 255);
        // Largeur variable — crête légèrement plus épaisse
        const w = mob ? 1.8 : (1.4 + 1.2 * Math.abs(Math.sin((i/N_IN)*Math.PI*5)));

        const bar = document.createElement('div');
        bar.className = 'wf-bar';
        bar.style.cssText = `
            width:${w}px;
            transform:rotate(${angle}deg) translateY(-${radius}px);
            background:linear-gradient(180deg,
                transparent 0%,
                hsla(${h1},100%,65%,.9) 40%,
                hsla(${h2},100%,62%,.7) 100%);
            box-shadow: 0 0 ${2+w*1.5}px hsla(${h1},100%,65%,.5);
            --hA:${h*.58}px; --hB:${h*1.42}px; --oA:.5;
            animation: wf-breathe ${3.5 + .5*Math.sin(i)}s ease-in-out ${-(i/N_IN)*3.5}s infinite;
        `;
        bar.style.height = h + 'px';
        bar.dataset.angle  = angle;
        bar.dataset.radius = radius;
        bar.dataset.h1     = h1;
        bar.dataset.ring   = 'in';
        ringInner.appendChild(bar);
        barsIn.push(bar);
    }


    // ── Resize ────────────────────────────────────────────────
    const allBars = [...barsIn];
    window.addEventListener('resize', () => {
        const r = getVinylRadius();
        barsIn.forEach(b => {
            b.style.transform = `rotate(${b.dataset.angle}deg) translateY(-${r}px)`;
            b.dataset.radius = r;
        });
    });


    // ── Hover : éclat propre et localisé ─────────────────────
    function getRot(el) {
        const m = window.getComputedStyle(el).transform;
        if (m === 'none') return 0;
        const v = m.split('(')[1].split(')')[0].split(',');
        return ((Math.atan2(+v[1],+v[0]) * 180/Math.PI) + 360) % 360;
    }

    function applyHover(normAngle) {
        const rotIn  = getRot(ringInner);
        allBars.forEach(bar => {
            const rot  = rotIn;
            const bAng = (+bar.dataset.angle + rot) % 360;
            let diff   = Math.abs(normAngle - bAng);
            if (diff > 180) diff = 360 - diff;
            const span = 60;
            if (diff < span) {
                const p   = Math.pow(1 - diff/span, 2);
                const hA  = parseFloat(bar.style.getPropertyValue('--hA')) || 10;
                const hB  = parseFloat(bar.style.getPropertyValue('--hB')) || 40;
                const mid = (hA + hB) / 2;
                bar.style.height  = (mid * (1 + p * 1.5)) + 'px';
                bar.style.opacity = String(.55 + p * .45);
                bar.style.filter  = `brightness(${1 + p * 1.3})`;
                bar.dataset.hov   = '1';
            } else if (bar.dataset.hov === '1') {
                bar.style.height = bar.style.opacity = bar.style.filter = '';
                bar.dataset.hov = '0';
            }
        });
    }

    function resetHover() {
        allBars.forEach(b => {
            b.style.height = b.style.opacity = b.style.filter = '';
            b.dataset.hov = '0';
        });
    }

    container.addEventListener('mousemove', e => {
        if (isMob()) return;
        const rect = container.getBoundingClientRect();
        const cx = rect.left + rect.width/2, cy = rect.top + rect.height/2;
        if (Math.hypot(e.clientX-cx, e.clientY-cy) < 95) { resetHover(); return; }
        const ang = (Math.atan2(e.clientY-cy, e.clientX-cx)*180/Math.PI + 90 + 360) % 360;
        applyHover(ang);
    });
    container.addEventListener('mouseleave', resetHover);

    // ── Mobile : vague automatique ────────────────────────────
    (function() {
        let va = 0, wasM = isMob();
        function loop() {
            const mob = isMob();
            if (!mob && wasM) resetHover();
            wasM = mob;
            if (mob) { va = (va + 1.5) % 360; applyHover(va); }
            requestAnimationFrame(loop);
        }
        requestAnimationFrame(loop);
    })();

});


// ─── 5b. WAVEFORM EVENT SECTION ─────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
    const containerEv = document.getElementById('waveformContainerEvent');
    const ringInnerEv = document.getElementById('wfRingInnerEvent');
    if (!containerEv || !ringInnerEv) return;

    const isMob = () => window.innerWidth <= 768;

    function hue(angle, offset) { return (offset + angle * 0.75) % 360; }
    function barH(i, n, base, amp) {
        const t = (i / n) * Math.PI * 2;
        const v = .5  * Math.abs(Math.sin(t * 3))
                + .3  * Math.abs(Math.sin(t * 7  + 1.1))
                + .2  * Math.abs(Math.sin(t * 13 + 2.3));
        return base + amp * v;
    }

    const N_IN = 64;
    const barsEvIn = [];

    // Rayon dynamique : lit la taille du vinyle Event depuis le DOM.
    // Si la section est cachée (offsetWidth = 0), on calcule depuis --wf-size.
    function getVinylRadiusEv() {
        const centerEv = containerEv.querySelector('.waveform-center');
        if (centerEv && centerEv.offsetWidth > 0) return centerEv.offsetWidth / 2;
        const wfSize = parseFloat(getComputedStyle(containerEv).getPropertyValue('--wf-size'));
        return ((wfSize > 0 ? wfSize : 400) * 0.645) / 2;
    }

    for (let i = 0; i < N_IN; i++) {
        const mob    = isMob();
        const radius = getVinylRadiusEv();
        const base   = mob ? 8   : 16;
        const amp    = mob ? 16  : 38;
        const angle  = (i / N_IN) * 360;
        const h      = barH(i, N_IN, base, amp);
        const h1 = hue(angle, 210), h2 = hue(angle, 255);
        const w = mob ? 1.8 : (1.4 + 1.2 * Math.abs(Math.sin((i/N_IN)*Math.PI*5)));

        const bar = document.createElement('div');
        bar.className = 'wf-bar';
        bar.style.cssText = `
            width:${w}px;
            transform:rotate(${angle}deg) translateY(-${radius}px);
            background:linear-gradient(180deg,
                transparent 0%,
                hsla(${h1},100%,65%,.9) 40%,
                hsla(${h2},100%,62%,.7) 100%);
            box-shadow: 0 0 ${2+w*1.5}px hsla(${h1},100%,65%,.5);
            --hA:${h*.58}px; --hB:${h*1.42}px; --oA:.5;
            animation: wf-breathe ${3.5 + .5*Math.sin(i)}s ease-in-out ${-(i/N_IN)*3.5}s infinite;
        `;
        bar.style.height = h + 'px';
        bar.dataset.angle  = angle;
        bar.dataset.radius = radius;
        bar.dataset.h1     = h1;
        bar.dataset.ring   = 'in';
        ringInnerEv.appendChild(bar);
        barsEvIn.push(bar);
    }

    window.addEventListener('resize', () => {
        const r = getVinylRadiusEv();
        barsEvIn.forEach(b => {
            b.style.transform = `rotate(${b.dataset.angle}deg) translateY(-${r}px)`;
            b.dataset.radius = r;
        });
    });

    // Vague automatique en continu
    let va = 0;
    function loopEv() {
        va = (va + 0.8) % 360;
        const m = window.getComputedStyle(ringInnerEv).transform;
        const rotIn = (m === 'none') ? 0 : ((Math.atan2(+m.split('(')[1].split(')')[0].split(',')[1], +m.split('(')[1].split(')')[0].split(',')[0]) * 180/Math.PI) + 360) % 360;
        barsEvIn.forEach(bar => {
            const bAng = (+bar.dataset.angle + rotIn) % 360;
            let diff = Math.abs(va - bAng);
            if (diff > 180) diff = 360 - diff;
            const span = 60;
            if (diff < span) {
                const p   = Math.pow(1 - diff/span, 2);
                const hA  = parseFloat(bar.style.getPropertyValue('--hA')) || 10;
                const hB  = parseFloat(bar.style.getPropertyValue('--hB')) || 40;
                const mid = (hA + hB) / 2;
                bar.style.height  = (mid * (1 + p * 1.5)) + 'px';
                bar.style.opacity = String(.55 + p * .45);
                bar.style.filter  = `brightness(${1 + p * 1.3})`;
                bar.dataset.hov   = '1';
            } else if (bar.dataset.hov === '1') {
                bar.style.height = bar.style.opacity = bar.style.filter = '';
                bar.dataset.hov = '0';
            }
        });
        requestAnimationFrame(loopEv);
    }
    requestAnimationFrame(loopEv);
});
// ─── 6a. KARAOKÉ — Chargement des chansons ──────────────────
function loadSongs(filter = "") {
    select.innerHTML = '<option value="">-- Choisissez une chanson --</option>';
    karaokeSongs.forEach((song, i) => {
        if ((song.titre + " " + song.artiste).toLowerCase().includes(filter.toLowerCase())) {
            const option = document.createElement("option");
            option.value = i;
            option.textContent = `${song.titre} – ${song.artiste}`;
            select.appendChild(option);
        }
    });
}

// ─── 6b. KARAOKÉ — Calcul intervalle BPM ────────────────────
function getIntervalFromBPM(bpm) {
    const msPerBeat = 60000 / bpm;
    // 1 ligne = 1 mesure de 4 temps
    // On multiplie par un facteur selon le tempo pour garder ~2.5-4s par ligne
    let measures;
    if (bpm >= 120)      measures = 1.5;   // rapide : 2 mesures
    else if (bpm >= 100) measures = 1.2; // medium-rapide
    else if (bpm >= 80)  measures = 0.9;   // medium
    else                 measures = 0.8;  // lent
    const interval = msPerBeat * 4 * measures;
    // Clamp entre 2000ms et 5000ms pour rester lisible
    return Math.max(2000, Math.min(5000, interval));
}

// ─── 6c. KARAOKÉ — Lancement ────────────────────────────────
function startKaraoke(index) {
    clearInterval(timer);

    if (!isPaused) {
        screen.innerHTML = "";
        currentIndex = 0;

        const song = karaokeSongs[index];
        lines = song.paroles.trim().split("\n");

        // Charger et lancer l'audio de fond
        if (song.audio) {
            bgAudio.src = song.audio;
            bgAudio.volume = parseFloat(volumeSlider.value);
            bgAudio.currentTime = 0;
            bgAudio.play().catch(() => {}); // catch si autoplay bloqué
        }

        // Show now playing
        nowPlayingDiv.classList.remove("hidden");
        nowPlayingTitle.textContent = song.titre;
        nowPlayingArtist.textContent = song.artiste;
        progressContainer.classList.remove("hidden");
        progressTotal.textContent = lines.length + " lignes";
        progressBar.style.width = "0%";
        progressCurrent.textContent = "Ligne 0";

        lines.forEach(line => {
            const div = document.createElement("div");
            div.className = "karaoke-line";
            div.textContent = line || "♪";
            screen.appendChild(div);
        });
    }

    const song = karaokeSongs[index];
    const interval = getIntervalFromBPM(song.bpm);

    // Highlight first line right away, then tick at each interval
    nextLine();
    timer = setInterval(nextLine, interval);
}

// ─── 6d. KARAOKÉ — Ligne suivante ───────────────────────────
let userScrolling = false;
let userScrollTimer = null;

screen.addEventListener("scroll", () => {
    userScrolling = true;
    clearTimeout(userScrollTimer);
    userScrollTimer = setTimeout(() => { userScrolling = false; }, 2000);
});

function nextLine() {
    const allLines = screen.querySelectorAll(".karaoke-line");

    allLines.forEach((l, i) => {
        l.classList.remove("active");
        if (i < currentIndex - 1) {
            l.style.opacity = "0.15";
            l.style.transform = "scale(0.93)";
            l.style.color = "";
            l.style.fontWeight = "";
            l.style.fontSize = "";
        } else {
            l.style.opacity = "0.4";
            l.style.transform = "scale(0.97)";
            l.style.color = "";
            l.style.fontWeight = "";
            l.style.fontSize = "";
        }
        l.style.transition = "all 0.5s ease";
    });

    if (currentIndex < allLines.length) {
        const currentLine = allLines[currentIndex];
        currentLine.classList.add("active");
        currentLine.style.color = "#3983F9";
        currentLine.style.fontWeight = "700";
        currentLine.style.fontSize = "1.25rem";
        currentLine.style.opacity = "1";
        currentLine.style.transform = "scale(1.06)";

        // Use getBoundingClientRect for accurate position relative to viewport
        if (!userScrolling) {
            const screenRect = screen.getBoundingClientRect();
            const lineRect = currentLine.getBoundingClientRect();

            // Position of line relative to the screen container
            const lineTopRelative = lineRect.top - screenRect.top;
            const lineBottomRelative = lineRect.bottom - screenRect.top;

            // Only scroll if line is outside the visible area of the box
            if (lineBottomRelative > screen.clientHeight || lineTopRelative < 0) {
                // Scroll so the active line sits near the top of the box
                screen.scrollTo({
                    top: screen.scrollTop + lineTopRelative - 20,
                    behavior: "smooth"
                });
            }
        }

        currentIndex++;
        const pct = Math.round((currentIndex / allLines.length) * 100);
        progressBar.style.width = pct + "%";
        progressCurrent.textContent = "Ligne " + currentIndex;
    } else {
        clearInterval(timer);
        karaokeBtn.innerHTML = '<i class="fas fa-play mr-2"></i>Play';
        progressBar.style.width = "100%";
        progressCurrent.textContent = "✓ Terminé";
        isPlaying = false;
        isPaused = false;
    }
}


// ─── 6e. KARAOKÉ — Évènements ───────────────────────────────
function setupEventListeners() {
    // Search input
    searchInput.addEventListener("input", e => {
        loadSongs(e.target.value);
    });

    // Karaoke button
    karaokeBtn.addEventListener("click", () => {
        if (select.value === "") {
            alert("Choisis une chanson d'abord !");
            return;
        }

        if (!isPlaying) {
            startKaraoke(parseInt(select.value));
            karaokeBtn.innerHTML = '<i class="fas fa-pause mr-2"></i>Pause';
            isPlaying = true;
            isPaused = false;
        } else {
            clearInterval(timer);
            bgAudio.pause();
            karaokeBtn.innerHTML = '<i class="fas fa-play mr-2"></i>Play';
            isPlaying = false;
            isPaused = true;
        }
    });

    // Reset button
    resetBtn.addEventListener("click", () => {
        clearInterval(timer);
        currentIndex = 0;
        isPlaying = false;
        isPaused = false;

        karaokeBtn.innerHTML = '<i class="fas fa-play mr-2"></i>Play';
        screen.scrollTo({ top: 0 });
        bgAudio.pause();
        bgAudio.currentTime = 0;
        progressBar.style.width = "0%";
        progressCurrent.textContent = "Ligne 0";

        // Reset visual state
        document.querySelectorAll(".karaoke-line").forEach(l => {
            l.classList.remove("active");
            l.style.opacity = "";
            l.style.transform = "";
            l.style.color = "";
            l.style.fontWeight = "";
            l.style.fontSize = "";
        });
    });
}

// ─── 6f. KARAOKÉ — Formulaire ───────────────────────────────
function setupForm() {
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // In a real application, you would send this to a server
            // For now, we'll just show a success message
            alert("Merci pour votre message ! Je vous répondrai dans les plus brefs délais.");
            contactForm.reset();
        });
    }
}
loadSongs();
setupEventListeners();
setupForm();

// ─── 7. SETUP DJ — Zones interactives face avant ────────────
const ddjZoneData = {
    'jog': {
        title: 'Jog Wheel',
        desc: 'Plateau tactile capacitif pour contrôler et ajuster la vitesse du morceau afin de le synchroniser.\nPermet également de voir le morceau qui joue sur le deck avec l\'écran.'
    },
    'pads': {
        title: 'Performance Pads',
        desc: '8 pads rétroéclairés RGB pour ajouter plus de créativité dans les mix et les rendres dynamique.\nHot Cues, PadFx, Beatloop, Beatjump, Keyshift, Sampler.'
    },
    'eq': {
        title: 'EQ 3 Bandes',
        desc: 'Égaliseur 3 bandes par canal (HI / MID / LOW) ou par stems (Instru/Vocal/Drums).\nPermet de rendre la transition plus fluide en intégrant progressivement la musique.'
    },
    'fader': {
        title: 'Faders',
        desc: '4 Channel faders pour régler le volume des decks.\n1 Crossfader central pour rendre les transitions fluides en fondu et pour le scratch.'
    },
    'fx': {
        title: 'Beat FX',
        desc: '14 effets pour un un max de créativité. Knobs pour ajuster l\'intensité de l\'effet et choisir les canaux. 3 boutons coloré pour choisir a quel stems les effets s\'applique.'
    },
    'stems': {
        title: 'Stems',
        desc: '3 boutons colorés pour séparer la musique en couches indépendantes :\n🔵 Bleu = Drums (percussions)\n🟢 Vert = Vocal\n🔴 Rouge = Instrumental\nPermet d\'isoler ou de couper chaque partie du morceau pour des transitions créatives.'
    },
    'pitch': {
        title: 'Pitch Fader',
        desc: 'Fader rectangulaire vertical pour ajuster précisément la vitesse (BPM) du morceau.\nMonter = accélérer, Descendre = ralentir.\nUtilisé pour aligner deux morceaux avant une transition et maintenir un BPM cohérent tout au long du mix.'
    },
    'browse': {
        title: 'Browse',
        desc: 'Encodeur rotatif pour naviguer dans la bibliothèque musicale.\nTourner = parcourir la liste de morceaux.\nAppuyer = charger le morceau sélectionné sur le deck.'
    },
    'deckswitch': {
        title: 'Deck Switch',
        desc: 'Bouton circulaire pour basculer entre deux decks sur le même côté :\nGauche : Deck 1 ↔ Deck 3\nDroite : Deck 2 ↔ Deck 4\nPermet de préparer un troisième ou quatrième morceau sans interrompre le mix.'
    },
    'colorfx': {
        title: 'Color FX',
        desc: 'Effets de couleur appliqués en temps réel par canal : Filter, Dub Echo, Noise, Pitch.\nUn knob par canal pour doser l\'intensité.\nIdéal pour créer de la tension avant un drop ou enrichir une transition.'
    },
    'micro': {
        title: 'Contrôle Micros',
        desc: 'Section de gestion des micros :\nVolume Micro 1 (XLR) et Micro 2 (Jack)\nEQ dédié Hi/Low\nTalk Over : baisse automatiquement le volume du mix quand on parle au micro.'
    },
    'masterbooth': {
        title: 'Master & Booth',
        desc: 'Master : knob de volume général envoyé sur les enceintes de la salle (sortie XLR/RCA).\nBooth : knob de volume indépendant pour le retour de scène du DJ (enceinte monitoring).\nPermet d\'ajuster le son de la salle et son propre retour séparément sans se gêner.'
    },
    'loop': {
        title: 'Boutons Boucle',
        desc: 'Boutons de gestion des boucles :\nAuto Loop : crée une boucle automatique sur 1, 2, 4 ou 8 temps d\'un seul clic.\nLoop In / Loop Out : définit manuellement les points de début et de fin de boucle.\nReloop : réactive la dernière boucle définie.\nUtile pour maintenir une partie du morceau en suspension pendant une transition ou créer des effets de répétition.'
    },
    'play': {
        title: 'Boutons Play',
        desc: 'Boutons de lecture et de repère :\nPlay/Pause : démarre ou met en pause le morceau sur le deck.\nCue : définit un point de repère et permet de revenir au début de la phrase musicale pour un lancement précis.\nSync : synchronise automatiquement le BPM et la phase du deck avec l\'autre deck pour une transition parfaite.'
    }
};

// ── Utilitaire : positionne le tooltip AU-DESSUS de la zone survolée ──
function placeTooltipAbove(tooltip, zone, container) {
    // On attend que le tooltip soit rendu pour connaître sa hauteur
    tooltip.style.visibility = 'hidden';
    tooltip.style.opacity = '1';
    requestAnimationFrame(function() {
        const zoneRect = zone.getBoundingClientRect();
        const contRect = container.getBoundingClientRect();
        const tipW = tooltip.offsetWidth;
        const tipH = tooltip.offsetHeight;

        // Centre horizontal de la zone dans le container
        let left = (zoneRect.left + zoneRect.width / 2) - contRect.left;
        // Au-dessus du bord supérieur de la zone, avec 10px de marge
        let top = (zoneRect.top - contRect.top) - tipH - 10;

        // Garder dans le container horizontalement
        left = Math.max(tipW / 2 + 4, Math.min(left, contRect.width - tipW / 2 - 4));
        // Si ça sort par le haut, afficher en dessous de la zone
        if (top < 4) {
            top = (zoneRect.bottom - contRect.top) + 10;
        }

        tooltip.style.left = left + 'px';
        tooltip.style.top = top + 'px';
        tooltip.style.transform = 'translateX(-50%)';
        tooltip.style.visibility = 'visible';
    });
}

function initDDJ() {
    const tooltip = document.getElementById('ddj-tooltip');
    const tooltipTitle = document.getElementById('ddj-tooltip-title');
    const tooltipDesc = document.getElementById('ddj-tooltip-desc');
    const container = document.getElementById('ddj-container');
    if (!tooltip || !container) return;

    const zones = document.querySelectorAll('.ddj-zone-img');
    let activeZoneKey = null;

    function highlightZones(key) {
        zones.forEach(z => {
            if (z.dataset.zone === key) {
                z.style.background = 'rgba(7,96,238,0.2)';
                z.style.borderColor = 'rgba(7,96,238,0.9)';
                z.style.boxShadow = '0 0 30px rgba(7,96,238,0.5), inset 0 0 20px rgba(7,96,238,0.1)';
            } else {
                z.style.background = 'rgba(7,96,238,0)';
                z.style.borderColor = 'rgba(7,96,238,0)';
                z.style.boxShadow = 'none';
            }
        });
    }

    function clearHighlight() {
        zones.forEach(z => {
            z.style.background = 'rgba(7,96,238,0)';
            z.style.borderColor = 'rgba(7,96,238,0)';
            z.style.boxShadow = 'none';
        });
        tooltip.style.opacity = '0';
        tooltip.style.visibility = 'hidden';
    }

    function updateLegendBtns(key) {
        document.querySelectorAll('.ddj-legend-btn').forEach(b => {
            const dot = b.querySelector('div');
            const label = b.querySelector('span');
            if (b.dataset.zone === key) {
                b.style.borderColor = 'rgba(7,96,238,0.9)';
                if (dot) dot.style.transform = 'scale(1.4)';
                if (label) label.style.color = '#3983F9';
            } else {
                b.style.borderColor = '';
                if (dot) dot.style.transform = '';
                if (label) label.style.color = '';
            }
        });
    }

    zones.forEach(zone => {
        zone.style.background = 'rgba(7,96,238,0)';
        zone.style.border = '2px solid rgba(7,96,238,0)';
        zone.style.transition = 'background 0.2s, border-color 0.2s, box-shadow 0.2s';

        zone.addEventListener('mouseenter', function() {
            if (activeZoneKey) return; // ne pas perturber la sélection active
            this.style.background = 'rgba(7,96,238,0.15)';
            this.style.borderColor = 'rgba(7,96,238,0.7)';
            this.style.boxShadow = '0 0 20px rgba(7,96,238,0.3), inset 0 0 20px rgba(7,96,238,0.1)';
            const data = ddjZoneData[this.dataset.zone];
            if (data) {
                tooltipTitle.textContent = data.title;
                tooltipDesc.textContent = data.desc;
                placeTooltipAbove(tooltip, this, container);
            }
        });

        zone.addEventListener('mouseleave', function() {
            if (activeZoneKey) return;
            this.style.background = 'rgba(7,96,238,0)';
            this.style.borderColor = 'rgba(7,96,238,0)';
            this.style.boxShadow = 'none';
            tooltip.style.opacity = '0';
            tooltip.style.visibility = 'hidden';
        });

        zone.addEventListener('click', function() {
            const key = this.dataset.zone;
            if (activeZoneKey === key) {
                activeZoneKey = null;
                clearHighlight();
                updateLegendBtns(null);
            } else {
                activeZoneKey = key;
                highlightZones(key);
                updateLegendBtns(key);
                const data = ddjZoneData[key];
                if (data) {
                    tooltipTitle.textContent = data.title;
                    tooltipDesc.textContent = data.desc;
                    placeTooltipAbove(tooltip, this, container);
                }
            }
        });
    });

    // Legend buttons — clic persistant, toggle sur le même bouton
    document.querySelectorAll('.ddj-legend-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const key = this.dataset.zone;
            if (activeZoneKey === key) {
                // Désactiver
                activeZoneKey = null;
                clearHighlight();
                updateLegendBtns(null);
            } else {
                // Activer la nouvelle zone
                activeZoneKey = key;
                highlightZones(key);
                updateLegendBtns(key);
                const data = ddjZoneData[key];
                if (data) {
                    tooltipTitle.textContent = data.title;
                    tooltipDesc.textContent = data.desc;
                    const firstZone = [...zones].find(z => z.dataset.zone === key);
                    if (firstZone) placeTooltipAbove(tooltip, firstZone, container);
                }
            }
        });
    });
}

window.highlightZone = function(key) {};  // kept for compat

// ─── 8. SETUP DJ — Face arrière (connectique) ───────────────
function initDDJRear() {
    const tooltip = document.getElementById('ddj-rear-tooltip');
    const tooltipTitle = document.getElementById('ddj-rear-tooltip-title');
    const tooltipDesc = document.getElementById('ddj-rear-tooltip-desc');
    const container = document.getElementById('ddj-rear-container');
    if (!tooltip || !container) return;

    const zones = container.querySelectorAll('.ddj-rear-zone');
    let activeZone = null;

    function activateZone(zone) {
        // Désactiver l'ancienne
        if (activeZone && activeZone !== zone) {
            activeZone.style.background = 'rgba(7,96,238,0)';
            activeZone.style.borderColor = 'rgba(7,96,238,0)';
            activeZone.style.boxShadow = 'none';
        }
        activeZone = zone;
        zone.style.background = 'rgba(7,96,238,0.22)';
        zone.style.borderColor = 'rgba(7,96,238,0.95)';
        zone.style.boxShadow = '0 0 28px rgba(7,96,238,0.5), inset 0 0 16px rgba(7,96,238,0.15)';
        tooltipTitle.textContent = zone.dataset.title;
        tooltipDesc.textContent = zone.dataset.desc;
        placeTooltipAbove(tooltip, zone, container);
    }

    function deactivate() {
        if (activeZone) {
            activeZone.style.background = 'rgba(7,96,238,0)';
            activeZone.style.borderColor = 'rgba(7,96,238,0)';
            activeZone.style.boxShadow = 'none';
            activeZone = null;
        }
        tooltip.style.opacity = '0';
        tooltip.style.visibility = 'hidden';
    }

    function updateLegendBtns(title) {
        document.querySelectorAll('.ddj-rear-legend-btn').forEach(b => {
            const dot = b.querySelector('div');
            const label = b.querySelector('span');
            if (b.dataset.zoneTitle === title) {
                b.style.borderColor = 'rgba(7,96,238,0.9)';
                if (dot) dot.style.transform = 'scale(1.4)';
                if (label) label.style.color = '#3983F9';
            } else {
                b.style.borderColor = '';
                if (dot) dot.style.transform = '';
                if (label) label.style.color = '';
            }
        });
    }

    zones.forEach(zone => {
        zone.style.background = 'rgba(7,96,238,0)';
        zone.style.border = '2px solid rgba(7,96,238,0)';
        zone.style.transition = 'background 0.2s, border-color 0.2s, box-shadow 0.2s';

        zone.addEventListener('mouseenter', function() {
            if (activeZone) return;
            this.style.background = 'rgba(7,96,238,0.18)';
            this.style.borderColor = 'rgba(7,96,238,0.75)';
            this.style.boxShadow = '0 0 18px rgba(7,96,238,0.35), inset 0 0 12px rgba(7,96,238,0.12)';
            tooltipTitle.textContent = this.dataset.title;
            tooltipDesc.textContent = this.dataset.desc;
            placeTooltipAbove(tooltip, this, container);
        });

        zone.addEventListener('mouseleave', function() {
            if (activeZone) return;
            this.style.background = 'rgba(7,96,238,0)';
            this.style.borderColor = 'rgba(7,96,238,0)';
            this.style.boxShadow = 'none';
            tooltip.style.opacity = '0';
            tooltip.style.visibility = 'hidden';
        });

        zone.addEventListener('click', function() {
            if (activeZone === this) {
                deactivate();
                updateLegendBtns(null);
            } else {
                activateZone(this);
                updateLegendBtns(this.dataset.title);
            }
        });
    });

    // Boutons légende arrière
    document.querySelectorAll('.ddj-rear-legend-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const title = this.dataset.zoneTitle;
            const matchZone = [...zones].find(z => z.dataset.title === title);
            if (!matchZone) return;
            if (activeZone === matchZone) {
                deactivate();
                updateLegendBtns(null);
            } else {
                activateZone(matchZone);
                updateLegendBtns(title);
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initDDJ();
    initDDJRear();
});
initDDJ();
initDDJRear();

// ─── Volume slider karaoké ───────────────────────────────────
volumeSlider.addEventListener("input", () => {
    bgAudio.volume = parseFloat(volumeSlider.value);
});

// ─── Désactiver le clic droit ────────────────────────────────
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
// ─── 9. RÉSEAUX SOCIAUX — Spotlight & tilt ──────────────────
const RADIUS = 300;

let mouseX = -9999, mouseY = -9999;

// Suivi global de la souris
document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  updateSpotlights();
  updateTilt(e);
});

// ── Spotlight + Tilt sur les .card du footer ──
function getFooterCards() {
  return Array.from(document.querySelectorAll('.card'));
}

function updateSpotlights() {
  getFooterCards().forEach(card => {
    const spotlight = card.querySelector('.spotlight');
    if (!spotlight) return;
    const color = card.dataset.color;
    const rect  = card.getBoundingClientRect();
    const x = mouseX - rect.left;
    const y = mouseY - rect.top;
    const dist = Math.hypot(mouseX - (rect.left + rect.width/2), mouseY - (rect.top + rect.height/2));
    if (dist < RADIUS + Math.max(rect.width, rect.height) / 2) {
      const intensity = Math.max(0, 1 - dist / (RADIUS * 1.1));
      const alpha1 = (0.30 * intensity).toFixed(3);
      const alpha2 = (0.10 * intensity).toFixed(3);
      spotlight.style.opacity = '1';
      spotlight.style.background = `radial-gradient(circle ${RADIUS}px at ${x}px ${y}px, rgba(${color},${alpha1}) 0%, rgba(${color},${alpha2}) 35%, transparent 70%)`;
    } else {
      spotlight.style.opacity = '0';
    }
  });
}

function updateTilt(e) {
  getFooterCards().forEach(card => {
    const rect = card.getBoundingClientRect();
    const inside = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
    if (inside) {
      const rotX = (((e.clientY - rect.top)  / rect.height) - 0.5) * -12;
      const rotY = (((e.clientX - rect.left) / rect.width)  - 0.5) *  12;
      card.style.transition = 'border-color 0.4s ease, box-shadow 0.4s ease';
      card.style.transform  = `translateY(-8px) scale(1.03) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    } else {
      card.style.transition = 'border-color 0.4s ease, box-shadow 0.4s ease, transform 0.5s cubic-bezier(.22,.68,0,1.2)';
      card.style.transform  = '';
    }
  });
}

document.addEventListener('mouseleave', () => {
  getFooterCards().forEach(card => {
    const sp = card.querySelector('.spotlight');
    if (sp) sp.style.opacity = '0';
    card.style.transform = '';
  });
});

// ─── 10. SECTION LIVE — Twitch embed ────────────────────────
(function() {
    const TWITCH_USER = 'djart4m';
    const navDesktop  = document.getElementById('nav-live-desktop');
    const navMobile   = document.getElementById('nav-live-mobile');
    const liveSection = document.getElementById('live');
    let embedPlayer   = null;
    let sdkLoaded     = false;

    function setLiveState(isLive) {
        if (isLive) {
            navDesktop.classList.remove('hidden');
            navMobile.classList.remove('hidden');
        } else {
            navDesktop.classList.add('hidden');
            navMobile.classList.add('hidden');
            if (liveSection.classList.contains('active')) {
                if (typeof showSection === 'function') showSection('home', null);
            }
        }
    }

    function initEmbed() {
        if (!window.Twitch || !window.Twitch.Embed) return;
        if (sdkLoaded) return;
        sdkLoaded = true;

        // Le SDK crée lui-même l'iframe dans le div cible
        embedPlayer = new window.Twitch.Embed('twitch-embed-player', {
            width:     '100%',
            height:    '100%',
            channel:    TWITCH_USER,
            layout:    'video',
            autoplay:   true,
            muted:      false,
            theme:      'dark',
            parent:    [window.location.hostname || 'localhost'],
        });

        // Events natifs du SDK — fiables et sans polling
        embedPlayer.addEventListener(window.Twitch.Embed.ONLINE,  function() {
            setLiveState(true);
        });
        embedPlayer.addEventListener(window.Twitch.Embed.OFFLINE, function() {
            setLiveState(false);
        });
    }

    // Charger le SDK Twitch officiel
    var script = document.createElement('script');
    script.src = 'https://embed.twitch.tv/embed/v1.js';
    script.onload  = initEmbed;
    script.onerror = function() { console.warn('Twitch SDK non disponible'); };
    document.head.appendChild(script);
})();

// ── Chat Twitch — injection dynamique avec le bon parent ──
(function() {
    var chatIframe = document.getElementById('twitch-chat-iframe');
    if (!chatIframe) return;
    var parent = window.location.hostname || 'localhost';
    chatIframe.src = 'https://www.twitch.tv/embed/djart4m/chat?parent=' + parent + '&darkpopout';
})();

// ─── 11. WAVEFORM — Hover centre vinyle ─────────────────────
(function() {
    const CENTER_TRIGGER_RADIUS = 38; // px — zone du vrai centre
    const waveformCenter = document.querySelector('.waveform-center');
    if (!waveformCenter) return;

    document.addEventListener('mousemove', function(e) {
        if (window.innerWidth <= 768) {
            waveformCenter.classList.remove('center-hovered');
            return;
        }
        const rect = waveformCenter.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dist = Math.hypot(e.clientX - cx, e.clientY - cy);
        if (dist <= CENTER_TRIGGER_RADIUS) {
            waveformCenter.classList.add('center-hovered');
        } else {
            waveformCenter.classList.remove('center-hovered');
        }
    });

    document.addEventListener('mouseleave', function() {
        waveformCenter.classList.remove('center-hovered');
    });
})();




// ─── Filtres & Carrousels ─────────────────────────────────────

// ===== FILTRES GRILLE DÉMO — Multi-sélection par Set =====
// Logique : OR à l'intérieur d'un groupe, AND entre groupes.
// Le bouton "Tous" dans le groupe style vide la sélection du groupe.
(function() {
var filterBtns = document.querySelectorAll('.demo-filter-btn');
var cards = document.querySelectorAll('.demo-card');

// Un Set par groupe — ensemble vide = pas de filtre actif pour ce groupe
var activeFilters = {
    style:    new Set(),
    contexte: new Set(),
    format:   new Set()
};

function applyFilters() {
    cards.forEach(function(card) {
        var tags = card.getAttribute('data-tags').split(',').map(function(t) { return t.trim(); });
        var show = true;

        // Pour chaque groupe : si le Set est non-vide, au moins un tag du groupe doit matcher (OR)
        ['style', 'contexte', 'format'].forEach(function(group) {
            var sel = activeFilters[group];
            if (sel.size === 0) return; // pas de filtre pour ce groupe
            var match = false;
            sel.forEach(function(f) {
                if (tags.indexOf(f) >= 0) match = true;
            });
            if (!match) show = false;
        });

        card.style.display = show ? '' : 'none';
    });
}

filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        var group  = btn.getAttribute('data-group');
        var filter = btn.getAttribute('data-filter');

        // Bouton "Tous" : vide le groupe style et réactive "Tous"
        if (filter === 'all') {
            activeFilters[group].clear();
            document.querySelectorAll('.demo-filter-btn[data-group="' + group + '"]').forEach(function(b) {
                b.classList.remove('active-filter');
            });
            btn.classList.add('active-filter');
            applyFilters();
            return;
        }

        // Désactiver "Tous" si présent dans ce groupe
        var allBtn = document.querySelector('.demo-filter-btn[data-group="' + group + '"][data-filter="all"]');
        if (allBtn) allBtn.classList.remove('active-filter');

        // Toggle : si déjà actif → retirer, sinon → ajouter
        if (activeFilters[group].has(filter)) {
            activeFilters[group].delete(filter);
            btn.classList.remove('active-filter');
            // Si le groupe est vide et c'est le groupe style → remettre "Tous"
            if (activeFilters[group].size === 0 && group === 'style' && allBtn) {
                allBtn.classList.add('active-filter');
            }
        } else {
            activeFilters[group].add(filter);
            btn.classList.add('active-filter');
        }

        applyFilters();
    });
});


})();

// ===== FONCTION GÉNÉRIQUE CARROUSEL =====
function initCarousel(cfg) {
var track   = document.getElementById(cfg.trackId);
var dotsBox = document.getElementById(cfg.dotsId);
var prevBtn = document.getElementById(cfg.prevId);
var nextBtn = document.getElementById(cfg.nextId);
var curEl   = document.getElementById(cfg.curId);
var totalEl = document.getElementById(cfg.totalId);

if (!track) return;

var slides  = Array.from(track.querySelectorAll('.' + cfg.slideClass));
var current = 0;

function buildDots() {
    if (!dotsBox) return;
    dotsBox.innerHTML = '';
    slides.forEach(function(_, i) {
        var d = document.createElement('button');
        d.style.cssText = 'width:' + (i===current?'20px':'8px') + ';height:8px;border-radius:999px;background:' + (i===current? cfg.color :'rgba(160,160,160,0.4)') + ';border:none;cursor:pointer;transition:all .3s;pointer-events:all;';
        d.addEventListener('click', function(){ goTo(i); });
        dotsBox.appendChild(d);
    });
}

function goTo(idx) {
    current = ((idx % slides.length) + slides.length) % slides.length;
    track.style.transform = 'translateX(-' + (current * 100) + '%)';
    if (curEl) curEl.textContent = current + 1;
    buildDots();
}

if (prevBtn) prevBtn.addEventListener('click', function(){ goTo(current - 1); });
if (nextBtn) nextBtn.addEventListener('click', function(){ goTo(current + 1); });

var tx = 0;
track.addEventListener('touchstart', function(e){ tx = e.touches[0].clientX; }, {passive:true});
track.addEventListener('touchend',   function(e){ var d = tx - e.changedTouches[0].clientX; if(Math.abs(d)>40) goTo(current + (d>0?1:-1)); }, {passive:true});

if (totalEl) totalEl.textContent = slides.length;
goTo(0);
}

// ===== CARROUSEL CHARTRETTES =====
initCarousel({
trackId: 'carouselTrack', dotsId: 'carouselDots',
prevId: 'carouselPrev',   nextId: 'carouselNext',
curId: 'carouselCurrent', totalId: 'carouselTotal',
slideClass: 'carousel-slide', color: '#ff453d'
});

// ===== CARROUSEL SHORTS =====
initCarousel({
trackId: 'shortsTrack', dotsId: 'shortsDots',
prevId: 'shortsPrevBtn', nextId: 'shortsNextBtn',
curId: 'shortsCurrent', totalId: 'shortsTotal',
slideClass: 'shorts-slide', color: '#E3F939'
});



// ─── 13c. DEMO GRID — SCROLL EN BOUCLE INFINIE (mobile) ─────
(function () {
    var grid = document.getElementById('demoGrid');
    if (!grid) return;

    var isJumping  = false;
    var cloneCount = 0;

    /* ── Vrai uniquement quand le layout mobile est actif ── */
    function isMobileLayout() {
        return window.innerWidth < 768;
    }

    /* ── Supprime tous les clones existants ── */
    function removeClones() {
        Array.from(grid.querySelectorAll('.demo-card-clone'))
            .forEach(function (el) { el.remove(); });
        cloneCount = 0;
    }

    /* ── Récupère les cartes réelles visibles (pas les clones) ── */
    function getRealCards() {
        return Array.from(
            grid.querySelectorAll('.demo-card:not(.demo-card-clone)')
        ).filter(function (c) { return c.style.display !== 'none'; });
    }

    /* ── Calcule le pas card-à-card (largeur + gap) ── */
    function getStep() {
        var style = getComputedStyle(grid);
        var gap   = parseFloat(style.columnGap || style.gap || '16') || 16;
        var cards = getRealCards();
        if (!cards.length) return 0;
        return cards[0].offsetWidth + gap;
    }

    /* ── Verrouille le grid (snap OFF, events ignorés) ── */
    function lockGrid() {
        isJumping = true;
        grid.classList.add('demo-jumping');
    }

    /* ── Déverrouille après 2 frames + 20 ms ── */
    function unlockGrid() {
        requestAnimationFrame(function () {
            requestAnimationFrame(function () {
                setTimeout(function () {
                    grid.classList.remove('demo-jumping');
                    isJumping = false;
                }, 20);
            });
        });
    }

    /* ── Saut sans flash ── */
    function doJump(newLeft) {
        lockGrid();
        grid.scrollLeft = newLeft;
        unlockGrid();
    }

    /* ── Construit les clones de début et de fin ── */
    function buildClones() {
        if (!isMobileLayout()) { removeClones(); return; }

        /* Verrouille dès le début : évite tout repaint intermédiaire
           et tout saut parasite pendant le rebuild */
        lockGrid();

        removeClones();

        var realCards = getRealCards();
        cloneCount    = realCards.length;
        if (cloneCount < 2) { unlockGrid(); return; }

        /* Clones de FIN */
        realCards.forEach(function (card) {
            var clone = card.cloneNode(true);
            clone.classList.add('demo-card-clone');
            clone.querySelectorAll('[id]').forEach(function (el) { el.removeAttribute('id'); });
            grid.appendChild(clone);
        });

        /* Clones de DÉBUT */
        var firstChild = grid.firstChild;
        realCards.forEach(function (card) {
            var clone = card.cloneNode(true);
            clone.classList.add('demo-card-clone');
            clone.querySelectorAll('[id]').forEach(function (el) { el.removeAttribute('id'); });
            grid.insertBefore(clone, firstChild);
        });


        /* #demoSlider a display:contents — grid.children[cloneCount] est ce wrapper
           invisible dont offsetLeft = 0, ce qui bloquait le scroll à gauche.
           On reset d'abord scrollLeft=0, puis on utilise getBoundingClientRect()
           sur la vraie première carte pour calculer sa position réelle dans le scroll,
           et on centre visuellement cette carte dans le viewport. */
        grid.scrollLeft = 0;
        requestAnimationFrame(function () {
            requestAnimationFrame(function () {
                var firstReal = getRealCards()[0];
                if (!firstReal) { unlockGrid(); return; }
                var cardW          = firstReal.offsetWidth;
                var cardScrollLeft = firstReal.getBoundingClientRect().left
                                     - grid.getBoundingClientRect().left;
                /* cardScrollLeft = distance de la carte depuis le bord gauche du scroll.
                   On soustrait la moitié de l'espace restant pour centrer. */
                grid.scrollLeft = cardScrollLeft - Math.max(0, (window.innerWidth - cardW) / 2);
                unlockGrid();
            });
        });
    }

    /* ── Recentre sur la 1re carte réelle (après saut infini) ── */
    function scrollToRealStart() {
        var firstReal = getRealCards()[0];
        if (!firstReal) return;
        var cardW          = firstReal.offsetWidth;
        var cardScrollLeft = firstReal.getBoundingClientRect().left
                             - grid.getBoundingClientRect().left
                             + grid.scrollLeft;
        doJump(cardScrollLeft - Math.max(0, (window.innerWidth - cardW) / 2));
    }

    /* ── Saut invisible aux extrémités ── */
    grid.addEventListener('scroll', function () {
        if (isJumping || cloneCount < 2 || !isMobileLayout()) return;

        var step     = getStep();
        if (!step) return;

        var s        = grid.scrollLeft;
        var sectionW = cloneCount * step;

        if (s >= sectionW * 2) {
            doJump(s - sectionW);
        } else if (s < step * 0.5) {
            doJump(s + sectionW);
        }
    }, { passive: true });

    /* ── Nettoie les clones au resize vers desktop ── */
    var resizeTimer;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            if (!isMobileLayout()) { removeClones(); }
            else { buildClones(); }
        }, 150);
    });

    /* ── Reconstruit à chaque changement de filtre ── */
    document.querySelectorAll('.demo-filter-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            if (!isMobileLayout()) return;
            /* Gèle visuellement le grid pendant le rebuild pour éviter le shake */
            grid.style.visibility = 'hidden';
            requestAnimationFrame(function () {
                buildClones();
                requestAnimationFrame(function () {
                    grid.style.visibility = '';
                });
            });
        });
    });

    /* ── Reconstruit quand la section demo devient active ── */
    var _origShow = window.showSection;
    window.showSection = function (id, ev) {
        _origShow && _origShow(id, ev);
        if (id === 'demo') { setTimeout(buildClones, 60); }
    };

    /* ── Init au chargement si démo déjà visible ── */
    setTimeout(function () {
        var demoSection = document.getElementById('demo');
        if (demoSection && !demoSection.classList.contains('hidden')) {
            buildClones();
        }
    }, 150);
})();

// ─── 14. ANIMATION NAVIGATION (GSAP) ────────────────────────

const navElement = document.getElementById("desktopNav");
if (navElement) {

const activeElement = document.createElement("div");
activeElement.classList.add("active-element");

const getOffsetLeft = (element) => {
  const elementRect = element.getBoundingClientRect();

  return (
elementRect.left -
navElement.getBoundingClientRect().left +
(elementRect.width - activeElement.offsetWidth) / 2
  );
};

navElement.appendChild(activeElement);

const activeButton = navElement.querySelector("ul li.active button");

document.fonts.ready.then(() => {
  gsap.set(activeElement, {
x: getOffsetLeft(activeButton),
  });
  gsap.to(activeElement, {
"--active-element-show": "1",
duration: 0.2,
  });
});

navElement.querySelectorAll("ul li button").forEach((button, index) => {
  button.addEventListener("click", () => {
const active = navElement.querySelector("ul li.active");
const oldIndex = [...active.parentElement.children].indexOf(active);

if (
  index === oldIndex ||
  navElement.classList.contains("before") ||
  navElement.classList.contains("after")
) {
  return;
}

const x = getOffsetLeft(button);
const direction = index > oldIndex ? "after" : "before";
const spacing = Math.abs(x - getOffsetLeft(active));

navElement.classList.add(direction);
active.classList.remove("active");
button.parentElement.classList.add("active");

gsap.set(activeElement, {
  rotateY: direction === "before" ? "180deg" : "0deg",
});

gsap.to(activeElement, {
  keyframes: [
{
  "--active-element-width": `${
    spacing > navElement.offsetWidth - 60
      ? navElement.offsetWidth - 60
      : spacing
  }px`,
  duration: 0.3,
  ease: "none",
  onStart: () => {
    createSVG(activeElement);

    gsap.to(activeElement, {
      "--active-element-opacity": 1,
      duration: 0.1,
    });
  },
},
{
  "--active-element-scale-x": "0",
  "--active-element-scale-y": ".25",
  "--active-element-width": "0px",
  duration: 0.3,
  onStart: () => {
    gsap.to(activeElement, {
      "--active-element-mask-position": "40%",
      duration: 0.5,
    });
    gsap.to(activeElement, {
      "--active-element-opacity": 0,
      delay: 0.45,
      duration: 0.25,
    });
  },
  onComplete: () => {
    activeElement.innerHTML = "";
    navElement.classList.remove("before", "after");
    activeElement.removeAttribute("style");
    gsap.set(activeElement, {
      x: getOffsetLeft(button),
      "--active-element-show": "1",
    });
  },
},
  ],
});

gsap.to(activeElement, {
  x,
  "--active-element-strike-x": "-50%",
  duration: 0.6,
  ease: "none",
});
  });
});

const createSVG = (element) => {
  element.innerHTML = `
<svg viewBox="0 0 116 5" preserveAspectRatio="none" class="beam">
  <path d="M0.5 2.5L113 0.534929C114.099 0.515738 115 1.40113 115 2.5C115 3.59887 114.099 4.48426 113 4.46507L0.5 2.5Z" fill="url(#gradient-beam)"/>
  <defs>
<linearGradient id="gradient-beam" x1="2" y1="2.5" x2="115" y2="2.5" gradientUnits="userSpaceOnUse">
  <stop stop-color="#6AAAFF"/>
  <stop offset="1" stop-color="white"/>
</linearGradient>
  </defs>
</svg>
<div class="strike">
  <svg viewBox="0 0 114 12" preserveAspectRatio="none">
<g fill="none" stroke="white" stroke-width="0.75" stroke-linecap="round">
  <path d="M113.5 6.5L109.068 8.9621C109.023 8.98721 108.974 9.00516 108.923 9.01531L106.889 9.42219C106.661 9.46776 106.432 9.35034 106.336 9.1388L104.045 4.0986C104.015 4.03362 104 3.96307 104 3.8917V2.12268C104 1.6898 103.487 1.46145 103.166 1.75103L99.2887 5.24019C99.1188 5.39305 98.867 5.41132 98.6768 5.28457L95.0699 2.87996C94.7881 2.69205 94.4049 2.83291 94.3118 3.15862L92.6148 9.09827C92.5483 9.33084 92.3249 9.48249 92.0843 9.45843L87.7087 9.02087C87.5752 9.00752 87.4419 9.04839 87.3389 9.13428L84.9485 11.1263C84.7128 11.3227 84.3575 11.2625 84.1996 10.9994L81.7602 6.93359C81.617 6.69492 81.3064 6.61913 81.0694 6.76501L75.3165 10.3052C75.1286 10.4209 74.8871 10.3997 74.7223 10.2531L70.6678 6.64917C70.5611 6.55429 70.5 6.41829 70.5 6.27547V1.20711C70.5 1.0745 70.4473 0.947322 70.3536 0.853553L70.2185 0.718508C70.0846 0.584592 69.8865 0.537831 69.7068 0.59772L69.2675 0.744166C68.9149 0.861705 68.8092 1.30924 69.0721 1.57206L69.605 2.10499C69.8157 2.31571 69.7965 2.66281 69.5638 2.84897L67.5 4.5L65.2715 6.28282C65.1083 6.41338 64.8811 6.42866 64.7019 6.32113L60.3621 3.71725C60.153 3.59179 59.8839 3.63546 59.7252 3.8206L57.0401 6.95327C57.0135 6.9843 56.9908 7.01849 56.9725 7.05505L55.2533 10.4934C55.1188 10.7624 54.779 10.8526 54.5287 10.6858L50.7686 8.17907C50.6051 8.07006 50.3929 8.06694 50.2263 8.17109L46.7094 10.3691C46.5774 10.4516 46.4145 10.468 46.2688 10.4133L42.6586 9.05949C42.5558 9.02091 42.4684 8.94951 42.4102 8.85633L40.1248 5.1997C40.0458 5.07323 40.0273 4.91808 40.0745 4.77659L40.6374 3.08777C40.7755 2.67359 40.3536 2.29381 39.9562 2.47447L35.5 4.5L32.2657 5.88613C32.1013 5.95658 31.9118 5.93386 31.7687 5.82656L30.1904 4.64279C30.0699 4.55245 29.9152 4.5212 29.7691 4.55772L26.2009 5.44977C26.0723 5.48193 25.9617 5.56388 25.8934 5.67759L23.1949 10.1752C23.0796 10.3673 22.8507 10.4593 22.6346 10.4003L17.6887 9.05148C17.5674 9.01838 17.463 8.94076 17.3963 8.83409L15.3331 5.53299C15.1627 5.26032 14.7829 5.21707 14.5556 5.44443L12.1464 7.85355C12.0527 7.94732 11.9255 8 11.7929 8H8.15139C8.05268 8 7.95617 7.97078 7.87404 7.91603L3.74143 5.16095C3.59214 5.06142 3.40096 5.04952 3.24047 5.12976L0.5 6.5" />
  <path d="M113.5 6.5L109.068 8.9621C109.023 8.98721 108.974 9.00516 108.923 9.01531L106.889 9.42219C106.661 9.46776 106.432 9.35034 106.336 9.1388L104.045 4.0986C104.015 4.03362 104 3.96307 104 3.8917V2.12268C104 1.6898 103.487 1.46145 103.166 1.75103L99.2887 5.24019C99.1188 5.39305 98.867 5.41132 98.6768 5.28457L95.0699 2.87996C94.7881 2.69205 94.4049 2.83291 94.3118 3.15862L92.6148 9.09827C92.5483 9.33084 92.3249 9.48249 92.0843 9.45843L87.7087 9.02087C87.5752 9.00752 87.4419 9.04839 87.3389 9.13428L84.9485 11.1263C84.7128 11.3227 84.3575 11.2625 84.1996 10.9994L81.7602 6.93359C81.617 6.69492 81.3064 6.61913 81.0694 6.76501L75.3165 10.3052C75.1286 10.4209 74.8871 10.3997 74.7223 10.2531L70.6678 6.64917C70.5611 6.55429 70.5 6.41829 70.5 6.27547V1.20711C70.5 1.0745 70.4473 0.947322 70.3536 0.853553L70.2185 0.718508C70.0846 0.584592 69.8865 0.537831 69.7068 0.59772L69.2675 0.744166C68.9149 0.861705 68.8092 1.30924 69.0721 1.57206L69.605 2.10499C69.8157 2.31571 69.7965 2.66281 69.5638 2.84897L67.5 4.5L65.2715 6.28282C65.1083 6.41338 64.8811 6.42866 64.7019 6.32113L60.3621 3.71725C60.153 3.59179 59.8839 3.63546 59.7252 3.8206L57.0401 6.95327C57.0135 6.9843 56.9908 7.01849 56.9725 7.05505L55.2533 10.4934C55.1188 10.7624 54.779 10.8526 54.5287 10.6858L50.7686 8.17907C50.6051 8.07006 50.3929 8.06694 50.2263 8.17109L46.7094 10.3691C46.5774 10.4516 46.4145 10.468 46.2688 10.4133L42.6586 9.05949C42.5558 9.02091 42.4684 8.94951 42.4102 8.85633L40.1248 5.1997C40.0458 5.07323 40.0273 4.91808 40.0745 4.77659L40.6374 3.08777C40.7755 2.67359 40.3536 2.29381 39.9562 2.47447L35.5 4.5L32.2657 5.88613C32.1013 5.95658 31.9118 5.93386 31.7687 5.82656L30.1904 4.64279C30.0699 4.55245 29.9152 4.5212 29.7691 4.55772L26.2009 5.44977C26.0723 5.48193 25.9617 5.56388 25.8934 5.67759L23.1949 10.1752C23.0796 10.3673 22.8507 10.4593 22.6346 10.4003L17.6887 9.05148C17.5674 9.01838 17.463 8.94076 17.3963 8.83409L15.3331 5.53299C15.1627 5.26032 14.7829 5.21707 14.5556 5.44443L12.1464 7.85355C12.0527 7.94732 11.9255 8 11.7929 8H8.15139C8.05268 8 7.95617 7.97078 7.87404 7.91603L3.74143 5.16095C3.59214 5.06142 3.40096 5.04952 3.24047 5.12976L0.5 6.5" />
  <path d="M113.5 6.5L109.068 8.9621C109.023 8.98721 108.974 9.00516 108.923 9.01531L106.889 9.42219C106.661 9.46776 106.432 9.35034 106.336 9.1388L104.045 4.0986C104.015 4.03362 104 3.96307 104 3.8917V2.12268C104 1.6898 103.487 1.46145 103.166 1.75103L99.2887 5.24019C99.1188 5.39305 98.867 5.41132 98.6768 5.28457L95.0699 2.87996C94.7881 2.69205 94.4049 2.83291 94.3118 3.15862L92.6148 9.09827C92.5483 9.33084 92.3249 9.48249 92.0843 9.45843L87.7087 9.02087C87.5752 9.00752 87.4419 9.04839 87.3389 9.13428L84.9485 11.1263C84.7128 11.3227 84.3575 11.2625 84.1996 10.9994L81.7602 6.93359C81.617 6.69492 81.3064 6.61913 81.0694 6.76501L75.3165 10.3052C75.1286 10.4209 74.8871 10.3997 74.7223 10.2531L70.6678 6.64917C70.5611 6.55429 70.5 6.41829 70.5 6.27547V1.20711C70.5 1.0745 70.4473 0.947322 70.3536 0.853553L70.2185 0.718508C70.0846 0.584592 69.8865 0.537831 69.7068 0.59772L69.2675 0.744166C68.9149 0.861705 68.8092 1.30924 69.0721 1.57206L69.605 2.10499C69.8157 2.31571 69.7965 2.66281 69.5638 2.84897L67.5 4.5L65.2715 6.28282C65.1083 6.41338 64.8811 6.42866 64.7019 6.32113L60.3621 3.71725C60.153 3.59179 59.8839 3.63546 59.7252 3.8206L57.0401 6.95327C57.0135 6.9843 56.9908 7.01849 56.9725 7.05505L55.2533 10.4934C55.1188 10.7624 54.779 10.8526 54.5287 10.6858L50.7686 8.17907C50.6051 8.07006 50.3929 8.06694 50.2263 8.17109L46.7094 10.3691C46.5774 10.4516 46.4145 10.468 46.2688 10.4133L42.6586 9.05949C42.5558 9.02091 42.4684 8.94951 42.4102 8.85633L40.1248 5.1997C40.0458 5.07323 40.0273 4.91808 40.0745 4.77659L40.6374 3.08777C40.7755 2.67359 40.3536 2.29381 39.9562 2.47447L35.5 4.5L32.2657 5.88613C32.1013 5.95658 31.9118 5.93386 31.7687 5.82656L30.1904 4.64279C30.0699 4.55245 29.9152 4.5212 29.7691 4.55772L26.2009 5.44977C26.0723 5.48193 25.9617 5.56388 25.8934 5.67759L23.1949 10.1752C23.0796 10.3673 22.8507 10.4593 22.6346 10.4003L17.6887 9.05148C17.5674 9.01838 17.463 8.94076 17.3963 8.83409L15.3331 5.53299C15.1627 5.26032 14.7829 5.21707 14.5556 5.44443L12.1464 7.85355C12.0527 7.94732 11.9255 8 11.7929 8H8.15139C8.05268 8 7.95617 7.97078 7.87404 7.91603L3.74143 5.16095C3.59214 5.06142 3.40096 5.04952 3.24047 5.12976L0.5 6.5" />
</g>
  </svg>
  <svg viewBox="0 0 114 12" preserveAspectRatio="none">
<g fill="none" stroke="white" stroke-width="0.75" stroke-linecap="round">
  <path d="M113.5 6.5L109.068 8.9621C109.023 8.98721 108.974 9.00516 108.923 9.01531L106.889 9.42219C106.661 9.46776 106.432 9.35034 106.336 9.1388L104.045 4.0986C104.015 4.03362 104 3.96307 104 3.8917V2.12268C104 1.6898 103.487 1.46145 103.166 1.75103L99.2887 5.24019C99.1188 5.39305 98.867 5.41132 98.6768 5.28457L95.0699 2.87996C94.7881 2.69205 94.4049 2.83291 94.3118 3.15862L92.6148 9.09827C92.5483 9.33084 92.3249 9.48249 92.0843 9.45843L87.7087 9.02087C87.5752 9.00752 87.4419 9.04839 87.3389 9.13428L84.9485 11.1263C84.7128 11.3227 84.3575 11.2625 84.1996 10.9994L81.7602 6.93359C81.617 6.69492 81.3064 6.61913 81.0694 6.76501L75.3165 10.3052C75.1286 10.4209 74.8871 10.3997 74.7223 10.2531L70.6678 6.64917C70.5611 6.55429 70.5 6.41829 70.5 6.27547V1.20711C70.5 1.0745 70.4473 0.947322 70.3536 0.853553L70.2185 0.718508C70.0846 0.584592 69.8865 0.537831 69.7068 0.59772L69.2675 0.744166C68.9149 0.861705 68.8092 1.30924 69.0721 1.57206L69.605 2.10499C69.8157 2.31571 69.7965 2.66281 69.5638 2.84897L67.5 4.5L65.2715 6.28282C65.1083 6.41338 64.8811 6.42866 64.7019 6.32113L60.3621 3.71725C60.153 3.59179 59.8839 3.63546 59.7252 3.8206L57.0401 6.95327C57.0135 6.9843 56.9908 7.01849 56.9725 7.05505L55.2533 10.4934C55.1188 10.7624 54.779 10.8526 54.5287 10.6858L50.7686 8.17907C50.6051 8.07006 50.3929 8.06694 50.2263 8.17109L46.7094 10.3691C46.5774 10.4516 46.4145 10.468 46.2688 10.4133L42.6586 9.05949C42.5558 9.02091 42.4684 8.94951 42.4102 8.85633L40.1248 5.1997C40.0458 5.07323 40.0273 4.91808 40.0745 4.77659L40.6374 3.08777C40.7755 2.67359 40.3536 2.29381 39.9562 2.47447L35.5 4.5L32.2657 5.88613C32.1013 5.95658 31.9118 5.93386 31.7687 5.82656L30.1904 4.64279C30.0699 4.55245 29.9152 4.5212 29.7691 4.55772L26.2009 5.44977C26.0723 5.48193 25.9617 5.56388 25.8934 5.67759L23.1949 10.1752C23.0796 10.3673 22.8507 10.4593 22.6346 10.4003L17.6887 9.05148C17.5674 9.01838 17.463 8.94076 17.3963 8.83409L15.3331 5.53299C15.1627 5.26032 14.7829 5.21707 14.5556 5.44443L12.1464 7.85355C12.0527 7.94732 11.9255 8 11.7929 8H8.15139C8.05268 8 7.95617 7.97078 7.87404 7.91603L3.74143 5.16095C3.59214 5.06142 3.40096 5.04952 3.24047 5.12976L0.5 6.5" />
  <path d="M113.5 6.5L109.068 8.9621C109.023 8.98721 108.974 9.00516 108.923 9.01531L106.889 9.42219C106.661 9.46776 106.432 9.35034 106.336 9.1388L104.045 4.0986C104.015 4.03362 104 3.96307 104 3.8917V2.12268C104 1.6898 103.487 1.46145 103.166 1.75103L99.2887 5.24019C99.1188 5.39305 98.867 5.41132 98.6768 5.28457L95.0699 2.87996C94.7881 2.69205 94.4049 2.83291 94.3118 3.15862L92.6148 9.09827C92.5483 9.33084 92.3249 9.48249 92.0843 9.45843L87.7087 9.02087C87.5752 9.00752 87.4419 9.04839 87.3389 9.13428L84.9485 11.1263C84.7128 11.3227 84.3575 11.2625 84.1996 10.9994L81.7602 6.93359C81.617 6.69492 81.3064 6.61913 81.0694 6.76501L75.3165 10.3052C75.1286 10.4209 74.8871 10.3997 74.7223 10.2531L70.6678 6.64917C70.5611 6.55429 70.5 6.41829 70.5 6.27547V1.20711C70.5 1.0745 70.4473 0.947322 70.3536 0.853553L70.2185 0.718508C70.0846 0.584592 69.8865 0.537831 69.7068 0.59772L69.2675 0.744166C68.9149 0.861705 68.8092 1.30924 69.0721 1.57206L69.605 2.10499C69.8157 2.31571 69.7965 2.66281 69.5638 2.84897L67.5 4.5L65.2715 6.28282C65.1083 6.41338 64.8811 6.42866 64.7019 6.32113L60.3621 3.71725C60.153 3.59179 59.8839 3.63546 59.7252 3.8206L57.0401 6.95327C57.0135 6.9843 56.9908 7.01849 56.9725 7.05505L55.2533 10.4934C55.1188 10.7624 54.779 10.8526 54.5287 10.6858L50.7686 8.17907C50.6051 8.07006 50.3929 8.06694 50.2263 8.17109L46.7094 10.3691C46.5774 10.4516 46.4145 10.468 46.2688 10.4133L42.6586 9.05949C42.5558 9.02091 42.4684 8.94951 42.4102 8.85633L40.1248 5.1997C40.0458 5.07323 40.0273 4.91808 40.0745 4.77659L40.6374 3.08777C40.7755 2.67359 40.3536 2.29381 39.9562 2.47447L35.5 4.5L32.2657 5.88613C32.1013 5.95658 31.9118 5.93386 31.7687 5.82656L30.1904 4.64279C30.0699 4.55245 29.9152 4.5212 29.7691 4.55772L26.2009 5.44977C26.0723 5.48193 25.9617 5.56388 25.8934 5.67759L23.1949 10.1752C23.0796 10.3673 22.8507 10.4593 22.6346 10.4003L17.6887 9.05148C17.5674 9.01838 17.463 8.94076 17.3963 8.83409L15.3331 5.53299C15.1627 5.26032 14.7829 5.21707 14.5556 5.44443L12.1464 7.85355C12.0527 7.94732 11.9255 8 11.7929 8H8.15139C8.05268 8 7.95617 7.97078 7.87404 7.91603L3.74143 5.16095C3.59214 5.06142 3.40096 5.04952 3.24047 5.12976L0.5 6.5" />
  <path d="M113.5 6.5L109.068 8.9621C109.023 8.98721 108.974 9.00516 108.923 9.01531L106.889 9.42219C106.661 9.46776 106.432 9.35034 106.336 9.1388L104.045 4.0986C104.015 4.03362 104 3.96307 104 3.8917V2.12268C104 1.6898 103.487 1.46145 103.166 1.75103L99.2887 5.24019C99.1188 5.39305 98.867 5.41132 98.6768 5.28457L95.0699 2.87996C94.7881 2.69205 94.4049 2.83291 94.3118 3.15862L92.6148 9.09827C92.5483 9.33084 92.3249 9.48249 92.0843 9.45843L87.7087 9.02087C87.5752 9.00752 87.4419 9.04839 87.3389 9.13428L84.9485 11.1263C84.7128 11.3227 84.3575 11.2625 84.1996 10.9994L81.7602 6.93359C81.617 6.69492 81.3064 6.61913 81.0694 6.76501L75.3165 10.3052C75.1286 10.4209 74.8871 10.3997 74.7223 10.2531L70.6678 6.64917C70.5611 6.55429 70.5 6.41829 70.5 6.27547V1.20711C70.5 1.0745 70.4473 0.947322 70.3536 0.853553L70.2185 0.718508C70.0846 0.584592 69.8865 0.537831 69.7068 0.59772L69.2675 0.744166C68.9149 0.861705 68.8092 1.30924 69.0721 1.57206L69.605 2.10499C69.8157 2.31571 69.7965 2.66281 69.5638 2.84897L67.5 4.5L65.2715 6.28282C65.1083 6.41338 64.8811 6.42866 64.7019 6.32113L60.3621 3.71725C60.153 3.59179 59.8839 3.63546 59.7252 3.8206L57.0401 6.95327C57.0135 6.9843 56.9908 7.01849 56.9725 7.05505L55.2533 10.4934C55.1188 10.7624 54.779 10.8526 54.5287 10.6858L50.7686 8.17907C50.6051 8.07006 50.3929 8.06694 50.2263 8.17109L46.7094 10.3691C46.5774 10.4516 46.4145 10.468 46.2688 10.4133L42.6586 9.05949C42.5558 9.02091 42.4684 8.94951 42.4102 8.85633L40.1248 5.1997C40.0458 5.07323 40.0273 4.91808 40.0745 4.77659L40.6374 3.08777C40.7755 2.67359 40.3536 2.29381 39.9562 2.47447L35.5 4.5L32.2657 5.88613C32.1013 5.95658 31.9118 5.93386 31.7687 5.82656L30.1904 4.64279C30.0699 4.55245 29.9152 4.5212 29.7691 4.55772L26.2009 5.44977C26.0723 5.48193 25.9617 5.56388 25.8934 5.67759L23.1949 10.1752C23.0796 10.3673 22.8507 10.4593 22.6346 10.4003L17.6887 9.05148C17.5674 9.01838 17.463 8.94076 17.3963 8.83409L15.3331 5.53299C15.1627 5.26032 14.7829 5.21707 14.5556 5.44443L12.1464 7.85355C12.0527 7.94732 11.9255 8 11.7929 8H8.15139C8.05268 8 7.95617 7.97078 7.87404 7.91603L3.74143 5.16095C3.59214 5.06142 3.40096 5.04952 3.24047 5.12976L0.5 6.5" />
</g>
  </svg>
</div>
  `;
};


// Sync active li when section changes via showSection
const _origShowSection = window.showSection;
window.showSection = function(id, event) {
_origShowSection && _origShowSection(id, event);
// Update active li
const lis = navElement.querySelectorAll('ul li');
lis.forEach(li => li.classList.remove('active'));
const target = navElement.querySelector('ul li[data-section="' + id + '"]');
if (target) {
target.classList.add('active');
const btn = target.querySelector('button');
if (btn) {
    const x = getOffsetLeft(btn);
    gsap.to(activeElement, { x, duration: 0.3, ease: 'power2.out' });
}
}
};

} // end if (navElement)

// ─── 15. SECTION EVENT — lecture vidéo de fond + masquer navbar ──
(function () {
    const _prev = window.showSection;
    window.showSection = function (id, ev) {
        _prev && _prev(id, ev);
        const nav = document.querySelector('nav');
        const vid = document.getElementById('eventBgVideo');
        // setTimeout pour s'assurer que tous les wrappers ont fini
        setTimeout(function () {
            if (id === 'event') {
                if (nav) nav.style.setProperty('display', 'none', 'important');
            } else {
                if (nav) nav.style.removeProperty('display');
            }
        }, 0);
        if (id === 'event') {
            if (vid) vid.play().catch(() => {});
        } else {
            if (vid) vid.pause();
        }
    };
})();
/* ============================================================
   LAZY VIDEO — charge l'iframe au clic (onclick inline)
   ============================================================ */
function loadLazyVideo(wrapper) {
    var src = wrapper.dataset.src;
    if (!src) return;
    // Supprime le placeholder
    var ph = wrapper.querySelector('.lazy-placeholder');
    if (ph) {
        ph.style.transition = 'opacity 0.25s ease';
        ph.style.opacity = '0';
        setTimeout(function () { if (ph.parentNode) ph.parentNode.removeChild(ph); }, 260);
    }
    // Injecte l'iframe
    var iframe = document.createElement('iframe');
    iframe.src = src;
    iframe.allow = 'autoplay';
    iframe.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:none;z-index:2;';
    wrapper.appendChild(iframe);
    // Désactive le clic une fois lancé
    wrapper.style.cursor = 'default';
    wrapper.removeAttribute('onclick');
}

/* ============================================================
   BLIND TEST — Deezer Widget · pochette masquée par overlay CSS
   ============================================================
   Pour ajouter un titre, ajoute un objet dans BT_SONGS :
   {
     label  : "Titre — Artiste",   ← affiché comme réponse et dans les choix
     id     : "1234567890",        ← ID numérique Deezer de la track
                                      (visible dans l'URL : deezer.com/fr/track/XXXXXXXX)
     genre  : "electro",           ← sert à choisir des faux choix similaires
                                      utilise le même mot pour les morceaux du même style
   }
   Genres suggérés (libre à toi) : "electro", "house", "urbain", "latino", "ambiance", "80s"
   ── Minimum 4 titres au total pour que le quiz fonctionne ──
   ============================================================ */

// ── BASE DE TITRES — chargée dynamiquement depuis blindtest.xlsx ──
var BT_SONGS = []; // sera rempli par btLoadSongsFromXLSX()

/* ──────────────────────────────────────────────────────────────────
   Chargement du fichier Excel blindtest.xlsx via SheetJS (CDN).
   Le fichier doit être placé à la racine du site, au même niveau
   que index.html.
   Colonnes attendues : Titre | Artiste | ID Deezer | Genre
   ────────────────────────────────────────────────────────────────── */
function btLoadSongsFromXLSX(callback) {
    if (typeof XLSX === 'undefined') {
        console.error('[BlindTest] SheetJS non disponible. Vérifie le script CDN dans index.html.');
        callback([]);
        return;
    }

    fetch('blindtest.xlsx')
        .then(function(r) {
            if (!r.ok) throw new Error('Fichier blindtest.xlsx introuvable (HTTP ' + r.status + ')');
            return r.arrayBuffer();
        })
        .then(function(buffer) {
            var wb   = XLSX.read(buffer, { type: 'array' });
            var ws   = wb.Sheets[wb.SheetNames[0]];
            var rows = XLSX.utils.sheet_to_json(ws, { defval: '' });

            var songs = [];
            rows.forEach(function(row) {
                var titre   = (row['Titre']     || '').toString().trim();
                var artiste = (row['Artiste']   || '').toString().trim();
                var id      = (row['ID Deezer'] || '').toString().trim();
                var genre   = (row['Genre']     || 'autre').toString().trim().toLowerCase();

                if (titre && artiste && id) {
                    songs.push({
                        label: titre + ' — ' + artiste,
                        id:    id,
                        genre: genre
                    });
                }
            });

            if (songs.length < 4) {
                console.warn('[BlindTest] Moins de 4 titres valides dans blindtest.xlsx (' + songs.length + ' trouvés).');
            }

            callback(songs);
        })
        .catch(function(err) {
            console.error('[BlindTest] Erreur chargement Excel :', err.message);
            callback([]);
        });
}

// Nombre de cartes par partie (session complète)
var BT_CARDS_COUNT = 5;

// État session : liste des picks et index courant
var btPicks = [];
var btCurrentIdx = 0;

// Démarrage fixe de chaque extrait (en secondes)
var BT_START_SEC = 20;

// Score (global pour être accessible partout)
var btScoreCorrect = 0;
var btScoreTotal   = 0;

// ─── Utilitaires ──────────────────────────────────────────────

function btEscHtml(s) {
    return (s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function btShuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
}

function btUpdateScore() {
    var el1 = document.getElementById('bt-score-correct');
    var el2 = document.getElementById('bt-score-total');
    if (el1) el1.textContent = btScoreCorrect;
    if (el2) el2.textContent = BT_CARDS_COUNT;
}

// ─── Mode de jeu : 'qcm' ou 'libre' ──────────────────────────
var BT_MODE = 'qcm';

function btSetMode(mode) {
    BT_MODE = mode;
    var btnQcm   = document.getElementById('bt-mode-qcm');
    var btnLibre = document.getElementById('bt-mode-libre');
    if (btnQcm && btnLibre) {
        if (mode === 'qcm') {
            btnQcm.style.background   = 'rgba(57,131,249,0.25)';
            btnQcm.style.borderColor  = '#3983F9';
            btnQcm.style.color        = '#3983F9';
            btnLibre.style.background = 'rgba(255,255,255,0.04)';
            btnLibre.style.borderColor= 'rgba(255,255,255,0.15)';
            btnLibre.style.color      = '#A0A0A0';
        } else {
            btnLibre.style.background  = 'rgba(57,131,249,0.25)';
            btnLibre.style.borderColor = '#3983F9';
            btnLibre.style.color       = '#3983F9';
            btnQcm.style.background    = 'rgba(255,255,255,0.04)';
            btnQcm.style.borderColor   = 'rgba(255,255,255,0.15)';
            btnQcm.style.color         = '#A0A0A0';
        }
    }
    btGenerate();
}

// ─── Sélection des titres ──────────────────────────────────────

function btPickRandom(n) {
    return btShuffle(BT_SONGS).slice(0, Math.min(n, BT_SONGS.length));
}

function btWrongChoices(correctSong) {
    var same  = BT_SONGS.filter(function(s){ return s.label !== correctSong.label && s.genre === correctSong.genre; });
    var other = BT_SONGS.filter(function(s){ return s.label !== correctSong.label && s.genre !== correctSong.genre; });
    return btShuffle(same).concat(btShuffle(other)).slice(0, 3).map(function(s){ return s.label; });
}

function btBuildSrc(song) {
    // Widget Deezer en mode sombre, autoplay désactivé
    return 'https://widget.deezer.com/widget/dark/track/' + song.id
        + '?autoplay=false&tracklist=false';
}

// ─── Construction d'une carte ─────────────────────────────────

function btBuildCard(song, cardIdx) {
    var wrongs  = btWrongChoices(song);
    var choices = btShuffle([song.label].concat(wrongs));
    var correct = choices.indexOf(song.label);

    var choiceBtns = choices.map(function(c, i){
        return '<button class="bt-choice-btn w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium"'
            + ' style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.12);color:#F3F2F2;cursor:pointer;"'
            + ' onclick="btAnswer(this,' + i + ')">'
            + btEscHtml(c)
            + '</button>';
    }).join('');

    return '<div class="bt-card glass-card rounded-3xl p-5 flex flex-col gap-4"'
        + ' data-correct="' + correct + '"'
        + ' data-answer="' + btEscHtml(song.label) + '"'
        + ' data-answered="0">'

        + '<div class="flex items-center justify-between gap-3">'
        +   '<div class="flex items-center gap-3">'
        +     '<div class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style="background:linear-gradient(135deg,#a238ff,#7c1fff);"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="16" height="16"><path d="M18.81 11.05c-.42 0-.82.1-1.17.28C17.3 9.3 15.6 8 13.6 8c-.42 0-.83.07-1.2.2V16h7.6c1.1 0 2-.9 2-2s-.9-1.95-2-1.95h-.19zM3 14c0 1.1.9 2 2 2h1v-4H5c-1.1 0-2 .9-2 2zm3 2h1.5v-4H6v4zm2 0h1.5v-6H8v6zm2 0h1.5V9H10v7z"/></svg></div>'
        +     '<div>'
        +       '<p class="font-heading font-bold text-secondary">Blind Test #' + (cardIdx+1) + '</p>'
        +       '<p class="text-gray text-xs">Audio · Trouve le titre</p>'
        +     '</div>'
        +   '</div>'
        +   '<span class="bt-badge px-2 py-1 rounded-full text-xs font-bold" style="background:rgba(162,56,255,0.15);border:1px solid rgba(162,56,255,0.4);color:#c97bff;">?</span>'
        + '</div>'

        + '<div class="bt-player-wrap relative rounded-2xl overflow-hidden" style="height:80px;background:#0a0a0a;cursor:pointer;" onclick="btLoadPlayer(this)"'
        +   ' data-src="' + btEscHtml(btBuildSrc(song)) + '">'
        +   '<div class="bt-player-placeholder absolute inset-0 flex flex-col items-center justify-center gap-3" style="background:linear-gradient(135deg,#0d0020,#1a0040);">'
        +     '<div class="w-16 h-16 rounded-full flex items-center justify-center" style="background:rgba(162,56,255,0.15);border:2px solid rgba(162,56,255,0.5);">'
        +       '<i class="fas fa-play text-xl ml-1" style="color:#c97bff;"></i>'
        +     '</div>'
        +     '<span class="text-gray text-sm">Cliquer pour écouter</span>'
        +   '</div>'
        +   '<div class="bt-player-frame absolute inset-0 hidden" style="position:relative;">'
        +     '<!-- overlay qui masque la pochette et le titre Deezer (partie gauche du widget) -->'
        +     '<div style="position:absolute;top:0;left:0;width:72px;height:100%;background:#111;z-index:10;border-radius:4px 0 0 4px;"></div>'
        +   '</div>'
        + '</div>'

        + '<div class="bt-choices grid grid-cols-2 gap-2">' + choiceBtns + '</div>'
        + '<div class="bt-feedback hidden rounded-xl px-4 py-3 text-sm font-semibold text-center"></div>'
        + '<button class="bt-reveal-btn text-gray text-xs underline opacity-60 hover:opacity-100 transition-opacity self-center" onclick="btReveal(this)">'
        +   '<i class="fas fa-eye mr-1"></i>Révéler la réponse'
        + '</button>'
        + '<button class="bt-next-btn hidden w-full py-3 rounded-2xl font-bold text-sm" style="background:rgba(57,131,249,0.18);border:1px solid rgba(57,131,249,0.45);color:#93c5fd;cursor:pointer;" onclick="btNextCard()">'
        +   '<i class="fas fa-arrow-right mr-2"></i>' + (cardIdx + 1 < BT_CARDS_COUNT ? 'Question suivante (' + (cardIdx + 2) + '/' + BT_CARDS_COUNT + ')' : 'Voir le score final')
        + '</button>'
    + '</div>';
}

// ─── Construction d'une carte mode Saisie Libre ───────────────

function btNormalize(s) {
    return (s || '').toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]/g, '');
}

function btBuildCardLibre(song, cardIdx) {
    var parts = song.label.split(' — ');
    var titre   = parts[0] || '';
    var artiste = parts[1] || '';

    return '<div class="bt-card glass-card rounded-3xl p-5 flex flex-col gap-4"'
        + ' data-titre="'   + btEscHtml(btNormalize(titre))   + '"'
        + ' data-artiste="' + btEscHtml(btNormalize(artiste)) + '"'
        + ' data-answer="'  + btEscHtml(song.label) + '"'
        + ' data-answered="0">'

        + '<div class="flex items-center justify-between gap-3">'
        +   '<div class="flex items-center gap-3">'
        +     '<div class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style="background:linear-gradient(135deg,#a238ff,#7c1fff);"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="16" height="16"><path d="M18.81 11.05c-.42 0-.82.1-1.17.28C17.3 9.3 15.6 8 13.6 8c-.42 0-.83.07-1.2.2V16h7.6c1.1 0 2-.9 2-2s-.9-1.95-2-1.95h-.19zM3 14c0 1.1.9 2 2 2h1v-4H5c-1.1 0-2 .9-2 2zm3 2h1.5v-4H6v4zm2 0h1.5v-6H8v6zm2 0h1.5V9H10v7z"/></svg></div>'
        +     '<div>'
        +       '<p class="font-heading font-bold text-secondary">Blind Test #' + (cardIdx+1) + '</p>'
        +       '<p class="text-gray text-xs">Audio · Saisis le titre et l\'artiste</p>'
        +     '</div>'
        +   '</div>'
        +   '<span class="bt-badge px-2 py-1 rounded-full text-xs font-bold" style="background:rgba(162,56,255,0.15);border:1px solid rgba(162,56,255,0.4);color:#c97bff;">?</span>'
        + '</div>'

        + '<div class="bt-player-wrap relative rounded-2xl overflow-hidden" style="height:80px;background:#0a0a0a;cursor:pointer;" onclick="btLoadPlayer(this)"'
        +   ' data-src="' + btEscHtml(btBuildSrc(song)) + '">'
        +   '<div class="bt-player-placeholder absolute inset-0 flex flex-col items-center justify-center gap-3" style="background:linear-gradient(135deg,#0d0020,#1a0040);">'
        +     '<div class="w-16 h-16 rounded-full flex items-center justify-center" style="background:rgba(162,56,255,0.15);border:2px solid rgba(162,56,255,0.5);">'
        +       '<i class="fas fa-play text-xl ml-1" style="color:#c97bff;"></i>'
        +     '</div>'
        +     '<span class="text-gray text-sm">Cliquer pour écouter</span>'
        +   '</div>'
        +   '<div class="bt-player-frame absolute inset-0 hidden" style="position:relative;">'
        +     '<div style="position:absolute;top:0;left:0;width:72px;height:100%;background:#111;z-index:10;border-radius:4px 0 0 4px;"></div>'
        +   '</div>'
        + '</div>'

        + '<div class="flex flex-col gap-3">'
        +   '<div class="flex flex-col gap-1">'
        +     '<label class="text-gray text-xs font-semibold uppercase tracking-wider">Titre</label>'
        +     '<input id="bt-input-titre-' + cardIdx + '" type="text" placeholder="Nom du titre..." autocomplete="off"'
        +       ' style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.15);color:#F3F2F2;border-radius:.75rem;padding:.6rem 1rem;font-size:.9rem;width:100%;outline:none;"'
        +       ' onkeydown="if(event.key===\'Enter\') document.getElementById(\'bt-input-artiste-' + cardIdx + '\').focus()">'
        +   '</div>'
        +   '<div class="flex flex-col gap-1">'
        +     '<label class="text-gray text-xs font-semibold uppercase tracking-wider">Artiste</label>'
        +     '<input id="bt-input-artiste-' + cardIdx + '" type="text" placeholder="Nom de l\'artiste..." autocomplete="off"'
        +       ' style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.15);color:#F3F2F2;border-radius:.75rem;padding:.6rem 1rem;font-size:.9rem;width:100%;outline:none;"'
        +       ' onkeydown="if(event.key===\'Enter\') btAnswerLibre(' + cardIdx + ')">'
        +   '</div>'
        + '</div>'

        + '<div class="flex gap-3">'
        +   '<button onclick="btAnswerLibre(' + cardIdx + ')" class="flex-1 py-3 rounded-2xl font-bold text-sm transition-all hover:scale-105" style="background:rgba(57,131,249,0.2);border:1px solid rgba(57,131,249,0.5);color:#93c5fd;cursor:pointer;">'
        +     '<i class="fas fa-check mr-2"></i>Valider'
        +   '</button>'
        +   '<button onclick="btRevealLibre(this)" class="py-3 px-5 rounded-2xl text-xs font-medium transition-opacity opacity-60 hover:opacity-100" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.12);color:#A0A0A0;cursor:pointer;">'
        +     '<i class="fas fa-eye mr-1"></i>Révéler'
        +   '</button>'
        + '</div>'

        + '<div class="bt-feedback hidden rounded-xl px-4 py-3 text-sm font-semibold text-center"></div>'
        + '<button class="bt-next-btn hidden w-full py-3 rounded-2xl font-bold text-sm" style="background:rgba(57,131,249,0.18);border:1px solid rgba(57,131,249,0.45);color:#93c5fd;cursor:pointer;" onclick="btNextCard()">'
        +   '<i class="fas fa-arrow-right mr-2"></i>' + (cardIdx + 1 < BT_CARDS_COUNT ? 'Question suivante (' + (cardIdx + 2) + '/' + BT_CARDS_COUNT + ')' : 'Voir le score final')
        + '</button>'
    + '</div>';
}

// ─── Réponse mode Saisie Libre ────────────────────────────────

function btAnswerLibre(cardIdx) {
    var card = document.querySelector('.bt-card');
    if (!card || card.dataset.answered === '1') return;
    card.dataset.answered = '1';

    var inputTitre   = document.getElementById('bt-input-titre-'   + cardIdx);
    var inputArtiste = document.getElementById('bt-input-artiste-' + cardIdx);
    var saisiTitre   = btNormalize(inputTitre   ? inputTitre.value   : '');
    var saisiArtiste = btNormalize(inputArtiste ? inputArtiste.value : '');
    var correctTitre   = card.dataset.titre;
    var correctArtiste = card.dataset.artiste;

    var bonTitre   = saisiTitre.length > 0   && correctTitre.indexOf(saisiTitre)   !== -1 || saisiTitre.indexOf(correctTitre)   !== -1;
    var bonArtiste = saisiArtiste.length > 0 && correctArtiste.indexOf(saisiArtiste) !== -1 || saisiArtiste.indexOf(correctArtiste) !== -1;
    var isCorrect  = bonTitre && bonArtiste;

    // Feedback sur les champs
    if (inputTitre)   { inputTitre.disabled   = true; inputTitre.style.borderColor   = bonTitre   ? '#22c55e' : '#ef4444'; }
    if (inputArtiste) { inputArtiste.disabled = true; inputArtiste.style.borderColor = bonArtiste ? '#22c55e' : '#ef4444'; }

    // Badge
    var badge = card.querySelector('.bt-badge');
    if (badge) {
        badge.textContent    = isCorrect ? '✓' : '✗';
        badge.style.background  = isCorrect ? 'rgba(34,197,94,0.2)'  : 'rgba(239,68,68,0.15)';
        badge.style.borderColor = isCorrect ? 'rgba(34,197,94,0.5)'  : 'rgba(239,68,68,0.4)';
        badge.style.color       = isCorrect ? '#86efac'               : '#fca5a5';
    }

    // Feedback texte
    var fb = card.querySelector('.bt-feedback');
    if (fb) {
        fb.classList.remove('hidden');
        if (isCorrect) {
            fb.style.cssText = 'display:block;background:rgba(34,197,94,0.15);border:1px solid rgba(34,197,94,0.4);color:#86efac;border-radius:.75rem;padding:.75rem 1rem;';
            fb.innerHTML = '<i class="fas fa-check-circle mr-2"></i>Bravo ! C\'était bien <strong>' + btEscHtml(card.dataset.answer) + '</strong>';
        } else {
            fb.style.cssText = 'display:block;background:rgba(239,68,68,0.12);border:1px solid rgba(239,68,68,0.35);color:#fca5a5;border-radius:.75rem;padding:.75rem 1rem;';
            fb.innerHTML = '<i class="fas fa-times-circle mr-2"></i>Raté ! La réponse était <strong>' + btEscHtml(card.dataset.answer) + '</strong>';
        }
    }

    // Cacher bouton Valider + Révéler
    var btns = card.querySelectorAll('button:not(.bt-next-btn)');
    btns.forEach(function(b) { if (!b.classList.contains('bt-next-btn')) b.style.display = 'none'; });

    btScoreTotal++;
    if (isCorrect) btScoreCorrect++;
    btUpdateScore();

    var nx = card.querySelector('.bt-next-btn');
    if (nx) nx.classList.remove('hidden');
}

function btRevealLibre(btn) {
    var card = btn.closest('.bt-card');
    if (!card || card.dataset.answered === '1') return;
    card.dataset.answered = '1';

    var inputTitre   = card.querySelector('input[id^="bt-input-titre"]');
    var inputArtiste = card.querySelector('input[id^="bt-input-artiste"]');
    if (inputTitre)   { inputTitre.disabled   = true; inputTitre.style.borderColor   = '#3983F9'; }
    if (inputArtiste) { inputArtiste.disabled = true; inputArtiste.style.borderColor = '#3983F9'; }

    var fb = card.querySelector('.bt-feedback');
    if (fb) {
        fb.classList.remove('hidden');
        fb.style.cssText = 'display:block;background:rgba(57,131,249,0.1);border:1px solid rgba(57,131,249,0.35);color:#93c5fd;border-radius:.75rem;padding:.75rem 1rem;';
        fb.innerHTML = '<i class="fas fa-eye mr-2"></i>C\'était <strong>' + btEscHtml(card.dataset.answer) + '</strong>';
    }

    var btns = card.querySelectorAll('button:not(.bt-next-btn)');
    btns.forEach(function(b) { b.style.display = 'none'; });

    var nx = card.querySelector('.bt-next-btn');
    if (nx) nx.classList.remove('hidden');
}

// ─── Générer une nouvelle partie ──────────────────────────────

function btGenerate() {
    var grid = document.getElementById('bt-grid');
    if (!grid) return;

    if (BT_SONGS.length < 4) {
        grid.innerHTML = '<div class="col-span-full text-center text-gray py-20">'
            + '<i class="fas fa-exclamation-triangle text-yellow-400 text-3xl mb-4 block"></i>'
            + '<p>Ajoute au moins 4 titres dans <code>BT_SONGS</code> pour lancer le blind test.</p>'
            + '</div>';
        return;
    }

    btScoreCorrect = 0;
    btScoreTotal   = 0;
    btUpdateScore();
    btPicks = btPickRandom(BT_CARDS_COUNT);
    btCurrentIdx = 0;
    btShowCurrentCard();
}

function btShowCurrentCard() {
    var grid = document.getElementById('bt-grid');
    if (!grid) return;

    if (btCurrentIdx >= btPicks.length) {
        var pct = btPicks.length > 0 ? Math.round((btScoreCorrect / btPicks.length) * 100) : 0;
        var emoji = pct >= 80 ? '🏆' : pct >= 50 ? '👍' : '😅';
        grid.style.transition = 'opacity .2s';
        grid.style.opacity = '0';
        setTimeout(function() {
            grid.innerHTML = '<div class="bt-card glass-card rounded-3xl p-8 flex flex-col items-center gap-5 text-center">'
                + '<div class="text-5xl">' + emoji + '</div>'
                + '<p class="font-heading font-bold text-secondary text-xl">Partie terminée !</p>'
                + '<p class="text-gray">Tu as répondu correctement à <strong style="color:#3983F9">' + btScoreCorrect + '/' + btPicks.length + '</strong> questions (' + pct + '%)</p>'
                + '<button onclick="btGenerate()" class="mt-2 px-6 py-3 rounded-2xl font-bold text-sm" style="background:rgba(57,131,249,0.18);border:1px solid rgba(57,131,249,0.45);color:#93c5fd;cursor:pointer;">'
                + '<i class="fas fa-redo mr-2"></i>Rejouer</button>'
                + '</div>';
            grid.style.opacity = '1';
        }, 200);
        return;
    }

    grid.style.transition = 'opacity .2s';
    grid.style.opacity = '0';
    setTimeout(function() {
        var card = BT_MODE === 'libre'
            ? btBuildCardLibre(btPicks[btCurrentIdx], btCurrentIdx)
            : btBuildCard(btPicks[btCurrentIdx], btCurrentIdx);
        grid.innerHTML = card;
        grid.style.opacity = '1';
    }, 200);
}

// ─── Carte suivante ───────────────────────────────────────────

function btNextCard() {
    btCurrentIdx++;
    btShowCurrentCard();
}

// ─── Réponse utilisateur ──────────────────────────────────────

function btAnswer(btn, chosenIdx) {
    var card = btn.closest('.bt-card');
    if (!card || card.dataset.answered === '1') return;
    card.dataset.answered = '1';

    var correctIdx = parseInt(card.dataset.correct, 10);
    var isCorrect  = (chosenIdx === correctIdx);

    card.querySelectorAll('.bt-choice-btn').forEach(function(b, i){
        b.style.cursor = 'default';
        b.setAttribute('onclick', '');
        if (i === correctIdx) {
            b.style.background = 'rgba(34,197,94,0.2)'; b.style.borderColor = '#22c55e'; b.style.color = '#86efac';
        } else if (i === chosenIdx) {
            b.style.background = 'rgba(239,68,68,0.2)'; b.style.borderColor = '#ef4444'; b.style.color = '#fca5a5';
        } else {
            b.style.opacity = '0.35';
        }
    });

    var fb = card.querySelector('.bt-feedback');
    if (fb) {
        fb.classList.remove('hidden');
        if (isCorrect) {
            fb.style.cssText = 'display:block;background:rgba(34,197,94,0.15);border:1px solid rgba(34,197,94,0.4);color:#86efac;border-radius:.75rem;padding:.75rem 1rem;';
            fb.innerHTML = '<i class="fas fa-check-circle mr-2"></i>Bravo ! C\'était <strong>' + btEscHtml(card.dataset.answer) + '</strong>';
        } else {
            fb.style.cssText = 'display:block;background:rgba(239,68,68,0.12);border:1px solid rgba(239,68,68,0.35);color:#fca5a5;border-radius:.75rem;padding:.75rem 1rem;';
            fb.innerHTML = '<i class="fas fa-times-circle mr-2"></i>Raté ! C\'était <strong>' + btEscHtml(card.dataset.answer) + '</strong>';
        }
    }

    var badge = card.querySelector('.bt-badge');
    if (badge) {
        badge.textContent = isCorrect ? '✓' : '✗';
        badge.style.background   = isCorrect ? 'rgba(34,197,94,0.2)'  : 'rgba(239,68,68,0.15)';
        badge.style.borderColor  = isCorrect ? 'rgba(34,197,94,0.5)'  : 'rgba(239,68,68,0.4)';
        badge.style.color        = isCorrect ? '#86efac'               : '#fca5a5';
    }

    var rv = card.querySelector('.bt-reveal-btn');
    if (rv) rv.style.display = 'none';

    btScoreTotal++;
    if (isCorrect) btScoreCorrect++;
    btUpdateScore();

    var nx = card.querySelector('.bt-next-btn');
    if (nx) nx.classList.remove('hidden');
}

// ─── Révélation ───────────────────────────────────────────────

function btReveal(btn) {
    var card = btn.closest('.bt-card');
    if (!card || card.dataset.answered === '1') return;
    card.dataset.answered = '1';

    var correctIdx = parseInt(card.dataset.correct, 10);
    card.querySelectorAll('.bt-choice-btn').forEach(function(b, i){
        b.style.cursor = 'default'; b.setAttribute('onclick','');
        if (i === correctIdx) {
            b.style.background = 'rgba(57,131,249,0.2)'; b.style.borderColor = '#3983F9'; b.style.color = '#93c5fd';
        } else {
            b.style.opacity = '0.3';
        }
    });

    var fb = card.querySelector('.bt-feedback');
    if (fb) {
        fb.classList.remove('hidden');
        fb.style.cssText = 'display:block;background:rgba(57,131,249,0.1);border:1px solid rgba(57,131,249,0.35);color:#93c5fd;border-radius:.75rem;padding:.75rem 1rem;';
        fb.innerHTML = '<i class="fas fa-eye mr-2"></i>C\'était <strong>' + btEscHtml(card.dataset.answer) + '</strong>';
    }
    btn.style.display = 'none';

    var nx = card.querySelector('.bt-next-btn');
    if (nx) nx.classList.remove('hidden');
}

// ─── Chargement du player SoundCloud ──────────────────────────

function btLoadPlayer(wrap) {
    var src = wrap.dataset.src;
    if (!src || src.indexOf('TODO') !== -1) {
        var sp = wrap.querySelector('span');
        if (sp) { sp.textContent = '⚠ Contenu pas encore configuré'; sp.style.color = '#f59e0b'; }
        return;
    }

    var ph    = wrap.querySelector('.bt-player-placeholder');
    var frame = wrap.querySelector('.bt-player-frame');

    if (ph)    { ph.style.opacity = '0'; ph.style.transition = 'opacity .25s'; setTimeout(function(){ ph.style.display='none'; }, 260); }
    if (frame) { frame.classList.remove('hidden'); }

    var iframe = document.createElement('iframe');
    iframe.src = src;
    iframe.title = 'Deezer Player';
    iframe.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
    iframe.style.cssText = 'width:100%;height:80px;border:none;display:block;';
    if (frame) frame.appendChild(iframe);

    wrap.style.cursor = 'default';
    wrap.removeAttribute('onclick');
}

// ─── Reset score ──────────────────────────────────────────────

function btResetScore() {
    btGenerate();
}

// ─── Init au chargement ───────────────────────────────────────

document.addEventListener('DOMContentLoaded', function() {
    btUpdateScore();
    btLoadSongsFromXLSX(function(songs) {
        BT_SONGS = songs;
        btGenerate();
    });
});
