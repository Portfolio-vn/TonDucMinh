
// ==========================================
// DUC MINH TON - Portfolio Engine 
// Core Logic & Quantum UI Interactions
// ==========================================

const studentData = [
    {
        id: "jdie_2025",
        type: "award",
        title: "Gold Medal & Best Invention — JDIE 2025",
        category: "International",
        date: "2025",
        desc: "Double Gold Medal and Best International Invention Award for BioPure Acne Care at the 12th Japan Design, Idea & Invention Expo in Tokyo. This all-natural biological cream was highly evaluated for its efficacy and sustainable sourcing.",
        thumb: "assets/images/jdie-cert-medal.jpg",
        assets: [
            "assets/images/jdie-cert-medal.jpg",
            "assets/images/jdie-cert-inventive.jpg",
            "assets/images/jdie-medal-inventive.jpg",
            "assets/images/jdie-team.jpg",
            "assets/images/jdie-personal.jpg"
        ]
    },
    {
        id: "icpc_2026",
        type: "award",
        title: "Gold Medal — ICPC 2026",
        category: "International",
        date: "2026",
        desc: "Gold Medal at ICPC 2026 for researching herbal effervescent granules from Vietnamese medicinal plants (Folium Perillae & Herba Houttuyniae) to reduce fever. Achieved 96.5% clinical efficacy.",
        thumb: "assets/images/icpc-gold-medal.jpg",
        assets: [
            "assets/images/icpc-gold-medal.jpg",
            "assets/images/icpc-cert-personal.jpg",
            "assets/images/icpc-cert-team.jpg"
        ]
    },
    {
        id: "icq_2025",
        type: "award",
        title: "1st Prize — International Chemistry Quiz",
        category: "International",
        date: "2025",
        desc: "Certificate of High Distinction at the ICQ 2025, organized by the Royal Australian Chemical Institute (RACI). Ranked 1st among all Vietnamese participants in the senior division.",
        thumb: "assets/images/icq-cert.jpg",
        assets: ["assets/images/icq-cert.jpg"]
    },
    {
        id: "c3l6_2025",
        type: "award",
        title: "Gold Medal — C3L6",
        category: "International",
        date: "2025-2026",
        desc: "Gold Medal at the C3L6 International Chemistry Competition, demonstrating advanced analytical chemistry and complex problem-solving skills.",
        thumb: "assets/images/c3l6-cert.jpg",
        assets: ["assets/images/c3l6-cert.jpg"]
    },
    {
        id: "academic_sp",
        type: "award",
        title: "Academic Excellence & Valedictorian",
        category: "Academic",
        date: "2024-2025",
        desc: "Valedictorian (Chemistry) at HNUE High School for the Gifted. Ranked Top 5 in Chemistry at Hanoi-Amsterdam. Won District-level Excellence Award.",
        thumb: "assets/images/academic-akhoa-sp.jpg",
        assets: [
            "assets/images/academic-akhoa-sp.jpg",
            "assets/images/academic-cert-sp.jpg",
            "assets/images/academic-top5-ams.jpg",
            "assets/images/academic-vinhdanh.jpg"
        ]
    },
    {
        id: "act_hshk",
        type: "activity",
        title: "Speaker — High School Help Kit",
        category: "Leadership",
        date: "2024",
        desc: "Guest speaker at Unboxing Day 2024 for High School Help Kit, a project with over 75,000 followers dedicated to helping middle school students transition into high school environments smoothly.",
        thumb: "assets/images/hshk-photo.jpg",
        assets: ["assets/images/hshk-photo.jpg", "assets/images/hshk-cert.jpg"]
    },
    {
        id: "act_amstronomy",
        type: "activity",
        title: "HR Department — Amstronomy Club",
        category: "Club Activity",
        date: "2025",
        desc: "Human Resources Member at the Hanoi-Amsterdam Astronomy Club (16,000+ followers). Co-organized stargazing events and science communication workshops.",
        thumb: "assets/images/amstronomy-cert.jpg",
        assets: ["assets/images/amstronomy-cert.jpg", "assets/images/amstronomy-cert2.jpg"]
    },
    {
        id: "act_duongtam",
        type: "activity",
        title: "Dưỡng Tâm (Mind Cultivation) - Leadership",
        category: "Leadership",
        date: "2024-2025",
        desc: "Participated in the Dưỡng Tâm (Mind Cultivation / Nurturing the Soul) Leadership program, demonstrating strong leadership and organizational skills through various community and team-building events.",
        thumb: "assets/images/duongtam-img1.jpg",
        assets: [
            "assets/images/duongtam-img1.jpg",
            "assets/images/duongtam-img2.jpg",
            "assets/images/duongtam-img3.jpg",
            "assets/images/duongtam-img4.jpg",
            "assets/images/duongtam-img.jpg",
            "assets/images/duongtam-cert.jpg"
        ]
    },
    {
        id: "act_care",
        type: "activity",
        title: "HR Member — C.A.R.E Project",
        category: "Community Service",
        date: "2025",
        desc: "HR team member for C.A.R.E Project, an initiative founded by Vietnamese students in Singapore/Vietnam to conduct charity outreach and community mentorship.",
        thumb: "assets/images/care-cert.jpg",
        assets: ["assets/images/care-cert.jpg"]
    },
    {
        id: "act_muadongam",
        type: "activity",
        title: "Mùa đông ấm (Warm Winter) 2025",
        category: "Community Service",
        date: "2025",
        desc: "Participated in the 'Mùa đông ấm' (Warm Winter) 2025 charity campaign, bringing necessary supplies, clothing, and support to disadvantaged communities in remote areas.",
        thumb: "assets/images/muadongam-img.jpg",
        assets: ["assets/images/muadongam-img.jpg"]
    },
    {
        id: "act_nhitw",
        type: "activity",
        title: "Charity Volunteer — National Children's Hospital",
        category: "Community Service",
        date: "2026",
        desc: "Volunteered directly at the National Children's Hospital in Hanoi, providing support for pediatric patients, organizing activities, and assisting with hospital logistics.",
        thumb: "assets/images/nhitw-photo.jpg",
        assets: [
            "assets/images/nhitw-photo.jpg",
            "assets/images/nhitw-1226.jpg",
            
            "assets/images/nhitw-1228.jpg",
            "assets/images/nhitw-1230.jpg",
            
            "assets/images/nhitw-1233.jpg",
            "assets/images/nhitw-1238.jpg",
            
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    initLoadingScreen();
    initRender();
    initLazyLoading();
    initScrollReveal();
    initScrollSpySidebar();
    initAvatarTilt();
    initRippleEffect();
    initTypewriter();
});

// Loading Screen Control
function initLoadingScreen() {
    const loader = document.getElementById('loader');
    if (!loader) return;
    setTimeout(() => {
        loader.classList.add('hide');
        setTimeout(() => {
            document.querySelector('.hero').classList.add('play-animation');
            initCounters();
        }, 300);
    }, 1200); 
}

// Render Engine with Upgraded Real-time Filtering
function initRender() {
    const awardsGrid = document.getElementById('awards-grid');
    const actGrid = document.getElementById('activities-grid');

    if(awardsGrid) awardsGrid.innerHTML = studentData.filter(d => d.type === 'award').map(createCard).join('');
    if(actGrid) actGrid.innerHTML = studentData.filter(d => d.type === 'activity').map(createCard).join('');

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const currentBtn = e.currentTarget;
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            currentBtn.classList.add('active');
            
            const filter = currentBtn.getAttribute('data-filter');
            const cards = actGrid.querySelectorAll('.card');
            
            let delayCount = 0;
            cards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-cat') === filter) {
                    card.style.display = 'flex';
                    card.classList.remove('visible');
                    card.style.transitionDelay = `${delayCount * 60}ms`;
                    setTimeout(() => card.classList.add('visible'), 30);
                    delayCount++;
                } else {
                    card.style.display = 'none';
                    card.classList.remove('visible');
                }
            });
        });
    });
}

