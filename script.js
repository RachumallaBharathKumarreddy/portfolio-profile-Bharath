// Data for skills and projects
const data = {
    "skills": [
        {
            "name": "Python",
            "description": "Data analysis using Pandas, NumPy, and visualization with Matplotlib."
        },
        {
            "name": "Power BI",
            "description": "Creating dynamic dashboards and reports, data modeling, and DAX calculations."
        },
        {
            "name": "SQL",
            "description": "Writing complex queries, data manipulation, and database management."
        },
        {
            "name": "Excel",
            "description": "Advanced Excel skills including pivot tables, VBA automation, and data analysis."
        }
    ],
    "projects": [
        {
            "title": "Advance Encryption techniques for secure cloud computing in educational institutions",
            "description": "Developed and implemented advanced encryption algorithms to enhance data security for cloud-based educational systems.Ensured secure data storage and transmission, protecting sensitive academic andadministrative information.Conducted performance analysis to measure encryption efficiency and system security.Collaborated with team members to tailor the solution for educational institution requirements"
        },
        {
            "title": "Adidas sales analysis",
            "description": "Conducted in-depth sales analysis for Adidas, leveraging Power BI to visualize sales trends and performance metrics.Designed interactive dashboards showcasing sales performance by region, product category, and time period.Implemented data transformation and integration techniques to clean and model sales data efficiently.Provided actionable insights that supported strategic decision-making and sales optimization."
        },
        
    ]
};

// Load Skills
function loadSkills() {
    const skillsList = document.getElementById('skills-list');
    if (skillsList && data.skills) {
        data.skills.forEach(skill => {
            const li = document.createElement('li');
            li.classList.add('skill-item');
            li.innerHTML = `<h3>${skill.name}</h3><p>${skill.description}</p>`;
            skillsList.appendChild(li);
        });
    } else {
        console.error('Skills list element or data is missing.');
    }
}

// Load Projects
function loadProjects() {
    const projectsList = document.getElementById('projects-list');
    if (projectsList && data.projects) {
        data.projects.forEach(project => {
            const div = document.createElement('div');
            div.classList.add('project-item');
            div.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
            projectsList.appendChild(div);
        });
    } else {
        console.error('Projects list element or data is missing.');
    }
}

// Initialize Portfolio
function initializePortfolio() {
    loadSkills();
    loadProjects();
}

// Load all data once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializePortfolio);