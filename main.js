/* ============================================
   DATA — projetos por categoria
   Substitua os campos null pelas suas imagens reais:
   preview: "img/meu-preview.jpg"
   imagens: ["img/arte1.jpg", "img/arte2.jpg"]
============================================ */
const projetos = {
  socialmedia: [
    {
      nome: "Fut Champions",
      preview: "img/socialmedia/lojacamisas/lojacamisas-preview.webp",
      cor: "#00c9a7",
      imagens: [
        "img/socialmedia/lojacamisas/lojacamisas1.webp",
        "img/socialmedia/lojacamisas/lojacamisas2.webp",
        "img/socialmedia/lojacamisas/lojacamisas3.webp",
        "img/socialmedia/lojacamisas/lojacamisas4.webp"
      ],
      desc: "Artes para anúncios de loja e-commerce"
    },
    {
      nome: "Odonto Clínica",
      preview: "img/socialmedia/odontoclinica/odontoclinica-preview.webp",
      cor: "#e8ff47",
      imagens: [
        "img/socialmedia/odontoclinica/odontoclinica1.webp",
        "img/socialmedia/odontoclinica/odontoclinica3.webp",
        "img/socialmedia/odontoclinica/odontoclinica3.webp",
        "img/socialmedia/odontoclinica/odontoclinica4.webp",
        "img/socialmedia/odontoclinica/odontoclinica5.webp"
      ],
      desc: "Postagem para Clinica Dentária"
    },
    {
      nome: "Dynamis Agency",
      preview: "img/socialmedia/dynamis/dynamis-preview.webp",
      cor: "#a78bfa",
      imagens: [
        "img/socialmedia/dynamis/dynamis1.webp",
        "img/socialmedia/dynamis/dynamis2.webp",
        "img/socialmedia/dynamis/dynamis3.webp",
        "img/socialmedia/dynamis/dynamis4.webp"
      ],
      desc: "Imagens para agência de design"
    },
    {
      nome: "Porto Zero Agência",
      preview: "img/socialmedia/portozero/portozero-preview.webp",
      cor: "#f472b6",
      imagens: [
        "img/socialmedia/portozero/portozero1.webp",
        "img/socialmedia/portozero/portozero2.webp",
        "img/socialmedia/portozero/portozero3.webp",
        "img/socialmedia/portozero/portozero4.webp"
      ],
      desc: "Imagens para agência de design"
    }
  ],
  esportes: [
    {
      nome: "ABECAT",
      preview: "img/esportes/abecat/abecat-preview.webp",
      cor: "#ff7b00",
      imagens: [
        "img/esportes/abecat/abecat1.webp",
        "img/esportes/abecat/abecat2.webp",
        "img/esportes/abecat/abecat3.webp"
      ],
      desc: "Identidade visual de clube"
    },
    {
      nome: "Matchday",
      preview: "img/esportes/players/players-preview.webp",
      cor: "#ffffff",
      imagens: [
        "img/esportes/players/players1.webp",
        "img/esportes/players/players2.webp",
        "img/esportes/players/players3.webp",
        "img/esportes/players/players4.webp"
      ],
      desc: "Artes Matchday para jogadores"
    },
    {
      nome: "Central Caruaru",
      preview: "img/esportes/centralcaruaru/centralcaruaru-preview.webp",
      cor: "#ffffff",
      imagens: [
        "img/esportes/centralcaruaru/centralcaruaru1.webp",
        "img/esportes/centralcaruaru/centralcaruaru2.webp"
      ],
      desc: "Identidade visual de clube"
    },
    {
      nome: "Torcida",
      preview: "img/esportes/torcida/torcida-preview.webp",
      cor: "#04e9ed",
      imagens: [
        "img/esportes/torcida/torcida1.webp",
        "img/esportes/torcida/torcida2.webp",
        "img/esportes/torcida/torcida3.webp",
        "img/esportes/torcida/torcida4.webp"
      ],
      desc: "Torcida organizada — artes sociais"
    }
  ],
  esports: [
    {
      nome: "INCON",
      preview: "img/esports/incon/incon-preview.webp",
      cor: "#F2E3B6",
      imagens: [
        "img/esports/incon/incon1.webp",
        "img/esports/incon/incon2.webp",
        "img/esports/incon/incon3.webp",
        "img/esports/incon/incon4.webp"
      ],
      desc: "Social Media completa"
    },
    {
      nome: "HSP E-SPORTS",
      preview: "img/esports/hspesports/hspesports-preview.webp",
      cor: "#EB1700",
      imagens: [
        "img/esports/hspesports/hspesports1.webp",
        "img/esports/hspesports/hspesports2.webp",
        "img/esports/hspesports/hspesports3.webp",
      ],
      desc: "Social Media completa"
    },
    {
      nome: "Real Hunters",
      preview: "img/esports/realhunters/realhunters-preview.webp",
      cor: "#63E0DE",
      imagens: [
        "img/esports/realhunters/realhunters1.webp",
        "img/esports/realhunters/realhunters2.webp",
        "img/esports/realhunters/realhunters3.webp"
      ],
      desc: "Social Media completa"
    },
    {
      nome: "AD CUP",
      preview: "img/esports/adcup/adcup-preview.webp",
      cor: "#f83838",
      imagens: [
        "img/esports/adcup/adcup1.webp",
        "img/esports/adcup/adcup2.webp",
      ],
      desc: "Artes para competição"
    }
  ]
};

