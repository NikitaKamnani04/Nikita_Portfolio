// Ensure GSAP and ScrollTrigger are loaded
gsap.registerPlugin(ScrollTrigger);

// --- Project Data ---
const projectData = {
    certificate: {
        title: 'SmartCertify – A Certification Platform',
        description: 'A full-stack web application currently being developed using .NET Core 9, Angular 19, and SQL Server. It enables users to register, take dynamic certification tests, track scores, and download certificates. Focused on delivering a scalable architecture and intuitive user experience.',
        techStack: ['.NET Core 9', 'Angular 19', 'SQL Server'],
        github: 'https://github.com/NikitaKamnani04/SmartCertify_A-Certification-Platform', // Placeholder
        category: 'webdev',
        image: 'Images/Certificate.png'
    },
    chatbot: {
        title: 'AI-Powered Medical Chatbot',
        description: 'Designed and implemented an AI-powered chatbot that integrates semantic search and vector-based retrieval to accurately answer medical queries, achieving a 60% improvement in response accuracy when tested on 20+ real-world medical queries. Significantly enhanced user experience and reliability.',
        techStack: ['Python', 'Flask', 'LangChain', 'Pinecone'],
        github: 'https://github.com/NikitaKamnani04/End-to-End-Medical-Chatbot', // Placeholder
        category: 'ai',
        image: 'Images/Chatbot.png'
    },
    voting: {
        title: 'Online Voting System',
        description: 'Developed a secure and responsive online voting system with role-based authentication, admin and voter modules, and server-side validation to ensure integrity across 100+ mock voting records.',
        techStack: ['PHP', 'MySQL', 'HTML', 'CSS'],
        github: 'https://github.com/NikitaKamnani04/Online_Voting_System', // Placeholder
        category: 'webdev',
        image: 'Images/Voting.png'
    },
    notes: {
        title: 'Notes Management System',
        description: 'Real-time note app with Angular 14 & Firebase, supporting CRUD for 100+ notes, drag-and-drop organization, and responsive UI design.',
        techStack: ['Angular 14', 'Firebase', 'TypeScript'],
        github: 'https://github.com/NikitaKamnani04/Notes_Management_Application', // Placeholder
        category: 'webdev',
        image: 'Images/Notes.png'
    },
    newsApp: {
        title: 'News Application',
        description: 'A responsive news platform fetching the latest headlines via News API. Includes real-time updates, category filtering (Technology, Sports, Business), and article bookmarking for an enhanced user experience on desktop and mobile.',
        techStack: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'News API'],
        github: 'https://github.com/NikitaKamnani04/News_Application', // Placeholder
        category: 'webdev',
        image: 'Images/News.png'
    },
    weatherApp: {
        title: 'Weather App Using React',
        description: 'A weather application built with React that fetches real-time weather data from OpenWeatherMap API. Displays temperature, weather conditions, icons, and current date with default weather for Delhi and search for any city.',
        techStack: ['React', 'JavaScript (ES6)', 'CSS', 'OpenWeatherMap API'],
        github: 'https://github.com/NikitaKamnani04/react-weather-app', // Placeholder
        category: 'webdev',
        image: 'Images/Weather.png'
    },
    ticTacToe: {
        title: 'Tic Tac Toe Game',
        description: 'A classic web-based Tic Tac Toe game implemented using HTML, CSS, and JavaScript, providing interactive play with clear move highlights and win detection.',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/NikitaKamnani04/Tic-Tac-Toe', // Placeholder
        category: 'webdev',
        image: 'Images/game.png'
    }
};


