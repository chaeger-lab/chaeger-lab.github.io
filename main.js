/**
 * ==========================================
 * DDCS LAB WEBSITE LOGIC (MAIN.JS)
 * ==========================================
 */

if (typeof lucide !== 'undefined') lucide.createIcons();

// --- 1. NAVIGATION ---
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => {
        el.classList.remove('active');
        setTimeout(() => { 
            if(!el.classList.contains('active')) el.style.display = 'none';
        }, 300);
    });
    const target = document.getElementById(tabId);
    if (target) {
        target.style.display = 'block';
        setTimeout(() => target.classList.add('active'), 10);
        history.replaceState(null, null, `#${tabId}`);
    }
    document.querySelectorAll('.nav-link').forEach(el => {
        const isActive = el.dataset.target === tabId;
        el.classList.toggle('active-nav', isActive);
        el.classList.toggle('text-blue-600', isActive);
        el.classList.toggle('border-blue-600', isActive);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMobileMenu() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
}

function handleScroll() {
    const nav = document.getElementById('navbar');
    const scrollY = window.scrollY;

    const showThreshold = 100; 

    if (scrollY > showThreshold) {
        nav.style.transform = 'translateY(-100%)';
        nav.classList.add('nav-scrolled');
    } else {
        nav.style.transform = 'translateY(0)';
        if (scrollY < 20) {
            nav.classList.remove('nav-scrolled');
        } else {
            nav.classList.add('nav-scrolled');
        }
    }
}
window.addEventListener('scroll', handleScroll);

// --- 2. PARTICLES ---
const canvas = document.getElementById('particle-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 1.5; this.vy = (Math.random() - 0.5) * 1.5;
            this.size = Math.random() * 2 + 1;
        }
        update() {
            this.x += this.vx; this.y += this.vy;
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        draw() {
            ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(15, 23, 42, 0.3)'; ctx.fill();
        }
    }
    function initParticles() {
        particles = [];
        const count = Math.floor((window.innerWidth * window.innerHeight) / 12000);
        for (let i = 0; i < count; i++) particles.push(new Particle());
    }
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        for (let i = 0; i < particles.length; i++) {
            for (let j = i; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x; const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(30, 58, 138, ${0.4 * (1 - dist / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animateParticles);
    }
    window.addEventListener('resize', () => { resizeCanvas(); initParticles(); });
    resizeCanvas(); initParticles(); animateParticles();
}

// --- 3. RENDER FUNCTIONS ---

// A. Research (Cards + Modal)
function renderResearch() {
    const container = document.getElementById('research-container');
    if (!container || typeof researchData === 'undefined') return;
    container.innerHTML = '';

    researchData.forEach(item => {
        const el = document.createElement('div');
        // Card styling
        el.className = "bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group cursor-pointer";
        el.onclick = () => openResearchModal(item);

        el.innerHTML = `
            <div class="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <i data-lucide="${item.icon}" class="w-8 h-8 text-blue-600"></i>
            </div>
            <h3 class="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">${item.title}</h3>
            <p class="text-slate-600 leading-relaxed mb-6">${item.desc}</p>
            <button class="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn more <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
        `;
        container.appendChild(el);
    });
}

function openResearchModal(item) {
    const modal = document.getElementById('research-modal');
    const title = document.getElementById('res-modal-title');
    const abstract = document.getElementById('res-modal-abstract');
    const img = document.getElementById('res-modal-img');

    if (modal && item) {
        title.innerText = item.title;
        abstract.innerText = item.abstract;
        img.src = item.image;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeResearchModal() {
    document.getElementById('research-modal').classList.add('hidden');
    document.body.style.overflow = '';
}

// B. Team
function renderTeam() {
    const container = document.getElementById('team-container');
    if (!container || typeof teamData === 'undefined') return;
    container.innerHTML = '';
    teamData.forEach(person => {
        const el = document.createElement('div');
        el.className = 'group';
        let linksHtml = '';
        if (person.email) linksHtml += `<a href="mailto:${person.email}" title="Email"><i data-lucide="mail" class="w-6 h-6 hover:scale-110 transition-transform"></i></a>`;
        if (person.linkedin) linksHtml += `<a href="${person.linkedin}" target="_blank" title="LinkedIn"><i data-lucide="linkedin" class="w-6 h-6 hover:scale-110 transition-transform"></i></a>`;
        if (person.website) linksHtml += `<a href="${person.website}" target="_blank" title="Website"><i data-lucide="globe" class="w-6 h-6 hover:scale-110 transition-transform"></i></a>`;
        el.innerHTML = `
            <div class="aspect-[4/5] bg-slate-200 rounded-xl mb-4 overflow-hidden relative shadow-sm hover:shadow-md transition-all">
                ${person.image ? `<img src="${person.image}" alt="${person.name}" class="w-full h-full object-cover">` : `<div class="absolute inset-0 flex items-center justify-center text-slate-400"><i data-lucide="user" class="w-16 h-16"></i></div>`}
                <div class="absolute inset-0 bg-blue-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 text-white">${linksHtml}</div>
            </div>
            <h3 class="text-lg font-bold text-slate-900">${person.name}</h3>
            <p class="text-blue-600 text-sm font-medium">${person.role}</p>
        `;
        container.appendChild(el);
    });
}

// C. Alumni (Categorized)
function renderAlumni() {
    const teamContainer = document.getElementById('team-container');
    if (!teamContainer || typeof alumniData === 'undefined') return;
    
    // Check/Create Alumni Section Wrapper
    let alumniWrapper = document.getElementById('alumni-wrapper');
    if (!alumniWrapper) {
        alumniWrapper = document.createElement('div');
        alumniWrapper.id = 'alumni-wrapper';
        alumniWrapper.className = 'mt-24 pt-12 border-t border-slate-200';
        teamContainer.parentNode.appendChild(alumniWrapper);
    }
    
    // Define Categories
    const categories = [
        { key: 'phd', label: 'PhD Graduates & Postdocs' },
        { key: 'visiting', label: 'Visiting Researchers' },
        { key: 'master', label: 'Master Graduates' },
        { key: 'bachelor', label: 'Bachelor Graduates' }
    ];

    let htmlContent = `<h2 class="text-3xl font-bold text-slate-900 mb-10">Alumni</h2>`;

    categories.forEach(cat => {
        // Filter alumni by type
        const group = alumniData.filter(a => a.type === cat.key);
        if (group.length > 0) {
            htmlContent += `
                <div class="mb-10">
                    <h3 class="text-xl font-bold text-slate-700 mb-4 border-l-4 border-slate-300 pl-3">${cat.label}</h3>
                    <div class="grid grid-cols-1 gap-2">
            `;
            group.forEach(alum => {
                htmlContent += `
                    <div class="flex flex-col md:flex-row md:items-center justify-between py-3 border-b border-slate-100 hover:bg-slate-50 transition-colors px-2 rounded-lg">
                        <div>
                            <h4 class="font-bold text-slate-900 text-base flex items-center gap-2">
                                ${alum.name}
                                ${alum.link ? `<a href="${alum.link}" target="_blank" class="text-slate-400 hover:text-blue-600"><i data-lucide="external-link" class="w-3 h-3"></i></a>` : ''}
                            </h4>
                            <p class="text-xs text-slate-500 uppercase tracking-wide">${alum.role}</p>
                        </div>
                        <div class="mt-2 md:mt-0 flex items-center gap-1.5 text-slate-600 text-sm">
                            <i data-lucide="map-pin" class="w-3 h-3 text-blue-500"></i> ${alum.destination}
                        </div>
                    </div>
                `;
            });
            htmlContent += `</div></div>`;
        }
    });

    alumniWrapper.innerHTML = htmlContent;
}

// D. News & Home News
function renderHomeNews() {
    const container = document.getElementById('home-news-list');
    if (!container || typeof newsData === 'undefined') return;
    container.innerHTML = '';
    newsData.slice(0, 10).forEach(news => {
        const el = document.createElement('div');
        el.className = 'p-4 hover:bg-slate-50 transition-colors cursor-pointer group border-l-2 border-transparent hover:border-blue-500';
        el.onclick = () => news.link ? window.open(news.link, '_blank') : switchTab('news');
        el.innerHTML = `
            <div class="flex justify-between items-baseline mb-1">
                 <span class="text-xs font-bold text-slate-400 uppercase">${news.date}</span>
                 ${news.link ? '<i data-lucide="external-link" class="w-3 h-3 text-slate-300 group-hover:text-blue-500"></i>' : ''}
            </div>
            <h4 class="text-sm font-bold text-slate-800 group-hover:text-blue-600 line-clamp-2">${news.title}</h4>
        `;
        container.appendChild(el);
    });
}

let currentNewsFilter = 'all';
let showAllNewsFlag = false;
function renderNews() {
    const container = document.getElementById('news-container');
    if (!container) return;
    container.innerHTML = '';
    let filtered = newsData.filter(n => currentNewsFilter === 'all' || n.type === currentNewsFilter);
    const visibleNews = filtered.slice(0, showAllNewsFlag ? filtered.length : 6);
    visibleNews.forEach(news => {
        const el = document.createElement('div');
        let typeColor = news.type === 'hiring' ? 'bg-amber-100 text-amber-700' : (news.type === 'publication' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700');
        const titleHtml = news.link 
            ? `<a href="${news.link}" target="_blank" class="font-bold text-slate-800 text-lg hover:text-blue-600 flex items-center gap-2 transition-colors">${news.title} <i data-lucide="external-link" class="w-4 h-4 text-slate-400"></i></a>`
            : `<h3 class="font-bold text-slate-800 text-lg cursor-default">${news.title}</h3>`;
        el.className = 'bg-white p-5 rounded-xl border border-slate-100 hover:shadow-md transition-all flex flex-col gap-2';
        el.innerHTML = `
            <div class="flex justify-between items-center">
                <span class="text-xs font-bold text-slate-400 uppercase">${news.date}</span>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${typeColor}">${news.type}</span>
            </div>
            ${titleHtml}
            <p class="text-slate-500 text-sm line-clamp-2">${news.desc}</p>
        `;
        container.appendChild(el);
    });
    const btn = document.getElementById('news-show-more');
    if (btn) {
        if (filtered.length <= 6) btn.style.display = 'none';
        else {
            btn.style.display = 'flex';
            btn.innerHTML = showAllNewsFlag ? 'Show Less' : `Show All News (${filtered.length})`;
        }
    }
}
function filterNews(type) {
    currentNewsFilter = type; showAllNewsFlag = false;
    document.querySelectorAll('#news .filter-btn').forEach(b => {
            b.classList.toggle('active', b.textContent.toLowerCase().includes(type) || (type==='all' && b.textContent==='All'));
    });
    renderNews();
}
function showAllNews() { showAllNewsFlag = !showAllNewsFlag; renderNews(); }

// E. Publications
const VISIBLE_COUNT = 5;
const expandedCategories = { journal: false, conference: false, review: false };
function renderPubCategory(category, containerId, btnId) {
    const container = document.getElementById(containerId);
    const btn = document.getElementById(btnId);
    if (!container || typeof publicationsData === 'undefined') return;
    container.innerHTML = '';
    const items = publicationsData.filter(p => p.type === category);
    items.forEach((pub, index) => {
        const el = document.createElement('div');
        const isHidden = !expandedCategories[category] && index >= VISIBLE_COUNT;
        el.className = `text-slate-700 leading-relaxed ${isHidden ? 'hidden-item' : ''}`;
        const titlePart = pub.link 
            ? `<a href="${pub.link}" target="_blank" class="font-bold text-slate-900 hover:text-blue-600 hover:underline transition-colors">"${pub.title},"</a>`
            : `<span class="font-bold text-slate-900">"${pub.title},"</span>`;
        el.innerHTML = `${index + 1}. ${pub.authors}, ${titlePart} <span class="italic text-slate-600">${pub.source}</span>, ${pub.year}.`;
        container.appendChild(el);
    });
    if (btn) {
        if (items.length <= VISIBLE_COUNT) {
            btn.style.display = 'none';
        } else {
            btn.style.display = 'flex';
            btn.innerHTML = expandedCategories[category] 
                ? `Show Less <i data-lucide="chevron-up" class="w-4 h-4"></i>` 
                : `See All ${category.charAt(0).toUpperCase() + category.slice(1)}s (${items.length - VISIBLE_COUNT} more) <i data-lucide="chevron-down" class="w-4 h-4"></i>`;
        }
    }
}
function toggleCategory(category) {
    expandedCategories[category] = !expandedCategories[category];
    if (category === 'journal') renderPubCategory('journal', 'pub-list-journal', 'btn-see-journal');
    else if (category === 'conference') renderPubCategory('conference', 'pub-list-conference', 'btn-see-conference');
    else if (category === 'review') renderPubCategory('review', 'pub-list-review', 'btn-see-review');
    lucide.createIcons();
}

// F. Gallery & Lightbox
function renderGallery() {
    const container = document.getElementById('gallery-container');
    if (!container || typeof galleryData === 'undefined') return;
    container.innerHTML = '';
    galleryData.forEach((item, index) => {
        const el = document.createElement('div');
        el.className = "group relative overflow-hidden rounded-xl cursor-pointer aspect-video bg-slate-200";
        el.onclick = () => openLightbox(index);
        el.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                <h4 class="font-bold text-lg mb-2">${item.title}</h4>
                <div class="flex items-center gap-1 text-sm text-slate-200 mb-1"><i data-lucide="calendar" class="w-4 h-4"></i> <span>${item.date}</span></div>
                <div class="flex items-center gap-1 text-sm text-slate-200"><i data-lucide="map-pin" class="w-4 h-4"></i> <span>${item.location}</span></div>
            </div>
        `;
        container.appendChild(el);
    });
}
function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    const caption = document.getElementById('lightbox-caption');
    const item = galleryData[index];
    if (lightbox && img && caption && item) {
        img.src = item.image;
        caption.innerHTML = `${item.title} <span class="mx-2 text-slate-400">|</span> <span class="text-sm text-slate-300">${item.date}</span>`;
        lightbox.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}
function closeLightbox() {
    document.getElementById('lightbox').classList.add('hidden');
    document.body.style.overflow = '';
}
document.addEventListener('keydown', (e) => { 
    if (e.key === 'Escape') {
        closeLightbox();
        closeResearchModal();
    }
});

// --- 4. INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.replace('#', '');
    const validTabs = ['home', 'research', 'people', 'publications', 'news', 'gallery'];
    const initialTab = validTabs.includes(hash) ? hash : 'home';

    document.querySelectorAll('.tab-content').forEach(el => {
        if (!el.classList.contains('active')) el.style.display = 'none';
    });

    switchTab(initialTab);

    handleScroll();
    
    renderHomeNews();
    renderNews();
    renderTeam();
    renderAlumni();
    renderResearch(); // Now dynamic!
    
    renderPubCategory('journal', 'pub-list-journal', 'btn-see-journal');
    renderPubCategory('conference', 'pub-list-conference', 'btn-see-conference');
    renderPubCategory('review', 'pub-list-review', 'btn-see-review');
    renderGallery(); 
    
    if (typeof lucide !== 'undefined') lucide.createIcons();
});