/* ============================================
   NAV — sticky ao rolar + burger mobile
============================================ */
const navbar = document.getElementById('navbar');
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Fecha o menu mobile ao clicar em um link
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    navLinks.classList.remove('open');

    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 60); // pequeno delay para o menu fechar antes de rolar
      }
    }
  });
});

const navClose = document.getElementById('navClose');

burger.addEventListener('click', () => {
  navLinks.classList.add('open');
  navClose.classList.add('visible');
  burger.style.display = 'none';
});

navClose.addEventListener('click', () => {
  navLinks.classList.remove('open');
  navClose.classList.remove('visible');
  burger.style.display = 'flex';
});

/* ============================================
   HERO CTA — scroll suave até categorias
============================================ */
document.getElementById('heroBtn').addEventListener('click', e => {
  e.preventDefault();
  document.getElementById('categorias').scrollIntoView({ behavior: 'smooth' });
});

/* ============================================
   CATEGORIAS → PROJETOS (troca dinâmica)
============================================ */
const projetosSection = document.getElementById('projetos');
const projGrid = document.getElementById('projGrid');
const projLabel = document.getElementById('projLabel');
const projTitle = document.getElementById('projTitle');
const btnBack = document.getElementById('btnBack');

const catNames = {
  youtube: { label: 'Conteúdo Digital', title: 'Artes Social Media' },
  esportes: { label: 'Esporte', title: 'Artes Esportivas' },
  esports: { label: 'Gaming', title: 'E-Sports' }
};

/**
 * Abre a seção de projetos de uma categoria
 * @param {string} cat — chave da categoria ('youtube' | 'esportes' | 'esports')
 */