function createCard(data) {
    return `
        <div class="card reveal-stagger" data-cat="${data.category}">
            <div class="card-img-wrap">
                <div class="card-overlay">
                    <button class="btn-view" onclick="openModal('${data.id}')"><i class="fas fa-microscope"></i> Analysis</button>
                </div>
                <span class="card-badge">${data.category}</span>
                <img data-src="${data.thumb}" alt="${data.title}" class="lazy">
            </div>
            <div class="card-content">
                <h3 class="card-title">${data.title}</h3>
                <p class="card-desc">${data.desc}</p>
                <div class="card-meta">
                    <span class="card-date"><i class="far fa-calendar-alt"></i> ${data.date}</span>
                </div>
            </div>
        </div>
    `;
}

// Typewriter Engine
function initTypewriter() {
    const textElement = document.getElementById('typewriter-text');
    if (!textElement) return;
    
    const phrases = [
        "Chemical & Bio-Product Engineering",
        "Applied Chemistry Researcher",
        "JDIE 2025 Double Gold Medalist"
    ];
    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    function type() {
        const current = phrases[phraseIdx];
        if (isDeleting) {
            textElement.textContent = current.substring(0, charIdx - 1);
            charIdx--;
        } else {
            textElement.textContent = current.substring(0, charIdx + 1);
            charIdx++;
        }

        let speed = isDeleting ? 30 : 70;

        if (!isDeleting && charIdx === current.length) {
            speed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            phraseIdx = (phraseIdx + 1) % phrases.length;
            speed = 400;
        }
        setTimeout(type, speed);
    }
    setTimeout(type, 600);
}

