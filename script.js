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

function renderGallery(data, container) {
  data.forEach((item) => {
    const card = document.createElement("article");
    card.className = "gallery-item reveal";
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

const educationTimeline = document.getElementById("educationTimeline");
const educationGallery = document.getElementById("educationGallery");
const projectGrid = document.getElementById("projectGrid");

if (educationGallery) {
  renderGallery(educationGalleryData, educationGallery);
}

if (projectGrid) {
  projectData.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card reveal";
    card.innerHTML = `
      <div class="project-media">
        <img src="${project.image}" alt="${project.title}" loading="lazy" />
      </div>
      <span class="project-type">${project.type}</span>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-tech">${project.tech}</div>
    `;
    projectGrid.appendChild(card);
  });
}

if (educationTimeline) {
  educationData.forEach((edu) => {
    const item = document.createElement("article");
    item.className = "timeline-item reveal";
    item.innerHTML = `
      <h3>${edu.year} - ${edu.title}</h3>
      <p>${edu.detail}</p>
    `;
    educationTimeline.appendChild(item);
  });
}

const revealItems = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${(index % 6) * 0.08}s`;
  observer.observe(item);
});

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}