function openCategory(cat) {
  const items = projetos[cat] || [];
  const meta = catNames[cat] || { label: cat, title: cat };

  // Atualiza labels
  projLabel.textContent = meta.label;
  projTitle.textContent = meta.title;

  // Limpa e reconstrói os cards
  projGrid.innerHTML = '';

  items.forEach((proj, i) => {
    const card = document.createElement('div');
    card.className = 'proj-card';
    card.style.animationDelay = `${i * 0.08}s`;
    // card.style.setProperty('--cor', proj.cor);
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Ver projeto ${proj.nome}`);

    // Gera um SVG placeholder por projeto (substitua por <img> quando tiver imagens reais)
    card.innerHTML = `
    <img class="proj-thumb" src="${proj.preview}" alt="${proj.nome}">
    
    <div class="proj-lock">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="rgba(240,240,240,.4)" stroke-width="2">
        <rect x="3" y="11" width="18" height="11" rx="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    </div>

    <div class="proj-overlay">
      <div class="proj-name">${proj.nome}</div>
      <div class="proj-view">
        Ver projeto
      </div>
    </div>
  `;

    card.addEventListener('click', () => openModal(proj, meta.title));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') openModal(proj, meta.title);
    });

    projGrid.appendChild(card);
  });

  // Exibe a seção e rola até ela
  projetosSection.classList.add('visible');
  setTimeout(() => {
    projetosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 60);
}

// Clique nos cards de categoria
document.querySelectorAll('.cat-card').forEach(card => {
  card.addEventListener('click', () => openCategory(card.dataset.cat));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') openCategory(card.dataset.cat);
  });
});

// Botão voltar
btnBack.addEventListener('click', () => {
  projetosSection.classList.remove('visible');
  document.getElementById('categorias').scrollIntoView({ behavior: 'smooth' });
});

/* ============================================
   MODAL + CARROSSEL
============================================ */
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalCat = document.getElementById('modalCat');
const modalCounter = document.getElementById('modalCounter');
const carousel = document.getElementById('carousel');
const dotsContainer = document.getElementById('carouselDots');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentSlide = 0;
let slides = [];

/**
 * Abre o modal para um projeto específico
 * @param {object} proj   — objeto do projeto
 * @param {string} catLabel — nome da categoria para exibição
 */
function openModal(proj, catLabel) {
  currentSlide = 0;
  modalTitle.textContent = proj.nome;
  modalCat.textContent = catLabel + ' · ' + proj.desc;

  // Remove slides anteriores
  carousel.querySelectorAll('.carousel-slide').forEach(s => s.remove());
  dotsContainer.innerHTML = '';
  slides = [];

  const count = proj.imagens.length;

  proj.imagens.forEach((imgSrc, i) => {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide' + (i === 0 ? ' active' : '');

    if (imgSrc) {
      // Imagem real
      slide.innerHTML = `<img src="${imgSrc}" alt="${proj.nome} — imagem ${i + 1}">`;

      // verifica altura da imagem após carregar
      const img = slide.querySelector('img');
      img.addEventListener('load', () => {
        if (img.naturalHeight > 1500) {
          img.style.objectPosition = 'bottom';
        }
      });
    } else {
      // Placeholder SVG
      slide.innerHTML = `
        <div class="placeholder"
             style="background:linear-gradient(135deg,#0d0d0d 0%,#1a1a1a 100%);">
          <svg width="200" height="200" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" fill="${proj.cor}0a"
                    stroke="${proj.cor}" stroke-width=".8" stroke-dasharray="6 4"/>
            <circle cx="100" cy="100" r="50" fill="${proj.cor}0d"
                    stroke="${proj.cor}" stroke-width=".5"/>
            <circle cx="100" cy="100" r="25" fill="${proj.cor}15"/>
            <text x="100" y="107" font-family="sans-serif" font-size="28"
                  fill="${proj.cor}" opacity=".7" text-anchor="middle">${proj.nome[0]}</text>
            <circle cx="100" cy="20" r="3" fill="${proj.cor}" opacity=".4"/>
            <circle cx="180" cy="100" r="3" fill="${proj.cor}" opacity=".25"/>
            <circle cx="20"  cy="100" r="3" fill="${proj.cor}" opacity=".35"/>
          </svg>
          <span style="color:rgba(240,240,240,.3);font-size:.8rem;
                       letter-spacing:.12em;text-transform:uppercase;">
            ${proj.nome} — Arte ${i + 1}
          </span>
        </div>
      `;
    }

    // Insere antes dos botões de nav
    carousel.insertBefore(slide, prevBtn);
    slides.push(slide);

    // Dot de navegação
    const dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  updateCounter(count);
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/**
 * Navega para um slide específico
 * @param {number} n — índice do slide destino
 */
function goTo(n) {
  const dots = dotsContainer.querySelectorAll('.dot');
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');

  currentSlide = (n + slides.length) % slides.length;

  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
  updateCounter(slides.length);
}

/** Atualiza o contador "x / total" */
function updateCounter(total) {
  modalCounter.textContent = `${currentSlide + 1} / ${total}`;
}

prevBtn.addEventListener('click', () => goTo(currentSlide - 1));
nextBtn.addEventListener('click', () => goTo(currentSlide + 1));

/** Fecha o modal */
function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);

// Fecha ao clicar fora do box
modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) closeModal();
});

// Navegação por teclado
document.addEventListener('keydown', e => {
  if (!modalOverlay.classList.contains('open')) return;
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowLeft') goTo(currentSlide - 1);
  if (e.key === 'ArrowRight') goTo(currentSlide + 1);
});

/* ============================================
   SCROLL REVEAL — IntersectionObserver
============================================ */
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

// --------

window.onload = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};