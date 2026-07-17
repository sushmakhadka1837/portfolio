const documentsData = [
  {
    title: "Resume / CV",
    description: "Updated professional profile document.",
    link: "#"
  },
  {
    title: "Citizenship / ID Copy",
    description: "Identity proof file for official verification.",
    link: "#"
  },
  {
    title: "Main Certificates",
    description: "Core certificates related to skills and roles.",
    link: "#"
  }
];

const trainingsData = [
  {
    title: "Leadership Training",
    description: "Teamwork and communication focused workshop.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Technical Bootcamp",
    description: "Hands-on practice and project-based learning.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Public Speaking Session",
    description: "Presentation and confidence-building class.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
  }
];

const servicesData = [
  {
    title: "Documentation Support",
    description: "Help in preparing clear and professional documents."
  },
  {
    title: "Training Coordination",
    description: "Planning and managing training events and workshops."
  },
  {
    title: "Consultation Service",
    description: "Guidance based on practical field experience."
  }
];

const projectData = [
  {
    slug: "pet-adoption-system",
    type: "Minor Project",
    title: "Pet Adoption System",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80",
    description:
      "A frontend-only pet adoption system built to present pet listings, adoption flow, and a simple user-friendly interface for browsing available pets.",
    tech: "Frontend Only",
    details: [
      "Built fully with frontend technologies for the college minor project.",
      "Focused on clean layout, pet listing view, and adoption flow UI.",
      "No backend integration was used because the project was intentionally minor."
    ]
  },
  {
    slug: "online-grocery-system",
    type: "Major Project",
    title: "Online Grocery System",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
    description:
      "A PHP, Laravel, and MySQL-based e-commerce system where customers can browse goods, place orders, and complete payments through Stripe integration.",
    tech: "PHP, Laravel, MySQL, Stripe",
    details: [
      "Customer portal for browsing goods, adding items, placing orders, and checking out.",
      "Built using PHP, Laravel, and MySQL with Stripe payment integration.",
      "Designed for a real-time shopping experience with secure transaction flow."
    ]
  },
  {
    slug: "result-management-system",
    type: "Major Project",
    title: "Result Management System",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    description:
      "A college-based portal for students, teachers, and admin with AI integration for marks prediction, MCQ solving, document printout, notes upload, approvals, and notice viewing.",
    tech: "Student, Teacher & Admin Portal",
    details: [
      "Separate portals for students, teachers, and admin with role-based access.",
      "AI features included marks prediction and daily MCQ solving support.",
      "Students could upload notes, view notices, and print documents while teachers handled approvals.",
      "Student can easily analyze their semesterwise perfomance and attendance days",
     "Admin can easily manage the whole system and can view the overall performance of students and teachers."
    ]
  }
];

const educationData = [
  {
    year: "2016 - 2018",
    title: "High School",
    detail: "Completed secondary education with core academic focus."
  },
  {
    year: "2018 - 2021",
    title: "College",
    detail: "Bachelor-level study with practical and theoretical subjects."
  },
  {
    year: "2022 - Present",
    title: "Continuous Learning",
    detail: "Training programs, short courses, and skill certifications."
  }
];

const educationGalleryData = [
  {
    title: "School Program",
    description: "Memories from school event and teamwork activities.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "College Campus",
    description: "Important moments from college journey.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80"
  }
];

const documentGrid = document.getElementById("documentGrid");
const trainingGrid = document.getElementById("trainingGrid");
const serviceGrid = document.getElementById("serviceGrid");
const educationTimeline = document.getElementById("educationTimeline");
const educationGallery = document.getElementById("educationGallery");
const projectGrid = document.getElementById("projectGrid");
const projectDetail = document.getElementById("projectDetail");

if (documentGrid) {
  documentsData.forEach((doc) => {
    const card = document.createElement("article");
    card.className = "doc-card";
    card.innerHTML = `
      <h3>${doc.title}</h3>
      <p>${doc.description}</p>
      <a href="${doc.link}" target="_blank" rel="noreferrer">Open Document</a>
    `;
    documentGrid.appendChild(card);
  });
}

function renderGallery(data, container) {
  data.forEach((item) => {
    const card = document.createElement("article");
    card.className = "gallery-item";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}" loading="lazy" />
      <div class="meta">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

if (trainingGrid) {
  renderGallery(trainingsData, trainingGrid);
}

if (educationGallery) {
  renderGallery(educationGalleryData, educationGallery);
}

if (serviceGrid) {
  servicesData.forEach((service) => {
    const card = document.createElement("article");
    card.className = "service-card";
    card.innerHTML = `
      <h3>${service.title}</h3>
      <p>${service.description}</p>
    `;
    serviceGrid.appendChild(card);
  });
}

if (projectGrid) {
  projectData.forEach((project) => {
    const card = document.createElement("a");
    card.className = "project-card project-link";
    card.href = `project.html?project=${encodeURIComponent(project.slug)}`;
    card.innerHTML = `
      <div class="project-media">
        <img src="${project.image}" alt="${project.title}" loading="lazy" />
      </div>
      <span class="project-type">${project.type}</span>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-tech">${project.tech}</div>
      <span class="project-open">Open Project</span>
    `;

    projectGrid.appendChild(card);
  });
}

if (projectDetail) {
  const params = new URLSearchParams(window.location.search);
  const projectSlug = params.get("project") || projectData[0].slug;
  const project = projectData.find((item) => item.slug === projectSlug) || projectData[0];

  const featureItems = project.details.map((item) => `<li>${item}</li>`).join("");

  projectDetail.innerHTML = `
    <section class="project-detail-card reveal visible">
      <div class="project-detail-media">
        <img src="${project.image}" alt="${project.title}" />
      </div>
      <div class="project-detail-copy">
        <span class="project-type">${project.type}</span>
        <h1>${project.title}</h1>
        <p class="project-detail-summary">${project.description}</p>
        <div class="project-tech">${project.tech}</div>
        <div class="project-detail-block">
          <h2>Key Highlights</h2>
          <ul>
            ${featureItems}
          </ul>
        </div>
        <div class="project-detail-actions">
          <a class="btn btn-primary" href="index.html#projects">Back to Projects</a>
          <a class="btn btn-secondary" href="contact.html">Contact Me</a>
        </div>
      </div>
    </section>
  `;
}

if (educationTimeline) {
  educationData.forEach((edu) => {
    const item = document.createElement("article");
    item.className = "timeline-item";
    item.innerHTML = `
      <h3>${edu.year} - ${edu.title}</h3>
      <p>${edu.detail}</p>
    `;
    educationTimeline.appendChild(item);
  });
}

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}

document.querySelectorAll(".nav-menu a").forEach((item) => {
  item.addEventListener("click", () => {
    if (navMenu) {
      navMenu.classList.remove("open");
    }
  });

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const linkPage = item.getAttribute("href");
  if (linkPage === currentPage) {
    item.classList.add("current");
  }
});

const revealItems = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${index * 0.08}s`;
  observer.observe(item);
});

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}
