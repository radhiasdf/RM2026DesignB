const courses = [
    { title: "Data Structures", code: "COMP6048001", section: "CE01", progress: 16, type: "CL" },
    
    { title: "Calculus", code: "MATH6031001", section: "LO01", progress: 9, type: "LEC" },
    { title: "Character Building: Kewarganegaraan", code: "CHAR6014001", section: "LO01", progress: 4, type: "LEC" },
    { title: "Creativity and Innovation", code: "ENPR6311001", section: "SA01", progress: 67, type: "LEC" },
    { title: "Data Structures", code: "COMP6048001", section: "L201", progress: 6, type: "LEC" },
    { title: "EESE 2", code: "EESE2", section: "LO01", progress: 0, type: "LEC" },
    { title: "Human and Computer Interaction", code: "COMP6800001", section: "LO01", progress: 29, type: "LEC" },
    { title: "Scientific Computing", code: "MATH6183001", section: "LO01", progress: 28, type: "LEC" },

    // LAB Data (New Section)
    { title: "Scientific Computing - Lab", code: "MATH6183001", section: "LB02", progress: 40, type: "LAB" },
    { title: "Human and Computer Interaction - Lab", code: "COMP6800001", section: "LB01", progress: 12, type: "LAB" },
];

function renderCourses(filter) {
    const grid = document.getElementById('courseGrid');
    grid.innerHTML = '';

    const filteredCourses = courses.filter(course => course.type === filter);

    filteredCourses.forEach(course => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-content">
                <div class="card-header">
                    <h3>${course.title}</h3>
                    <div class="info-row"><i class="far fa-file-alt"></i> ${course.code}</div>
                    <div class="info-row"><i class="fas fa-users"></i> ${course.section}</div>
                </div>
            </div>
            <div class="card-footer">
                <div class="progress-info">
                    <span>Class progress <i class="fas fa-info-circle" style="font-size:10px"></i></span>
                    <strong>${course.progress}%</strong>
                </div>
                <div class="progress-bar-bg">
                    <div class="progress-fill" style="width: ${course.progress}%"></div>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterTabs(type) {
    // Update active UI
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText === type) btn.classList.add('active');
    });
    
    renderCourses(type);
}

// Initial Load
window.onload = () => renderCourses('LEC');