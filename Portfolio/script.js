// Ensure GSAP and ScrollTrigger are loaded
gsap.registerPlugin(ScrollTrigger);

// --- Project Data ---
const projectData = {
    certificate: {
        title: 'SmartCertify – A Certification Platform',
        description: 'A full-stack web application currently being developed using .NET Core 9, Angular 19, and SQL Server. It enables users to register, take dynamic certification tests, track scores, and download certificates. Focused on delivering a scalable architecture and intuitive user experience.',
        techStack: ['.NET Core 9', 'Angular 19', 'SQL Server'],
        github: 'https://github.com/NikitaKamnani04/SmartCertify_A-Certification-Platform',
        category: 'webdev',
        image: 'Images/Certificate.png'
    },
    chatbot: {
        title: 'AI-Powered Medical Chatbot',
        description: 'Designed and implemented an AI-powered chatbot that integrates semantic search and vector-based retrieval to accurately answer medical queries, achieving a 60% improvement in response accuracy when tested on 20+ real-world medical queries.',
        techStack: ['Python', 'Flask', 'LangChain', 'Pinecone'],
        github: 'https://github.com/NikitaKamnani04/End-to-End-Medical-Chatbot',
        category: 'ai',
        image: 'Images/Chatbot.png'
    },
    voting: {
        title: 'Online Voting System',
        description: 'Developed a secure and responsive online voting system with role-based authentication, admin and voter modules, and server-side validation to ensure integrity across 100+ mock voting records.',
        techStack: ['PHP', 'MySQL', 'HTML', 'CSS'],
        github: 'https://github.com/NikitaKamnani04/Online_Voting_System',
        category: 'webdev',
        image: 'Images/Voting.png'
    },
    notes: {
        title: 'Notes Management System',
        description: 'Real-time note app with Angular 14 & Firebase, supporting CRUD for 100+ notes, drag-and-drop organization, and responsive UI design.',
        techStack: ['Angular 14', 'Firebase', 'TypeScript'],
        github: 'https://github.com/NikitaKamnani04/Notes_Management_Application',
        category: 'webdev',
        image: 'Images/Notes.png'
    },
    newsApp: {
        title: 'News Application',
        description: 'A responsive news platform fetching the latest headlines via News API. Includes real-time updates, category filtering (Technology, Sports, Business), and article bookmarking for enhanced user experience.',
        techStack: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'News API'],
        github: 'https://github.com/NikitaKamnani04/News_Application',
        category: 'webdev',
        image: 'Images/News.png'
    },
    weatherApp: {
        title: 'Weather App Using React',
        description: 'A weather application built with React that fetches real-time weather data from OpenWeatherMap API.',
        techStack: ['React', 'JavaScript (ES6)', 'CSS', 'OpenWeatherMap API'],
        github: 'https://github.com/NikitaKamnani04/react-weather-app',
        category: 'webdev',
        image: 'Images/Weather.png'
    },
    ticTacToe: {
        title: 'Tic Tac Toe Game',
        description: 'A classic web-based Tic Tac Toe game implemented using HTML, CSS, and JavaScript, providing interactive play with clear move highlights and win detection.',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/NikitaKamnani04/Tic-Tac-Toe',
        category: 'webdev',
        image: 'Images/game.png'
    }
};