// --- Modal Functions (global for HTML inline use) ---
function openProjectModal(projectId) {
    const project = projectData[projectId];
    if (project) {
        document.getElementById('modalTitle').innerText = project.title;
        document.getElementById('modalDescription').innerText = project.description; // Description is now ONLY here
        document.getElementById('modalGithubLink').href = project.github || '#';

        const techList = document.getElementById('modalTechStack');
        techList.innerHTML = '';
        project.techStack.forEach(tech => {
            const li = document.createElement('li');
            li.textContent = tech;
            techList.appendChild(li);
        });

        document.getElementById('projectModal').style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeProjectModal() {
    document.getElementById('projectModal').style.display = 'none';
    document.body.style.overflow = ''; // Restore background scrolling
}

document.addEventListener('DOMContentLoaded', () => {

    const modal = document.getElementById('projectModal');
    if (modal) modal.style.display = 'none'; // Ensure modal is hidden initially

    // --- Navbar Active Link ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    const updateNavLink = () => {
        let activeId = null;
        const scrollY = window.scrollY;

        for (let i = sections.length - 1; i >= 0; i--) {
            const sectionTop = sections[i].offsetTop - navbarHeight;
            const sectionBottom = sectionTop + sections[i].offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionBottom) {
                activeId = sections[i].id;
                break;
            }
        }

        navLinks.forEach(link => {
            link.classList.toggle('active-nav-link', activeId && link.getAttribute('href').includes(activeId));
        });
    };

    window.addEventListener('scroll', updateNavLink);
    updateNavLink();

    // --- Hamburger Menu ---
    const hamburger = document.querySelector('.hamburger-menu');
    const navContainer = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navContainer.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
        document.body.style.overflow = navContainer.classList.contains('active') ? 'hidden' : '';
    });

    navLinks.forEach(link =>
        link.addEventListener('click', () => {
            if (navContainer.classList.contains('active')) {
                navContainer.classList.remove('active');
                hamburger.querySelector('i').classList.remove('fa-times');
                hamburger.querySelector('i').classList.add('fa-bars');
                document.body.style.overflow = '';
            }
        })
    );

    // --- Hero Section Animation + Typewriter ---
    const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
    heroTimeline
        .from(".site-logo", { opacity: 0, y: -20 })
        .from(".nav-links li", { opacity: 0, y: -20, stagger: 0.1 }, "<0.2")
        .from(".hero-name", { opacity: 0, y: 30 }, ">-0.5")
        .from(".hero-summary", {
            opacity: 0, y: 30, duration: 1,
            onComplete: () => typeWriter(["Nikita Kamnani", "Software Developer", "Backend Developer"])
        }, "<0.2")
        .from(".hero-buttons .btn", { opacity: 0, y: 30, stagger: 0.2 }, "<0.2")
        .from(".social-icons a", { opacity: 0, y: 20, stagger: 0.1 }, "<0.2")
        .from(".hero-photo", { opacity: 0, scale: 0.8, ease: "back.out(1.7)" }, "<0.5");

    function typeWriter(titles) {
        const el = document.getElementById('dynamic-title');
        let index = 0, char = 0, deleting = false;

        function type() {
            const current = titles[index];
            el.textContent = deleting ? current.slice(0, --char) : current.slice(0, ++char);

            let delay = deleting ? 50 : 100;
            if (!deleting && char === current.length) { delay = 1500; deleting = true; }
            else if (deleting && char === 0) { deleting = false; index = (index + 1) % titles.length; }

            setTimeout(type, delay);
        }
        type();
    }

    // --- GSAP Scroll Animations ---
    gsap.from(".about-section .section-title", {
        opacity: 0, y: 50, duration: 1,
        scrollTrigger: { trigger: ".about-section", start: "top 80%" }
    });
    gsap.from(".about-photo", {
        opacity: 0, x: -50, duration: 1,
        scrollTrigger: { trigger: ".about-section", start: "top 70%" }
    });
    gsap.from(".about-right", {
        opacity: 0, x: 50, duration: 1, delay: 0.2,
        scrollTrigger: { trigger: ".about-section", start: "top 70%" }
    });

    document.querySelectorAll(".timeline-item").forEach(item =>
        gsap.from(item, {
            opacity: 0, y: 50, duration: 0.8,
            scrollTrigger: { trigger: item, start: "top 85%", once: true }
        }));

    gsap.from(".projects-section .section-title", {
        opacity: 0, y: 50, duration: 1,
        scrollTrigger: { trigger: ".projects-section", start: "top 80%" }
    });
    gsap.from(".project-filters", {
        opacity: 0, y: 30, duration: 0.8, delay: 0.2,
        scrollTrigger: { trigger: ".projects-section", start: "top 75%" }
    });

    // Note: Project cards animation will be handled by the carousel rendering function

    gsap.from(".skills-section .section-title", {
        opacity: 0, y: 50, duration: 1,
        scrollTrigger: { trigger: ".skills-section", start: "top 80%" }
    });
    gsap.from(".skill-card", {
        opacity: 0, y: 50, stagger: 0.15, duration: 0.8,
        scrollTrigger: { trigger: ".skills-grid", start: "top 80%", once: true }
    });

    gsap.from(".achievements-section .section-title", {
        opacity: 0, y: 50, duration: 1,
        scrollTrigger: { trigger: ".achievements-section", start: "top 80%" }
    });
    gsap.from(".achievement-item", {
        opacity: 0, x: -50, stagger: 0.2, duration: 0.8,
        scrollTrigger: { trigger: ".achievements-list", start: "top 85%", once: true }
    });

    gsap.from(".contact-section .section-title", {
        opacity: 0, y: 50, duration: 1,
        scrollTrigger: { trigger: ".contact-section", start: "top 80%" }
    });
    gsap.from(".contact-info", {
        opacity: 0, y: 50, duration: 0.9,
        scrollTrigger: { trigger: ".contact-section", start: "top 75%" }
    });

    // --- Modal close on outside click & Esc ---
    window.addEventListener('click', e => {
        if (e.target.id === 'projectModal') closeProjectModal();
    });
    document.addEventListener('keydown', e => {
        // Only close with Escape if the modal IS currently displayed
        if (e.key === 'Escape' && document.getElementById('projectModal').style.display === 'flex') {
            closeProjectModal();
        }
    });


    // --- CAROUSEL LOGIC ---
    const projectsCarousel = document.querySelector('.projects-carousel');
    const carouselDotsContainer = document.querySelector('.carousel-dots');
    const filterButtons = document.querySelectorAll('.filter-btn');

    let currentProjectIndex = 0;
    let visibleProjects = []; // Stores the currently visible (filtered) projects

    // Function to render projects into the carousel based on filter
    function renderProjects(filter = 'all') {
        projectsCarousel.innerHTML = ''; // Clear existing projects
        visibleProjects = []; // Reset visible projects

        Object.keys(projectData).forEach(projectId => {
            const project = projectData[projectId];
            if (filter === 'all' || project.category === filter) {
                visibleProjects.push(project);

                const projectCard = document.createElement('div');
                projectCard.classList.add('project-card');
                projectCard.dataset.category = project.category; // Add category data attribute

                // Use the project's specific image path, or a generic placeholder if not defined
                const imageUrl = project.image || 'https://via.placeholder.com/400x180?text=Project+Image';

                projectCard.innerHTML = `
                    <img src="${imageUrl}" alt="${project.title}" class="project-img">
                    <h3>${project.title}</h3>
                    <div class="project-links">
                        <button class="btn btn-small view-btn" onclick="openProjectModal('${projectId}')">
                            Details <i class="fas fa-arrow-right"></i>
                        </button>
                    </div>
                `;
                // Removed: <p>${project.description}</p>
                projectsCarousel.appendChild(projectCard);
            }
        });

        // After rendering, ensure the carousel is correctly set up
        currentProjectIndex = 0; // Reset index to the first project
        updateCarouselPosition();
        createDots();
        animateNewCards(); // Animate new cards into view
    }

    function animateNewCards() {
        gsap.fromTo(projectsCarousel.children,
            { opacity: 0, y: 50, scale: 0.8 },
            { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)" }
        );
    }

    function createDots() {
        carouselDotsContainer.innerHTML = ''; // Clear existing dots
        // Only create dots for visible projects
        visibleProjects.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (index === currentProjectIndex) {
                dot.classList.add('active');
            }
            dot.addEventListener('click', () => {
                currentProjectIndex = index;
                updateCarouselPosition();
                updateDots();
            });
            carouselDotsContainer.appendChild(dot);
        });
    }

    function updateDots() {
        const dots = document.querySelectorAll('.carousel-dots .dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentProjectIndex);
        });
    }

    function updateCarouselPosition() {
        if (visibleProjects.length === 0) {
            projectsCarousel.style.transform = 'translateX(0)';
            return;
        }

        // Calculate the scroll amount
        const cardWidth = projectsCarousel.children[0] ? projectsCarousel.children[0].offsetWidth : 0;
        const gap = 30; // Defined in CSS as --gap for carousel
        const totalCardWidth = cardWidth + gap;

        let translateX = -currentProjectIndex * totalCardWidth; // Simple left shift

        // Boundary conditions: prevent over-scrolling
        const carouselWidth = projectsCarousel.offsetWidth;
        const contentWidth = visibleProjects.length * totalCardWidth - gap; // Total width of all cards + gaps

        let maxTranslateX = 0;
        if (contentWidth > carouselWidth) {
            maxTranslateX = -(contentWidth - carouselWidth);
        } else {
            maxTranslateX = 0;
        }

        translateX = Math.max(translateX, maxTranslateX);
        translateX = Math.min(translateX, 0);

        gsap.to(projectsCarousel, {
            x: translateX,
            duration: 0.5,
            ease: "power3.out"
        });

        updateDots();
    }

    // --- Project Filtering (Now connected to carousel rendering) ---
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filter = button.dataset.filter;
            renderProjects(filter); // Re-render carousel with filtered projects
        });
    });

    // Initial render of all projects when page loads
    renderProjects('all');

    // Re-adjust carousel on window resize
    window.addEventListener('resize', () => {
        updateCarouselPosition();
    });




});

