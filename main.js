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
const expandedNewsYears = new Set();
const expandedAvailableProjectYears = new Set();
const expandedPastProjectYears = new Set();
let hasInitializedNewsYears = false;
let hasInitializedAvailableProjectYears = false;

function extractYearLabel(rawValue, fallbackLabel) {
    if (!rawValue) return fallbackLabel;

    const value = String(rawValue).trim();
    const match = value.match(/\b(19|20)\d{2}\b/);

    if (match) return match[0];
    return value || fallbackLabel;
}

function sortYearLabelsDesc(labels) {
    return [...labels].sort((left, right) => {
        const leftNumber = Number.parseInt(left, 10);
        const rightNumber = Number.parseInt(right, 10);
        const leftIsNumber = Number.isFinite(leftNumber);
        const rightIsNumber = Number.isFinite(rightNumber);

        if (leftIsNumber && rightIsNumber) return rightNumber - leftNumber;
        if (leftIsNumber) return -1;
        if (rightIsNumber) return 1;
        return String(right).localeCompare(String(left));
    });
}

function groupItemsByYear(items, getYearLabel) {
    const groupedMap = items.reduce((accumulator, item) => {
        const year = getYearLabel(item);
        if (!accumulator[year]) accumulator[year] = [];
        accumulator[year].push(item);
        return accumulator;
    }, {});

    return sortYearLabelsDesc(Object.keys(groupedMap)).map(year => ({
        year,
        items: groupedMap[year]
    }));
}

function ensureDefaultExpandedYear(expandedSet, groupedItems) {
    if (expandedSet.size > 0 || groupedItems.length === 0) return;
    expandedSet.add(groupedItems[0].year);
}

function pruneExpandedYears(expandedSet, groupedItems) {
    const validYears = new Set(groupedItems.map(group => group.year));
    [...expandedSet].forEach(year => {
        if (!validYears.has(year)) expandedSet.delete(year);
    });
}

function createYearAccordionSection(year, items, isOpen, toggleHandler, renderItem, summaryLabel) {
    const section = document.createElement('section');
    section.className = 'rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm';

    const header = document.createElement('button');
    header.type = 'button';
    header.className = 'w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50 transition-colors';
    header.onclick = () => toggleHandler(year);
    header.innerHTML = `
        <div class="flex items-center gap-3">
            <h3 class="text-2xl font-bold text-slate-900">${year}</h3>
            <span class="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide bg-slate-100 text-slate-500">${items.length} ${summaryLabel}</span>
        </div>
        <i data-lucide="${isOpen ? 'chevron-up' : 'chevron-down'}" class="w-5 h-5 text-slate-400"></i>
    `;

    const content = document.createElement('div');
    content.className = isOpen ? 'border-t border-slate-100 divide-y divide-slate-100' : 'hidden border-t border-slate-100 divide-y divide-slate-100';
    items.forEach(item => content.appendChild(renderItem(item)));

    section.appendChild(header);
    section.appendChild(content);
    return section;
}

function getNewsYear(news) {
    return extractYearLabel(news.year || news.date, 'Archived');
}

function getNewsTypeLabel(type) {
    return type && type.trim() ? type : 'news';
}

function getNewsTypeClass(type) {
    if (type === 'hiring') return 'bg-amber-100 text-amber-700';
    if (type === 'publication') return 'bg-green-100 text-green-700';
    if (type === 'event') return 'bg-blue-100 text-blue-700';
    return 'bg-slate-100 text-slate-700';
}

function getNewsModalParagraphs(news) {
    const paragraphs = [];

    if (news.desc) paragraphs.push(news.desc);

    if (Array.isArray(news.body)) {
        news.body.forEach(paragraph => {
            if (paragraph && paragraph !== news.desc) paragraphs.push(paragraph);
        });
    } else if (typeof news.body === 'string' && news.body.trim() && news.body !== news.desc) {
        paragraphs.push(news.body.trim());
    }

    if (paragraphs.length === 0) {
        paragraphs.push('More details will be updated soon.');
    }

    return paragraphs;
}