// --- Modal Functions ---
function openProjectModal(projectId) {
    const project = projectData[projectId];
    if (project) {
        document.getElementById('modalTitle').innerText = project.title;
        document.getElementById('modalDescription').innerText = project.description;
        document.getElementById('modalGithubLink').href = project.github || '#';
        const techList = document.getElementById('modalTechStack');
        techList.innerHTML = '';
        project.techStack.forEach(tech => {
            const li = document.createElement('li');
            li.textContent = tech;
            techList.appendChild(li);
        });
        document.getElementById('projectModal').style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}
function closeProjectModal() {
    document.getElementById('projectModal').style.display = 'none';
    document.body.style.overflow = '';
}

// --- DOMContentLoaded ---
document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('projectModal').style.display = 'none';

    // --- Hero Animation + Faster typewriter ---
    const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.5 } });
    heroTimeline
        .from(".site-logo", { opacity: 0, y: -20 })
        .from(".nav-links li", { opacity: 0, y: -20, stagger: 0.05 }, "<0.1")
        .from(".hero-name", { opacity: 0, y: 30 }, ">-0.3")
        .from(".hero-summary", {
            opacity: 0, y: 30,
            onComplete: () => typeWriter(["Nikita Kamnani", "Software Developer", "Backend Developer"])
        }, "<0.1")
        .from(".hero-buttons .btn", { opacity: 0, y: 30, stagger: 0.1 }, "<0.1")
        .from(".social-icons a", { opacity: 0, y: 20, stagger: 0.05 }, "<0.1")
        .from(".hero-photo", { opacity: 0, scale: 0.8, ease: "back.out(1.7)" }, "<0.3");

    function typeWriter(titles) {
        const el = document.getElementById('dynamic-title');
        let index = 0, char = 0, deleting = false;
        function type() {
            const current = titles[index];
            el.textContent = deleting ? current.slice(0, --char) : current.slice(0, ++char);
            let delay = deleting ? 30 : 70;
            if (!deleting && char === current.length) { delay = 800; deleting = true; }
            else if (deleting && char === 0) { deleting = false; index = (index + 1) % titles.length; }
            setTimeout(type, delay);
        }
        type();
    }

    // --- Scroll Animations (sped up) ---
    gsap.from(".about-section .section-title", { opacity: 0, y: 50, duration: 0.5, scrollTrigger: { trigger: ".about-section", start: "top 80%" }});
    gsap.from(".about-photo", { opacity: 0, x: -50, duration: 0.5, scrollTrigger: { trigger: ".about-section", start: "top 70%" }});
    gsap.from(".about-right", { opacity: 0, x: 50, duration: 0.5, delay: 0.1, scrollTrigger: { trigger: ".about-section", start: "top 70%" }});
    gsap.from(".projects-section .section-title", { opacity: 0, y: 50, duration: 0.5, scrollTrigger: { trigger: ".projects-section", start: "top 80%" }});
    gsap.from(".project-filters", { opacity: 0, y: 30, duration: 0.4, delay: 0.1, scrollTrigger: { trigger: ".projects-section", start: "top 75%" }});
    gsap.from(".skills-section .section-title", { opacity: 0, y: 50, duration: 0.5, scrollTrigger: { trigger: ".skills-section", start: "top 80%" }});
    gsap.from(".skill-card", { opacity: 0, y: 50, stagger: 0.1, duration: 0.4, scrollTrigger: { trigger: ".skills-grid", start: "top 80%", once: true }});
    gsap.from(".achievements-section .section-title", { opacity: 0, y: 50, duration: 0.5, scrollTrigger: { trigger: ".achievements-section", start: "top 80%" }});
    gsap.from(".achievement-item", { opacity: 0, x: -50, stagger: 0.1, duration: 0.4, scrollTrigger: { trigger: ".achievements-list", start: "top 85%", once: true }});
    gsap.from(".contact-section .section-title", { opacity: 0, y: 50, duration: 0.5, scrollTrigger: { trigger: ".contact-section", start: "top 80%" }});
    gsap.from(".contact-info", { opacity: 0, y: 50, duration: 0.4, scrollTrigger: { trigger: ".contact-section", start: "top 75%" }});

    // --- Carousel Logic (sped up) ---
    const projectsCarousel = document.querySelector('.projects-carousel');
    const carouselDotsContainer = document.querySelector('.carousel-dots');
    const filterButtons = document.querySelectorAll('.filter-btn');
    let currentProjectIndex = 0;
    let visibleProjects = [];

    function renderProjects(filter = 'all') {
        projectsCarousel.innerHTML = '';
        visibleProjects = [];
        Object.keys(projectData).forEach(projectId => {
            const project = projectData[projectId];
            if (filter === 'all' || project.category === filter) {
                visibleProjects.push(project);
                const card = document.createElement('div');
                card.classList.add('project-card');
                card.innerHTML = `
                    <img src="${project.image}" alt="${project.title}" class="project-img">
                    <h3>${project.title}</h3>
                    <div class="project-links">
                        <button class="btn btn-small view-btn" onclick="openProjectModal('${projectId}')">
                            Details <i class="fas fa-arrow-right"></i>
                        </button>
                    </div>`;
                projectsCarousel.appendChild(card);
            }
        });
        currentProjectIndex = 0;
        updateCarouselPosition();
        createDots();
        animateNewCards();
    }
    function animateNewCards() {
        gsap.fromTo(projectsCarousel.children,
            { opacity: 0, y: 50, scale: 0.8 },
            { opacity: 1, y: 0, scale: 1, duration: 0.3, stagger: 0.05, ease: "back.out(1.7)" });
    }
    function createDots() {
        carouselDotsContainer.innerHTML = '';
        visibleProjects.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (i === currentProjectIndex) dot.classList.add('active');
            dot.addEventListener('click', () => { currentProjectIndex = i; updateCarouselPosition(); updateDots(); });
            carouselDotsContainer.appendChild(dot);
        });
    }
    function updateDots() {
        const dots = document.querySelectorAll('.carousel-dots .dot');
        dots.forEach((dot, i) => dot.classList.toggle('active', i === currentProjectIndex));
    }
    function updateCarouselPosition() {
        if (visibleProjects.length === 0) return;
        const cardWidth = projectsCarousel.children[0]?.offsetWidth || 0;
        const gap = 30;
        let translateX = -currentProjectIndex * (cardWidth + gap);
        translateX = Math.min(0, translateX);
        gsap.to(projectsCarousel, { x: translateX, duration: 0.3, ease: "power3.out" });
        updateDots();
    }
    filterButtons.forEach(button =>
        button.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            button.classList.add('active');
            renderProjects(button.dataset.filter);
        }));
    renderProjects('all');
    window.addEventListener('resize', updateCarouselPosition);
});