// Performance Optimization Systems
function initLazyLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if(img.dataset.src) {
                    img.src = img.dataset.src;
                    img.onload = () => img.classList.add('loaded');
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    }, { rootMargin: '50px', threshold: 0.01 });
    document.querySelectorAll('img.lazy').forEach(img => imageObserver.observe(img));
}

function initScrollReveal() {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05 });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    const staggerObserver = new IntersectionObserver((entries) => {
        let delayCount = 0;
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transitionDelay = `${delayCount * 100}ms`;
                entry.target.classList.add('visible');
                staggerObserver.unobserve(entry.target);
                delayCount++;
            }
        });
    }, { threshold: 0.05 });
    document.querySelectorAll('.reveal-stagger').forEach(el => staggerObserver.observe(el));
}

function initScrollSpySidebar() {
    const navItems = document.querySelectorAll('.sidebar .nav-item');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        sections.forEach(sec => {
            const secTop = sec.offsetTop;
            if (window.pageYOffset >= (secTop - 300)) {
                currentSectionId = sec.getAttribute('id');
            }
        });
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentSectionId}`) {
                item.classList.add('active');
            }
        });
    }, { passive: true });
}

function initAvatarTilt() {
    const avatar = document.querySelector('.hero-avatar');
    if (!avatar) return;
    avatar.addEventListener('mousemove', (e) => {
        const rect = avatar.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = ((y - (rect.height / 2)) / (rect.height / 2)) * -12;
        const rotateY = ((x - (rect.width / 2)) / (rect.width / 2)) * 12;
        avatar.style.transform = `perspective(800px) scale(1.03) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    avatar.addEventListener('mouseleave', () => {
        avatar.style.transform = `perspective(800px) scale(1) rotateX(0deg) rotateY(0deg)`;
    });
}

function initCounters() {
    document.querySelectorAll('.counter-val').forEach(target => {
        const endVal = parseFloat(target.getAttribute('data-target'));
        const duration = 1500;
        let start = null;
        const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const currentVal = (endVal * progress).toFixed(endVal % 1 === 0 ? 0 : 1);
            target.innerText = currentVal;
            if (progress < 1) window.requestAnimationFrame(step);
            else target.innerText = endVal;
        };
        window.requestAnimationFrame(step);
    });
}