function openNewsModal(news) {
    const modal = document.getElementById('news-modal');
    const title = document.getElementById('news-modal-title');
    const date = document.getElementById('news-modal-date');
    const type = document.getElementById('news-modal-type');
    const body = document.getElementById('news-modal-body');
    const link = document.getElementById('news-modal-link');
    const linkLabel = document.getElementById('news-modal-link-label');

    if (!modal || !news) return;

    title.textContent = news.title || '';
    date.textContent = news.date || getNewsYear(news);
    type.textContent = getNewsTypeLabel(news.type);
    type.className = `text-[11px] font-bold px-3 py-1 rounded-full uppercase ${getNewsTypeClass(news.type)}`;

    body.innerHTML = '';
    getNewsModalParagraphs(news).forEach(paragraph => {
        const item = document.createElement('p');
        item.className = 'text-base leading-8 text-slate-700';
        item.textContent = paragraph;
        body.appendChild(item);
    });

    if (news.link) {
        link.href = news.link;
        link.classList.remove('hidden');
        linkLabel.textContent = news.sourceLabel || 'View Source';
    } else {
        link.removeAttribute('href');
        link.classList.add('hidden');
    }

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function closeNewsModal() {
    const modal = document.getElementById('news-modal');
    if (!modal) return;

    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

function handleNewsModalBackdrop(event) {
    if (event.target === event.currentTarget) {
        closeNewsModal();
    }
}

function toggleNewsYear(year) {
    if (expandedNewsYears.has(year)) expandedNewsYears.delete(year);
    else expandedNewsYears.add(year);
    renderNews();
}

function createNewsArchiveItem(news) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'w-full flex items-start justify-between gap-4 px-6 py-4 text-left hover:bg-slate-50 transition-colors group';
    button.onclick = () => openNewsModal(news);
    button.innerHTML = `
        <div class="min-w-0">
            <p class="text-xs font-bold text-slate-400 uppercase mb-2">${news.date || getNewsYear(news)}</p>
            <h4 class="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">${news.title || 'News title'}</h4>
        </div>
        <span class="shrink-0 text-[10px] font-bold px-2 py-1 rounded-full uppercase ${getNewsTypeClass(news.type)}">${getNewsTypeLabel(news.type)}</span>
    `;
    return button;
}

function renderHomeNews() {
    const container = document.getElementById('home-news-list');
    if (!container || typeof newsData === 'undefined') return;

    container.innerHTML = '';

    newsData.slice(0, 10).forEach(news => {
        const el = document.createElement('div');
        el.className = 'p-4 hover:bg-slate-50 transition-colors cursor-pointer group border-l-2 border-transparent hover:border-blue-500';
        el.onclick = () => openNewsModal(news);
        el.innerHTML = `
            <div class="flex justify-between items-baseline mb-1 gap-3">
                 <span class="text-xs font-bold text-slate-400 uppercase">${news.date || getNewsYear(news)}</span>
                 <i data-lucide="arrow-right" class="w-3 h-3 text-slate-300 group-hover:text-blue-500 transition-colors"></i>
            </div>
            <h4 class="text-sm font-bold text-slate-800 group-hover:text-blue-600 line-clamp-2 transition-colors">${news.title || 'News title'}</h4>
        `;
        container.appendChild(el);
    });

    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function renderNews() {
    const container = document.getElementById('news-container');
    if (!container || typeof newsData === 'undefined') return;

    container.innerHTML = '';

    const groupedNews = groupItemsByYear(newsData, getNewsYear);
    pruneExpandedYears(expandedNewsYears, groupedNews);
    if (!hasInitializedNewsYears) {
        ensureDefaultExpandedYear(expandedNewsYears, groupedNews);
        hasInitializedNewsYears = true;
    }

    groupedNews.forEach(group => {
        container.appendChild(
            createYearAccordionSection(
                group.year,
                group.items,
                expandedNewsYears.has(group.year),
                toggleNewsYear,
                createNewsArchiveItem,
                'items'
            )
        );
    });

    if (typeof lucide !== 'undefined') lucide.createIcons();
}

// E. Jobs & Thesis Projects
function renderSupervisorList(supervisors) {
    if (!Array.isArray(supervisors) || supervisors.length === 0) {
        return `<p class="text-sm text-slate-500">Supervisor information will be updated soon.</p>`;
    }

    return supervisors.map(supervisor => `
        <div class="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p class="font-semibold text-slate-900">${supervisor.name || 'Supervisor name'}</p>
            <p class="text-sm text-slate-500 mb-2">${supervisor.role || 'Role to be updated'}</p>
            ${supervisor.email ? `<a href="mailto:${supervisor.email}" class="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 break-all"><i data-lucide="mail" class="w-4 h-4"></i><span>${supervisor.email}</span></a>` : ''}
        </div>
    `).join('');
}

function renderReferenceList(references) {
    if (!Array.isArray(references) || references.length === 0) {
        return `<p class="text-sm text-slate-500">References will be shared during the discussion.</p>`;
    }

    return references.map(reference => {
        if (reference.url) {
            return `
                <a href="${reference.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-start gap-2 text-sm text-blue-600 hover:text-blue-800">
                    <i data-lucide="arrow-up-right" class="w-4 h-4 mt-0.5 shrink-0"></i>
                    <span>${reference.label}</span>
                </a>
            `;
        }

        return `
            <div class="inline-flex items-start gap-2 text-sm text-slate-600">
                <i data-lucide="file-text" class="w-4 h-4 mt-0.5 shrink-0"></i>
                <span>${reference.label}</span>
            </div>
        `;
    }).join('');
}

function getSupervisorNames(supervisors) {
    if (!Array.isArray(supervisors) || supervisors.length === 0) {
        return 'To be updated';
    }

    return supervisors
        .map(supervisor => supervisor.name)
        .filter(Boolean)
        .join(', ');
}

function getAvailableProjectYear(project) {
    return extractYearLabel(project.year || project.term, 'Upcoming');
}

function getCurrentCalendarYear() {
    return String(new Date().getFullYear());
}

function getPastProjectYear(project) {
    return extractYearLabel(project.year, 'Archived');
}

function openThesisModal(project) {
    const modal = document.getElementById('thesis-modal');
    if (!modal || !project) return;

    document.getElementById('thesis-modal-type').textContent = project.type || 'Thesis Project';
    document.getElementById('thesis-modal-year').textContent = getAvailableProjectYear(project);
    document.getElementById('thesis-modal-title').textContent = project.title || 'Project title';
    document.getElementById('thesis-modal-term').textContent = project.term || 'Start date to be discussed';
    document.getElementById('thesis-modal-location').textContent = project.location || 'Location to be updated';
    document.getElementById('thesis-modal-description').textContent = project.description || 'Project description will be updated soon.';
    document.getElementById('thesis-modal-supervisors').innerHTML = renderSupervisorList(project.supervisors);
    document.getElementById('thesis-modal-references').innerHTML = renderReferenceList(project.references);

    const contactContainer = document.getElementById('thesis-modal-contact');
    if (project.contact?.email) {
        contactContainer.innerHTML = `
            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p class="text-xs font-bold uppercase tracking-wide text-slate-400 mb-2">Contact</p>
                <p class="font-semibold text-slate-900">${project.contact.name || 'Contact person'}</p>
                <a href="mailto:${project.contact.email}" class="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 mt-2 break-all">
                    <i data-lucide="mail" class="w-4 h-4"></i>
                    <span>${project.contact.email}</span>
                </a>
                ${project.contact.note ? `<p class="text-sm text-slate-600 leading-relaxed mt-3">${project.contact.note}</p>` : ''}
            </div>
        `;
    } else {
        contactContainer.innerHTML = '';
    }

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function closeThesisModal() {
    const modal = document.getElementById('thesis-modal');
    if (!modal) return;

    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

function handleThesisModalBackdrop(event) {
    if (event.target === event.currentTarget) {
        closeThesisModal();
    }
}

function createAvailableThesisProjectListItem(project) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'w-full flex items-start justify-between gap-4 px-6 py-4 text-left hover:bg-slate-50 transition-colors group';
    button.onclick = () => openThesisModal(project);
    button.innerHTML = `
        <div class="min-w-0">
            <h4 class="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">${project.title || 'Project title'}</h4>
            <div class="flex flex-wrap gap-2 mt-3">
                <span class="text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide bg-blue-100 text-blue-700">${project.type || 'Thesis Project'}</span>
                <span class="text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide bg-emerald-100 text-emerald-700">${project.status || 'available'}</span>
            </div>
        </div>
        <i data-lucide="arrow-right" class="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-colors shrink-0 mt-1"></i>
    `;
    return button;
}

function toggleAvailableProjectYear(year) {
    if (expandedAvailableProjectYears.has(year)) expandedAvailableProjectYears.delete(year);
    else expandedAvailableProjectYears.add(year);
    renderThesisProjects();
}

function togglePastProjectYear(year) {
    if (expandedPastProjectYears.has(year)) expandedPastProjectYears.delete(year);
    else expandedPastProjectYears.add(year);
    renderThesisProjects();
}

function renderAvailableThesisProjects(containerId, items, emptyMessage) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    const currentYear = getCurrentCalendarYear();
    const currentYearItems = Array.isArray(items)
        ? items.filter(project => getAvailableProjectYear(project) === currentYear)
        : [];

    if (currentYearItems.length === 0) {
        container.innerHTML = `
            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-slate-500">
                No available thesis projects are listed for ${currentYear} right now.
            </div>
        `;
        return;
    }

    const groupedProjects = groupItemsByYear(currentYearItems, getAvailableProjectYear);
    pruneExpandedYears(expandedAvailableProjectYears, groupedProjects);
    if (!hasInitializedAvailableProjectYears) {
        ensureDefaultExpandedYear(expandedAvailableProjectYears, groupedProjects);
        hasInitializedAvailableProjectYears = true;
    }

    groupedProjects.forEach(group => {
        container.appendChild(
            createYearAccordionSection(
                group.year,
                group.items,
                expandedAvailableProjectYears.has(group.year),
                toggleAvailableProjectYear,
                createAvailableThesisProjectListItem,
                'projects'
            )
        );
    });
}

function createPastThesisProjectCard(project) {
    const card = document.createElement('article');
    const titleHtml = project.thesisLink
        ? `<a href="${project.thesisLink}" target="_blank" rel="noopener noreferrer" class="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors inline-flex items-center gap-2">${project.title || 'Project title'} <i data-lucide="arrow-up-right" class="w-4 h-4"></i></a>`
        : `<h4 class="text-xl font-bold text-slate-900">${project.title || 'Project title'}</h4>`;
    const contactHtml = project.contact?.email
        ? `
            <span class="font-semibold text-slate-800">${project.contact.name || 'Contact'}:</span>
            <a href="mailto:${project.contact.email}" class="text-blue-600 hover:text-blue-800 break-all">${project.contact.email}</a>
        `
        : `<span class="text-slate-500">Contact information will be updated soon.</span>`;

    card.className = 'rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm';
    card.innerHTML = `
        <div class="mb-3">
            ${titleHtml}
        </div>
        <p class="text-slate-600 text-sm leading-relaxed mb-4">${project.description || 'Project description will be updated soon.'}</p>
        <div class="grid gap-3 text-sm">
            <div class="inline-flex items-start gap-2 text-slate-600">
                <i data-lucide="users" class="w-4 h-4 mt-0.5 shrink-0"></i>
                <span><span class="font-semibold text-slate-800">Supervisor:</span> ${getSupervisorNames(project.supervisors)}</span>
            </div>
            <div class="inline-flex items-start gap-2 text-slate-600">
                <i data-lucide="mail" class="w-4 h-4 mt-0.5 shrink-0"></i>
                <span>${contactHtml}</span>
            </div>
        </div>
    `;

    return card;
}

function renderPastThesisProjects(containerId, items, emptyMessage) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    if (!Array.isArray(items) || items.length === 0) {
        container.innerHTML = `
            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-slate-500">
                ${emptyMessage}
            </div>
        `;
        return;
    }

    const groupedProjects = groupItemsByYear(items, getPastProjectYear);
    pruneExpandedYears(expandedPastProjectYears, groupedProjects);

    groupedProjects.forEach(group => {
        const yearSection = document.createElement('section');
        yearSection.className = 'rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm';

        const header = document.createElement('button');
        header.type = 'button';
        header.className = 'w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50 transition-colors';
        header.onclick = () => togglePastProjectYear(group.year);
        header.innerHTML = `
            <div class="flex items-center gap-3">
                <h4 class="text-2xl font-bold text-slate-900">${group.year}</h4>
                <span class="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide bg-slate-100 text-slate-500">${group.items.length} projects</span>
            </div>
            <i data-lucide="${expandedPastProjectYears.has(group.year) ? 'chevron-up' : 'chevron-down'}" class="w-5 h-5 text-slate-400"></i>
        `;

        const content = document.createElement('div');
        content.className = expandedPastProjectYears.has(group.year)
            ? 'border-t border-slate-100 p-5 md:p-6 grid md:grid-cols-2 gap-5 bg-slate-50/40'
            : 'hidden border-t border-slate-100 p-5 md:p-6 grid md:grid-cols-2 gap-5 bg-slate-50/40';

        group.items.forEach(project => {
            content.appendChild(createPastThesisProjectCard(project));
        });

        yearSection.appendChild(header);
        yearSection.appendChild(content);
        container.appendChild(yearSection);
    });
}

function renderThesisProjects() {
    if (typeof thesisProjectsData === 'undefined') return;

    renderAvailableThesisProjects(
        'available-thesis-container',
        thesisProjectsData.available,
        'No available thesis projects are listed right now.'
    );

    renderPastThesisProjects(
        'past-thesis-container',
        thesisProjectsData.past,
        'Past thesis projects will be added here.'
    );

    if (typeof lucide !== 'undefined') lucide.createIcons();
}

// F. Publications
const VISIBLE_COUNT = 5;
const expandedCategories = { journal: false, conference: false, review: false, talks: false };

function getYearNumber(value) {
    const yearLabel = extractYearLabel(value, '0');
    const yearNumber = Number.parseInt(yearLabel, 10);
    return Number.isFinite(yearNumber) ? yearNumber : Number.NEGATIVE_INFINITY;
}

function sortItemsByYearDesc(items, getYearValue = item => item.year) {
    return items
        .map((item, index) => ({
            item,
            index,
            year: getYearNumber(getYearValue(item))
        }))
        .sort((left, right) => {
            if (right.year !== left.year) return right.year - left.year;
            return left.index - right.index;
        })
        .map(entry => entry.item);
}

function renderPubCategory(category, containerId, btnId) {
    const container = document.getElementById(containerId);
    const btn = document.getElementById(btnId);
    if (!container || typeof publicationsData === 'undefined') return;
    container.innerHTML = '';
    const items = sortItemsByYearDesc(publicationsData.filter(p => p.type === category));
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

function getTalkItems() {
    if (typeof talksData === 'undefined') return [];

    const talkGroups = [
        { key: 'invited', label: 'Invited Talk' },
        { key: 'other', label: 'Talk' }
    ];

    return sortItemsByYearDesc(
        talkGroups.flatMap(group => {
            const items = Array.isArray(talksData[group.key]) ? talksData[group.key] : [];
            return items.map(talk => ({
                ...talk,
                categoryLabel: group.label
            }));
        })
    );
}

function renderTalks(containerId, btnId) {
    const container = document.getElementById(containerId);
    const btn = document.getElementById(btnId);
    if (!container) return;

    container.innerHTML = '';
    const items = getTalkItems();

    items.forEach((talk, index) => {
        const el = document.createElement('div');
        const isHidden = !expandedCategories.talks && index >= VISIBLE_COUNT;
        const links = Array.isArray(talk.links)
            ? talk.links
                .filter(link => link && link.url)
                .map(link => `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="font-semibold text-emerald-700 hover:text-emerald-900 hover:underline">${link.label}</a>`)
                .join(' · ')
            : '';

        el.className = `text-slate-700 leading-relaxed ${isHidden ? 'hidden-item' : ''}`;
        el.innerHTML = `
            ${index + 1}. <span class="font-bold text-slate-900">"${talk.title},"</span>
            <span class="text-sm font-semibold uppercase tracking-wide text-emerald-700">${talk.categoryLabel}</span>,
            <span class="italic text-slate-600">${talk.venue}</span>,
            ${talk.date || talk.year}.
            ${links ? `<span class="ml-2">${links}</span>` : ''}
        `;
        container.appendChild(el);
    });

    if (btn) {
        if (items.length <= VISIBLE_COUNT) {
            btn.style.display = 'none';
        } else {
            btn.style.display = 'flex';
            btn.innerHTML = expandedCategories.talks
                ? `Show Less <i data-lucide="chevron-up" class="w-4 h-4"></i>`
                : `See All Talks (${items.length - VISIBLE_COUNT} more) <i data-lucide="chevron-down" class="w-4 h-4"></i>`;
        }
    }
}

function toggleCategory(category) {
    expandedCategories[category] = !expandedCategories[category];
    if (category === 'journal') renderPubCategory('journal', 'pub-list-journal', 'btn-see-journal');
    else if (category === 'conference') renderPubCategory('conference', 'pub-list-conference', 'btn-see-conference');
    else if (category === 'review') renderPubCategory('review', 'pub-list-review', 'btn-see-review');
    else if (category === 'talks') renderTalks('pub-list-talks', 'btn-see-talks');
    lucide.createIcons();
}

// G. Gallery & Lightbox
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
        closeNewsModal();
        closeThesisModal();
    }
});

// --- 4. INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.replace('#', '');
    const validTabs = ['home', 'research', 'people', 'publications', 'news', 'jobs', 'gallery'];
    const initialTab = validTabs.includes(hash) ? hash : 'home';

    document.querySelectorAll('.tab-content').forEach(el => {
        if (!el.classList.contains('active')) el.style.display = 'none';
    });

    switchTab(initialTab);

    handleScroll();
    
    renderHomeNews();
    renderNews();
    renderThesisProjects();
    renderTeam();
    renderAlumni();
    renderResearch(); // Now dynamic!
    
    renderPubCategory('journal', 'pub-list-journal', 'btn-see-journal');
    renderPubCategory('conference', 'pub-list-conference', 'btn-see-conference');
    renderPubCategory('review', 'pub-list-review', 'btn-see-review');
    renderTalks('pub-list-talks', 'btn-see-talks');
    renderGallery(); 
    
    if (typeof lucide !== 'undefined') lucide.createIcons();
});