function initRippleEffect() {
    document.querySelectorAll('.btn, .filter-btn, .nav-item').forEach(btn => {
        btn.addEventListener('click', function(e) {
            let ripple = document.createElement('span');
            ripple.className = 'ripple';
            this.appendChild(ripple);
            let rect = this.getBoundingClientRect();
            ripple.style.left = `${e.clientX - rect.left}px`;
            ripple.style.top = `${e.clientY - rect.top}px`;
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Formulation Lab Computational System
function triggerEffervescent() {
    const perilla = parseInt(document.getElementById('slide-perilla').value);
    const houttuynia = parseInt(document.getElementById('slide-houttuynia').value);
    const bubbles = document.getElementById('fever-bubbles');
    const output = document.getElementById('efficacy-output');
    const fluid = document.getElementById('beaker-fluid');
    
    fluid.style.height = `${Math.min(90, 20 + ((perilla + houttuynia)/200)*80)}%`;
    bubbles.innerHTML = '';

    for (let i = 0; i < 25; i++) {
        const b = document.createElement('div');
        b.className = 'bubble';
        b.style.left = `${Math.random() * 80 + 10}%`;
        b.style.width = `${Math.random() * 6 + 3}px`;
        b.style.height = b.style.width;
        b.style.animationDelay = `${Math.random() * 1.2}s`;
        b.style.animationDuration = `${0.8 + Math.random() * 1.2}s`;
        bubbles.appendChild(b);
    }

    setTimeout(() => {
        const diff = Math.abs(perilla - houttuynia);
        let color = '#8b5cf6', text = '';
        if (diff < 15) {
            color = '#10b981';
            text = `<strong>Success! Efficacy: 96.5%</strong><br>Optimal synergy achieved between Perillaldehyde and Houttuynin. Complete effervescent reaction.`;
        } else if (diff < 40) {
            color = '#f59e0b';
            text = `<strong>Warning: Efficacy: ${85 - diff}%</strong><br>Suboptimal dissolution rate. Balance the extract ratio closer to 1:1 for better synergy.`;
        } else {
            color = '#ef4444';
            text = `<strong>Failed: Efficacy: <50%</strong><br>Severe imbalance. Reaction failed to fully neutralize.`;
        }
        output.style.borderColor = color;
        output.style.backgroundColor = `${color}10`;
        output.innerHTML = text;
    }, 1200);
}

document.getElementById('slide-perilla')?.addEventListener('input', (e) => { document.getElementById('val-perilla').innerText = e.target.value; });
document.getElementById('slide-houttuynia')?.addEventListener('input', (e) => { document.getElementById('val-houttuynia').innerText = e.target.value; });

// Modal System Logic
const modal = document.getElementById('mainModal');
const lightbox = document.getElementById('lightbox');
let currentAssets = [], currentAssetIndex = 0;

function openModal(id) {
    const data = studentData.find(d => d.id === id);
    if (!data) return;

    document.getElementById('modalBadge').innerText = data.category;
    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalDate').innerText = data.date;
    document.getElementById('modalDesc').innerText = data.desc;

    currentAssets = data.assets || [];
    currentAssetIndex = 0;
    renderModalMedia();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function renderModalMedia() {
    const container = document.getElementById('modalMedia');
    if(currentAssets.length === 0) return;

    const src = currentAssets[currentAssetIndex];
    let html = `<img src="${src}" alt="Media" onclick="openLightbox('${src}')">`;
    if (currentAssets.length > 1) {
        html += `
            <button class="modal-nav prev" onclick="navigateModal(-1, event)"><i class="fas fa-chevron-left"></i></button>
            <button class="modal-nav next" onclick="navigateModal(1, event)"><i class="fas fa-chevron-right"></i></button>
            <div class="modal-thumbs">${currentAssets.map((asset, idx) => `<img src="${asset}" class="modal-thumb ${idx === currentAssetIndex ? 'active' : ''}" onclick="setModalAsset(${idx}, event)">`).join('')}</div>
        `;
    }
    container.innerHTML = html;
}

function navigateModal(dir, e) { if(e) e.stopPropagation(); currentAssetIndex = (currentAssetIndex + dir + currentAssets.length) % currentAssets.length; renderModalMedia(); }
function setModalAsset(idx, e) { if(e) e.stopPropagation(); currentAssetIndex = idx; renderModalMedia(); }
function openLightbox(src) { document.getElementById('lightboxImg').src = src; lightbox.classList.add('active'); }

document.querySelector('.modal-close')?.addEventListener('click', () => { modal.classList.remove('active'); document.body.style.overflow = ''; });
document.querySelector('.lightbox-close')?.addEventListener('click', () => lightbox.classList.remove('active'));
